import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Footer = () => {
    return(
        <div className="footer">
            <AppBar position="static">
                <Toolbar>
                    <div>Website designed by <b>Charita Koya</b></div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer;