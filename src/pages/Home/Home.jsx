import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons'
import Button from '../../components/Button'
import { motion } from 'framer-motion'
import style from './Home.module.scss'

const animationHeader = {
    initial: { opacity: 0, y: -100 },
    animated: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
}

const animationLeft = {
    initial: { opacity: 0, x: 100 },
    animated: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

const animationRight = {
    initial: { opacity: 0, x: -100 },
    animated: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

function Home() {
    const fadeInUp = clsx(style.fadeInUp)
    const fadeInDown = clsx(style.fadeInDown)
    useEffect(() => {
        let index = 0,
            isAdding = true,
            textTyping = document.querySelector('.typingText'),
            text = ' Front-end developer',
            timer,
            timer2

        let typing = () => {
            timer = setTimeout(() => {
                textTyping.innerText = text.slice(0, index)
                if (isAdding) {
                    if (index > text.length) {
                        timer2 = setTimeout(() => {
                            typing()
                        }, 3000)
                        isAdding = false
                    } else {
                        index++
                        typing()
                    }
                } else {
                    if (index == 0) {
                        isAdding = true
                    } else {
                        index--
                    }
                    typing()
                }
            }, 100)
        }

        setTimeout(() => {
            typing()
        }, 1600)

        return () => {
            clearTimeout(timer)
            clearTimeout(timer2) // clearTimeout de tranh ro ri bo nho
        }
    }, [])
    return (
        <div className={style.home}>
            <motion.div
                variants={animationHeader}
                initial="initial"
                animate="animated"
                exit="exit"
                transition={{ duration: 0.6 }}
                className={style.container}
            >
                <header className={style.header}>
                    <div className={style.left}>
                        <h3>Minh</h3>
                        <h3>Quang</h3>
                    </div>
                    <Link to="/portfolio">
                        <Button name="My portfolio" />
                    </Link>
                </header>
            </motion.div>
            <div className={style.content}>
                <div className={style.containerContent}>
                    <motion.div
                        variants={animationLeft}
                        initial="initial"
                        animate="animated"
                        exit="exit"
                        transition={{ duration: 0.6 }}
                        className={style.contentLeft}
                    >
                        <h1 className={fadeInUp}>LUONG MINH QUANG</h1>
                        <div className={clsx(fadeInUp, style.fadeInUp2, style.subTitle)}>
                            <h4>
                                I AM A <span className={clsx('typingText')}></span>
                            </h4>
                        </div>
                        <p className={clsx(fadeInUp, style.fadeInUp3)}>
                            Tôi là sinh viên năm 4 chưa có kinh nghiệm về frontend nhưng tôi vẫn luôn học tập và rèn
                            luyện để cải thiện bản thân mỗi ngày. Với sự vui vẻ, hòa đồng và kiên trì tôi tin rằng mình
                            sẽ hoàn thành tốt công việc.Tôi mong muốn sẽ trở thành Frontend Software Engineer.
                        </p>
                        <div className={clsx(fadeInUp, style.fadeInUp4, style.btnContent)}>
                            <Link to="/contact">
                                <Button name="Contact me" />
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
                    </motion.div>
                    <motion.div
                        variants={animationRight}
                        initial="initial"
                        animate="animated"
                        exit="exit"
                        transition={{ duration: 0.6 }}
                        className={style.contentRight}
                    >
                        <div className={clsx(style.contentRightImg, fadeInDown)}>
                            <div className={style.contentImage}></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home
