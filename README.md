# Greenhouse

![Greenhouse](./img/Greenhouse.jpg)

# Team Members

- Matias Vereecke
- Maxim Govaert
- Emiel Coucke

# materials

- plc 
- 4 temperature sensors(inside/outside)
- 1 of 2 Raspberry Pi 4 (Node Red and MQTT)
- 2 monitors

# Prerequisites

Make sure you install following things on the pi:

For Node Red:
```bash
apt-get install nodered
node-red-pi --max-old-space-size=256
sudo systemctl enable nodered.service
```

For MQTT:
```bash
sudo apt install mosquitto mosquitto-clients
sudo systemctl enable mosquitto
sudo systemctl status mosquitto

apt update
sudo apt install mosquitto-clients
```
