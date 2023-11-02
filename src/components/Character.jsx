const Character = ({ characters }) => {
  return (
    <>
      {characters.map((character) => (
        <div key={character.id} className="border   flex justify-center items-center  shadow-md ">
          <div className="w-[150px] h-[150px] overflow-hidden ">
            <img className="w-full h-full object-cover " src={character.image} alt="" />
          </div>
          <div className="w-full bg-[#97ce4c] h-full p-2">
            <h5><strong>{character.name}</strong></h5>
            <hr  className="m-2"/>
            <p>Locacion: {character.location.name}</p>
            <p>Epecie: {character.species}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Character;
