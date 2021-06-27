import React, {Component} from 'react';
import RecipeList from './RecipeList';

class Register extends Component {
    render() {
        return(
            <div>
                <h1 style={{textAlign: "center", marginTop: '50px'}}>Step 1: Select a class</h1>
                <RecipeList {...this.props}/>
            </div>
        )
    }
}

export default Register;