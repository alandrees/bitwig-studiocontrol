/**
 * Copyright 2014 Alan Drees
 *
 * Purpose:
 *  Defines controller script input to separate the MIDI channels used in the studio
 */

loadAPI(1);

host.defineController("Stealthascope", "E-MU Studio Input", "1.0", "47b00be8-0c15-48f5-945a-64a0b7f8ac7d");
host.defineMidiPorts(1, 0);

/**\fn init
 * 
 * Initalizes the script.
 *
 * @param None
 *
 * @returns None
 */

function init(){

   //axiom 49
   host.getMidiInPort(0).createNoteInput("Axiom 49", 
					 "?0????");

   //axiom 25-A
   host.getMidiInPort(0).createNoteInput("Axiom 25-A", 
					 "?1????");

   //axiom 25-B
   host.getMidiInPort(0).createNoteInput("Axiom 25-B", 
					 "?2????");

   //ROLAND TDK Drum Kit
   host.getMidiInPort(0).createNoteInput("Roland TD4", 
					 "?9????");
}

/**\fn exit
 *
 * Exit functions.  Clean up.
 *
 * @param None
 *
 * @returns None
 */

function exit(){
}
