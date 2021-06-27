import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import svg from '../img/allstar.png'
import LanguageSwitcher from './LanguageSwitcher'


const NavButton = withStyles({
    root: {
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      lineHeight: 1.5,
      color: 'white',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        boxShadow: 'none',
        textDecoration: 'underline',
        backgroundColor: 'none'
      },
      '&:active': {
        textDecoration: 'underline',
      }
    },
  })(Button);
  

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <NavButton className="navText" href="/">
                        <img src={svg} width="100px" alt="Go to homepage"/>
                    </NavButton>
                    <NavButton className="navText" href="/about">
                        About
                    </NavButton>
                    <NavButton className="navText" href="/register">
                        Register
                    </NavButton>
                    <NavButton className="navText" href="/recipes">
                        Recipes
                    </NavButton>
                    <NavButton className="navText" href="/contactUs">
                        Contact Us
                    </NavButton>
                  <LanguageSwitcher/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;