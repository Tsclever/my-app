// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }

function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://img0.baidu.com/it/u=1475201105,595151532&fm=253&fmt=auto&app=138&f=JPEG?w=625&h=419.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
      />

      {/* <h1>To Do List for {formatDate(13)}</h1> */}
      <h1>To Do List for {
        new Intl.DateTimeFormat(
          'en-US',
          { weekday: 'long' }
        ).format(new Date())}
      </h1>
      <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
      </ul>

    </>
  )
}

export default TodoList;