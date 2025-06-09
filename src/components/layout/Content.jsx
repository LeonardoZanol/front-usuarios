import { Container } from "@mui/material"

function Content({ children }) {

    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 5 }}>
            {children}
        </Container>
    )

}

export default Content