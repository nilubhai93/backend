import https from "https" ;
import readline from "readline";
import chalk from "chalk";


const r1= readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

const apiKey = 'd2c89ed7d30a3deefc5c914764';
const url= https://app.exchangerate-api.com/v6/${apiKey}/latest/USD;

https.get(url, (response)=>{
    response.on('data',(chunk)=>{

    })
})

