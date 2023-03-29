import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons'
import Button from '../../components/Button'
import style from './Home.module.scss'

function Home() {
    const fadeInUp = clsx(style.fadeInUp)
    const fadeInDown = clsx(style.fadeInDown)
    return (
        <div className={style.home}>
            <div className={style.container}>
                <header className={style.header}>
                    <div className={style.left}>
                        <h3>Minh</h3>
                        <h3>Quang</h3>
                    </div>
                    <Link to="/portfolio">
                        <Button name="My projects" />
                    </Link>
                </header>
            </div>
            <div className={style.content}>
                <div className={style.containerContent}>
                    <div className={style.contentLeft}>
                        <h1 className={fadeInUp}>LUONG MINH QUANG</h1>
                        <h4 className={clsx(fadeInUp, style.fadeInUp2)}>
                            I AM A <span>CODER</span>
                        </h4>
                        <p className={clsx(fadeInUp, style.fadeInUp3)}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nihil et aperiam expedita
                            exercitationem aliquam dolore quos quae maxime repellendus, animi minus architecto eligendi
                        </p>
                        <div className={clsx(fadeInUp, style.fadeInUp4)}>
                            <Link to="/contact">
                                <Button name="Contact me" style={{ padding: '12px 26px', marginRight: '16px' }} />
                            </Link>
                            <Link className={style.myInformation} to="/about">
                                My information
                            </Link>
                        </div>
                        <div className={clsx(style.contentLeftFooter, fadeInUp, style.fadeInUp5)}>
                            <a href="https://www.instagram.com/minhquang.luong.526/">
                                <InstagramOutlined className={style.contentLeftIcon} />
                            </a>
                            <a href="https://www.linkedin.com/in/minh-quang-luong-854774239/">
                                <LinkedinOutlined className={style.contentLeftIcon} />
                            </a>
                            <a href="https://github.com/minhquang2904">
                                <GithubOutlined className={style.contentLeftIcon} />
                            </a>
                        </div>
                    </div>
                    <div className={style.contentRight}>
                        <div className={clsx(style.contentRightImg, fadeInDown)}>
                            <div className={style.contentImage}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
