import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

function RecipeListItem(props) {
    const { t } = useTranslation();

    const handleOnClick = e => {
        props.history.push({
          pathname: `/recipes/${props.recipe.fields.slug}`,
          state: { recipe: props.recipe }
        });
    }

    const registerOnClick = e => {
        props.history.push({
          pathname: `/register/${props.recipe.fields.slug}`,
          state: { recipe: props.recipe }
        });
    }
    
    return(
        <div>
            { props.recipe ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={props.recipe.fields.image.fields.file.url}
                    title={props.recipe.fields.title}/>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h4">
                        {t(props.recipe.fields.title)}
                        </Typography>
                        <Typography component="p">
                            <b>{t('Instructor')}:</b> {props.recipe.fields.chef}
                        </Typography>
                        <br/>
                        <Typography component="p">
                            {t(props.recipe.fields.description)}
                        </Typography>
                    </CardContent>
                    <CardActions style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

                        <Button size="small" color="primary" onClick={handleOnClick} target="_blank">
                            {t('Go to Recipe')}
                        </Button>

                        <Button size="small" color="primary" onClick={registerOnClick} target="_blank">
                            {t('Register for Class')}
                        </Button>
                    </CardActions>
                </Card>
            ): null}
        </div>
    )
}

export default RecipeListItem;