import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Chocolate = () => {
    return (
        <div>
            <center>
                <h4> Welcome To Chocolate Page !!</h4>
                <p> How can i help you</p>
                <Link to="/Products/Chocolate/1"><li>Chocolate</li></Link>
                <Link to="/Products/Chocolate/2"><li>Chocolate</li></Link>
                <Link to="/Products/Chocolate/3"><li>Chocolate</li></Link>
                <Link to="/Products/Chocolate/4"><li>Chocolate</li></Link>
            </center>
            <Outlet />
        </div>
    )
}

export default Chocolate;