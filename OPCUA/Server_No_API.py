from opcua import Server
import time
from random import randint


server = Server()

# This needs to be IP of device server is running on
url = "opc.tcp://172.21.208.1:4840"

server.set_endpoint(url)


# name of server
name = "OPCUA Server ProjectWeek2.0"
addspace = server.register_namespace(name)


node = server.get_objects_node()
Param = node.add_object(addspace, "Parameters")

# API key from https://openweathermap.org/api 
OPEN_WEATHER_MAP_APIKEY = 'f4d6f09d0ac88da182eac2be7ac6a33c'

hysteresis = 1.0



SetPoint = Param.add_variable(addspace, "SetPoint", 0)
HysteresisPoint = Param.add_variable(addspace, "Hysteresis", 0)

SetPoint.set_writable()
HysteresisPoint.set_writable()


#server start
server.start()
print("Server started at {}".format(url))

while True:
    input = randint(10,50)
    print(input)
    SetPoint.set_value(float(input))
    HysteresisPoint.set_value(hysteresis)


    time.sleep(10)