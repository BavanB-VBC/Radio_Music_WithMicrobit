index = 0
def Extend():
    pass

def on_received_string(receivedString):
    global index
    basic.show_string(receivedString)
    index = 0
    for index2 in range(len(receivedString)):
        radio.on_received_string(on_received_string)

def Send():
    radio.send_string("CDEFGABC")

def on_forever():
    Send()
basic.forever(on_forever)
