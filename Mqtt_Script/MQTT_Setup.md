# Setup MQTT on Raspberyy pi

## hardware
- raspberry pi


## software

```bash
pi@raspberry:~ $ sudo apt update && sudo apt upgrade

pi@raspberry:~ $ sudo apt install -y mosquitto mosquitto-clients

pi@raspberry:~ $ sudo systemctl enable mosquitto.service

pi@raspberry:~ $ mosquitto -v

pi@raspberry:~$ sudo nano /etc/mosquitto/mosquitto.conf

add
listener 1883
allow_anonymous true

listener 9001
protocol websockets

pi@raspberry:~$ sudo reboot

```
### change ip address

```bash

pi@raspberry:~ $ hostname -I

sudo service dhcpcd status
sudo service dhcpcd start
sudo systemctl enable dhcpcd

sudo nano /etc/dhcpcd.conf

Edit ip address

interface eth0
static ip_address=192.168.0.4/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1
sudo reboot
```


<!-- ```bash
sudo apt install mosquitto mosquitto-clients
sudo systemctl enable mosquitto
sudo systemctl status mosquitto

apt update
sudo apt install mosquitto-clients
```

```bash

``` -->