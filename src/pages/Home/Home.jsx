import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons'
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
                    <Link className={style.right} to="/portfolio">
                        Contact with me
                    </Link>
                </header>
            </div>
            <div className={style.content}>
                <div className={style.containerContent}>
                    <div className={style.contentLeft}>
                        <h1 className={fadeInUp}>LUONG MINH QUANG</h1>
                        <h4 className={clsx(fadeInUp, style.fadeInUp2)}>
                            I AM A <strong>CODER</strong>
                        </h4>
                        <p className={clsx(fadeInUp, style.fadeInUp3)}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nihil et aperiam expedita
                            exercitationem aliquam dolore quos quae maxime repellendus, animi minus architecto eligendi
                        </p>
                        <div className={clsx(fadeInUp, style.fadeInUp4)}>
                            <Link className={style.btnContactMe} to="/contact">
                                Contact me
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
                        <div className={clsx(style.contentRightImg, style.fadeInDown)}>
                            <img
                                src="https://lh3.googleusercontent.com/a/AGNmyxbtqG8lhAfRReRsV4YsnqeH4qYFCbvOJ63jXiaZ=s288"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
