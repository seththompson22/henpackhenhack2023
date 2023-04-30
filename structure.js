 // Define an array to store the emails
 var emails = [];

 // Function to add an email to the array
 function addEmail() {
     var email = document.getElementById("email").value;
     
     if (validateEmail(email)) {
         if (!emails.includes(email)){
             emails.push(email);
             document.getElementById("email").value = "";
             updateGroup();
         }
         else {
             alert("Email already Entered")
         }
     } else {
         alert("Please enter a valid email address.");
     }
 }

 // Function to create the group
 function createGroup() {
     var groupName = document.getElementById("group-name").value;
     if ((groupName != "") && (emails.length > 1)) {
        var h2 = document.createElement("h2");
        var t = document.createTextNode("Name: " + groupName);
        h2.appendChild(t);
        document.body.appendChild(h2);
    }
    else if ((groupName != "") && (emails.length === 1)){
        var h2 = document.createElement("h2");
        var t = document.createTextNode("Name: " + groupName);
        h2.appendChild(t);
        document.body.appendChild(h2);
    }
    else if (groupName === "") {
         alert("Please enter a group name.");
     } 
    else if (emails.length === 0) {
         alert("Please add at least one email to the group.");
     }
 }

 // Function to validate an email address
 function validateEmail(email) {
     var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return regex.test(email);
 }

 // Function to update the group display
 function updateGroup() {
     var groupList = document.createElement("ul");
     var uniqueEmails = [];

     var emailContainer = document.getElementById("containerB");

     // Remove previous ul element
     var previousList = document.getElementById("email-list");
     if (previousList) {
         previousList.remove();
     }

     for (var j = 0; j < emails.length; j++) {
         if (!uniqueEmails.includes(emails[j])) {
             uniqueEmails.push(emails[j]);
             var emailListItem = document.createElement("li");
             emailListItem.textContent = emails[j];
             emailListItem.setAttribute('id', 'emailListItem');
             groupList.appendChild(emailListItem);
         } else {
             groupList.removeChild(document.getElementById("emailListItem"));
         }
     }

     groupList.setAttribute('id', 'email-list');
     emailContainer.appendChild(groupList);
 }
 

 function directGroup(emails){
     window.location.href = "https://seththompson22.github.io/henpackhenhack2023/update_schedule.html";
 }

 function updateTime() {
    var start_char = document.getElementById("select-start-day");
    var start_hour = document.getElementById("start_hour");
    var start_minute = document.getElementById("start-minute");
    var start_is_morning = document.getElementById("select-AM-PM");
    var end_char = document.getElementById("select-end-day");
    var end_hour = document.getElementById("end_hout");
    var end_minute = document.getElementById("end-minute");
    var end_is_morning = document.getElementById("select-AM-PM2");
}


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
group = new Group(groupName, emails, weekly_available);


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

