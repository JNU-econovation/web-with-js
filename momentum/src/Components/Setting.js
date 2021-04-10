import React, {useState, useRef} from 'react';

const Setting = (props) => {
const [info, setInfo] = useState("");
const infoInput = useRef();

    const onChange = (e) => {
        const { value } = e.target;
        setInfo(value);
    }

    const renderButton = () => {
        const ref = infoInput.current;
        if (ref && ref.value.length > 0)
            return <button type="submit" className="submit">Continue ></button>;
    }

    const map = {name: (info) => {
        localStorage.setItem("userName", info);
    }}

    const onButtonClick = (submitName) => {
        console.log(props.name, "click")
        // if 아래 코드를 하나로 합칠 수 있게
        if (submitName === 'name') {
            props.setUserInfo({...props.userInfo, "name": info})
            localStorage.setItem("userName", info);
        }
        if (submitName === 'email') {
            props.setUserInfo({...props.userInfo, "email": info})
            localStorage.setItem("userEmail", info);
        }
        if (submitName === 'password') {
            props.setUserInfo({...props.userInfo, "password": info})
            localStorage.setItem("userPassword", info);
        }
    }

    const renderInputType = () => {
        if (props.name === "password")
            return "password";
        return "text";
    }

    const renderQuestion = () => {
        if (props && props.name === "name")
            return "Hello, what's your name?"
        if (props && props.name === "email")
            return `What your email, ${localStorage.getItem("userName")}?`
        if (props && props.name === "password") {
            return "What's your password?"
        }
        else
            return null
    }

    return (
        <div className={`center-container ${props.name}`} style={{display: props.style === "show" ? "flex" : "none" }}>
            {/* <div className="logo"></div> */}
            <div className="center-wrapper">
                <div className="question">
                    {renderQuestion()}
                </div>
                <input type={renderInputType()} 
                    name="name"
                    className="big-input" 
                    value={info}
                    ref={infoInput}
                    onChange={onChange}
                    autoComplete="off"
                />
                <div className="button-wrapper" onClick={() => onButtonClick(props.name)}>
                    {renderButton()}    
                </div>
            </div>
        </div>
    )
}

export default Setting;