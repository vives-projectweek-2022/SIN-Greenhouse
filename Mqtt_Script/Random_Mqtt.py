#pip install paho-mqtt

import paho.mqtt.client as mqtt
import time
import random


def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")

client = mqtt.Client()
client.on_connect = on_connect
client.connect("172.16.107.251", 1883, 60)

#randomlist = []
#for i in range(0,5):
#    n = random.randint(1,30)
#    randomlist.append(n)
#print(randomlist)

# send a message to the raspberry/topic every 1 second, 5 times in a row
motor_list = ["open","closed"]
item = random.choice(motor_list)
verwarming_list = ["on","off"]
item2 = random.choice(verwarming_list)

for i in range(0,15):
    item = random.choice(motor_list)
    item2 = random.choice(verwarming_list)
    # the four parameters are topic, sending content, QoS and whether retaining the message respectively
    client.publish('sensor/outside', payload=random.randint(-20,50), qos=0, retain=False)
    client.publish('sensor/inside', payload=random.randint(-20,50), qos=0, retain=False)
    client.publish('sensor/motor', payload=item, qos=0, retain=False)
    client.publish('sensor/verwarming', payload=item2, qos=0, retain=False)
    print(f"send {i} to mqtt")
    time.sleep(5)