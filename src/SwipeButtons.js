import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { makeStyles, IconButton } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    swipeButtons: {
        position: 'absolute',
        display: 'flex',
        bottom: '10vh',
        width: '100%',
        justifyContent: 'space-evenly',
        '& .MuiIconButton-root': {
            backgroundColor: 'white',
            boxShadow: '0px 10px 53px rgba(0,0,0,0.3)'
        }      
    },
    swipeButtons_repeat:{
        padding: '2vh',
        color: '#f5b748'
    },
    swipeButtons_left:{
        padding: '2vh',
        color: '#ec5e6f'
    },
    swipeButtons_right:{
        padding: '2vh',
        color: '#62b4f9'
    },
    swipeButtons_star:{
        padding: '2vh',
        color: '#76e2b3'
    },
    swipeButtons_lightning:{
        padding: '2vh',
        color: '#915dd1'
    }


}));

const SwipeButtons = () => {
    const classes = useStyles();
    return (
        <div className={classes.swipeButtons}>
            <IconButton className={classes.swipeButtons_repeat}>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton className={classes.swipeButtons_left}>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className={classes.swipeButtons_star}>
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className={classes.swipeButtons_right}>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className={classes.swipeButtons_lightning}>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
