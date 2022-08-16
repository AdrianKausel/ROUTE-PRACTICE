import React from "react";
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const HelloBlueRed = () => {
    return (
        <Container>
            <h1 className="theBlueRed" > The Word is: Hello</h1>
            <Link to="/4"> Click to go back! </Link>
        </Container>
    )
}

export default HelloBlueRed;