import React, {useState, useEffect} from 'react';

const makeTwoDigit = (time) => {
    if (time.toString().length < 2)
        return '0' + time;
    else
        return time;
}

const Clock = () => {
    const [time, setTime] = useState()
    
    const setTimeState = () => {
        let date = new Date();
        console.log(date);
        setTime({
            "hour": makeTwoDigit(date.getHours()),
            "minute": makeTwoDigit(date.getMinutes()),
            "second": makeTwoDigit(date.getSeconds()),
        })
    }

    useEffect(() => { 
        let interval = setInterval(setTimeState, 1000);
        return () => clearInterval(interval);
    }, []) // []: 한번만 실행된다(dependency 없음)

    const renderTime = () => {
        if (time)
            return `${time.hour}:${time.minute}`;
            // return `${time.hour}:${time.minute}:${time.second}`;

        return null;
    }

    return (
        <div className="clock">
            {renderTime()}
        </div>
    )
}

export default Clock;