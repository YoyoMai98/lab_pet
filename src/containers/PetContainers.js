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

    useEffect(() => {
        fetchPets()
    }, [])

    return (
        <>
            <h2>PetContainer</h2>
            <PetForm />
            <PetList pets={pets} />
        </>
    )
}

export default PetContainer