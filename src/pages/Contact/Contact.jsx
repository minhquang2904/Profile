import { useEffect, useState, useRef } from 'react'
import validator from 'validator'
import style from './Contact.module.scss'
import { TbMapPin } from 'react-icons/tb'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsTelephone, BsGithub } from 'react-icons/bs'
import AnimatedPage from '../../components/Animated'
import Button from '../../components/Button'
import clsx from 'clsx'
import emailjs from '@emailjs/browser'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    let isValid = true
    const nameRef = useRef()
    const form = useRef()

    useEffect(() => {
        const errorMessage = document.querySelector(`.${style.error}`)
        if (error) {
            errorMessage.innerText = error
            errorMessage.style.padding = '14px 16px'
        } else {
            errorMessage.innerText = ''
            errorMessage.style.padding = '0'
        }
    }, [error])

    function modalSuccess() {
        const modal = document.querySelector(`.${style.notificationMessage}`)
        const el = document.createElement('div')
        el.className = style.message
        const html = '<strong>Success</strong> ! Thank you for sending me a message'

        el.innerHTML = html
        modal.appendChild(el)
        setTimeout(() => {
            el.remove()
        }, 4000)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (
            validator.isEmpty(name) ||
            validator.isEmpty(email) ||
            validator.isEmpty(subject) ||
            validator.isEmpty(message)
        ) {
            setError('You have not entered enough information')
            isValid = false
        } else if (!validator.isEmail(email)) {
            setError('Email invalidate')
            isValid = false
        } else {
            isValid = true
        }

        if (isValid) {
            emailjs.sendForm('service_oeyrwp5', 'template_eiab8lb', form.current, 'YDyWQfXInBqjF3pyD').then(
                (result) => {
                    if (result.text == 'OK') {
                        setError('')
                        setName('')
                        setEmail('')
                        setMessage('')
                        setSubject('')
                        nameRef.current.focus()
                        modalSuccess()
                    }
                },
                (error) => {
                    console.log(error.text)
                },
            )
        }
    }

    return (
        <AnimatedPage>
            <div className={style.contact}>
                <div className={clsx(style.container, style.fadeInUp)}>
                    <header className={style.header}>
                        <div className={clsx(style.headerTitle)}>
                            <span>Contact </span>
                            <span>ME</span>
                        </div>
                    </header>
                    <div className={style.content}>
                        <div className={style.contentHeaderLeft}>
                            <div className={style.contentItems}>
                                <div className={style.contentItem}>
                                    <div>
                                        <TbMapPin className={style.contentItemIcon} />
                                    </div>
                                    <div className={style.contentItemTitle}>
                                        <h3>ADDRESS</h3>
                                        <p>TP.HCM, VIET NAM</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.contentItems}>
                                <div className={style.contentItem}>
                                    <div>
                                        <MdOutlineMailOutline className={style.contentItemIcon} />
                                    </div>
                                    <div className={style.contentItemTitle}>
                                        <h3>EMAIL</h3>
                                        <a href="mailto:lmquang2904@gmail.com">lmquang2904@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className={style.contentItems}>
                                <div className={style.contentItem}>
                                    <div>
                                        <BsTelephone className={style.contentItemIcon} />
                                    </div>
                                    <div className={style.contentItemTitle}>
                                        <h3>Phone</h3>
                                        <p>0906124606</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.contentItems}>
                                <div className={style.contentItem}>
                                    <div>
                                        <BsGithub className={style.contentItemIcon} />
                                    </div>
                                    <div className={style.contentItemTitle}>
                                        <h3>Github</h3>
                                        <a href="https://github.com/minhquang2904">github.com/minhquang2904</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.contentHeaderRight}>
                            <form ref={form}>
                                <div className={style.formGroup}>
                                    <input
                                        value={name}
                                        ref={nameRef}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className={style.formGroup}>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div className={style.formGroup}>
                                    <input
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Your subject"
                                    />
                                </div>
                                <div className={clsx(style.formGroup, style.textarea)}>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        type="text"
                                        name="message"
                                        id="message"
                                        placeholder="Your message"
                                    />
                                </div>
                                <Button
                                    style={{ marginTop: '8px' }}
                                    id="submit"
                                    name="Send message"
                                    onClick={handleSubmit}
                                />
                            </form>
                            <div className={style.error}></div>
                        </div>
                    </div>
                </div>
                <div className={style.notificationMessage}></div>
            </div>
        </AnimatedPage>
    )
}

export default Contact
