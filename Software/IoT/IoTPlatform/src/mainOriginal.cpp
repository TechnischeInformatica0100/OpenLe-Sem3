// #include <Arduino.h>
// #include <SPI.h>
// #include <ESP8266WiFi.h>
// #include <MQTT.h>

// // const char ssid[] = "ChessWiseGuest"; // Werk
// // const char pass[] = "schaaksgewijs"; // Werk

// const char ssid[] = "TELE2-ELLD99_2.4G";
// const char pass[] = "zctBGY$4l5TaSE#r";

// WiFiClient net;
// MQTTClient client;

// unsigned long lastMillis = 0;

// void connect()
// {
//     Serial.print("checking wifi...");
//     while (WiFi.status() != WL_CONNECTED)
//     {
//         Serial.print(".");
//         delay(1000);
//     }

//     Serial.print("\nconnecting...");
//     while (!client.connect("burak"))
//     {
//         Serial.print(".");
//         delay(1000);
//     }

//     Serial.println("\nconnected!");

//     client.subscribe("/hello");
//     // client.unsubscribe("/hello");
// }

// void messageReceived(String &topic, String &payload)
// {
//     Serial.println("incoming: " + topic + " - " + payload);

//     // Note: Do not use the client in the callback to publish, subscribe or
//     // unsubscribe as it may cause deadlocks when other things arrive while
//     // sending and receiving acknowledgments. Instead, change a global variable,
//     // or push to a queue and handle it in the loop after calling `client.loop()`.
// }

// void setup()
// {
//     Serial.begin(115200);
//     WiFi.begin(ssid, pass);

//     // Note: Local domain names (e.g. "Computer.local" on OSX) are not supported
//     // by Arduino. You need to set the IP address directly.
//     // client.begin("192.168.56.1", net); // ip address werk
//     client.begin("192.168.1.221", 1884, net); // ip address home
//     client.onMessage(messageReceived);

//     connect();
// }

// void loop()
// {
//     client.loop();

//     if (!client.connected())
//     {
//         connect();
//     }

//     // publish a message roughly every second.
//     if (millis() - lastMillis > 1000)
//     {
//         lastMillis = millis();
//         client.publish("/hello", "world");
//     }
// }