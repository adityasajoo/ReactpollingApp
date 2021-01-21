const pool = require("../db");

/**
 * @description Retirve all the items from the db
 */
const getAll = async () => {
    const allVotes = await pool.query("SELECT * FROM votes");
    return allVotes.rows;
}

/**
 * @description Insert to the database
 * @param {Object} data 
 */
const addVote = async (data) => {
    console.log("Data: ",data);
    const newVote = await pool.query("INSERT INTO votes(voter_name, voting_choice,casted_at) VALUES($1,$2,$3) RETURNING *", [data.voter_name, data.voting_choice, data.casted_at]);
    console.log("new Vote:",newVote.rows);
    return newVote.rows[0];
}

/**
 * @description Fetch a value which matches the id
 * @param {String} id 
 */
const getOne = async(id) =>{
    const gotVote = await pool.query("SELECT * FROM votes WHERE ID = $1", [id]);
    return gotVote.rows[0];
}

/**
 * @description Retirve the vote count for wach date
 * @param {String} choice 
 */
const dateCount = async(choice)=>{
    const votes = await pool.query("SELECT COUNT(casted_at) as count,casted_at FROM votes WHERE voting_choice = $1 GROUP BY casted_at ORDER BY casted_at",[choice]);
    return votes.rows;
}

/**
 * @description Retirve vote count for each choice
 */
const choiceCount = async()=>{
    const votes = await pool.query("SELECT COUNT(voting_choice) as count , voting_choice from votes GROUP BY voting_choice");
    return votes.rows;
}

module.exports = {
    addVote: addVote,
    getAll: getAll,
    getOne: getOne,
    dateCount:dateCount,
    choiceCount:choiceCount
}