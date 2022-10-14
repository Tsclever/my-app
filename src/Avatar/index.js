function Avatar({ size = 100, person }) {

  function getImageUrl(imageId) {
    return (
      'https://img1.baidu.com/it/u=3699027210,3200120295&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300' 
      +
      imageId 
      +
      '.jpg'
    );
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={size}
    />
  );
}

export default Avatar
