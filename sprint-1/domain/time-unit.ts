export type TimeName = "hour" | "day" | "minute" | "seconds";
export type TimeFormatName = "d" | "h" | "m" | "s";
export class TimeUnit {
  private static readonly FORMAT_TO_TIME_NAME = {
    d: "day",
    h: "hour",
    m: "minute",
    s: "seconds",
  };
  private static readonly TIME_TO_FORMAT_NAME = {
    day: "d",
    hour: "h",
    minute: "m",
    seconds: "s",
  };
  public static readonly MINUTE_TO_SECONDS = 60;
  public static readonly HOUR_TO_MINUTE = 60;
  public static readonly DAY_TO_HOUR = 24;
  public static readonly HOUR_TO_SECONDS = TimeUnit.MINUTE_TO_SECONDS * TimeUnit.HOUR_TO_MINUTE;
  public static readonly DAY_TO_SECONDS = TimeUnit.HOUR_TO_SECONDS * TimeUnit.DAY_TO_HOUR;
  public static readonly DAY_TO_MINUTE = TimeUnit.HOUR_TO_MINUTE * TimeUnit.DAY_TO_HOUR;

  public static toTimeName(format: TimeFormatName): TimeName {
    return (this.FORMAT_TO_TIME_NAME as Record<string, any>)[format];
  }

  public static toTimeFormatName(timeName: TimeName): TimeFormatName {
    return (this.TIME_TO_FORMAT_NAME as Record<string, any>)[timeName];
  }
}
