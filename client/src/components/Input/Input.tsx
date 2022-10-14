import { Dispatch, SetStateAction } from "react"

export interface InfoBarProps{
    setMessage: Dispatch<SetStateAction< string>>
    message: string
    sendMessage: any
    
} 
const Input = ({setMessage, sendMessage, message} : InfoBarProps) =>{
    return(
        <form>
            <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={({target: {value}}) => setMessage(value)}
            >
            </input>
            <button onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input 