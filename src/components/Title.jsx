import { Typography } from "@mui/material"

function Title({ text }) {

    return (
        <Typography variant="h1" component="h1" sx={{ fontSize: '3rem' }}>
            {text}
        </Typography>
    )

}

export default Title