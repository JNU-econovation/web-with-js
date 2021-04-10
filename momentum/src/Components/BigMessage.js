import React from 'react'; 

const getTimesOfTheDay = () => {
    let hour = new Date().getHours();
    if (6 <= hour && hour < 12)
        return "morning";
    if (12 <= hour && hour < 18)
        return "afternoon";
    if (18 <= hour && hour < 22)
        return "evening";
    if ((22 <= hour && hour < 24) || (0 <= hour && hour < 6))
        return "night";
    return null;
}

const BigMessage = () => {
    return <div className="big-message">Good {getTimesOfTheDay()}, {localStorage.getItem("userName")}</div>
}

export default BigMessage;