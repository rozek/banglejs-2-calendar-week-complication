// see http://www.salesianer.de/util/kalwoch.html

(function () {
  exports.draw = function draw (x,y, Radius, Settings) {
    function ThursdayOfWeek (Timestamp) {
      let Thursday = new Date();
        Thursday.setTime(
          Timestamp.getTime() + (3-((Timestamp.getDay()+6) % 7)) * 86400000
        );
      return Thursday;
    }

    let today = new Date();
    let thisWeeksThursday  = ThursdayOfWeek(today);
    let firstWeeksThursday = ThursdayOfWeek(new Date(today.getFullYear(),0,4));
    let CalendarWeek       = Math.round(
      1 + (thisWeeksThursday.getTime()-firstWeeksThursday.getTime()) /86400000 /7
    );

    let halfScreenWidth   = g.getWidth() / 2;
    let largeComplication = (x === halfScreenWidth);

    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
    g.setFont('Vector', 18);
    g.setFontAlign(0,0);

    let Text = (largeComplication ? 'Wk ' : '') + CalendarWeek;
    g.drawString(Text, x,y);
  };
})();
