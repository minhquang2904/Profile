import style from './Button.module.scss'

function Button({ name, style, id, onClick }) {
    return (
        <button style={style} id={id} onClick={onClick}>
            {name}
        </button>
    )
}

export default Button
