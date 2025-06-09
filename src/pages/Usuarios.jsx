import { Container } from "@mui/material"
import Title from "../components/Title"
import ListUsers from "../components/ListUsers"
import { useEffect, useState } from "react"

function Usuarios() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function fetchUsers() {
            try {
                const response = await fetch("http://localhost:3000/usuarios")
                const listUsers = await response.json()

                setUsers(listUsers)
            
            } catch (error) {
                console.log(error)
            }
        }

        fetchUsers()

    }, [])

    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Title text="Lista de Usuários" />

            <ListUsers users={users} />

        </Container>
    )

}

export default Usuarios