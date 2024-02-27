let button = document.getElementsByTagName("button");

// variables 

const hexKeyCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

// functions

// let testing = () => {
//     console.log("click")
// };

let generateNew = () => {
    let hexCode = "#";

    for (let index = 0; index < hexKeyCode.length; index++) {
        hexCode = hexCode + hexKeyCode[index];
        
    };
    console.log(hexCode);
};

document.addEventListener("click", generateNew);