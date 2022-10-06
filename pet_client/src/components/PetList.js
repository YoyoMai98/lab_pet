import Pet from "./Pet"

const PetList = ({pets, onDelete}) => {

    const petComponent = pets.map(pet => {
        return <Pet pet={pet} key={pet.id} onDelete={onDelete} />
    })
    return (
        <>
            {petComponent}
        </>
    )
}

export default PetList