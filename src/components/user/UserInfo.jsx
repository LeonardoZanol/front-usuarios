import { Box, Typography } from "@mui/material"

function UserInfo({ label, value }) {

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontWeight: "bold" }}>{label}</Typography>
            <Typography>{value}</Typography>
        </Box>
    )

}

export default UserInfo