  let Clockwork = require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clockwork/main/Clockwork.js');

  Clockwork.windUp({
    face:  require('https://raw.githubusercontent.com/rozek/banglejs-2-twelve-numbered-face/main/ClockFace.js'),
    hands: require('https://raw.githubusercontent.com/rozek/banglejs-2-rounded-clock-hands/main/ClockHands.js'),
    complications: {
      t:require('https://raw.githubusercontent.com/rozek/banglejs-2-calendar-week-complication/main/Complication.js'),
    }
  },{
    Foreground:'#000000', Background:'#FFFFFF', Seconds:'#FF0000',
    withDots:true
  });
