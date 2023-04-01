import { DownloadOutlined } from '@ant-design/icons'
import style from './About.module.scss'
import CV from '../../assets/CV_LuongMinhQuang.pdf'

function About() {
    return (
        <div className={style.about}>
            <div className={style.container}>
                <header className={style.header}>
                    <div className={style.headerTitle}>
                        <span>ABOUT </span>
                        <span>ME</span>
                    </div>
                </header>
                <div className={style.content}>
                    <div className={style.contentHeader}>
                        <div className={style.contentHeaderLeft}>
                            <h3 className={style.contentHeaderTitle}>PERSONAL INFOS</h3>
                            <div className={style.contentHeaderInformation}>
                                <span>
                                    <label>Name: </label>
                                    <strong>Luong Minh Quang</strong>
                                </span>
                                <span>
                                    <label>Birthday: </label>
                                    <strong>29-04-2001</strong>
                                </span>
                                <span>
                                    <label>National: </label>
                                    <strong>Viet Nam</strong>
                                </span>
                                <span>
                                    <label>Phone: </label>
                                    <strong>0906124606</strong>
                                </span>
                                <span>
                                    <label>Facebook: </label>
                                    <strong>facebook.com/minhquang.luong.526</strong>
                                </span>
                                <span>
                                    <label>Email: </label>
                                    <strong>
                                        <a href="mailto:lmquang2904@gmail.com">lmquang2904@gmail.com</a>
                                    </strong>
                                </span>
                            </div>
                            <div className={style.contentHeaderButton}>
                                <a className={style.contentHeaderMyCv} download="CV_LuongMinhQuang.pdf" href={CV}>
                                    <DownloadOutlined className={style.contentHeaderButtonIcon} />
                                    <span className={style.contentHeaderButtonLayout}>download cv</span>
                                    <span className={style.contentHeaderButtonTitle}>download cv</span>
                                </a>
                            </div>
                        </div>
                        <div className={style.contentHeaderRight}>
                            <div className={style.contentHeaderRightItem}>
                                <span>0</span>
                                <span>YEARS OF EXPERIENCE</span>
                            </div>
                            <div className={style.contentHeaderRightItem}>
                                <span>1</span>
                                <span>COMPLETED PROJECTS</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.contentBody}></div>
                    <div className={style.contentFooter}></div>
                </div>
            </div>
        </div>
    )
}

export default About
