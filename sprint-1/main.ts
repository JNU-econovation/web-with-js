import { Time } from "./domain/time";
import { TimeMapper } from "./util/time-mapper";
import { TimeConverter } from "./domain/time-converter";
import { TimeFormatName } from "./domain/time-unit";
import { Log } from "./util/log";

function main(input: string) {
  const stringTime: string = input.split(" ")[0];
  const command: TimeFormatName = input.split(" ")[1] as TimeFormatName;

  const time: Time = TimeMapper.toTime(stringTime);
  const timeConverter: TimeConverter = new TimeConverter(time);
  const convertedTime: Time = timeConverter.convert(command);

  Log.time(convertedTime);
}

main("100m s");
