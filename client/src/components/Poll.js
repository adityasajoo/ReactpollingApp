import {Card,CardContent,Button,Typography,makeStyles} from '@material-ui/core';
import {useState} from 'react';
import AddPoll from './AddPoll';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#ddc8ceb7"
  },
  btns:{
      display:"flex",
      flexWrap:"no-wrap",
      justifyContent:"center"
  },

  btn:{
    backgroundColor:"#78244c"
  }
  
});


function Poll({addPoll}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () =>setOpen(false);
   
    return (
      <div className="card-container">
          <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" align="center" gutterBottom>
                    Polling Station
                </Typography>
                {!open &&  
                    <div className={classes.btns}>
                        <Button variant="contained" color="secondary" className={classes.btn} onClick={handleOpen}>
                            Poll
                        </Button>                    
                    </div>
                }
                {open && <AddPoll handleClose={handleClose} addPoll= {addPoll} />}
                
            </CardContent>
      </Card>
      </div>
    );
}

export default Poll
