const ADAFRUIT_IO_USERNAME = "<INSERT_AIO_USERNAME>"
const ADAFRUIT_IO_KEY = "<INSERT_AIO_KEY>"
const ADAFRUIT_IO_FEED = "<INSERT_AIO_FEED>"

function getEvents() {
    let now = new Date();
    var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
    let calendar = CalendarApp.getCalendarById("primary");
    let events = calendar.getEvents(now, twoHoursFromNow);
    let filteredEvents = events.filter(function(e){return e.getMyStatus() == CalendarApp.GuestStatus.YES || e.getMyStatus() == CalendarApp.GuestStatus.OWNER || e.getMyStatus() == CalendarApp.GuestStatus.MAYBE});
    if(!!filteredEvents[0]){ 
      if(now >= filteredEvents[0].getStartTime() && now <= filteredEvents[0].getEndTime()){
        sendData("ON");
      } else{
        sendData("OFF");
      }
    }else{
      sendData("OFF");
    }
    
}

function sendData(val) {
  var payload = JSON.stringify({
      "value": val
  });

  var headers = {
      "X-AIO-Key": ADAFRUIT_IO_KEY
  };

  var options = {
      'method': 'post',
      'payload': payload,
      'contentType': 'application/json',
      'headers': headers,
      'muteHttpExceptions' : true
  };
  var test = UrlFetchApp.fetch('https://io.adafruit.com/api/v2/'+ADAFRUIT_IO_USERNAME+'/feeds/'+ADAFRUIT_IO_FEED+'/data', options);
  Logger.log(test);
}
