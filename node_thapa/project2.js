import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const filecreation = () => {
    rl.question('Enter your filename:', (filename) => {
        rl.question("Enter the content:", (content) => {
            fs.writeFile(`${filename}.js`, content, (err) => {
                if (err) {
                    console.error(`Error writing the file`);
                } else {
                    console.log(`file "${filename}.txt" created successfully!`);
                }
                rl.close();
            })
        })
    })
}
filecreation();