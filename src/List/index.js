const words = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg'];

function List () {
  const result = words.filter(word => word.length >= 6);

  console.log(result);
  // return result
}

export default List;
