import React from 'react'
import Chat from './Chat'

const ChatContainer = ()=> {
    return (
        <div className='chats'>
            <Chat 
                name='The Rock'
                message='You cute!'
                timestamp='5 min ago'
                profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UvIZoDiDuzYGW7PyNRzdVsm2Y8IUL8-cbzw7K4CMtj38FKE&s'
            />
            <Chat 
                name='Ellen'
                message='How you doing ?'
                timestamp='12 min ago'
                profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/220px-Ellen_DeGeneres_2011.jpg'
            />
            <Chat 
                name='Lebron James'
                message='Hey there!'
                timestamp='17 min ago'
                profilePic='https://www.gstatic.com/tv/thumb/persons/287557/287557_v9_ba.jpg'
            />
            <Chat 
                name='Dora the Explorer'
                message='Hola!'
                timestamp='33 min ago'
                profilePic='https://images.nickjr.com/nickjr/properties/dora-the-explorer/dora-the-explorer-1x1.jpg'
            />
        </div>
    )
}

export default ChatContainer
