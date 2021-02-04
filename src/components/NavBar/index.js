import s from './style.module.css'
import cn from 'classnames';
const NavBar = ({onClickHamburg,bgActive=false,isOpen})=> {
    const handleClick = () =>{
        onClickHamburg && onClickHamburg();
    }
    return (
        <nav id={s.navbar} className={cn({ [s.bgActive]:bgActive})} onClick={handleClick}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                LOGO
                </p>
                <a className={cn(s.menuButton,{[s.active]:isOpen})}>
                <span />
                </a>
            </div>
        </nav>
    )
}
export default NavBar;