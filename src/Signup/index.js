function Signup() {
  return (
    <form onSubmit={() => alert('Submitting!')}>
      <input />
      <button onClick={e => e.preventDefault()}>Send</button>
    </form>
  );
}

export default Signup;

// 修改完毕后，再怎么去点击页面中的 button，也不会触发 onSubmit 里的代码了。最后请注意，不要混淆`e.stopPropagation()`和`e.preventDefault()`。它们被用来阻止不必要的代码触发，但并不相同：

// -  [`e.stopPropagation()`](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation) 停止触发附加到标签的 event handler。
// -  [`e.preventDefault()`](https://developer.mozilla.org/docs/Web/API/Event/preventDefault) 阻止只有少数标签拥有的默认的浏览器事件。