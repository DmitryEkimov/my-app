import s from './style.module.css'
import cn from 'classnames';
const NavBar = ({onClickHamburg,bgActive=false,isOpen})=> {
    const handleClick = () =>{
        onClickHamburg && onClickHamburg();
    }
    return (
        <nav id={s.navbar} className={cn({ [s.bgActive]:bgActive})} >
            <div className={s.navWrapper}>
                <p className={s.brand}>
                LOGO
                </p>
                <div className={cn(s.menuButton,{[s.active]:isOpen})} onClick={handleClick}>
                <span />
                </div>
            </div>
        </nav>
    )
}
export default NavBar;