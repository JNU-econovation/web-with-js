import { Time, TimeValue } from "../domain/time";
import { TimeUnit, TimeFormatName } from "../domain/time-unit";

export class TimeMapper {
  static toString(time: Time): string {
    let result: string = "";
    let day, hour, minute, seconds;
    if ((day = time.getDay())) result += `${day}${TimeUnit.toTimeFormatName("day")}`;
    if ((hour = time.getHour())) result += `${hour}${TimeUnit.toTimeFormatName("hour")}`;
    if ((minute = time.getMinute())) result += `${minute}${TimeUnit.toTimeFormatName("minute")}`;
    if ((seconds = time.getSeconds())) result += `${seconds}${TimeUnit.toTimeFormatName("seconds")}`;
    return result;
  }

  static toTime(time: string): Time {
    let numberStacking: string = "";
    const result: TimeValue = time.split("").reduce((acc, cur) => {
      if (Number.isInteger(Number(cur))) {
        numberStacking += cur;
        return acc;
      }
      const unit = TimeUnit.toTimeName(cur as TimeFormatName);
      acc[unit] = Number(numberStacking);
      numberStacking = "";
      return acc;
    }, {} as TimeValue);
    return new Time(result);
  }
}
