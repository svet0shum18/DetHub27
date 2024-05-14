function CloseMult()
{
	window.close();
}

function OpenMul()
{
	window.open("https://www.youtube.com/watch?v=9icylgN5TjY","_blank");
}

function OpenMult()
{
	// var result = confirm("Ты хочешь посмотреть этот мультик?")

	// if (result == true)
	// {
	// 	window.open("https://www.youtube.com/live/2U8nnyrepKk?si=I4NagY5WmmUDFF4-","_blank");
	// }
	// else 
	// {
	// 	alert("Тогда выбирай другой мульт!")
	// }
var videoSource = '/film/img/luntik.mp4';
var vieoPlayer = document.getElementById('lun');

document.getElementById('pnk1').addEventListener('click',function()
{
vieoPlayer.src = videoSource;
vieoPlayer.play();
})

}


function OpenTriKota()
{
	var videoSource = '/film/img/cat.mp4';
	var vieoPlayer = document.getElementById('lun');

	document.getElementById('videocat').addEventListener('click',function()
{
vieoPlayer.src = videoSource;
vieoPlayer.play();
})


}

