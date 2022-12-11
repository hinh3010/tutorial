import './App.scss'
import Leftbar from './components/Leftbar';

const App = () => {

    return (
        <div className="App">
            <div className="home">
                <Leftbar />
                <div className='wrapper'>
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


