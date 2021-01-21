import {AppBar,Typography} from '@material-ui/core';

function Nav() {
    return (
        <>
            <AppBar position="static" style={{backgroundColor: "#59253A", padding:"15px" }}>
                <Typography variant="h4" align="center" >
                    Polling App
                </Typography>
            </AppBar>            
            
        </>
    )
}


export default Nav;

