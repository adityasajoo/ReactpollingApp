import {TextField,Button,MenuItem,Grid,InputLabel,makeStyles} from '@material-ui/core';
import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {useState} from 'react';

const useStyles = makeStyles({
    btns:{
        display:"flex",
        flexWrap:"no-wrap",
        justifyContent:"center",
        marginTop:"15px",
    },
  
    btn:{
      backgroundColor:"#78244c"
    },

    formcontrol:{
        marginBottom: "20px",
    }

    
  });
  
const choices = [
    {   id:1,
        value:true,
        label:"Yes"
    },
    {   id:2,
        value:false,
        label:"No"
    }
]  

function AddPoll({handleClose,addPoll}) {
    const classes = useStyles();

    //states
    const [choice, setChoice] = useState("");
    const [name, setName] = useState("");
    const [votingDate, setVotingDate] = useState("");

    /**
     * @description Runs when form submits
     * @param {Object} e 
     */
    const handleFormSubmit= (e)=>{
        e.preventDefault();     
        if(name === "" && choice ==="" && votingDate ==="") return handleClose();  
        if(name === "" || choice === "" || votingDate === "")return alert("Invalid Inputs");
        const date = new Date(votingDate.toString().slice(0,34)+" Z");       
        const reqDate = date.toISOString();
        addPoll({voter_name:name,voting_choice:choice,casted_at:reqDate.slice(0,10)});
        setChoice("");
        setName("");
        setVotingDate("");
        handleClose();
    }


    return (
        <div>
               <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                   <div style={{marginBottom:"20px"}}>
                     <TextField id="standard-basic" label="Name" fullWidth={true} onChange={(e)=> setName(e.target.value)} />
                   </div>
                    <TextField
                        id="choice"
                        select
                        label="Choice"
                        value={choice}
                        onChange={(e)=> setChoice(e.target.value)}
                        fullWidth = {true}
                        >
                        {choices.map((option) => (
                            <MenuItem key={option.id} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>

                   <div style={{marginTop:"20px"}}>

                    <InputLabel>Date</InputLabel>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        value={votingDate}
                                        onChange={(date)=> setVotingDate(date)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                      }}
                                    style= {{marginTop:"0px"}}
                                    />                      
                        </Grid>
                    </MuiPickersUtilsProvider>               
                   </div>                
                    <div className={classes.btns}>
                        <Button variant="contained" color="secondary" className={classes.btn} type="submit">
                            Poll
                        </Button>                    
                    </div>

               </form>

        </div>
    )
}

export default AddPoll;
