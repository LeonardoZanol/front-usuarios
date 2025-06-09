import { Container } from "@mui/material"

import { useEffect, useState } from "react"
import Title from "../components/layout/Title"
import ListUsers from "../components/user/ListUsers"
import Content from "../components/layout/Content"

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
        <Content>
            <Title text="Lista de Usuários" />

            {users.length != 0 ? (
                <ListUsers users={users} />
            ) : (
                <Title text="Usuários Não Encontrados!" />
            )}

        </Content>
    )

}

export default Usuarios