import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Logo from './love_swipe_logo.png';
import { makeStyles, IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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

const Header = ({ backButton }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.header}>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize='large' className={classes.icon}/>
                </IconButton>
            ):(
                <Link to='/profile'>
                    <IconButton>
                        <PersonIcon fontSize='large' className={classes.icon}/>
                    </IconButton>
                </Link>
                
                )}
            <Link to='/'>
                <IconButton>
                <img 
                    className='header__logo'
                    src={Logo} 
                    alt='love swipe logo' 
                />
                </IconButton>            
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <QuestionAnswerIcon className={classes.icon}/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;