#include <Arduino.h>
// C++ code
//

// Declare the pins for the Button and the LED

// Pin assignments for NodeMCU
const int buttonPin0 = D1; // GPIO5
const int buttonPin1 = D2; // GPIO4
const int buttonPin2 = D3; // GPIO0
const int buttonPin3 = D4; // GPIO2

// Variable for keeping the previous button state
int previousButtonValue0 = HIGH;
int previousButtonValue1 = HIGH;
int previousButtonValue2 = HIGH;
int previousButtonValue3 = HIGH;

long lastDebounceTime0 = 0; // Last time the button was pressed
long lastDebounceTime1 = 0;
long lastDebounceTime2 = 0;
long lastDebounceTime3 = 0;

long debounceDelay = 50;

long debounceTime = 50; // Debounce delay

int LED = D5;

void setup()
{
  // Define pin #2 as input
  pinMode(buttonPin0, INPUT);
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
  pinMode(buttonPin3, INPUT);

  // Define pin #13 as output, for the LED
  pinMode(LED, OUTPUT);

  // Establish the Serial connection with a baud rate of 9600
  Serial.begin(115200);
}

void loop()
{
  int buttonState0 = digitalRead(buttonPin0);
  int buttonState1 = digitalRead(buttonPin1);
  int buttonState2 = digitalRead(buttonPin2);
  int buttonState3 = digitalRead(buttonPin3);

  if (buttonState0 != previousButtonValue0)
  {
    if ((millis() - lastDebounceTime0) > debounceDelay)
    {

      Serial.print("Button 1 state changed to: ");
      Serial.println(buttonState0);

      // Reset the debouncing timer
      lastDebounceTime0 = millis();
    }
    previousButtonValue0 = buttonState0;
  }

  if (buttonState1 != previousButtonValue1)
  {
    if ((millis() - lastDebounceTime1) > debounceDelay)
    {
      Serial.print("Button 2 state changed to: ");
      Serial.println(buttonState1);
      lastDebounceTime1 = millis();
    }
    previousButtonValue1 = buttonState1;
  }

  if (buttonState2 != previousButtonValue2)
  {
    if ((millis() - lastDebounceTime2) > debounceDelay)
    {
      Serial.print("Button 3 state changed to: ");
      Serial.println(buttonState2);
      lastDebounceTime2 = millis();
    }
    previousButtonValue2 = buttonState2;
  }

  if (buttonState3 != previousButtonValue3)
  {
    if ((millis() - lastDebounceTime3) > debounceDelay)
    {
      Serial.print("Button 4 state changed to: ");
      Serial.println(buttonState3);
      lastDebounceTime3 = millis();
    }
    previousButtonValue3 = buttonState3;
  }

  // Allow some delay for the Serial data to be transmitted
  delay(50);
}