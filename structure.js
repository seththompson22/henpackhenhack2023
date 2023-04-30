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
     if (groupName === "") {
         alert("Please enter a group name.");
     } else if (emails.length === 0) {
         alert("Please add at least one email to the group.");
     } else {
         var groupList = document.createElement("ul");
         groupList.setAttribute('id','email-list');
         for (var i = 0; i < emails.length; i++) {
             var emailListItem = document.createElement("li");
             emailListItem.textContent = emails[i];
             emailListItem.setAttribute('id','emailListItem');
             groupList.appendChild(emailListItem);
         }
         document.getElementById("group").innerHTML = "";
         document.getElementById("group").appendChild(groupList);
         alert("Group \"" + groupName + "\" created with " + emails.length + " members.");
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
 

 function directGroup(){
     window.location.href = "https://seththompson22.github.io/henpackhenhack2023/update_schedule.html";
 }


class Group {
    constructor(name, emails, open_schedule) {
        this.name = name;
        this.emails = emails;
        this.open_schedule = open_schedule;

    }
 }
class Event {
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
 }

class TimeData {
    constructor(day_char, hour, minute){
        this.day_char = day_char;
        this.hour = hour;
        this.minute = minute;
    }
}


 function updateTime() {
    var start_char = document.getElementById("select-start-day").value;
    var start_hour = document.getElementById("start_hour").value;
    var start_minute = document.getElementById("start-minute").value;
    var end_char = document.getElementById("select-end-day").value;
    var end_hour = document.getElementById("end_hour").value;
    var end_minute = document.getElementById("end-minute").value;

    // main code:
    // week_order = ["M", "T", "W", "R", "F", "S", "U"];
    const monday_availability = new Array(new Event(TimeData('M',0,0), TimeData('M',23,59)));
    const tuesday_availability = new Array(new Event(TimeData('T',0,0), TimeData('T',23,59)));
    const wednesday_availability = new Array(new Event(TimeData('W',0,0), TimeData('W',23,59)));
    const thursday_availability = new Array(new Event(TimeData('R',0,0), TimeData('R',23,59)));
    const friday_availability = new Array(new Event(TimeData('F',0,0), TimeData('F',23,59,)));
    const saturday_availability = new Array(new Event(TimeData('S',0,0), TimeData('S',23,59)));
    const sunday_availability = new Array(new Event(TimeData('U',0,0), TimeData('U',23,59,)));
    weekly_available = [monday_availability, tuesday_availability, wednesday_availability, thursday_availability, friday_availability, saturday_availability, sunday_availability];
    group = new Group(groupName, emails, weekly_available);

    var defaultMonday = new Event(TimeData('M',0,0), TimeData('M',23,59));

    for (var i = 0; i < monday_availability.length; i++) {
        if (start_char == 'M' && end_char == 'M') {
            if (defaultMonday.start.hour <= start_hour && start_hour <= defaultMonday.end.hour) {
                if (defaultMonday.start.hour <= end_hour && end_hour <= defaultMonday.end.hour) {
                    if (defaultMonday.start.minute <= start_minute && start_minute <= defaultMonday.end.minute) {
                        if (defaultMonday.start.minute <= end_minute && end_minute <= defaultMonday.end.minute) {
                            monday_availability.push(defaultMonday);
                            var temp = new TimeData('M',defaultMonday.end.hour, defaultMonday.end.minute);
                            defaultMonday.end.hour = start_hour;
                            defaultMonday.end.minute = start_minute;
                            start_hour = temp.hour;
                            start_minute = temp.minute;
                            
                        } else {
                            alert("End Time Minutes should be between 0 and 59");
                        }
                    } else {
                        alert("Start Time Minutes should be between 0 and 59");
                    }
                } else {
                    alert("End Time Hours should be between 0 and 23");
                }
            } else {
                alert("Start Time Hours should be between 0 and 23");
            }
        }
    }
    var formatted_times = function() {
        var list_of_times = new Array();
        list_of_times.push(defaultMonday.start.day_char + " " + defaultMonday.start.hour + ":" + defaultMonday.start.minute + " - " + defaultMonday.end.day_char + " " + defaultMonday.end.hour + ":" + defaultMonday.end.minute);
        list_of_times.push(start_char + " " + start_hour + ":" + start_minute + " - " + end_char + " " + end_hour + ":" + end_minute);
    
        return list_of_times;
        
    }
    alert("Times Available: " + formatted_times);
    
    // for (var i = 0; i < weekly_available.length; i++) {
    //     for (var j = 0; j < weekly_available[i].length; j++) {
    //         alert(weekly_available[i][j].start.hour + ": " + weekly_available[i][j].start.minute + " - " + weekly_available[i][j].end.hour + ": " + weekly_available[i][j]
    //         .end.minute);
    //     }
    // }    

    // get user input and store it as an event
    // var new_time = new Event(new TimeData(start_char, start_hour, start_minute), new TimeData(end_char, end_hour, end_minute));
    // edit data

 }


//  function displayAvailableTimes(times) {
    
//     alert(weekly_available[0][j].start.hour + ": " + times[j].start.minute + " - " + times[j].end.hour + ": " + times[j].end.minute);
//     var groupList = document.getElementById("row-1");
//      var newTimes = [];

//      // Remove previous ul element
//      var previousList = document.getElementById("row-1").getElementById("M");
//      if (previousList) {
//          previousList.remove();
//      }

//      for (var j = 0; j < times.length; j++) {
//          if (!newTimes.includes(times[j])) {
//             var oneRange = times[j].start.hour + ": " + times[j].start.minute + " - " + times[j].end.hour + ": " + times[j].end.minute;
//             newTimes.push(oneRange);
//             var timeItem = document.createElement("label");
//             timeItem.textContent = oneRange;
//             timeItem.setAttribute('id', 'timeItem');
//             groupList.appendChild(timeItem);
//          }
//      }
//  }

//  table.getCellTextAt = function(rowIndex, colIndex) {
//     return this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") + ':eq(' + colIndex + ')').text(); 
//  };
 
//  table.getCellContentsAt = function(rowIndex, colIndex) {
//     return this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") + ':eq(' + colIndex + ')').html(); 
//  };

//  table.setCellContentsAt = function(rowIndex, colIndex, newContents) {
//     this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") 
//               + ':eq(' + colIndex + ')').html('').append(newContents);
//  };
 
//  table.setCellTextAt = function(rowIndex, colIndex, newText) {
//     this.find('tr:eq(' + rowIndex + ') t' + (rowIndex == 0 ?  "h" : "d") 
//               + ':eq(' + colIndex + ')').text(newText);
//  };


//  function updateChart(day_char) {
//     var row1 = document.getElementById("row-1");
//     var table1 = document.getElementsByTagName("table");
//     if(row1.getElementById("M").id==day_char) {
//         for (var i = 0; i < monday_availability.length; i++) {
//             table1.setCellTextAt(0,0,times[j].start.hour + ": " + times[j].start.minute + " - " + times[j].end.hour + ": " + times[j].end.minute);
//         }
//     }

//  }