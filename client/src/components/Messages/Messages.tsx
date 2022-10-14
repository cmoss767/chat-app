import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

export interface MessagesProps {
    name: string
    message : string
}

const Messages = ({name, message} : MessagesProps )=>{

    let isSentByCurrentUser = false
    const trimmedName = name.trim().toLowerCase()

    if(true){
        isSentByCurrentUser = true
    }
return(
    <ScrollToBottom>
        
    </ScrollToBottom>
)
}

export default Messages