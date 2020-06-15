import React, {Fragment} from 'react';
import './Menu.scss';

const MenuOpen = () => {
    return (
    <div className="Menu Menu--open">
        <h2> Hello </h2>
        <h2> world </h2>
        <h2> source </h2>
    </div>
    )
}

const Menu = ({open}) => {
    return(
        <Fragment>
            {open && <MenuOpen />
        }
        </Fragment>
    )
}

  
export default Menu;