export type TimeValue = {
  day?: number;
  hour?: number;
  minute?: number;
  seconds?: number;
};

export class Time {
  private day?: number;
  private hour?: number;
  private minute?: number;
  private seconds?: number;

  constructor({ day = 0, hour = 0, minute = 0, seconds = 0 }: TimeValue) {
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.seconds = seconds;
  }

  static isTime(object: any): boolean {
    if (
      object.day === undefined ||
      object.hour === undefined ||
      object.minuite === undefined ||
      object.seconds === undefined
    )
      return false;
    if (
      typeof object.day !== "number" ||
      typeof object.hour !== "number" ||
      typeof object.minuite !== "number" ||
      typeof object.seconds !== "number"
    )
      return false;
    return true;
  }

  getDay(): number {
    return this.day;
  }

  getHour(): number {
    return this.hour;
  }

  getMinute(): number {
    return this.minute;
  }

  getSeconds(): number {
    return this.seconds;
  }
}
