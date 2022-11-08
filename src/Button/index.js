function Button({message, children}) {
    function hanleClick() {
      alert(message)
    }
      return(
        <button onClick={hanleClick}>
          {children}
        </button>
    )
}

export default Button;