import './ToolBar.css';

function ToolBar() {
  function onClick(e) {
    e.stopPropagation();
    alert('左')
  }

  return(
    <div
      className = "Toll-Bar"
      onClick={() => {
        alert('外围')
      }}
    >
      <span 
        className = "btn"
        onClick={onClick}
      >
        左
      </span>
      <span 
        className = "btn"
        onClick={() => alert('右')}
      >
        右
      </span>
    </div>
  )
}

export default ToolBar;