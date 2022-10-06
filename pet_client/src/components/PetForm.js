import { useState } from "react"

const PetForm = ({onSubmit}) => {

    const [newPet, setNewPet] = useState({
        name: "",
        type: "",
        breed: "",
        age: 0
    })

    const handleChange = event => {
        const propertyName = event.target.name
        const updatedPet = {...newPet}
        updatedPet[propertyName] = event.target.value
        setNewPet(updatedPet)
    }

    const handleSubmit = event => {
        event.preventDefault()
        onSubmit(newPet)
        setNewPet({
            name: "",
            type: "",
            breed: "",
            age: 0
        })
    }

    return (
        <>
            <h3>Add a new pet</h3>
            <form onSubmit={handleSubmit} className="pet-form">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="pet name"
                    value={newPet.name}
                    onChange={handleChange}
                />
                <label htmlFor="Type">Type:</label>
                <input
                    id="type"
                    type="text"
                    name="type"
                    placeholder="pet type"
                    value={newPet.type}
                    onChange={handleChange}
                />
                <label htmlFor="breed">Breed:</label>
                <input
                    id="breed"
                    type="text"
                    name="breed"
                    placeholder="pet breed"
                    value={newPet.breed}
                    onChange={handleChange}
                />
                <label htmlFor="age">Age:</label>
                <input
                    id="age"
                    type="number"
                    name="age"
                    placeholder="pet age"
                    value={newPet.age}
                    onChange={handleChange}
                />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default PetForm