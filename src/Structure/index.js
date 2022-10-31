import imgSrc from '../Img/11.jpg'
// import '../Img'

function Structure({size = 100, people}){

  // function getImageUrl(imageId){
  //   return(
  //     '../Img/' + imageId + '.jpg'
  //   )
  // }

  return(
    <img 
      className="Structure"
      src={imgSrc}
      alt={people.name}
      width={size}
    />
  );
}

export default Structure