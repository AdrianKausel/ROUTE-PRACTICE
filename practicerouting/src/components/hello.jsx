import React from "react";
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Hello = () => {
    return(
        <Container>
            <h1> The Word is: Hello</h1>
            <div>
                <Link to="/4"> Click to go page 4! </Link>
            </div>
            <div>
                <Link to="/hello/blue/red"> Click to go other message! </Link>
            </div>
        </Container>



    )
}

export default Hello;