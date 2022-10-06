import Pet from "./Pet"

const PetList = ({pets}) => {

    const petComponent = pets.map(pet => {
        return <Pet pet={pet} key={pet.id} />
    })
    return (
        <>
            {petComponent}
        </>
    )
}

export default PetList