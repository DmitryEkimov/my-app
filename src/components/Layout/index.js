import s from './style.module.css'
const Layout = ({id,title,descr,urlBg,colorBg})=> {
    var backgroundStyle=(urlBg && {
        background:`url(${urlBg})`
    }) || (colorBg && {
        background:`${colorBg}`
    });
    return (
        
        <section className={s.root} id={id} style={backgroundStyle}>
            <div className={s.wrapper}>
                <article>
                        {
                            title && <div className={s.title}><h3>{title}</h3></div>
                        }
                        <span className={s.separator}></span>
                        {
                            descr && <div className={`${s.desc} ${s.full}` }><p>{descr}</p></div>
                        }
                </article>
            </div>
        </section>
    )
}
export default Layout;