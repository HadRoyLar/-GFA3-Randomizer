var num1 = Math.floor(Math.random() * 21);
var num2 = Math.floor(Math.random() * 21);
var num3 = Math.floor(Math.random() * 21);

var maxNum = Math.max(num1, num2, num3);
var alphabet = String.fromCharCode(num1 + 'A'.charCodeAt(0));
const tia = alphabet;
var minProd = num2*num3;

var hours = Math.floor(minProd/60); 
var minutes = minProd%60;

function capFirst(string) {
    return string.charAt().toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = ["John","Locke","Thaddeus","Jonah","Walter","Mike","Michael","Tasha","Ashley","Matthew","Lucida","Samuel","Cook","Jennifer","Jenner","Ruselle","Rosie","Pamela","Cassie","Erwin","Theodore","Rocky", "Gregory", "Linus", "Charlie", "Felicia", "Memphis", "Bill", "Johnny", "Gale", "Jesse", "Christopher", "Robin", "Amanda", "Matilda", "Mary", "Grace", "Billie", "Jean", "Kylie", "Kyle", "Beowulf", "Derek", "Anton", "Sam", "Chris", "Tim", "Mark", "Lark", "Buck", "Joyce", "Gerianne", "Jacob", "Elisha", "Josie", "Royce"];

	var name2 = ["White", "Hartwell", "Simmons", "Zimmerman", "Goodman", "Saulberg", "Salvador", "Johnson", "Roosevelt", "Bush", "Vickers", "Schrodinger", "Goodfeller", "Sauerman", "Sawyer", "Miller", "Brown", "Addams", "Longfellow", "Rowling", "Mann", "Quentin", "Smith", "Williams", "Jenner", "Jones", "Garcia", "Foster", "Longman", "Long", "Myers", "Byers", "Wurlington", "Burlington", "Davis", "Jimenez", "Rodriguez", "Gonzales", "Patel", "Carlito", "Carmine", "Falcone", "Vidovic", "Salome", "Hummer"];

	const name = capFirst(name1[getRandomInt(0, name1.length - 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length - 1)]);
    
	return name;

}

const sbn = generateName();

if (generateName()==null || generateName()=="") {
	document.getElementById('subjectname').innerHTML = 'John Doe';
}
else {
	document.getElementById('subjectname').innerHTML = sbn;
}


document.addEventListener('keyup', function(e){
	if(e.keyCode == 13)
	  window.location.reload();
  })


if (hours == 0 && minutes == 0) {
	document.getElementById('tmetke').innerHTML = sbn + " failed to take the intelligence test."
	num1 = 0;
	document.getElementById('ath').innerHTML = num1;
	document.getElementById('ath').className = "text-danger";
	document.getElementById('intel').innerHTML = num1;
	document.getElementById('intel').className = "text-danger";
	document.getElementById('mor').innerHTML = num1;
	document.getElementById('mor').className = "text-danger";	
}

else if (hours == 0 && minutes < 30) {
	document.getElementById('tmetke').innerHTML = sbn + " failed the intelligence test.";
	num1 = 0;
	document.getElementById('ath').innerHTML = num1;
	document.getElementById('ath').className = "text-danger";
	document.getElementById('intel').innerHTML = num1;
	document.getElementById('intel').className = "text-danger";
	document.getElementById('mor').innerHTML = num1;
	document.getElementById('mor').className = "text-danger";


}

else if (hours > 0 || minutes > 29) {

document.getElementById('tmetke').innerHTML = sbn + " took " +hours+ " hours and " +minutes+ " minutes to finish the intelligence test.";


if (num1 > 17) {
	document.getElementById('ath').innerHTML = num1;
	document.getElementById('ath').className = "text-success";
}

else if (num1 > 14) {
	document.getElementById('ath').innerHTML = num1;
	document.getElementById('ath').className = "text-info";
}

else if (num1 > 10) {
	document.getElementById('ath').innerHTML = num1;
	document.getElementById('ath').className = "text-warning";
}

else if (num1 < 11) {
	document.getElementById('ath').innerHTML = num1;
	document.getElementById('ath').className = "text-danger";
}




if (num2 > 17) {
	document.getElementById('intel').innerHTML = num2;
	document.getElementById('intel').className = "text-success";
}

else if (num2 > 14) {
	document.getElementById('intel').innerHTML = num2;
	document.getElementById('intel').className = "text-info";
}

else if (num2 > 10) {
	document.getElementById('intel').innerHTML = num2;
	document.getElementById('intel').className = "text-warning";
}

else if (num2 < 11) {
	document.getElementById('intel').innerHTML = num2;
	document.getElementById('intel').className = "text-danger";
}





if (num3 > 17) {
	document.getElementById('mor').innerHTML = num3;
	document.getElementById('mor').className = "text-success";
}

else if (num3 > 14) {
	document.getElementById('mor').innerHTML = num3;
	document.getElementById('mor').className = "text-info";
}

else if (num3 > 10) {
	document.getElementById('mor').innerHTML = num3;
	document.getElementById('mor').className = "text-warning";
}

else if (num3 < 11) {
	document.getElementById('mor').innerHTML = num3;
	document.getElementById('mor').className = "text-danger";
}



if (maxNum == num1 && maxNum == num2) {
	document.getElementById('strpnt').innerHTML = "The strong point of the subject are Athletics and Intelligence with the same score of " +num1+ "/20.";
}

else if (maxNum == num2 && maxNum == num3) {
	document.getElementById('strpnt').innerHTML = "The strong point of the subject are Intelligence and Morals with the same score of " +num2+ "/20.";
}

else if (maxNum == num1 && maxNum == num3) {
	document.getElementById('strpnt').innerHTML = "The strong point of the subject is Athletics and Morals with the same score of " +num3+ "/20.";
}

else if (maxNum==num1) {
	document.getElementById('strpnt').innerHTML = "The strong point of the subject is Athletics with a score of " +num1+ "/20.";
}

else if (maxNum == num2) {
	document.getElementById('strpnt').innerHTML = "The strong point of the subject is Intelligence with a score of " +num2+ "/20.";
}

else if (maxNum == num3) {
	document.getElementById('strpnt').innerHTML = "The strong point of the subject is Morals with a score of " +num3+ "/20.";
}

document.getElementById('ti').innerHTML = "Test Batch Identification: " +tia;

}
