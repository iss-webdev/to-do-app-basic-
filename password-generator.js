function newPassword(length, includeLowercase, includeUppercase, includeNumbers ){
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars =  'ABCDEFGHIJKMNOPQRSTUVWXYZ';
    const numberChars = '1234567890';

    let allowedChars = '';
    let password = ' ';

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers? numberChars : "";
    

    if(length <= 0){
        return `password length must be atleast 1`;
    }

    for(let i= 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password; 
}



const passwordLength = 7;
const includeLowercase = true; 
const includeUppercase = true; 
const includeNumbers= true; 


const password = newPassword(passwordLength,
                            includeLowercase,
                            includeUppercase, 
                            includeNumbers

);

console.log(`generated password: ${password}`);
