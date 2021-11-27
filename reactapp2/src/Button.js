const buttonStyle = {
    padding: '5px 10px',
    margin: '5px',
    fontSize: '20px',
    background: 'linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(to right, darkblue, darkorchid) border-box',
    borderRadius: '50em',
    border: '4px solid transparent',
    color: '#323639',
    minWidth: '40px'
}
function Button({ onClick, content }) {
    return (
        <button style={ buttonStyle } onClick={ onClick }>{ content }</button>
    )
}

export default Button;