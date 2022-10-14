import {Box} from "@mui/material"

export interface InfoBarProps {
    room: string
}

const InfoBar = ({room} : InfoBarProps ) => {

    return(
       <div>
        <h3>{room}</h3>
       </div>
    )

}

export default InfoBar