console.log("all is ok")
//punkt2_1()
//punkt2_2_1()
//punkt2_2_2()
//punkt2_2_3()
//punkt2_2_4()
punkt2_3()

function punkt2_1() {
	//разница в сравнении
	let d = {key: "value"};
	let e = {key: "value"} === d;
	console.log(e);
	let a = {key: "value"} === d;
	console.log(a);
	let b = d;
	let c = b === d;
	console.log(c);
}

function punkt2_2_1(){
	//экранирования
	console.log("кино \"Аватар\" \n \\n - перевод строки");
	let s = " The Quick brown fox quicly jumps over The lasy dog.  ";
	console.log(s[1] + s[3]);
	console.log(s.indexOf("e"));
	console.log(s.lastIndexOf("e"));
	console.log(s.indexOf("ф"));
	console.log(s.replace("o", "OOO"));
	let mas = s.split(" ");
	console.log(mas);
	console.log("192.168.1.1".split("."));
	console.log(mas.join("-^-"));
	console.log(s.substr(5, 11));
	console.log(s.toLowerCase());
	console.log(s.toUpperCase());
	console.log(s.trim());
}

function punkt2_2_2(){
	//Math
	console.log(Math.pow(2, 4)); //в степень
	console.log(Math.pow(2, -3));
	console.log(Math.sqrt(9));//квадратный корень
	console.log(Math.ceil(1.25));//округление вверх
	console.log(Math.floor(1.25));//oкругление вниз
	console.log(Math.round(1.25));//округление по правилам
	console.log(Math.min(1,2,3,4,3,54,56,34,5,6));
	console.log(Math.max(1,2,3,4,3,54,56,34,5,6));
	console.log(Math.sign(-3));
	console.log(Math.sign(0));
	console.log(Math.sign(34));
}

function punkt2_2_3(){
	let array = [1,2,3,4,5]
	let b = array.map(function(x){
		return 2 * x;
	});
	console.log(b);

	let copy = [];
	array.forEach(function(x){
		copy.unshift(x);
	});
	console.log(copy);


	let c = array.filter(function(x){
		return x%2 == 1;
	});
	console.log(c);
}

function punkt2_2_4(){
	let a = [1,2,3,4,5,6,7,8,8,9,0,34,897,6,5,3,4,54,6]
	let b = a.sort();
	console.log(b);
	let c = a.sort(key);
	console.log(c);
}

function key(fst, snd){
	if (fst < snd)
		return -1
	else{
		if (fst == snd)
			return 0
		else
			return 1
	}
}

function punkt2_3(){
	let a = 3, b = 5;
	let c;
	if (a>b) {
		c = a
	}else{
		c = b
	}
	console.log(c);
	c = a>b ? a : b;
	console.log(c);
}