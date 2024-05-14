var listFairyTales = {
	"1": {
			'title':'Леди Баг и Супер Кот',
			"link":"https://youtu.be/7VcDfdB778o?si=WiEBXqgad9gCOthF"
			},
	"2": {
			'title':'Лунтик и его друзья',
			"link":"https://www.youtube.com/live/EQ7R_dhBt-8?si=Xmmqp2mOtuYSRmAs"
				},
	"3": {
			'title':'Фиксики',
			"link":"https://youtu.be/5-NoaqasJoc?si=TVpqg3tUZvRXKBOv"
				},
	"4": {
			'title':'Барбоскины',
			"link":"https://www.youtube.com/live/C_IzIx--uJk?si=II-QIuCVfVU3fxmz"
				}
}

var random = '0' ;
var linkCartoon = '' ;

function installFairyTale(){
    var fairy = document.getElementById("mult")
    var random = String(Math.floor(Math.random() * 4)+1);
    linkCartoon = listFairyTales[random].link
    fairy.textContent = listFairyTales[random].title
}


function transitionToAFairyTale(){
    window.open(linkCartoon)
}

function WriteNo(){
    // alert("Тогда держи другой мультик!")
    installFairyTale()
}


// function Randomik(arr) {
// 	return arr.splice([Math.floor(Math.random() * arr.length)],1);
	
// }

// var item = ["Лунтик", "Фиксики" , "Барбоскины"];
// var link = ["https://www.youtube.com/live/EQ7R_dhBt-8?si=Xmmqp2mOtuYSRmAs",
// "https://youtu.be/5-NoaqasJoc?si=TVpqg3tUZvRXKBOv", "https://www.youtube.com/live/C_IzIx--uJk?si=II-QIuCVfVU3fxmz"];

// item.forEach(function(item, index) {
// var spisok = (index + " " + item + Randomik(item));
// })


function OpenSkazka() 
{
var newWindow = window.open("skazki/skaz.html","_blank");
// newTab.document.write
}

function OpenMult()
{
	var newWindow = window.open("film/film.html","_blank");
}