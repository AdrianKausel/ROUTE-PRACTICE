import React from "react";
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = () => {

    return(
        <Container>
            <h1> Welcome!</h1>
            <div>
                <Link to="/4"> Click to go page 4! </Link>
            </div>
            <div>
                <Link to="/hello"> Click to go message! </Link>
            </div>
            


        </Container>

    )
}

export default Home;