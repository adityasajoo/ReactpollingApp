import {Container,Typography} from '@material-ui/core';

import LineGraph from './LineGraph';
import BarGraph from "./BarGraph";
import TableData from "./TableData";

function Data({lineData,barData,tableData}) {

     return (
        <>
            <Container maxWidth="md">
                {tableData.length === 0 ? 
                  <Typography  color="textSecondary" align="left" variant="h4" gutterBottom>Add some data !!</Typography>
                : <>
                    <Typography  color="textSecondary" align="left" variant="h5" gutterBottom>Analytics</Typography>
                    <LineGraph  lineData = {lineData}/>
                    <BarGraph barData = {barData}/>
                    <TableData tableData = {tableData} />
                  </>
                }
                 
            </Container>
        </>
    )
}

export default Data
