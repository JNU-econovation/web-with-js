import React, {useState, useRef} from 'react';

const FocusInput = ({setIsEmpty}) => {
    const [focus, setFocus] = useState({content: localStorage.getItem("focus")});
    const focusInput = useRef();

    const onChange = (e) => {
        const { value } = e.target;
        setFocus({content: value});
    }

    const onButtonClick = () => {
        let item = JSON.stringify({"content": focus.content, "isDone":false});
        localStorage.setItem("focus", item);
        setIsEmpty({isEmpty: false});
    }

    const renderButton = () => {
        const ref = focusInput.current;
        if (ref && ref.value.length > 0)
            return <button type="submit" className="submit">Enter</button>;
    }

    const renderFocusQuestion = () => {
        return (
            <div className="focus-wrapper">
                <div className="question focus-question">What is your main focus for today?</div>
                <input 
                    type="text" 
                    className="focus-input" 
                    ref={focusInput} 
                    onChange={onChange}
                />
                <div className="button-wrapper" onClick={onButtonClick}>
                    {renderButton()}    
                </div>
            </div>
        )
    }

    return renderFocusQuestion();
}

export default FocusInput;