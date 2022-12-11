import React from "react";
import Icons from "../../assets/icons";
import Images from "../../assets/images";

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

const topRanks = [
    {
        avatar: "https://bom.so/QdZ4g2",
        fullName: "Hướng Trần",
        countStar: "5.0",
        positon: "mentor",
    },
    {
        avatar: "https://bom.so/2f1ugY",
        fullName: "Trà My",
        countStar: "5.0",
        positon: "mentor",
    },
    {
        avatar: "https://bom.so/jP0hg4",
        fullName: "Hướng Trần",
        countStar: "5.0",
        positon: "mentor",
    },
    {
        avatar: "https://bom.so/zLmBm9",
        fullName: "Trà My",
        countStar: "5.0",
        positon: "mentor",
    },
    {
        avatar: "https://barcampsaigon.org/wp-content/uploads/2022/06/phan-ngoc-anh-thu-14-1.jpg",
        fullName: "Phan Ngọc Anh Thư",
        countStar: "5.0",
        positon: "mentor",
    },
    {
        avatar: "https://bom.so/oCD2mT",
        fullName: "Trà My",
        countStar: "5.0",
        positon: "mentor",
    },
]
function Left() {
    return (
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

            {/* banner */}
            <div className="banner">
                <img src={Images.banner} alt="" className="image" />
            </div>

            {/* rank */}
            <div className="box-rank">
                <p className="title">Bảng xếp hạng</p>
                <ul className="ranks">
                    {
                        topRanks.map(function (rank, i) {
                            return (
                                <li className="rank-item">
                                    <div className="avatar">
                                        <img
                                            src={rank.avatar} alt={rank.fullName}
                                            className="image"
                                        />
                                        <img
                                            src={Images.no1} alt={rank.fullName}
                                            className='icon-rank'
                                        />
                                    </div>
                                    <div className="description">
                                        <div className='description-top'>
                                            <p className="fullname">{rank.fullName}</p>
                                            <div className="star">
                                                <b className="count-star">
                                                    {rank.countStar}
                                                </b>
                                                <Icons.Star size={14} color="#FFC53D" />
                                            </div>
                                        </div>
                                        <span className="position">{rank.positon}</span>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

        </div>

    )
}

export default Left