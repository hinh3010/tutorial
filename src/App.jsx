import './App.scss'
import Images from './assets/images';

function App() {

    console.log({ Images })
    return (
        <div className="App">
            <div className="home">
                <div className="sidebar">

                    <div className='logo'>
                        <img src={Images.logo} alt="logo" />
                        <span>MentorZ</span>
                    </div>

                </div>

                <div className='wapper'>
                    <div className="topbar"></div>
                    <div className='content'>
                        <div className="main"></div>
                        <div className="rightbar"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


