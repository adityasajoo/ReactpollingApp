import React from 'react'
import { makeStyles,TableContainer,Table,TableRow,TableCell,TableHead,TableBody,Paper } from "@material-ui/core";

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },

    tableHead : {
      backgroundColor: "#59253A",
    },

    fontColor:{
      color: "#eed6df",
    }
  });

function TableData({tableData}) {
    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className= {classes.tableHead}>
                    <TableRow>
                        <TableCell className={classes.fontColor} >Name</TableCell>
                        <TableCell align="center" className={classes.fontColor}>Choice</TableCell>
                        <TableCell align="right" className={classes.fontColor}>Casted Date</TableCell>
                     
                    </TableRow>
                    </TableHead>
                    <TableBody>
                  {tableData.map((data)=>(
                    <TableRow key={data.id}>
                        <TableCell component="th" scope="row">
                           {data.voter_name}
                        </TableCell>
                        <TableCell align="center">{data.voting_choice?"Yes":"No"}</TableCell>
                        <TableCell align="right">{data.casted_at.slice(0,10)}</TableCell>
                        </TableRow>

                  ))
                  }
                    
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    )
}

export default TableData
