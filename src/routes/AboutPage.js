import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const AboutPage = () => {
return (

    <React.Fragment >
        <Typography component="div">
            <Box sx={{ textAlign: 'center', m: 10 }} bgcolor="action.main">
                <h1>About</h1>
                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
            </Box>
        </Typography>
    </React.Fragment>
)
}

export default AboutPage;