import queryString from 'query-string'
import io from 'socket.io-client'
import {useState, useEffect} from 'react'

const Chat = ()=>{
const [name, setName] = useState('')
const [room, setRoom] = useState('')
const [users, setUsers] = useState('')
const [message, setMessage] = useState('')
const [messages, setMessages] = useState('')
}

export default Chat