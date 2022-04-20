from opcua import Client
import time

# This needs to be IP of device server is running on
url = "opc.tcp://172.21.208.1:4840"

client = Client(url)

client.connect()

print("Client connected")
while True:
    Currenttime = client.get_node("ns=2;i=2")
    Timer = Currenttime.get_value()
    print(Timer)

    weather = client.get_node("ns=2;i=3")
    CurrentWeather = weather.get_value()
    print( "Current weather is : " + CurrentWeather)
    time.sleep(4)

    HysteresisP = client.get_node("ns=2;i=4")
    hysteresisP = HysteresisP.get_value()
    print(hysteresisP)

    HysteresisM = client.get_node("ns=2;i=5")
    hysteresisM = HysteresisM.get_value()
    print(hysteresisM)

    time.sleep(10)
