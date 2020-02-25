import { TimeMapper } from "./time-mapper";
import { Time } from "../domain/time";

export class Log {
  static time(time: Time) {
    console.log(TimeMapper.toString(time));
  }
}
