import { Button, Container } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Title from "../components/layout/Title"
import Content from "../components/layout/Content"
import UserCard from "../components/user/UserCard"

function Dados() {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    const navigation = useNavigate()

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
        <Content>
            <Title text="Dados Usuário" />

            {user ? (
                <UserCard user={user} />
            ) : (
                <Title text="Usuário Não Econtrado!" />
            )}

            <Button variant="contained" color="primary" onClick={() => navigation('/usuarios')}>Retornar</Button>

        </Content>
    )

}

export default Dados