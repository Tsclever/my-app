import Structure from "../Structure";

function Output(){
  return(
    <>
      <Structure 
        size={200}
        people={{
          name:"a",
          imageId:"11"
        }}
      />
        <Structure 
        size={150}
        people={{
          name:"b",
          imageId:"22"
        }}
      />
        <Structure 
        people={{
          name:"c",
          imageId:"33"
        }}
      />
    </>
  )
}

export default Output