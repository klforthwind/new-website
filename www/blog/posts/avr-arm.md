# AVR != ARM
## 07/09/2019

Trying to complete a project today involving "microcontrollers" taught me something new today. I had ordered a Teensy 3.2 and Smarza Uno R3 in order to attempt to emulate a Nintendo Switch controller. The [code online](https://github.com/klforthwind/SwitchInputEmulator "Switch Input Emulator") that I was attempting to compile onto a "microcontroller" would not compile for the teensy microcontroller but would compile for the Atmega16u2 microcontroller. So I decided that I might as well try to put the .hex or .elf file onto the teensy 3.2 board. (Different "microcontroller", but I was pretty dumb when I was trying to make things work). After some research, I found out that Teensy 3.2 and Smarza Uno R3 are ARM **microprocessors**. Yikes!

Some more information will be posted once the controller is working, (hopefully an Arduino pro micro will arrive tommorow (atmega32u4 microcontroller)), but basically through the use of the LUFA library, a microcontroller can act like a Nintendo switch controller. What I did not know was that ARM does **not** support the LUFA library. Another yikes!

AVR stands for Automatic Voltage Regulator.

ARM stands for Advanced RISC Machine, with the CPU based on the RISC architecture.

For this project, an AVR micro**controller** is required, and the ARM micro**processors** will not work, even though it is newer than an AVR micro**controller**. AVR micro**controllers** have built in RAM, ROM, and other peripherals, while ARM micro**processors** are just the CPU. Hopefully this helps someone, because I just learned about this yesterday after going through an hour of troubleshooting the Teensy 3.2.

:)

##### Sources:
###### None