const express = require("express");

const router = express.Router();

router.get("/add-prod",(req, resp, next)=>{
    resp.send('<form action=/product method=POST> <input type="text" name = "title"><button type="SUBMIT">ADD </button> </form>');
    // next();
});

router.post("/product",(req, resp, next)=>{

    console.log(req.body);
    resp.send("<h1>Helooooooooooooooooooooooooo</h1>");
});


module.exports= router;