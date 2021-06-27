import React from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class PageNotFound extends React.Component{
    render(){
        return (
          <div id="notfound">
          <div class="notfound">
            <div class="notfound-404">
              <Typography variant="h2">Oops!</Typography>
            </div>
            <Typography variant="h2">404 - Page not found</Typography>
            <br/>
            <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
            <Button className="homepageBtn" size="medium" color="primary" href="/" target="_blank">
              Go to Homepage
            </Button>
          </div>
        </div>
        )
    }
}

export default PageNotFound;
