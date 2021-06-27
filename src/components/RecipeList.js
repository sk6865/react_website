import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
import RecipeListItem from '../components/RecipeListItem';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const SPACE_ID = 'fb7egqp4t5o4';
const ACCESS_TOKEN = 'gTzwtGt5x7av4xXQZQSYo11eWMR166TQwzMSpPE0bVc';

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});

class RecipeList extends Component {
    state = {
        recipes: [],
        searchString: ''
    }

    constructor(props) {
        super(props);
        this.getRecipes();
    }

    getRecipes = () => {
        client.getEntries({
            content_type: 'recipe',
            query: this.state.searchString
        })
        .then((response => {
            this.setState({recipes: response.items})
        }))
        .catch((error) => {
            console.log("Error occurred fetching data");
            console.log(error)
        })
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''});
        }
        this.getRecipes();
    }

    render() {
        return (
            <div>
                {this.state.recipes ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Recipes"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            InputProps ={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <Search/>
                                    </InputAdornment>
                                )
                            }}
                        />
                                   
                        <Grid container spacing={5} style={{padding: 24}}>
                            {this.state.recipes.map(currentRecipe => (
                                <Grid item xs={12} sm={4} lg={4} xl={3}>
                                    <RecipeListItem {...this.props} recipe={currentRecipe} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No recipes available."}
            </div>
        )
    }
}

export default RecipeList;