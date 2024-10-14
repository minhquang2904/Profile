import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomeOutlined, MessageOutlined, UserOutlined, ContainerOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import style from './Navigation.module.scss'
function Navigation() {
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

export default React.memo(Navigation)
