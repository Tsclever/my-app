function Button() {
    function hanleClick() {
      alert("You clicked me!")
    }
      return(
        <button onClick={hanleClick}>
        Click me!
      </button>
    )
}

export default Button;