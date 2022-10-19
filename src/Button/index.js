function Button({ onWhatEver, children }) {
  return (
    <button onClick={onWhatEver}>
      {children}
    </button>
  );
}

export default Button;