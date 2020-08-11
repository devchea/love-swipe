import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { makeStyles, IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    swipeButtons: {
        position: 'fixed',
        display: 'flex',
        bottom: '10vh',
        width: '100%',
        justifyContent: 'space-evenly',
        repeat: {

        }        
    },
    
}));

const SwipeButtons = () => {
    const classes = useStyles();
    return (
        <div className={classes.swipeButtons}>
            <IconButton className={classes.swipeButtons.repeat}>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton className={classes.swipeButtons.left}>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className={classes.swipeButtons.star}>
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className={classes.swipeButtons.right}>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className={classes.swipeButtons.lightning}>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
