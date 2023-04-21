import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { GiEarthAsiaOceania } from 'react-icons/gi';
import profile_image from '../../assets/profile_image.png'

import './Sidebar.css'

const clientFacingItems = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <AiOutlineHome />,
    },
    {
        path: "/product",
        name: "Product",
        icon: <AiOutlineShoppingCart />,
    },
    {
        path: "/customers",
        name: "Customers",
        icon: <BsFillPersonFill />,
    },
    {
        path: "/transactions",
        name: "Transactions",
        icon: <CiMoneyCheck1 />,
    },
    {
        path: "/geography",
        name: "Geography",
        icon: <GiEarthAsiaOceania />,
    },

]

const Sales = [
    {
        path: "/overview",
        name: "Overview",
        icon: <GiEarthAsiaOceania />,
    },
    {
        path: "/daily",
        name: "Daily",
        icon: <GiEarthAsiaOceania />,
    },
    {
        path: "/Monthly",
        name: "Monthly",
        icon: <GiEarthAsiaOceania />,
    },
    {
        path: "/breakdown",
        name: "Breakdown",
        icon: <GiEarthAsiaOceania />,
    },
]

const Sidebar = ({ data, isSidebarOpen, setIsSidebarOpen }) => {
    const [active, setActive] = useState("");
    const navigate = useNavigate()

    return (<>
        {isSidebarOpen &&
            <div className='sidebar'>
                <div className='sidebar__heading'>ECOMVISION</div>
                <div className='clientFacingPart'>
                    <div className='items__heading'> Client Facing</div>
                    {clientFacingItems.map((item) => (
                        <NavLink to={item.path} key={item.name} className='onetab'>
                            <div className='icon'>{item.icon}</div>
                            <div className='title'>{item.name}</div>
                        </NavLink>
                    ))}
                </div>
                <div className='salesPart'>
                    <div className='items__heading'> Sales</div>
                    {Sales.map((item) => (
                        <NavLink to={item.path} key={item.name} className='onetab'>
                            <div className='icon'>{item.icon}</div>
                            <div className='title'>{item.name}</div>
                        </NavLink>
                    ))}
                </div>

                <div className='profile__part'>
                    <div className='profile_image'>
                        <img src={profile_image} />
                    </div>
                    <div className='details'>
                       <div> {data.name}</div>
                       <div>{data.occupation}</div>
                    </div>
                    <div className='setting__icon'>
                        <AiOutlineSetting size={29} />
                    </div>
                </div>


            </div>
        }
    </>

    )
}

export default Sidebar
