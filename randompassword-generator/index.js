document.addEventListener("DOMContentLoaded",function(){
    const passwordInput=document.getElementById("Password");
    const generateButton=document.getElementById("generate");
    generateButton.addEventListener("click",function(){
        passwordInput.value=generatePassword();
    });

    function generatePassword(){
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
        const allCharacters=uppercase+lowercase+numbers+specialCharacters;
        let password=" ";
        let hasUppercase=false;
        let hasNumber=false;
        let hasSpecialCharacter=false;
        for(let i=0;i<8;i++){
            const randomIndex = Math.floor(Math.random()*allCharacters.length);
            const randomChar = allCharacters[randomIndex];
            password+=randomChar;
            if (uppercase.includes(randomChar)) {
                hasUppercase = true;
            } else if (numbers.includes(randomChar)) {
                hasNumber = true;
            } else if (specialCharacters.includes(randomChar)) {
                hasSpecialCharacter = true;
            }
        }
        if (!hasUppercase || !hasNumber || !hasSpecialCharacter) {
            return generatePassword();
        }

        return password;
    }
});