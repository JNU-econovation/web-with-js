import React, {useState} from 'react';

const FocusCheck = () => {
    const [checked, setCheck] = useState(JSON.parse(localStorage.getItem("focus")).isDone);

    const renderClassName = () => {
        if (checked)
            return "checked";
        return "";
    }

    const onClick = () => {
        checked ? setCheck(false) : setCheck(true);
        console.log(checked);
        let focus = JSON.parse(localStorage.getItem("focus"));
        focus = {...focus, isDone: checked}
        console.log(focus);
        localStorage.setItem("focus", JSON.stringify(focus));
    }

    const renderCheck = () => {
        let focus = JSON.parse(localStorage.getItem("focus"));
        return (
            <div className="focus-content-wrapper">
                <div className={`focus-checkbox ${renderClassName()}`} onClick={onClick}></div>
                <div className={`focus-content ${renderClassName()}`}>{focus.content}</div>
                <div className={`focus-remove-button ${renderClassName()}`}></div>
            </div>
        )
    }

    return (
        <div className="focus-wrapper">
            <div className="today">TODAY</div>
            {renderCheck()}
        </div>
    )
}

export default FocusCheck;