// javascript code implementation

function integerToRoman(num) {
	let roman = new Map(); // move outside
	roman.set(1, 'I');
	roman.set(5, 'V');
	roman.set(10, 'X');
	roman.set(50, 'L');
	roman.set(100, 'C');
	roman.set(500, 'D');
	roman.set(1000, 'M');
	roman.set(5000, 'G');
	roman.set(10000, 'H');
	
	let tmp = Array.from(String(num));
	let numDigits = tmp.length;

	let res = [];
	for(let i=0;i<numDigits;++i) {
		let src = tmp[i]; // orig
		let number = (src.charCodeAt(0) - 48); // convert to integer
		let place = (numDigits-1)-i;
		let absolute = Math.pow(10, place);

		if (number == 9) {
			res.push(roman.get(absolute));
			res.push(roman.get((number+1) * absolute));
		} else
		if (number >= 5) {
			res.push(roman.get(5*absolute));
			
			let cnt = number-5;
			while(cnt--) res.push(roman.get(absolute));
		} 
		else{
			if (number >= 4) {
				res.push(roman.get(absolute));
				res.push(roman.get(5*absolute));
			} 
			else {
				
				let cnt = number;
				while(cnt--) res.push(roman.get(absolute));
			}
		}
	}
	return res;
}

let ans = integerToRoman(3549).join('');
console.log(ans);

// This code is contributed by Nidhi goel.
