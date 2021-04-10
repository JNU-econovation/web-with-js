import React, {useState} from 'react';
import FocusInput from './FocusInput';
import FocusCheck from './FocusCheck';

const Focus = () => {
    const [isEmpty, setIsEmpty] = useState({isEmpty: true});

    if (!localStorage.getItem("focus"))
        return <FocusInput setIsEmpty={setIsEmpty} />
    else
        return <FocusCheck />
}

export default Focus;