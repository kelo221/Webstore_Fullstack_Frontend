import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const missingHandler = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        navigate("/")
    }, [navigate]);

    return null
}

export default missingHandler;