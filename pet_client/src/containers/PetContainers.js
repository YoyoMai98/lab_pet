import { useEffect, useState } from "react"
import PetForm from "../components/PetForm"
import PetList from "../components/PetList"

const PetContainer = () => {

    const [pets, setPets] = useState([])

    const fetchPets = async () => {
        const response = await fetch("http://localhost:8080/pets")
        const data = await response.json()
        setPets(data)
    }

    const postPet = async (newPet) => {
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPet)
        })
        const savedPet = await response.json()
        setPets([...pets, savedPet])
    }

    // const deletePet = async (newPet) => {
    //     const response = await fetch("http://localhost:8080/pets", {
    //         method: "Delete"
    //     })
    //     const savedPet = await response.json()
    //     setPets([...pets, savedPet])
    // }

    useEffect(() => {
        fetchPets()
    }, [])

    return (
        <>
            <PetForm onSubmit={postPet} />
            <hr />
            <PetList pets={pets} />
        </>
    )
}

export default PetContainer