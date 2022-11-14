import './ToolBar.css';

function ToolBar() {
  return(
    <div
      className = "Toll-Bar"
      onClickCapture={() => {
        alert('外围')
      }}
    >
      <span 
        className = "btn"
        onClick={() => alert('左')}
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