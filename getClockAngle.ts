function getClockAngle(time: string) {
  var timeSplit = time.split(":"),
    hour = timeSplit[0],
    minute = timeSplit[1];
  var minuteAngle = (Number(minute) / 60) * 360;
  var hourAngle = (Number(hour) % 12) * 30 + (Number(minute) / 60) * 30;
  var angle = Math.abs(hourAngle - minuteAngle);
  return Math.min(angle, 360 - angle);
}
console.log(getClockAngle("17:30"));
console.log(getClockAngle("09:00"));
