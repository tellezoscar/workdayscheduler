$(document).ready(function () {
    
        var todayDate = moment().format("dddd, MMM Do YYYY");
            $("#currentDay").text(todayDate);
    
        var time = [
            
            { stringTime: "8AM", numTime: 0800 },
            { stringTime: "9AM", numTime: 0900 },
            { stringTime: "10AM", numTime: 1000 },
            { stringTime: "11AM", numTime: 1100 },
            { stringTime: "12PM", numTime: 1200 },
            { stringTime: "1PM", numTime: 1300 },
            { stringTime: "2PM", numTime: 1400 },
            { stringTime: "3PM", numTime: 1500 },
            { stringTime: "4PM", numTime: 1600 },
            { stringTime: "5PM", numTime: 1700 },
            { stringTime: "6PM", numTime: 1800 },
            { stringTime: "7PM", numTime: 1900 },
        ];
     
        time.map((hour) => {
        
            var timeRow = $("<div>");
                timeRow.attr("class", "row");
    
            var timeSpan = $("<span>");
                timeSpan.attr("class", "col-2");
                timeSpan.text(hour.stringTime);
                timeRow.append(timeSpan);
    
            var timeDescription = $("<textarea>");
                for(i = 0 ; i< 8; i++){
                var timeDescription = $("<textarea>");
                timeDescription.attr("class", "col description border");
                
            }
            
            var saveBtn = $("<button>");
                saveBtn.attr("class", "saveBtn");
                saveBtn.text("Save");
    
            saveBtn.on("click", function () {
                var event = timeDescription.val();
                localStorage.setItem(hour.stringTime, event);
    
            });
            
            var savedValue = localStorage.getItem(hour.stringTime);
                
                if (savedValue) {
                    timeDescription.val(savedValue);
                }
            
            
    
            var setTime = parseInt(moment().format("HH") + "00");
            var setHour = parseInt(hour.numTime);
    
            if (setTime === setHour) {
                timeDescription.addClass("present");
            } else if (setHour <= setTime) {
                timeDescription.addClass("past");
            } else {
                timeDescription.addClass("future");
            }
    
    
            $(".time-block").append(timeRow);
            timeRow.append(timeDescription);
                timeRow.append(saveBtn);
        });
         
    
    });
