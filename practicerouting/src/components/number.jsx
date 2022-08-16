import React from "react";
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const NumberX = () =>{
    return(
        <Container>
            <h1>The Number is 4!</h1>
            <div>
                <Link to="/hello/blue/red"> Click to go to other message! </Link>
            </div>
            <div>
                <Link to="/hello"> Click to go to message! </Link>
            </div>
            


        </Container>

    )
}

export default NumberX;