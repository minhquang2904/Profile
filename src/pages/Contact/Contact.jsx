import style from './Contact.module.scss'
import clsx from 'clsx'

function Contact() {
    return (
        <div className={style.contact}>
            <div className={style.container}>
                <header className={style.header}>
                    <div className={clsx(style.headerTitle)}>
                        <span>Contact </span>
                        <span>ME</span>
                    </div>
                </header>
                <div className={style.content}>
                    <div className={style.contentHeaderLeft}>
                        <div className={style.contentItems}></div>
                    </div>
                    <div className={style.contentHeaderRight}>123</div>
                </div>
            </div>
        </div>
    )
}

export default Contact
