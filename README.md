# ESP8266-GoogleCalendar

## Intro
I had an useless "On Air" sign hanging around my home, and I thought it would be cool to connect it to my Google Calendar to show other (my kids) that I'm in a meeting and they should not enter in my studio. So I got an ESP8266, 3D printed a custom back panel to hold it, connected some wires and coded everything with Adafruit.io and Google Apps Scripts to make this happen.

<a href="https://youtu.be/VasNaynK-AI" target="_blank"><img width="300" alt="Schermata 2022-01-19 alle 11 37 03" src="https://user-images.githubusercontent.com/98014322/150114298-d806b88a-ad6f-47d3-bb1c-7ff44835d71d.png"></a>

## Requirements
* An ESP8266 or similar
* Some wires
* A NPN transistor
* Adafruit.io account

* Google account

## Instructions
1) Connect all the electronics following this schematics:
![Schematics](https://user-images.githubusercontent.com/98014322/150107798-017aae22-c95d-4c71-9a9a-f622058a4081.png)
2) Flash the ESP8266 with nodemcu firmware (you can build and download one at https://nodemcu-build.com/)
3) Create a Feed in Adafruit.io
4) Insert your Adafruit.io and WiFi credentials in main.cpp, and also change the feed name
5) Create a new project in [Google Apps Scripts](https://script.google.com/home), add Google Calendar API in Services and paste the code found Code.gs, updating the Adafruit.io credentials and feed name
6) Also in Apps Scripts create a new Trigger, which runs the getEvents function every minute
7) Enjoy!!
