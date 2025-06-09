import { ListItem, ListItemText, Paper } from "@mui/material"

function ListUsers({ users }) {

    return (

        <Paper elevation={3}>
            <List>
                {users.map((user) => (
                    <ListItem key={user.id}>
                        <ListItemText primary={user.nome} secondary={user.email} />
                    </ListItem>
                ))}
            </List>
        </Paper>

    )

}

export default ListUsers