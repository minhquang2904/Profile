import { Link } from 'react-router-dom'
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons'
import style from './Home.module.scss'

function Home() {
    return (
        <div className={style.home}>
            <div className={style.container}>
                <header className={style.header}>
                    <div className={style.left}>
                        <h3>Minh</h3>
                        <h3>Quang</h3>
                    </div>
                    <Link className={style.right} to="/contact">
                        Contact with me
                    </Link>
                </header>
            </div>
            <div className={style.content}>
                <div className={style.containerContent}>
                    <div className={style.contentLeft}>
                        <h1>LUONG MINH QUANG</h1>
                        <h4>
                            I AM A <strong>CODER</strong>
                        </h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nihil et aperiam expedita
                            exercitationem aliquam dolore quos quae maxime repellendus, animi minus architecto eligendi
                        </p>
                        <div>
                            <Link className={style.btnContactMe} to="/contact">
                                Contact me
                            </Link>
                            <Link className={style.myInformation} to="/about">
                                My information
                            </Link>
                        </div>
                        <div className={style.contentLeftFooter}>
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
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
