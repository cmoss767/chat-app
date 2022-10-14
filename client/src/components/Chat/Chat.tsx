import queryString from 'query-string'
import io from 'socket.io-client'
import React, {useState, useEffect} from 'react'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from "../Messages/Messages"


let socket: any
const Chat = ()=>{
const [name, setName] = useState('')
const [room, setRoom] = useState('')
const [users, setUsers] = useState('')
const [message, setMessage] = useState('')
const [messages, setMessages] = useState([])

const sendMessage = (event: any) => {
    event.preventDefault()

    if(message){
        socket.emit('SendMessage', message, ()=> setMessage(''))
    }
}

return(
    <div>
    <InfoBar room={room}/>
    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
    <Messages name={name} message={message}/>
    </div>
)
}

export default Chat