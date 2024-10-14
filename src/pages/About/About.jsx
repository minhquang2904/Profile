import { useEffect } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { motion } from 'framer-motion'
import AnimatedPage from '../../components/Animated'
import style from './About.module.scss'
import clsx from 'clsx'
import {
    reactRouter,
    htmlLogo,
    cssLogo,
    scssLogo,
    reactLogo,
    jsLogo,
    nodejsLogo,
    cv,
    bootstrap,
    jquery,
    framerMotion,
    nextjs,
    python,
    mongoDB,
} from '../../index'

const animatedLeftRight = {
    initial: { opacity: 1, transform: 'scale(1)' },
    exit: { opacity: 0, transform: 'scale(0.8)' },
}

function About() {
    useEffect(() => {
        const contentBodySkill = document.getElementsByClassName(style.contentBodySkill)
        const contentFooterYearsLeft = document.getElementsByClassName(style.contentFooterYearsLeft)
        const contentFooterYearsRight = document.getElementsByClassName(style.contentFooterYearsRight)
        const windowHeight = window.innerHeight

        window.addEventListener('scroll', handleShow)

        function reveals(reveals, elementVisible) {
            for (let i = 0; i < reveals.length; i++) {
                const elementTop = reveals[i].getBoundingClientRect().top
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add(style.active)
                } else {
                    reveals[i].classList.remove(style.active)
                }
            }
        }

        function handleShow() {
            reveals(contentBodySkill, 120)
            reveals(contentFooterYearsLeft, 0)
            reveals(contentFooterYearsRight, 0)
        }

        return () => window.removeEventListener('scroll', handleShow)
    }, [])
    return (
        <AnimatedPage>
            <div className={style.about}>
                <div className={style.container}>
                    <header className={style.header}>
                        <div className={clsx(style.fadeInUp, style.headerTitle)}>
                            <span>About </span>
                            <span>ME</span>
                        </div>
                    </header>
                    <div className={style.content}>
                        <div className={style.contentHeader}>
                            <motion.div
                                variants={animatedLeftRight}
                                initial="initial"
                                exit="exit"
                                transition={{ duration: 0.6 }}
                                className={clsx(style.fadeInUp, style.contentHeaderLeft)}
                            >
                                <h3 className={clsx(style.contentHeaderTitle)}>PERSONAL INFOS</h3>
                                <div className={style.contentHeaderInformation}>
                                    <span>
                                        <label>Name: </label>
                                        <strong>Lương Minh Quang</strong>
                                    </span>
                                    <span>
                                        <label>Birthday: </label>
                                        <strong>29-04-2001</strong>
                                    </span>
                                    <span>
                                        <label>National: </label>
                                        <strong>Việt Nam</strong>
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
                                    <a className={style.contentHeaderMyCv} download="CV_LuongMinhQuang.pdf" href={cv}>
                                        <DownloadOutlined className={style.contentHeaderButtonIcon} />
                                        <span className={style.contentHeaderButtonLayout}>download cv</span>
                                        <span className={style.contentHeaderButtonTitle}>download cv</span>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={animatedLeftRight}
                                initial="initial"
                                exit="exit"
                                transition={{ duration: 0.6 }}
                                className={clsx(style.fadeInUp, style.contentHeaderRight)}
                            >
                                <div className={style.contentHeaderRightItem}>
                                    <span>0</span>
                                    <span>YEARS OF EXPERIENCE</span>
                                </div>
                                <div className={style.contentHeaderRightItem}>
                                    <span>4</span>
                                    <span>COMPLETED PROJECTS</span>
                                </div>
                            </motion.div>
                        </div>
                        <div className={style.contentLine}>
                            <div></div>
                        </div>
                        <div className={style.contentBody}>
                            <h1>My Skills</h1>
                            <div className={style.contentBodySkills}>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={htmlLogo} alt="IMAGE" style={{ width: '65%', height: '65%' }} />
                                    </div>
                                    <h3>HTML5</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={cssLogo} alt="IMAGE" style={{ width: '65%', height: '65%' }} />
                                    </div>
                                    <h3>CSS3</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={scssLogo} alt="IMAGE" />
                                    </div>
                                    <h3>Scss</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={reactLogo} alt="IMAGE" />
                                    </div>
                                    <h3>react</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={jsLogo} alt="IMAGE" style={{ width: '65%', height: '65%' }} />
                                    </div>
                                    <h3>Javascript</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={nextjs} alt="IMAGE" />
                                    </div>
                                    <h3>Next.js</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={python} alt="IMAGE" />
                                    </div>
                                    <h3>Python</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={mongoDB} alt="IMAGE" style={{ width: '80%', height: '80%' }} />
                                    </div>
                                    <h3>Mongo</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={nodejsLogo} alt="IMAGE" />
                                    </div>
                                    <h3>nodejs</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={bootstrap} alt="IMAGE" style={{ width: '65%', height: '65%' }} />
                                    </div>
                                    <h3>bootstrap</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={jquery} alt="IMAGE" style={{ width: '80%', height: '80%' }} />
                                    </div>
                                    <h3>jquery</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={framerMotion} alt="IMAGE" style={{ width: '50%', height: '50%' }} />
                                    </div>
                                    <h3>Framer Motion</h3>
                                </div>
                                <div className={style.contentBodySkill}>
                                    <div className={style.contentBodyLogo}>
                                        <img src={reactRouter} alt="IMAGE" />
                                    </div>
                                    <h3>React Router</h3>
                                </div>
                            </div>
                        </div>
                        <div className={style.contentLine}>
                            <div></div>
                        </div>
                        <div className={style.contentFooter}>
                            <h1>EDUCATION & EXPERIENCE</h1>
                            <div className={style.contentFooterYears}>
                                <div className={style.contentFooterYearsLeft}>
                                    <div className={style.contentYear}>
                                        <div className={style.contentYearIcons}>
                                            <div className={style.contentYearIcon}>
                                                <MdOutlineWorkOutline className={style.contentYearIconItem} />
                                            </div>
                                        </div>
                                        <div className={style.contentYearTitle}>
                                            <span>2016 - 2019</span>
                                            <h2>THPT NGUYEN HUU THO</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim
                                                tempore excepturi ratione nihil? A libero officiis, corrupti, saepe id
                                                molestias cum rerum iusto, ex recusandae sunt velit quisquam quasi.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.contentYear}>
                                        <div className={style.contentYearIcons}>
                                            <div className={style.contentYearIcon}>
                                                <MdOutlineWorkOutline className={style.contentYearIconItem} />
                                            </div>
                                        </div>
                                        <div className={style.contentYearTitle}>
                                            <span>2016 - 2019</span>
                                            <h2>THPT NGUYEN HUU THO</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim
                                                tempore excepturi ratione nihil? A libero officiis, corrupti, saepe id
                                                molestias cum rerum iusto, ex recusandae sunt velit quisquam quasi.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.contentYear}>
                                        <div className={style.contentYearIcons}>
                                            <div className={style.contentYearIcon}>
                                                <MdOutlineWorkOutline className={style.contentYearIconItem} />
                                            </div>
                                        </div>
                                        <div className={style.contentYearTitle}>
                                            <span>2016 - 2019</span>
                                            <h2>THPT NGUYEN HUU THO</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim
                                                tempore excepturi ratione nihil? A libero officiis, corrupti, saepe id
                                                molestias cum rerum iusto, ex recusandae sunt velit quisquam quasi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.contentFooterYearsRight}>
                                    <div className={style.contentYear}>
                                        <div className={style.contentYearIcons}>
                                            <div className={style.contentYearIcon}>
                                                <MdOutlineWorkOutline className={style.contentYearIconItem} />
                                            </div>
                                        </div>
                                        <div className={style.contentYearTitle}>
                                            <span>2016 - 2019</span>
                                            <h2>THPT NGUYEN HUU THO</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim</p>
                                        </div>
                                    </div>
                                    <div className={style.contentYear}>
                                        <div className={style.contentYearIcons}>
                                            <div className={style.contentYearIcon}>
                                                <MdOutlineWorkOutline className={style.contentYearIconItem} />
                                            </div>
                                        </div>
                                        <div className={style.contentYearTitle}>
                                            <span>2016 - 2019</span>
                                            <h2>THPT NGUYEN HUU THO</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim
                                                tempore excepturi ratione nihil? A libero officiis, corrupti, saepe id
                                                molestias cum rerum iusto, ex recusandae sunt velit quisquam quasi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default About
