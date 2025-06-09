import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Title from "../components/layout/Title"

function Dados() {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {

        async function fetchUser() {
            try {
                const response = await fetch(`http://localhost:3000/dados/${id}`)
                const userDatas = await response.json()

                setUser(userDatas)
            
            } catch (error) {
                console.log(error)
            }
        }

        fetchUser()

    }, [id])

    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Title text="Dados Usuário" />

        </Container>
    )

}

export default Dados