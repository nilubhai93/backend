import readline from 'readline/promises';

const API_KEY ='c7832ca151a6b44c24285c724cb0835a';
const BASE_URL='http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid={API_KEY}';

const rl = readline.createInterface({
    input:process.stdin,
    outout:process.stdout
});

const getWeather=async(city)=>{
    const url=`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try{
        const response=await fetch(url);
    }catch(error){
        console.log(error);
    }
}


const city=await rl.question('enter a city to get its weather : ');
await getWeather(city);
rl.close();