let copyButton = document.getElementById("copyButton");
let generateButton = document.getElementById("generateButton");
let code = document.getElementById("Code");

// variables 

const hexKeyCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

// functions

// let testing = () => {
//     console.log("click")
// };

let generateNew = () => {
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hexKeyCode.length);

        hexCode = hexCode + hexKeyCode[randomNumber];
        
    };
    document.body.style.background = hexCode;
    code.innerHTML = hexCode;
    console.log(hexCode);
};

let copyContent = () => {
    navigator.clipboard.writeText(code.innerHTML);
};



generateButton.addEventListener("click", generateNew);
copyButton.addEventListener("click", copyContent);

