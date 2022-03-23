# Raspberry Pi setup

Make sure you install following things on the pi:

## Node Red

```bash
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
sudo systemctl enable nodered.service
```

## mqtt

```bash
sudo apt install mosquitto mosquitto-clients
sudo systemctl enable mosquitto
sudo systemctl status mosquitto

apt update
sudo apt install mosquitto-clients
```

```bash
mosquitto_sub -d -u username -P password -t "sensor/temp1"
mosquitto_sub -d -u username -P password -t "sensor/temp2"
mosquitto_pub -d -u username -P password -t "sensor/temp1" -m 10
mosquitto_pub -d -u username -P password -t "sensor/temp2" -m 10
```
