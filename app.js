const codeDisplay = document.querySelectorAll('.dynamic_screen')
let text = ["Initialized Hacking now reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"]

const addItem = async (item) =>{
    await randomDelay();
    let span = document.createElement("span");
    span.innerHTML = item;
    document.querySelector('.main_screen').append(span);
}
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

(async function main(){

    let t = setInterval(() => {
        let last = document.querySelector('.main_screen').getElementsByTagName("span");
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{
            last.innerHTML = last.innerHTML + "."
        }
    }, 100);

    for (let i = 0; i < text.length; i++) {
    await addItem(text[i]);
    console.log(text[i])
    }

    await randomDelay()
    clearInterval(t)
    
})();


const genCode = async() =>{
    let code = "";
    for (let i = 0; i < 800; i++) {
        let generation = Math.round(Math.random() * 1)
        code += `${generation}`
        if((code.length % 36) == 0){
            code += `<br>`
        }
    }
    return await code;
}


setInterval( async() => {
    let display = await genCode();
    for (const code of codeDisplay) {
        code.innerHTML = `${display}`
    }
}, 500);


