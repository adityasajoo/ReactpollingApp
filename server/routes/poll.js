const router = require('express').Router();
const voteController = require("../controllers/vote.controller");

/**
 * @description Insert a vote to the DB
 * @route POST '/vote'
 */
router.post("/vote",async (req,res)=>{
   try {
       console.log('req:',req.body)
    const result = await voteController.addVote(req.body);
    res.json(result);
    console.log(result);
   } catch (error) {
       console.log(error.message);
       
   }
});

/**
 * @description Retirve all data from the DB
 * @route GET '/data'
 */
router.get("/data", async (req,res)=>{
    try{
        const result = await voteController.getAll();
        res.json(result);
        console.log(result);
    }catch(err){
        console.log(err.message);
    }
});

/**
 * @description Get the vote count with dates
 * @route GET '/choice/:choice'
 */
router.get("/choice/:choice",async(req,res)=>{
    let choice = req.params.choice;
    if(choice != "t" && choice !='f' && choice != 'true' && choice !='false') return res.json({});

    try {
        const result = await voteController.dateCount(req.params.choice);
        res.json (result);
    } catch (error) {
        console.log(error);
        
    }
})

/**
 * @description Get the count along with the choice
 * @route GET '/results'
 */
router.get("/results",async(req,res)=>{
    try{
        const result = await voteController.choiceCount();
        res.send(result);
    }catch(err){
        console.log(err);
    }
});

module.exports = router;