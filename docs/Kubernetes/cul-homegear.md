# Home-Assistant, Homematic, Homegear & CUL on K8s

In order to use Home-Assistent with CUL-Stick, you'll need homegear. To integrate homegear into HASS you'll need the additional addon "HomeMatic". Sadly HASS does not support addons when using containers. So this is a quite hacky way to make it work on Kubernetes.

## Kubernetes 

I'm using the Helm-Chart from k8s-at-home. You can find my values [here](https://github.com/Nold360/heqet/blob/f/v2/charts/heqet/projects/homeassistant/values/homeassistant.yaml)

## Setting up Homegear

Make sure `/etc/homegear/families/max.conf` is configured for your device:
```
[CUL]
id = My-MAX-CUL
default = true
deviceType = cul
device = /dev/ttyUSB0
responseDelay = 40
```

- Login to container & enter homegear shell using `homegear -r`.
- Select "MAX!" Family using `fs 4`
- Enable peeing mode `pon` & peer your device[s]
- List peers `ls`
- You can rename them, too using `pn <DEVICE-ID> <NEW-NAME>`


## Homematic Addon

In the container create `/data/options.json` like this:
```json
{
    "rf_enable": false,
    "rf": [
      {
        "type": "CCU2",
        "device": "/dev/ttyAMA0"
      }
    ],
    "wired_enable": false,
    "wired": [
      {
        "serial": "xy",
        "key": "abc",
        "ip": "192.168.0.0"
      }
    ],
    "hmip_enable": false,
    "hmip": [
      {
        "type": "HMIP_CCU2",
        "device": "/dev/ttyUSB0"
      }
    ]
```

## Configure Home-Assistant

Add this snippet to your `configuration.yaml` of home-assistant:
```yaml
homematic:
 interfaces:
  wireless:
   host: localhost
   port: 2001
   resolvenames: metadata
```


## Finishing up

After restart, you should find your Homegear devices in the entities of HASS.
