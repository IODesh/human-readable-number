module.exports = function toReadable (number) {
        //let numberToWords = require('number-to-words');
        //let numRead = numberToWords.toWords(number).split('');
        //for (let i = 0; i < numRead.length; i++) {
        //if (numRead[i] === '-') {
        //    numRead[i] = ' ';
        //    };
        //};
        //return numRead.join('');

        
    let units = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let scales = [' ', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
	
    let arr = [];
	
	if (number === 0)
		{
		arr[0] = 'zero';
		}
	else if (number < 20 && number !== 0)
		{
		arr[0] = units[number];
		}
	else if (number % 100 === 0) 
	 	{
		arr[0] = scales[number / 100];
		
		}
	else if (number % 100 < 20 && Math.floor(number / 100) !== 0)
		{
		 arr[0] = scales[Math.floor(number / 100)];
	     arr[1] = units[number % 100];
		}
	else if (number % 100 >= 20 && Math.floor(number / 100) !== 0)
		{
		 arr[0] = scales[Math.floor(number / 100)];
	     arr[1] = tens[Math.floor(number % 100/ 10)];
		 arr[2] = units[number % 10];
		}
	else if (number < 100 && number > 19)
		{
		 arr[0] = tens[Math.floor(number % 100/ 10)];
		 arr[1] = units[number % 10];
		}
	else if (Math.floor(number % 100) === 0 && number % 10 === 0)
		{
		 arr[0] = tens[number/10];
		}
 //console.log(arr);
return arr.reduce((a, b) => a +''+b);
}

//let n = 0;
//let result = toReadable(n);
//console.log(result);
