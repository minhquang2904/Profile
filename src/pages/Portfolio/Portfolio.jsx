import { useState, useEffect } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { ImEarth } from 'react-icons/im'
import style from './Portfolio.module.scss'
import clsx from 'clsx'
import data from './data'
import { AnimatePresence, motion, animate } from 'framer-motion'
import AnimatedPage from '../../components/Animated'

const animationImage = {
    initial: { opacity: 0, x: -100 },
    animated: { opacity: 1, x: 0 },
}

const animationContentProjectsLarge = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
}

const animationContentProjectsSmall = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
}

function Portfolio() {
    const [project, setProject] = useState(0)
    const [image, setImage] = useState(0)
    useEffect(() => {
        const currentImage = document.getElementsByClassName(style.listImage)
        for (let i = 0; i < currentImage.length; i++) {
            currentImage[i].classList.remove(style.active)
        }
        currentImage[image].classList.add(style.active)
    }, [image])

    useEffect(() => {
        const currentImage = document.getElementsByClassName(style.listImage)
        for (let i = 0; i < currentImage.length; i++) {
            currentImage[i].classList.remove(style.active)
        }

        const timer = setTimeout(() => {
            currentImage[image].classList.add(style.active)
        }, 1100)

        return () => clearTimeout(timer)
    }, [project])
    const handlePrev = () => {
        if (project > 0) {
            setProject(project - 1)
            setImage(0)
        }
    }
    const handleNext = () => {
        if (project < data.length - 1) {
            setProject(project + 1)
            setImage(0)
        }
    }
    const handleSetImage = (index) => {
        setImage(index)
    }

    return (
        <AnimatedPage>
            <div className={style.contact}>
                <div className={clsx(style.container, style.fadeInUp)}>
                    <header className={style.header}>
                        <div className={clsx(style.headerTitle)}>
                            <span>My </span>
                            <span>Portfolio</span>
                        </div>
                    </header>
                    <div className={style.content}>
                        <div className={style.contentHeader}>
                            <h3 className={style.contentHeaderLeft}>Project</h3>
                            <div className={style.contentHeaderRight}>
                                <div className={style.contentHeaderRightIcon} onClick={handlePrev}>
                                    <MdArrowBackIosNew className={style.contentHeaderIcon} />
                                </div>
                                <span>
                                    {project + 1} / {data.length}
                                </span>
                                <div className={style.contentHeaderRightIcon} onClick={handleNext}>
                                    <MdArrowForwardIos className={style.contentHeaderIcon} />
                                </div>
                            </div>
                        </div>
                        <div className={style.contentLine}>
                            <div></div>
                        </div>
                        <motion.div
                            variants={animationImage}
                            initial="initial"
                            animate="animated"
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className={style.contentBody}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={project}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className={style.contentBodyLeft}
                                >
                                    <div className={style.contentBodyLeftImage}>
                                        <AnimatePresence mode="wait" initial={false}>
                                            <motion.div
                                                key={image}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.6 }}
                                                className={style.contentBodyImageBlock}
                                            >
                                                <img id="image" src={data[project].image[image]} alt="IMAGE" />
                                            </motion.div>
                                        </AnimatePresence>

                                        <div className={style.listImages}>
                                            {data[project].image.map((image, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className={style.listImage}
                                                        onClick={() => handleSetImage(index)}
                                                    ></div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={project}
                                    variants={
                                        window.innerWidth > 1200
                                            ? animationContentProjectsLarge
                                            : animationContentProjectsSmall
                                    }
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.8 }}
                                    id="contentRight"
                                    className={style.contentBodyRight}
                                >
                                    <div className={style.contentBodyRightTop}>
                                        <div className={style.contentBodyRightTopSkills}>
                                            {data[project].skills.map((skill, index) => {
                                                return (
                                                    <div key={index} className={style.contentBodyRightTopSkill}>
                                                        <img src={skill} alt="IMAGE" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <h3>{data[project].name}</h3>
                                        <h5>{data[project].subname}</h5>
                                        <p>{data[project].description}</p>
                                    </div>
                                    <div className={style.contentBodyRightDown}>
                                        {data[project].github && (
                                            <a
                                                href={data[project].github}
                                                className={clsx(style.contentBodyRightDownBtn, style.contentCode)}
                                            >
                                                <span>View Code</span>
                                                <BsGithub className={style.contentIcon} />
                                            </a>
                                        )}
                                        {data[project].demo && (
                                            <a
                                                href={data[project].demo}
                                                className={clsx(style.contentBodyRightDownBtn, style.contentDemo)}
                                            >
                                                <span>Live Demo</span>
                                                <ImEarth className={style.contentIcon} />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Portfolio
