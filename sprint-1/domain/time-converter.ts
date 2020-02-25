import { Time, TimeValue } from "./time";
import { TimeFormatName, TimeUnit } from "./time-unit";

export class TimeConverter {
  private time: Time;
  constructor(time: Time) {
    this.time = time;
  }

  convert(command: TimeFormatName): Time {
    switch (command) {
      case "d":
        return new Time(this.toDay());
      case "h":
        return new Time(this.toHour());
      case "m":
        return new Time(this.toMinute());
      case "s":
        return new Time(this.toSeconds());
    }
  }

  private toSeconds(): TimeValue {
    let result = 0;
    result += this.time.getDay() * TimeUnit.DAY_TO_SECONDS;
    result += this.time.getHour() * TimeUnit.HOUR_TO_SECONDS;
    result += this.time.getMinute() * TimeUnit.MINUTE_TO_SECONDS;
    result += this.time.getSeconds();
    return { seconds: result };
  }

  private toMinute(): TimeValue {
    let result = 0;
    result += this.time.getDay() * TimeUnit.DAY_TO_MINUTE;
    result += this.time.getHour() * TimeUnit.HOUR_TO_MINUTE;
    result += this.time.getMinute();
    result += (this.time.getSeconds() / TimeUnit.MINUTE_TO_SECONDS) >> 0;
    return { minute: result, seconds: this.time.getSeconds() % TimeUnit.MINUTE_TO_SECONDS };
  }

  private toHour(): TimeValue {
    let result = 0;
    result += this.time.getDay() * TimeUnit.DAY_TO_HOUR;
    result += this.time.getHour();
    result += (this.time.getMinute() / TimeUnit.HOUR_TO_MINUTE) >> 0;
    result += (this.time.getSeconds() / TimeUnit.HOUR_TO_SECONDS) >> 0;
    return {
      hour: result,
      minute: this.time.getMinute() % TimeUnit.HOUR_TO_MINUTE,
      seconds: this.time.getSeconds() % TimeUnit.HOUR_TO_SECONDS,
    };
  }

  private toDay(): TimeValue {
    let result = 0;
    result += this.time.getDay();
    result += (this.time.getHour() / TimeUnit.DAY_TO_HOUR) >> 0;
    result += (this.time.getMinute() / TimeUnit.DAY_TO_MINUTE) >> 0;
    result += (this.time.getSeconds() / TimeUnit.DAY_TO_SECONDS) >> 0;
    return {
      day: result,
      hour: this.time.getHour() % TimeUnit.DAY_TO_HOUR,
      minute: this.time.getMinute() % TimeUnit.DAY_TO_MINUTE,
      seconds: this.time.getSeconds() % TimeUnit.DAY_TO_SECONDS,
    };
  }
}
