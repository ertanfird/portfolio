function travelPrice() {
	let rashod = document.querySelector('#consumpition').value;
	let price = document.querySelector('#price').value;
	let rastoyanie = document.querySelector('#distance').value;
	let result = Number(rashod) * Number(price) * Number(rastoyanie) / 100;
	document.querySelector('#result').innerHTML = 'Стоимость: ' + result + 'RUB';
}