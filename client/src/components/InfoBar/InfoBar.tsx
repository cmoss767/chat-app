import {Box} from "@mui/material"
import { Dispatch, SetStateAction } from "react"

export interface InfoBarProps{
    setMessage: Dispatch<SetStateAction< string>>
    message: string
    sendMessage: any
    
} 


const InfoBar = ({setMessage, sendMessage, message} : InfoBarProps) => {

    return(
        <Box>
           <form>
            <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange = {({target:{value}}) => setMessage(value)}
            >
                
            
            </input>
            <button onClick={e =>sendMessage(e)}>Send</button>
           </form>

            
        </Box>
    )

}

export default InfoBar