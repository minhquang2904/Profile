import { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { HomeOutlined, MessageOutlined, UserOutlined, ContainerOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import style from './Navigation.module.scss'
function Navigation() {
    // useLayoutEffect(() => {
    //     const linkActive = document.querySelectorAll('.linkActive')
    //     const line = document.createElement('div')
    //     line.className = style.activeBg
    //     document.body.appendChild(line)

    //     for (let i = 0; i < linkActive.length; i++) {
    //         linkActive[i].addEventListener('click', (e) => {
    //             const elm = e.target
    //             const elmRect = elm.getBoundingClientRect()
    //             const { width, left, height, top } = elmRect
    //             line.style.left = `${left}px`
    //             line.style.top = `${top}px`
    //             line.style.width = `${width}px`
    //             line.style.height = `${height}px`
    //         })
    //     }
    // }, [])
    const navActive = (isActive) => {
        const activeLink = isActive ? style.activeBg : ''
        return clsx(style.link, activeLink)
    }
    return (
        <nav className={style.nav}>
            <div className={style.blur}></div>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => navActive(isActive)}>
                        {({ isActive }) =>
                            isActive ? (
                                <HomeOutlined className={clsx(style.icon, style.activeIcon)} />
                            ) : (
                                <HomeOutlined className={style.icon} />
                            )
                        }
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => navActive(isActive)}>
                        {({ isActive }) =>
                            isActive ? (
                                <UserOutlined className={clsx(style.icon, style.activeIcon)} />
                            ) : (
                                <UserOutlined className={style.icon} />
                            )
                        }
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => navActive(isActive)}>
                        {({ isActive }) =>
                            isActive ? (
                                <ContainerOutlined className={clsx(style.icon, style.activeIcon)} />
                            ) : (
                                <ContainerOutlined className={style.icon} />
                            )
                        }
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact" className={({ isActive }) => navActive(isActive)}>
                        {({ isActive }) =>
                            isActive ? (
                                <MessageOutlined className={clsx(style.icon, style.activeIcon)} />
                            ) : (
                                <MessageOutlined className={style.icon} />
                            )
                        }
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
