import s from './style.module.css'
import cn from 'classnames';
const NavBar = ({onShowHideMenu,isShowMenu})=> {
    const handleClick = () =>{
        
        onShowHideMenu && onShowHideMenu();
    }
    return (
        <nav id="navbar" onClick={handleClick}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                LOGO
                </p>
                <a className={cn(s.menuButton,{[s.active]:isShowMenu})}>
                <span />
                </a>
            </div>
        </nav>
    )
}
export default NavBar;