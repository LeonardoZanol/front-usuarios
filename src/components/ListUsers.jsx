import { colors, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

function ListUsers({ users }) {

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
                    <TableRow>
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