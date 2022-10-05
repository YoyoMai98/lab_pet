const Pet = ({pet}) => {

    return (
        <>
            <h4>{pet.name}</h4>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <button>Delete</button>
        </>
    )
}

export default Pet