// https://official-joke-api.appspot.com/random_joke



import https from 'https';
import chalk from 'chalk';


const getJoke = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';


    https.get(url, (response) => {
        let data = "";
        
        response.on('data', (chunk) => {
            data = data + chunk
        });



        response.on('end', () => {
            const joke = JSON.parse(data);
            console.log(joke);
            console.log(`Here is a random joke:`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
        });

    })
}




getJoke();