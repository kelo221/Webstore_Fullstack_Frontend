import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from '../components/CheckOutElements/AddressForm';
import PaymentForm from '../components/CheckOutElements/PaymentForm';
import Review from '../components/CheckOutElements/Review';
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {useSnapshot} from "valtio";
import Store from "../components/Store/Store";
import Grid from "@mui/material/Grid";
import requests from "../components/services/requests";
import {logDOM} from "@testing-library/react";

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm/>;
        case 1:
            return <PaymentForm/>;
        case 2:
            return <Review/>;
        default:
            throw new Error('Unknown step');
    }
}


const CheckOutPage = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const navigate = useNavigate()

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const navToMain = () => {
        navigate("/")
    };

    const snap = useSnapshot(Store)

    if (activeStep === steps.length && Store.shoppingCart.OrderItem.length !==0) {
        const ProxyConverted = JSON.parse(JSON.stringify(snap.shoppingCart))
        requests.SendOrder(ProxyConverted).then(r => console.log(r))
        Store.shoppingCart.OrderItem.length = 0
    }

    return (

        <Container component="main" maxWidth="sm" sx={{mb: 4}}>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                <Typography component="h1" variant="h4" align="center">
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order has been sent!
                                You may see the status of your order on your profile if you were logged in.
                            </Typography>

                            <Typography align='center'>
                                <Button variant="outlined" onClick={navToMain} sx={{mt: 3, ml: 1}}>Return</Button>
                            </Typography>



                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>

                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>
                                        Back
                                    </Button>
                                )}

                                {activeStep === 0 && (
                                    <Button onClick={navToMain} sx={{mt: 3, ml: 1}}>
                                        Cancel
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{mt: 3, ml: 1}}
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </React.Fragment>
            </Paper>
        </Container>
    );
};

export default CheckOutPage;