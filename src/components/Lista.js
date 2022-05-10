function Lista ({ meuArray }) {
  return(
    <>
      <h3>Listra de Frameworks</h3>
      {
        meuArray.map((item, index) => 
          <p key={index}>{item}</p>
        )
      }
    </>
  )

}

export default Lista