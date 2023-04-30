import { groupName, emails } from './createPack.html';
import { start_char, start_hour, start_minute, start_is_morning, end_char, end_hour, end_minute, end_is_morning } from './update_schedule.html';

 class Group {

    constructor(name, emails) {
      this.name = name;
      this.emails = emails;
    }
 }
 class Event {
    constructor(){
        this.start = start;
        this.end = end;
    }
 }

 class TimeData {
    constructor(day_char, hour, minute, is_morning){
        this.day_char = day_char;
        this.hour = hour;
        this.minute = minute;
        this.is_morning = is_morning;
    }
 }

// main code:
week_order = ["M", "T", "W", "R", "F", "S", "U"];
const monday_availability = new Array(new Event(TimeData('M',0,0,true), TimeData('M',23,59,false)));
const tuesday_availability = new Array(new Event(TimeData('T',0,0,true), TimeData('T',23,59,false)));
const wednesday_availability = new Array(new Event(TimeData('W',0,0,true), TimeData('W',23,59,false)));
const thursday_availability = new Array(new Event(TimeData('R',0,0,true), TimeData('R',23,59,false)));
const friday_availability = new Array(new Event(TimeData('F',0,0,true), TimeData('F',23,59,false)));
const saturday_availability = new Array(new Event(TimeData('S',0,0,true), TimeData('S',23,59,false)));
const sunday_availability = new Array(new Event(TimeData('U',0,0,true), TimeData('U',23,59,false)));
weekly_available = [monday_availability, tuesday_availability, wednesday_availability, thursday_availability, friday_availability, saturday_availability, sunday_availability];
group = new Group("GroupName", {1:"thompson@gmail.com", 2:"srt@udel.edu", 3:"emerson@gmail.com"}, weekly_available);


// get user input and store it as an event
var new_time = new Event(new TimeData(start_char, start_hour, start_minute, start_is_morning), new TimeData(end_char, end_hour, end_minute, end_is_morning));
// edit data
if (!(new_time.start.day_char == new_time.end.day_char)) {
    alert("The days of the week must be the same!");
}
if (!(new_time.start.is_morning)) {
    new_time.start.hour += 12;
}
if (new_time.start.hour == 12 && new_time.start.minute == 0 && new_time.start.is_morning) {
    if (new_time.start.day_char != "M") {
        new_time.start.day_char = week_order[week_order.findIndex(new_time.start.day_char)+1];
    } else {
        new_time.start.day_char = "U";
    }
    new_time.start.hour = 0;
    new_time.start.minute = 0;
    new_time.start.is_morning = true;
}
if (new_time.end.hour == 0 && new_time.end.minute == 0 && new_time.end.is_morning) {
    if (new_time.end.day_char != "M") {
        new_time.end.day_char = week_order[week_order.findIndex(new_time.end.day_char)+1];
    } else {
        new_time.end.day_char = "U";
    }
    new_time.end.hour = 0;
    new_time.end.minute = 0;
    new_time.end.is_morning = true;
}

