import { Typography } from '@mui/material'
import React, { useEffect, useHistory } from 'react'
import jwt from 'jsonwebtoken'

const Dashboard = () => {

    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            // console.log(user)
            if(!user){
                localStorage.removeItem('token')
                // windows.location.href = '/'
                history.replace('/signin')
            }
        }
    }, [])

    return (
        <>
            <Typography>Hello World</Typography>
        </>
    )
}

export default Dashboard