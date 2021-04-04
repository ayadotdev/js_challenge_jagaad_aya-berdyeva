import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingContext from '../context/shopping-context';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
});


const ProductCard = ({ product }) => {

    const classes = useStyles();
    const shoppingContext = useContext(ShoppingContext);
    const [addedToShoppingBag, setAddedToShoppingBag] = useState(false);
    const [addedToFavorites, setAddedToFavorites] = useState(false);

    const addToShoppingBag = (price) => {
        setAddedToShoppingBag(true);
        shoppingContext.addToShoppingBag(price);
    }

    const addToFavorites = () => {
        setAddedToFavorites(true);
        shoppingContext.addToFavorites();
    }

    return (    
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={product.cover_image_url}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h4">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.retail_price.formatted_value}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {addedToShoppingBag ? 
                            <Button disabled>
                                Added
                            </Button> : 
                            <Button variant="contained" size="small" color="secondary" onClick={() => addToShoppingBag(product.retail_price.value)}>
                                Add to shopping bag
                            </Button>} 

                    {addedToFavorites ? 
                            <Button disabled>
                                Added
                            </Button> :
                            <Button size="small" color="primary" onClick={addToFavorites}>
                                Add to favorites
                            </Button>
                            }      
                    
                </CardActions>
            </Card>
           );
}

export default ProductCard;