---
title: My Cyberdeck Build
id: cyberdeck
slug: /Cyberdeck
tags:
  - cyberdeck
  - diy 
  - modding
  - hardware
---
# My Cyberdeck Build

I'm a big long time cyberpunk fan even before reading Neuromancer. After getting addicted to mechanical keyboards and building many portable gaming consoles, i feel like it's time to finally build my own cyberdeck!

The deck is supposed to be a portable computer like a notebook. Small but usable. The GPIO & other external interfaces of the SBC [Single Board Computers] should all be accessable from the outside. For the keyboard there is only one option, a mechanical one. Preferable a custom build, or something in the 60% to 40% area. A mouse is optinal but a trackpad/-ball would be benefitial.


## Planned Features

### Must have

 - [x] Batteries with charge & play
 - [x] Powerfull SBC
 - [x] Mechanical keyboard
 - [x] GPIO breakout
 - [ ] Internal Speakers


### Should have

 - [x] Trackball / -pad
 - [x] Software defined radio with external antenna
 - [x] Internal USB-Hub for additional internal devices [SDR, GPS, Keyboard, ...]
 - [x] EL-Wire for cyberpunk fanciness


### Could have / other ideas

 - [ ] GPS with internal antenna
 - [ ]Solar panel for charging
 - [x] External wifi antenna
 - [x] LoRa/WAN



## Components

|    Part     |          Description           |
|-------------|--------------------------------|
| [NanoPC-T4](https://wiki.friendlyelec.com/wiki/index.php/NanoPC-T4) | Powerfull SBC to drive my deck |
| [HD702E LCD](https://www.friendlyarm.com/index.php?route=product/product&product_id=230)  | 7" Display with eDP interface |
| [JJ50](https://kprepublic.com/products/jj50-50-custom-keyboard-pcb-similar-with-preonic)  | Small mechanical keyboard |
| [Trackball](https://shop.pimoroni.com/products/trackball-breakout) | The Pimoroni Trackball Breakout seems like a good option |
| Batteries   | Depends on the space i have in the case |
| [RetroPSU](https://www.heldergametech.com/shop/gameboy-zero/retropsu/) | Helder's RetroPSU seems like a good battery management solution |
| ELWire & Transformator | Ordered some green ELWire with a cheap 5V transformator, let's hope it's not too noisy |

## Case 

I will design the case from scratch in fusion 360.

## Display

I"m using the HD702E eDP Panel from FriendlyElec. Which has upstream linux support and connects using eDP. For it to work using Armbian I had to do some digging into the Device Tree files to enable eDP & also configure X11 to use the correct settings for the Display.

### DTB Overlay

TODO

### Xorg Config

Somehow Linux didn't get the right Modesetting for my HD702E Screen. So i had to fix it in xorg.conf:

```
$ cat /etc/X11/xorg.conf.d/99-edp-display.conf 
Section "Monitor"
    Identifier "eDP-1"
    Modeline "800x1280_60.00"   85.25  800 856 936 1072  1280 1283 1293 1327 -hsync -vsync
    Option "PreferredMode" "800x1280_60.00"
    
    # My display is "Landscape" Mode:
    Option "Rotate" "CCW"
    Option  "RandRRotation" "on"

    # Don't know if this is needed:
    Option "DPMS" "true"
    Option "Primary" "true"
EndSection
```

## Keyboard

### Firmware
For the Firmware I'm using the QMK fork for "VIAL" a fork of "VIA", which allows the configuration of the keymap without reflashing the firmware.

#### Setup QMK 

Follow the QMK Docs - lol.

``` shell
qmk setup --home /home/nold/git/qmk
```


## Software

### Theming GTK / XFCE
- [IOTA-GTK](https://www.xfce-look.org/p/1508333/)
- https://www.pling.com/p/1235909/
- [Cyanogen](https://www.pling.com/p/1276409)
- [XFCE like SKYNET](https://www.pling.com/p/1240075)

### Theming XFWM [Cyber]
- [Futur](https://www.pling.com/p/1235909/)
- [tech-console](https://www.pling.com/p/1313511)

### Theming XFWM [Retro]
- [IndigoMagic](https://www.pling.com/p/1371886)
- [Atari TOS 4 GEM Theme](https://www.pling.com/p/1679327)

### Fonts
- [Glass TTY](http://sensi.org/~svo/glasstty/)

### Icons

- [Lyra](https://www.xfce-look.org/s/XFCE/p/1460991)
- [material-black COLORS](https://www.xfce-look.org/s/XFCE/p/1316887)
- [Infinity-Dark-Icons](https://www.xfce-look.org/s/XFCE/p/1436570)

### Conky

#### Installation

`sudo apt-get install conky conky-all`

#### Config


