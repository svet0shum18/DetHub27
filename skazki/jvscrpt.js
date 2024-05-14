function CloseSkazki()
{
	window.close();
}

function kn1()
{
	alert("КНИГИ НЕТ!");
	
}

function kn2()
{
	var result = confirm("Ты хочешь прочесть эту сказку?")

	if (result == true)
	{
		window.open("https://nukadeti.ru/skazki/masha_i_medved","_blank");
	}
	else 
	{
		alert("Тогда выбирай другую книгу!")
	}
}

function openBook()
{
	window.open("https://mousetale.ru/","_blank")
}