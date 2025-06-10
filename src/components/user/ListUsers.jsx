import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useNavigate } from "react-router-dom"

function ListUsers({ users }) {

    const navigate = useNavigate()

    function changeRoute(id) {
        navigate(`/dados/${id}`)
    }

    return (

        <Paper elevation={3} sx={{ width: "700px"}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>E-Mail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                    <TableRow key={user.id} hover sx={{ cursor: "pointer" }} onClick={() => changeRoute(user.id)}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.nome}</TableCell>
                        <TableCell>{user.email}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>

    )

}

export default ListUsers