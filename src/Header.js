import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Logo from './love_swipe_logo.png';
import { makeStyles, IconButton } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    icon: {
      fontSize: '80px'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #f9f9f9',
        padding: '15px',
        alignItems: 'center'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <IconButton>
                <PersonIcon className={classes.icon}/>
            </IconButton>
            <img 
                className='header__logo'
                src={Logo} 
                alt='love swipe logo' 
            />
            <IconButton>
                <QuestionAnswerIcon className={classes.icon}/>
            </IconButton>
        </div>
    )
}

export default Header;