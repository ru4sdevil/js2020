console.log("all is ok")
punkt2_1()

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