import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider'

class SingleRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {recipe: null}
    }

    generateWrittenInstr(recipe) {
        var instructions = []
        for (var i = 0; i < recipe.instructions.content[0].content.length; i++) {
            instructions.push(<li>{recipe.instructions.content[0].content[i].content[0].content[0].value}</li>)
        }
        return instructions;
    }

    generateIngredients(recipe) {
        var ingredients = []
        for (var i = 0; i < recipe.ingredients.content[0].content.length; i++) {
            ingredients.push(<li>{recipe.ingredients.content[0].content[i].content[0].content[0].value}</li>)
        }
        return ingredients;
    }

    render() {
        const recipe = this.props.history.location.state.recipe.fields

        return (
            <div>
                <h1>{recipe.title}</h1>
                <h3>Video Instructions</h3>
                <video id="background-video" loop controls autoPlay>
                    <source src={recipe.video.fields.file.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Divider/>
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ol>{recipe.ingredients}</ol>
                    {/* <ol>{this.generateIngredients(recipe)}</ol> */}
                </div>
                <Divider/>
                <div className="writtenInstr">
                    <h3>Written Instructions</h3>
                    <ol>{this.generateWrittenInstr(recipe)}</ol>
                </div>
            </div>
        )
    }

}

export default SingleRecipe;

