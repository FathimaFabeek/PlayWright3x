import log from './05_logger.js';//{}not required to import default function, but required to import named function 
log("this is log message");
import {logBetter} from './05_logger.js';//{}not required to import default function, but required to import named function
// . means it is a linux command, it is used to import the file from the same directory

logBetter("this is log better message");