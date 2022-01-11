// see http://www.salesianer.de/util/kalwoch.html

(function () {
  function ThursdayOfWeek (Timestamp) {
    let Thursday = new Date();
      Thursday.setTime(
        Timestamp.getTime() + (3-((Timestamp.getDay()+6) % 7)) * 86400000
      );
    return Thursday;
  }

  function CalendarWeek (Timestamp) {
    let thisWeeksThursday  = ThursdayOfWeek(Timestamp);
    let firstWeeksThursday = ThursdayOfWeek(new Date(Timestamp.getFullYear(),0,4));
    let Result = Math.round(
      1 + (thisWeeksThursday.getTime()-firstWeeksThursday.getTime()) /86400000 /7
    );

    return (
      Result === 0
      ? CalendarWeek(new Date(Timestamp.getFullYear(),11,31))
      : Result
    );
  }

  exports.draw = function draw (x,y, Radius, Settings) {
    let halfScreenWidth   = g.getWidth() / 2;
    let largeComplication = (x === halfScreenWidth);

    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
    g.setFont('Vector', 18);
    g.setFontAlign(0,0);

    let today = new Date();
    let Text  = (largeComplication ? 'Wk ' : '') + CalendarWeek(today);
    g.drawString(Text, x,y);
  };
})();
