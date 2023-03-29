import { Link } from 'react-router-dom'
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
        </div>
    )
}

export default Home
