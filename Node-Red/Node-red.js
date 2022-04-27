[
    {
        "id": "aee56f8992a0cf29",
        "type": "tab",
        "label": "Final version",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "67b1874fc47bbacd",
        "type": "debug",
        "z": "aee56f8992a0cf29",
        "name": "buffer",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 630,
        "y": 140,
        "wires": []
    },
    {
        "id": "f5123c5b04c3f8ac",
        "type": "mqtt in",
        "z": "aee56f8992a0cf29",
        "name": "",
        "topic": "payload",
        "qos": "2",
        "datatype": "buffer",
        "broker": "95cdeb2f97ee3bec",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 190,
        "y": 260,
        "wires": [
            [
                "67b1874fc47bbacd",
                "f3cf539eb041604b"
            ]
        ]
    },
    {
        "id": "f3cf539eb041604b",
        "type": "buffer-parser",
        "z": "aee56f8992a0cf29",
        "name": "",
        "data": "payload",
        "dataType": "msg",
        "specification": "spec",
        "specificationType": "ui",
        "items": [
            {
                "type": "bool",
                "name": "heaterstatus",
                "offset": 0,
                "length": 1,
                "offsetbit": 0,
                "scale": "1",
                "mask": ""
            },
            {
                "type": "bool",
                "name": "ventilatorstatus",
                "offset": 1,
                "length": 1,
                "offsetbit": 0,
                "scale": "1",
                "mask": ""
            },
            {
                "type": "bool",
                "name": "doorstatus",
                "offset": 2,
                "length": 1,
                "offsetbit": 0,
                "scale": "1",
                "mask": ""
            },
            {
                "type": "hex",
                "name": "temp inside",
                "offset": 3,
                "length": 4,
                "offsetbit": 0,
                "scale": "0.01",
                "mask": ""
            },
            {
                "type": "hex",
                "name": "temp outside",
                "offset": 7,
                "length": 4,
                "offsetbit": 0,
                "scale": "0.01",
                "mask": ""
            }
        ],
        "swap1": "",
        "swap2": "",
        "swap3": "",
        "swap1Type": "swap",
        "swap2Type": "swap",
        "swap3Type": "swap",
        "msgProperty": "payload",
        "msgPropertyType": "str",
        "resultType": "value",
        "resultTypeType": "return",
        "multipleResult": true,
        "fanOutMultipleResult": true,
        "setTopic": true,
        "outputs": 5,
        "x": 390,
        "y": 520,
        "wires": [
            [
                "279822ce4ab04e87",
                "a749026d0ba5c4bd"
            ],
            [
                "b1222e5163dd1a32"
            ],
            [
                "4bd075da62d018cf",
                "d3b15a98cc9c7009"
            ],
            [
                "4632232b96714482",
                "bbe45998172be436"
            ],
            [
                "02141d77d857691f",
                "bdcfcfdffe33743f"
            ]
        ]
    },
    {
        "id": "bbe45998172be436",
        "type": "debug",
        "z": "aee56f8992a0cf29",
        "name": "convertBufferIn",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 820,
        "y": 480,
        "wires": []
    },
    {
        "id": "4bd075da62d018cf",
        "type": "ui_led",
        "z": "aee56f8992a0cf29",
        "order": 8,
        "group": "3204e83b013940e4",
        "width": 2,
        "height": 1,
        "label": "",
        "labelPlacement": "left",
        "labelAlignment": "left",
        "colorForValue": [
            {
                "color": "#ff0000",
                "value": "false",
                "valueType": "bool"
            },
            {
                "color": "#008000",
                "value": "true",
                "valueType": "bool"
            }
        ],
        "allowColorForValueInMessage": false,
        "shape": "circle",
        "showGlow": true,
        "name": "Door",
        "x": 650,
        "y": 360,
        "wires": []
    },
    {
        "id": "b1222e5163dd1a32",
        "type": "ui_led",
        "z": "aee56f8992a0cf29",
        "order": 5,
        "group": "3204e83b013940e4",
        "width": 2,
        "height": 1,
        "label": "",
        "labelPlacement": "left",
        "labelAlignment": "left",
        "colorForValue": [
            {
                "color": "#ff0000",
                "value": "false",
                "valueType": "bool"
            },
            {
                "color": "#008000",
                "value": "true",
                "valueType": "bool"
            }
        ],
        "allowColorForValueInMessage": false,
        "shape": "circle",
        "showGlow": true,
        "name": "Motor",
        "x": 650,
        "y": 280,
        "wires": []
    },
    {
        "id": "279822ce4ab04e87",
        "type": "ui_led",
        "z": "aee56f8992a0cf29",
        "order": 2,
        "group": "3204e83b013940e4",
        "width": 2,
        "height": 1,
        "label": "",
        "labelPlacement": "left",
        "labelAlignment": "left",
        "colorForValue": [
            {
                "color": "#ff0000",
                "value": "false",
                "valueType": "bool"
            },
            {
                "color": "#008000",
                "value": "true",
                "valueType": "bool"
            }
        ],
        "allowColorForValueInMessage": false,
        "shape": "circle",
        "showGlow": true,
        "name": "Heater",
        "x": 650,
        "y": 200,
        "wires": []
    },
    {
        "id": "cf8efcb51722968a",
        "type": "function",
        "z": "aee56f8992a0cf29",
        "name": "IEEE-754 to float",
        "func": "/* Converts from an number, string, buffer or array representing an IEEE-754 value\n * to a javascript float.\n * The following may be given in msg.payload:\n *      A string representing a number, which may be hex or binary\n *        examples, \"1735\"  \"0x02045789\"  0b01000000010010010000111111011011\n *      An integer value\n *      A four element array or buffer of 8 bit values, most significant byte first.\n*/ \n// first make a number from the given payload if necessary\nlet intValue;\nif (typeof msg.payload === \"number\") {\n    intValue = msg.payload;\n} else if (typeof msg.payload === \"string\") {\n    intValue = Number(msg.payload);\n} else if (msg.payload.length == 4) {\n    // four byte array or buffer\n    intValue = (((((msg.payload[0] << 8) + msg.payload[1]) << 8) + msg.payload[2]) << 8) + msg.payload[3];\n} else {\n    node.warn(\"Unrecognised payload type or length\");\n}\n\nmsg.payload = Int2Float32(intValue).toFixed(2);\nreturn msg;\n\nfunction Int2Float32(bytes) {\n    var sign = (bytes & 0x80000000) ? -1 : 1;\n    var exponent = ((bytes >> 23) & 0xFF) - 127;\n    var significand = (bytes & ~(-1 << 23));\n\n    if (exponent == 128) \n        return sign * ((significand) ? Number.NaN : Number.POSITIVE_INFINITY);\n\n    if (exponent == -127) {\n        if (significand === 0) return sign * 0.0;\n        exponent = -126;\n        significand /= (1 << 22);\n    } else significand = (significand | (1 << 23)) / (1 << 23);\n\n    return sign * significand * Math.pow(2, exponent);\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 560,
        "wires": [
            [
                "635ad2990ad1dc07",
                "ee9a6910f84126ed",
                "d124b1f11fed5034"
            ]
        ]
    },
    {
        "id": "02141d77d857691f",
        "type": "function",
        "z": "aee56f8992a0cf29",
        "name": "To hex",
        "func": "// var buf = Buffer.from(msg.payload);\n// var s = buf.readUInt16BE() >> 7 === 0 ? 0 : 2048;\n// var m = (buf.readUInt16BE() & 0b0000011111111111) - s;\n// var e = (buf.readUInt16BE() & 0b01111000) >> 3;\n// msg.payload = 0.01 * m * Math.pow(2, e);\n// return msg\n\n\n\nfunction HexToDec(n)\n    {\n        return parseInt(n, 16);\n    }\n\n\nvar hexString = Buffer.from(msg.payload);\n// yourNumber = parseInt(hexString, 16)\nmsg.payload=HexToDec(hexString);\nreturn msg",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 650,
        "y": 560,
        "wires": [
            [
                "cf8efcb51722968a"
            ]
        ]
    },
    {
        "id": "26fbae4732568feb",
        "type": "ui_gauge",
        "z": "aee56f8992a0cf29",
        "name": "Inside temperature",
        "group": "3204e83b013940e4",
        "order": 10,
        "width": 11,
        "height": 10,
        "gtype": "gage",
        "title": "Inside temperature",
        "label": " °C",
        "format": "{{value}}",
        "min": "-20",
        "max": "40",
        "colors": [
            "#ff0000",
            "#00ff00",
            "#ff0000"
        ],
        "seg1": "10",
        "seg2": "30",
        "className": "",
        "x": 1230,
        "y": 520,
        "wires": []
    },
    {
        "id": "635ad2990ad1dc07",
        "type": "ui_gauge",
        "z": "aee56f8992a0cf29",
        "name": "Outside temperature V2",
        "group": "3204e83b013940e4",
        "order": 11,
        "width": 11,
        "height": 10,
        "gtype": "gage",
        "title": "Outside temperature v2",
        "label": " °C",
        "format": "{{value}}",
        "min": "-20",
        "max": "40",
        "colors": [
            "#ff0000",
            "#00ff00",
            "#ff0000"
        ],
        "seg1": "10",
        "seg2": "30",
        "className": "",
        "x": 1250,
        "y": 560,
        "wires": []
    },
    {
        "id": "3275287fc22d4319",
        "type": "function",
        "z": "aee56f8992a0cf29",
        "name": "IEEE-754 to float",
        "func": "/* Converts from an number, string, buffer or array representing an IEEE-754 value\n * to a javascript float.\n * The following may be given in msg.payload:\n *      A string representing a number, which may be hex or binary\n *        examples, \"1735\"  \"0x02045789\"  0b01000000010010010000111111011011\n *      An integer value\n *      A four element array or buffer of 8 bit values, most significant byte first.\n*/ \n// first make a number from the given payload if necessary\nlet intValue;\nif (typeof msg.payload === \"number\") {\n    intValue = msg.payload;\n} else if (typeof msg.payload === \"string\") {\n    intValue = Number(msg.payload);\n} else if (msg.payload.length == 4) {\n    // four byte array or buffer\n    intValue = (((((msg.payload[0] << 8) + msg.payload[1]) << 8) + msg.payload[2]) << 8) + msg.payload[3];\n} else {\n    node.warn(\"Unrecognised payload type or length\");\n}\n\nmsg.payload = Int2Float32(intValue).toFixed(2);\nreturn msg;\n\nfunction Int2Float32(bytes) {\n    var sign = (bytes & 0x80000000) ? -1 : 1;\n    var exponent = ((bytes >> 23) & 0xFF) - 127;\n    var significand = (bytes & ~(-1 << 23));\n\n    if (exponent == 128) \n        return sign * ((significand) ? Number.NaN : Number.POSITIVE_INFINITY);\n\n    if (exponent == -127) {\n        if (significand === 0) return sign * 0.0;\n        exponent = -126;\n        significand /= (1 << 22);\n    } else significand = (significand | (1 << 23)) / (1 << 23);\n\n    return sign * significand * Math.pow(2, exponent);\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 520,
        "wires": [
            [
                "26fbae4732568feb",
                "872e8f5a99d8a474",
                "2b27ee1f0f2b6184"
            ]
        ]
    },
    {
        "id": "4632232b96714482",
        "type": "function",
        "z": "aee56f8992a0cf29",
        "name": "To hex",
        "func": "// var buf = Buffer.from(msg.payload);\n// var s = buf.readUInt16BE() >> 7 === 0 ? 0 : 2048;\n// var m = (buf.readUInt16BE() & 0b0000011111111111) - s;\n// var e = (buf.readUInt16BE() & 0b01111000) >> 3;\n// msg.payload = 0.01 * m * Math.pow(2, e);\n// return msg\n\n\n\nfunction HexToDec(n)\n    {\n        return parseInt(n, 16);\n    }\n\n\nvar hexString = Buffer.from(msg.payload);\n// yourNumber = parseInt(hexString, 16)\nmsg.payload=HexToDec(hexString);\nreturn msg",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 650,
        "y": 520,
        "wires": [
            [
                "3275287fc22d4319"
            ]
        ]
    },
    {
        "id": "872e8f5a99d8a474",
        "type": "debug",
        "z": "aee56f8992a0cf29",
        "name": "Inside",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1190,
        "y": 480,
        "wires": []
    },
    {
        "id": "ee9a6910f84126ed",
        "type": "debug",
        "z": "aee56f8992a0cf29",
        "name": "Outside",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1200,
        "y": 600,
        "wires": []
    },
    {
        "id": "6388a1327917a80d",
        "type": "ui_text",
        "z": "aee56f8992a0cf29",
        "group": "3204e83b013940e4",
        "order": 4,
        "width": 11,
        "height": 1,
        "name": "",
        "label": "Window Open/Closed",
        "format": "",
        "layout": "row-center",
        "className": "",
        "x": 700,
        "y": 320,
        "wires": []
    },
    {
        "id": "d3b15a98cc9c7009",
        "type": "ui_text",
        "z": "aee56f8992a0cf29",
        "group": "3204e83b013940e4",
        "order": 7,
        "width": 11,
        "height": 1,
        "name": "",
        "label": "Door Open/Closed",
        "format": "",
        "layout": "row-center",
        "className": "",
        "x": 690,
        "y": 400,
        "wires": []
    },
    {
        "id": "a749026d0ba5c4bd",
        "type": "ui_text",
        "z": "aee56f8992a0cf29",
        "group": "3204e83b013940e4",
        "order": 1,
        "width": 11,
        "height": 1,
        "name": "",
        "label": "Heater On/Off",
        "format": "",
        "layout": "row-center",
        "className": "",
        "x": 680,
        "y": 240,
        "wires": []
    },
    {
        "id": "d124b1f11fed5034",
        "type": "ui_chart",
        "z": "aee56f8992a0cf29",
        "name": "",
        "group": "3204e83b013940e4",
        "order": 13,
        "width": 22,
        "height": 7,
        "label": "Outside_chart",
        "chartType": "line",
        "legend": "true",
        "xformat": "HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "dot": true,
        "ymin": "-20",
        "ymax": "40",
        "removeOlder": "30",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 1220,
        "y": 640,
        "wires": [
            []
        ]
    },
    {
        "id": "2b27ee1f0f2b6184",
        "type": "ui_chart",
        "z": "aee56f8992a0cf29",
        "name": "",
        "group": "3204e83b013940e4",
        "order": 12,
        "width": 22,
        "height": 6,
        "label": "Inside_chart",
        "chartType": "line",
        "legend": "true",
        "xformat": "HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "dot": true,
        "ymin": "-20",
        "ymax": "40",
        "removeOlder": "30",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 1210,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "bdcfcfdffe33743f",
        "type": "debug",
        "z": "aee56f8992a0cf29",
        "name": "convertBufferOut",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 830,
        "y": 600,
        "wires": []
    },
    {
        "id": "3f880c4fd3d5cd49",
        "type": "ui_spacer",
        "z": "aee56f8992a0cf29",
        "name": "spacer",
        "group": "3204e83b013940e4",
        "order": 3,
        "width": 9,
        "height": 1
    },
    {
        "id": "e9e25ff9bdd60385",
        "type": "ui_spacer",
        "z": "aee56f8992a0cf29",
        "name": "spacer",
        "group": "3204e83b013940e4",
        "order": 6,
        "width": 9,
        "height": 1
    },
    {
        "id": "9fb0c2fdf3a04b51",
        "type": "ui_spacer",
        "z": "aee56f8992a0cf29",
        "name": "spacer",
        "group": "3204e83b013940e4",
        "order": 9,
        "width": 9,
        "height": 1
    },
    {
        "id": "95cdeb2f97ee3bec",
        "type": "mqtt-broker",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "sensor/temp1",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "sessionExpiry": ""
    },
    {
        "id": "3204e83b013940e4",
        "type": "ui_group",
        "name": "Greenhouse",
        "tab": "89386b07239340e4",
        "order": 1,
        "disp": true,
        "width": "22",
        "collapse": false,
        "className": ""
    },
    {
        "id": "89386b07239340e4",
        "type": "ui_tab",
        "name": "Greenhouse",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]