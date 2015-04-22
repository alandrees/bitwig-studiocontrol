/**
 * Copyright 2014-2015 Alan Drees
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

function init()
{
    var c1, c2, c3, c4;
    c1 = 0;
    c2 = 1;
    c3 = 2;
    c4 = 9;

    var prefs = host.getPreferences();

    c1 = prefs.getNumberSetting("Axiom 49 v1", "Channel", 1, 16, 1, "", c1 + 1);
    c2 = prefs.getNumberSetting("Axiom 49 v2", "Channel", 1, 16, 1, "", c2 + 1);
    c3 = prefs.getNumberSetting("Axiom 25",    "Channel", 1, 16, 1, "", c3 + 1);
    c4 = prefs.getNumberSetting("Roland TD4",  "Channel", 1, 16, 1, "", c4 + 1);

    //axiom 49 v1
    host.getMidiInPort(0).createNoteInput("Axiom 49 v1",
					  "?"+(c1 - 1)+"????");

    //axiom 49 v2
    host.getMidiInPort(0).createNoteInput("Axiom 49 v2",
					  "?"+(c2 - 1)+"????");

    //axiom 25
    host.getMidiInPort(0).createNoteInput("Axiom 25",
					  "?"+(c3 - 1)+"????");

    //ROLAND TDK Drum Kit
    host.getMidiInPort(0).createNoteInput("Roland TD4",
					  "?"+(c4 - 1)+"????");
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
