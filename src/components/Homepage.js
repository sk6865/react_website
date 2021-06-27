import React from 'react';
// Import context and provider
import picture from '../img/cooking.jpg';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const Homepage = () => {
    
    return (
        <div>
        <div className="homepageImg">
            <img src={picture} alt="Food"/>
            <div className="imgText centered">
                <Typography variant="h2" className="homepageTitle">AllStar Cooking</Typography>
                <div className="homeBtns">
                    <Button className="homepageBtn" size="medium" color="primary" href="/register" target="_blank">
                        Register for classes
                    </Button>
                    <Button className="homepageBtn" size="medium" color="primary" href="/recipes" target="_blank">
                        View available recipes
                    </Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Homepage;