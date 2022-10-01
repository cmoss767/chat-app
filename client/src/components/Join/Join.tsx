import {Box, Typography, Link, TextField, Button} from '@mui/material'
import React, {useState} from 'react'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return(
        <Box>
            <Box>
                <Typography>Join</Typography>
            </Box>
            <Box>
                <Button>Sign In</Button>
            </Box>
        </Box>
    )
}

export default Join