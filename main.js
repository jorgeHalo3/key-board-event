const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const secretLetter = letters [Math.floor(Math.random()* 26)];
console.log(secretLetter);
document.body.addEventListener('keyup', function(event){
    console.log(event.key);
    const letterIndex = secretLetter.indexOf(event.key);
    console.log(letterIndex);
    if (letterIndex===0)
        document.write("SECRET KEY PRESSED")
return;       
});
