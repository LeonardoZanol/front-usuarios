import { Box, Paper } from "@mui/material"
import UserInfo from "./UserInfo"

function UserCard({ user }) {

    console.log(user)

    return (
        <Paper elevation={3} sx={{ width: "50%", borderRadius: "20px", display: "flex", flexDirection: "column", gap: 5, padding: 10 }}>
            <Box sx={{ width: "100%" }}>
                <UserInfo label="Nome" value={user.nome} />
                <UserInfo label="Sobrenome" value={user.sobrenome} />
                <UserInfo label="E-Mail" value={user.email} />
                <UserInfo label="Endereço" value={user.enrereco} />
            </Box>
        </Paper>
    )

}

export default UserCard