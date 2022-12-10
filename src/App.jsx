import './App.scss'
import Icons from './assets/icons';
import Images from './assets/images';

const menuItems = [
    {
        icon: <Icons.Course />,
        label: 'Môn học'
    },
    {
        icon: <Icons.Document />,
        label: 'Tài liệu học tập'
    },
    {
        icon: <Icons.ManagerAplus size={24} />,
        label: 'Quản lý A+'
    },
    {
        icon: <Icons.Exam size={24} />,
        label: 'Thi tự do'
    },
    {
        icon: <Icons.Confessiton size={24} />,
        label: 'Confession'
    }
]

function App() {


    console.log({ Images })
    return (
        <div className="App">
            <div className="home">

                <div className="sidebar">

                    {/* logo */}
                    <div className='logo'>
                        <img src={Images.logo} alt="logo" />
                        <span>MentorZ</span>
                    </div>

                    {/* navigation */}
                    <div className='menu-nav'>
                        <ul className='box-menu-nav'>
                            {
                                menuItems.map((item, i) => (
                                    <li key={i} className={`item-nav ${i === 0 ? 'active' : ''}`}>
                                        <div className='box-item-nav'>
                                            <div className='item-icon'>
                                                {item.icon}
                                            </div>
                                            <span className='item-label'>
                                                {item.label}
                                            </span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
























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


