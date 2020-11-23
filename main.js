const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var secretLetter = letters [Math.floor(Math.random()* 26)];
console.log(secretLetter);
document.body.addEventListener('keyup', function(event){
    console.log(event.key);
    const letterIndex = secretLetter.indexOf(event.key);
    console.log(letterIndex);
 
	var ol = document.getElementsByTagName("ol")[0];
	if (letterIndex===0){
	    let li = document.createElement('li');
 
		li.innerHTML = "SECRET KEY PRESSED : " + event.key;
        ol.append(li);
 
		//select a new secret letter
		secretLetter = letters [Math.floor(Math.random()* 26)];
		}   
});