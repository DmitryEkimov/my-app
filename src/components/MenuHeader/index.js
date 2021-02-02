import {useState} from 'react';
import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader  = ()=> {
    const [isShowMenu,setShowMenu] = useState(false);
    const handleShowHideMenu = ()=>{

        setShowMenu(prevIsShowMenu=>!prevIsShowMenu);
    };
    return (
        <>
          <NavBar  onShowHideMenu={handleShowHideMenu} isShowMenu={isShowMenu}/>
          <Menu isShowMenu={isShowMenu}/>
        </>
    )
}
export default MenuHeader;