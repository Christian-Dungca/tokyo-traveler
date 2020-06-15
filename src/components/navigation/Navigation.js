import React, { useState } from 'react';
import './Navigation.scss';
import NavBtn from '../navBtn/NavBtn';
import Menu from '../menu/Menu';

const Navigation = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className="Navigation">
            <p className="Navigation__logo"> Tokyo Traveler </p>
            {/* <p className="Navigation__menu"> Menu </p> */}
            <NavBtn open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Navigation;