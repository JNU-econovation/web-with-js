import React, {useState} from 'react';

const Checkbox = () => {

    const [checked, setCheck] = useState(false);

    const renderClassName = () => {
        if (checked)
            return "checked";
        return "";
    }

    const onClick = () => {
        return checked ? setCheck(false) : setCheck(true);
    }

    return <div className={`focus-checkbox ${renderClassName()}`} onClick={onClick}></div>
}

export default Checkbox;