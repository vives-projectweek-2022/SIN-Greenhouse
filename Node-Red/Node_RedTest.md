# Setup of Node-Red on RPI

## installation

### Setting up NodeRed

1. Once you have access to the Raspberry Pi, update the list of available packages and their versions to start your solution with everything up-to-date.

```bash
sudo apt-get update
```

2. Install the latest version of packages - previously updated (step 2)

```bash
sudo apt-get upgrade
```

### Install/Upgrade Node-RED

```bash
bash <(curl -sL https://raw.githubusercontent.com/node-red/raspbian-deb-package/master/resources/update-nodejs-and-nodered)

```

![step1](/Img/RPI_Step1.jpg)

Once the installation is finished, you will receive the following verification:

![step2](/Img/RPI_Step2.jpg)

### Autostart on boot

```bash
sudo systemctl enable nodered.service
```

## Implement all code in to node-red

To access the Node-RED web interface using rpi ip:1880 or localhost:1880. When you run the URL address in your browser you should be able to visualize the Noded-RED interface as shown below:

![node-red](/Img/node-red.png)| ![DashboardV1](/Img/DashboardV1.png)

### Node Red Code

[Node Red Code](/Node-red.js)

- Extra Palette to install
    - node-red
    - node-red-contrib-buffer-parser
    - node-red-contrib-ui-led
    - node-red-dashboard
    - node-red-contrib-ui-artless-gauge



### Extra
By doing some additional testing, we found out the following: If the first number is bigger than 7 e.g. out of 0xA6 then there is problem because the buffer overflows and it makes the buffer bigger. If this is with the last digit/number. Will the buffer not increase
<!-- https://help.ubidots.com/en/articles/1958375-how-to-install-node-red-in-raspberry-pi -->