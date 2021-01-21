import Nav from "./components/Nav";
import Poll from './components/Poll';
import Data from './components/Data';
import {useState,useEffect} from 'react';


function App() {
  const [lineData, setLineData] = useState({yesData:[], noData:[]});
  const [barData, setBarData] = useState({yesData:0,noData:0});
  const [tableData, setTableData] = useState([]);

  //call set functions
  const setAll = async () =>{
    const lineDataFromServer = await getLineData();
    setLineData(lineDataFromServer);
    const barDataFromServer = await getBarData();
    setBarData(barDataFromServer);
    const tableDataFromServer = await getTableData();
    setTableData(tableDataFromServer);
  }

  //Runs when page loads
  useEffect(()=>{
    setAll();
  },[]);

//api calls
/**
 * @description Add a vote to the db
 * @param {Object} vote 
 */
const addPoll= async (vote)=> {
  console.log(vote);
  const res = await fetch("http://localhost:4000/vote",{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(vote)
  });
  setAll();
}

/**
 * @description Get ling graph data
 */
const getLineData = async()=>{
  //Get data for both No and Yes votes
  const res = await Promise.all([
    fetch("http://localhost:4000/choice/true"),
    fetch("http://localhost:4000/choice/false"),
  ]);
  const yesData = await res[0].json();
  const noData = await res[1].json();
  const line = {yesData,noData};
  return line;
}

/**
 * @description Get bar graph data
 */
const getBarData = async() =>{
  const res = await fetch("http://localhost:4000/results");
  const data = await res.json();
  if(data.length === 0) return [];
  let yesData = data.filter(d=> d.voting_choice === true); //data from [{choice:true,count:2},{choice:false,count:1}]
  let noData = data.filter(d=> d.voting_choice === false);
  if(noData.length === 0) noData = [{voting_choice:false, count:0}]
  if(yesData.length === 0) noData = [{voting_choice:true, count:0}]
  const bar = {yesData:yesData[0].count,noData:noData[0].count};
  return bar;
}

/**
 * @description get tabble data
 */
const getTableData = async() =>{
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  return data;
}



  return (
    <div>
      <Nav/>
      <Poll addPoll = {addPoll} />
      <Data lineData={lineData} barData={barData} tableData={tableData}/>
    </div>
  );
}

export default App;
