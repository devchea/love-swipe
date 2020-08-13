import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    chat: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(3),
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid #ededed',
        TextDecoration: 'none'
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    chatDetails: {
        justifyContent:'space-between',
        flex: '1'
    },
    message:{
        color: '#696969'
    },
    timestamp: {
        color: '#a8a8a8'
    }
}));


const Chat = ({ name, message, profilePic, timestamp})=> {
    const classes = useStyles();
    return (
        <Link to={`/chat/${name}`} style={
            {
                textDecoration: 'none',
                color: 'inherit'
            }
            }>
            <div className={classes.chat}>
                <Avatar className={classes.large} alt={name} src={profilePic}/>
                <div className={classes.chatDetails}>
                    <h2>{name}</h2>
                    <p className={classes.message}>{message}</p>
                </div>
                <p className={classes.timestamp}>{timestamp}</p>
            </div>
        </Link>
    )
};

export default Chat
