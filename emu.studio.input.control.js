/**
 * Copyright 2014 Alan Drees
 *   
 * Purpose:
 *  Defines controller script input to separate the MIDI channels used in the studio
 */

loadAPI(1);

host.defineController("loridcon", "E-MU Studio Input", "1.0", "47b00be8-0c15-48f5-945a-64a0b7f8ac7d");
host.defineMidiPorts(1, 0);

function init()
{
   host.getMidiInPort(0).createNoteInput("Axiom 49", 
					 "?0????");

   host.getMidiInPort(0).createNoteInput("Axiom 25", 
					 "?1????");

   host.getMidiInPort(0).createNoteInput("Casio CTK",  
					 "?2????");

   host.getMidiInPort(0).createNoteInput("Roland TD4", 
					 "?9????");

}

function exit()
{
}
