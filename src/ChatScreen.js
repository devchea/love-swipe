import React, { useState } from 'react'
import { makeStyles, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    chatScreen: {
        '& > p':{
            textAlign: 'center',
            padding: '20px',
            color: 'gray'
        }
    },
    chatScreenMessage: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    },
    chatScreenText: {
        marginLeft: '10px',
        backgroundColor: 'lightgray',
        padding: '15px',
        borderRadius: '20px'
    },
    chatScreenMessageUser: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    },
    chatScreenTextUser: {
        marginLeft: 'auto',
        backgroundColor: '#29b3cd',
        padding: '15px',
        borderRadius: '20px',
        color: 'white'
    },
    chatScreenInput: {
        display: 'flex',
        padding: '5px',
        position: 'fixed',
        bottom: '0px',
        width: '100%',
        borderTop: '1px solid lightgray'
    },
    chatScreenInputField: {
        flex: '1',
        padding: '10px',
        border: 'none',
        outlineWidth: '0'

    },
    chatScreenInputButton: {
        border: 'none',
        marginRight: '20px',
        backgroundColor: 'white',
        fontWeight: 'bolder',
        color: '#fe3d71',
        outlineWidth: '0'

    }
}))

const ChatScreen = ()=> {
    const classes = useStyles();
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/220px-Ellen_DeGeneres_2011.jpg',
            message: 'Hello cutie!'
        },
        {
            name: 'Ellen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/220px-Ellen_DeGeneres_2011.jpg',
            message: 'Any plans for today?'
        },
        {
            image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
            message: 'Hi! No plans today. Want to do dinner?'
        }
    ])

    const handleSend = (e)=> {
        e.preventDefault();
        console.log()
        setMessages([...messages, { message: input}]);
        setInput("");
    }
    return (
        <div className={classes.chatScreen}>
            <p>Matched!</p>
            {messages.map(message => (
                //not my messages then show avatar, my messages don't show avatar
                message.name ? (
                <div className={classes.chatScreenMessage}>
                    <Avatar
                        className={classes.chatScreenImage}
                        alt={message.name}
                        src={message.image}
                    />
                    <p className={classes.chatScreenText}>{message.message}</p>
                </div>

                ) : (
                    <div className={classes.chatScreenMessageUser}>
                    <p className={classes.chatScreenTextUser}>{message.message}</p>
                    </div>
                )
            ))}
            <div >
                <form className={classes.chatScreenInput}>
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className={classes.chatScreenInputField}
                    type='text'
                    placeholder='Send a message...'
                    />
                    <button 
                        className={classes.chatScreenInputButton}
                        type='submit'
                        onClick={handleSend}
                        >SEND</button>
                </form>
            </div>
        </div>
        
    )
};

export default ChatScreen
