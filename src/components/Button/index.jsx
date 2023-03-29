import style from './Button.module.scss'

function Button({ name, style }) {
    return <button style={style}>{name}</button>
}

export default Button
