import * as cheerio from 'cheerio'
import axios from 'axios';


const page = async () => {
    //return new Promise(async (resolve, reject)=>{
        let page = await axios.get('https://www.google.com/maps/place/Seara+Restaurante/@32.7482771,-17.1947848,17z/data=!3m1!4b1!4m8!3m7!1s0xc605140e507f6d1:0xd4230903895662c9!8m2!3d32.7482726!4d-17.1922099!9m1!1b1!16s%2Fg%2F11tk52c2wm?entry=ttu')
        return page
    //})
}

async function main(){
    const res = await page();
    const $ = cheerio.load(res)

    //const stars = $("#QA0Szd > div > div > div.w6VYqd > div:nth-child(2) > div > div.e07Vkf.kA9KIf > div > div > div.m6QErb.DxyBCb.kA9KIf.dS8AEf.XiKgde > div:nth-child(10) > div:nth-child(19) > div > div > div:nth-child(4) > div.DU9Pgb > span.kvMYJc")
    const opinions = $("#ChdDSUhNMG9nS0VJQ0FnSUNqbS1MN19nRRAB > span.wiI7pd")
    console.log(opinions)
    
}

main();
