# Raspberry 4 + Denon AVR HDMI Problems

I got a new AVR [Denon X3800H] and when switching inputs Kodi [Libreelec] on my Rasberry Pi 4 showed "no signal".

I didn't find a real solution on the net, but after settings some options in my `config.txt` it seems like it's working now:

```
# This might not be needed:
config_hdmi_boost=7

# Force HDMI
hdmi_force_hotplug=1	

# HDMI Mode (2=HDMI):
hdmi_drive=2

# Group 1=TV, 2=Monitor, 0=Auto
hdmi_group = 2

# IDK ignore some edid whatsoever
hdmi_ignore_edid=0xa5000080

# HDMI Mode, 82 = 1080p60fps
# See: https://www.raspberrypi.com/documentation/computers/config_txt.html#hdmi_mode
hdmi_mode = 82

# RGB full range
hdmi_pixel_encoding = 2

## Allow 60fps? don't really need it so off.
#hdmi_enable_4kp60=1

# Force all audio modes
hdmi_force_edid_audio=1
```
