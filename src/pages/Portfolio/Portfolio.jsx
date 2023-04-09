import { useState, useEffect } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { ImEarth } from 'react-icons/im'
import style from './Portfolio.module.scss'
import clsx from 'clsx'
import data from './data'

function Portfolio() {
    const [project, setProject] = useState(0)
    const [image, setImage] = useState(0)

    useEffect(() => {
        const currentImage = document.getElementsByClassName(style.listImage)
        if (image > 0) {
            currentImage[image - 1].style.background = 'transparent'
        }
        currentImage[image].style.background = '#808080'
    }, [image])
    const handlePrev = () => {
        if (project > 0) {
            setProject(project - 1)
        }
    }
    const handleNext = () => {
        if (project < data.length - 1) {
            setProject(project + 1)
        }
    }
    const handleSetImage = (index) => {
        setImage(index)
    }

    return (
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
                    <div className={style.contentBody}>
                        <div className={style.contentBodyLeft}>
                            <div className={style.contentBodyLeftImage}>
                                <img
                                    src={
                                        data[project].image[image] ||
                                        'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg'
                                    }
                                    alt="IMAGE"
                                />
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
                        </div>
                        <div className={style.contentBodyRight}>
                            <div className={style.contentBodyRightTop}>
                                <h3>{data[project].name}</h3>
                                <h5>{data[project].subname}</h5>
                                <p>{data[project].description}</p>
                                <div className={style.contentBodyRightTopSkills}>
                                    {data[project].skills.map((skill, index) => {
                                        return (
                                            <span key={index} className={style.contentBodyRightTopSkill}>
                                                <img src={skill} alt="IMAGE" />
                                            </span>
                                        )
                                    })}
                                </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
