$("button").click(function() {
	$("#display").empty();
	getCountries()
	.then(result =>{
		result.forEach(element => {
			var card = $('<div>', {class: "card"}).appendTo('#display');
			var country = $('<div>', {class: "country-info"}).appendTo(card);
			var img = $('<div>', {class: "img"}).appendTo(country);
			$('<img>', {src: element.flag}).appendTo(img);
			var text = $('<div>', {class: "right-text"}).appendTo(country);
			$('<p>', {text: "Name: " + element.name}).appendTo(text);
			$('<p>', {text: "Top Level Domain: " + element.topLevelDomain}).appendTo(text);
			$('<p>', {text: "Capital: " + element.capital}).appendTo(text);
			$('<h4>', {text: 'Currencies:'}).appendTo(text);
			element.currencies.forEach(element =>{
				var currencies = $('<div>', {
					class: "currencies"
				}).appendTo(text);
				$('<span>', {text: element.code + " "}).appendTo(currencies);
			})
		});
		
	})
	.catch(err =>console.log(err));
});


async function getCountries(){
	const response = await fetch('https://restcountries.com/v3.1/all');
	const responseData = await response.json();

	return responseData;
}

async function getCountryName(){
	const response = await fetch('https://restcountries.com/v3.1/all/name/');
	const responseData = await response.json();

	return responseData;
}