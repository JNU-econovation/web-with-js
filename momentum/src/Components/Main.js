import React, {useState} from 'react';
import Setting from './Setting';
import MainPage from './MainPage';

const Main = () => {

    const [userInfo, setUserInfo] = useState({
        name: localStorage.getItem('userName'),
        email: localStorage.getItem('userEmail'),
        password: localStorage.getItem('userPassword')
    })

    const getStyle = (show, current) => show === current ? "show" : "hide";

    const renderSettings = (show) => {
        let setting_array = ["name", "email", "password"];
        return (
          <React.Fragment>
              {setting_array.map(e => <Setting name={e} userInfo={userInfo} setUserInfo={setUserInfo} style={getStyle(show, e)} />)}
          </React.Fragment>
        )
    }


    const renderContents = () => {
        if (!userInfo.name)
            return renderSettings("name");
        else if (!userInfo.email)
            return renderSettings("email");
        else if (!userInfo.password)
            return renderSettings("password");
        else
            return <MainPage />
    }

    return (
      <div className="background-container">
        <div className="background-image-div">
        {renderContents()}
        </div>
      </div>
    )

}

export default Main;
