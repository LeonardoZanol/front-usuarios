import { Container } from "@mui/material"
import Title from "../components/Title"
import ListUsers from "../components/ListUsers"

function Usuarios() {

    return (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Title text="Usuários" />

        </Container>
    )

}

export default Usuarios