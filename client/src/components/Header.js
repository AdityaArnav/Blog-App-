import React, { useState } from 'react';
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material"

const Header = () => {
    const [change,setChange] = useState();
    return (
        <AppBar position="sticky" sx={{ background: "linear-gradient(90deg, rgba(89,176,177,1) 0%, rgba(114,157,217,1) 34%, rgba(184,154,238,1) 79%)" }}>
            <Toolbar>
                <Typography variant="h5" >BLOG APP</Typography>
                <Box display="flex">
                    <Tabs value={change} /*onChange={(e,value)=>setChange(value)}*/ >
                        <Tab label="ALL BLOGS" onClick={()=>setChange(0)}/>
                        <Tab label="MY BLOGS" onClick={()=>setChange(1)}/>
                    </Tabs>
                </Box>
                <Box display="flex" marginLeft="auto">
                    <Button variant="contained" sx={{ margin: 1, borderRadius: 7 }} color="warning">Login</Button>
                    <Button variant='contained' sx={{ margin: 1, borderRadius: 7 }} color="warning">Signup</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header