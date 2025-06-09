import { Container } from "@mui/material"

function Content({ children }) {

    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {children}
        </Container>
    )

}

export default Content