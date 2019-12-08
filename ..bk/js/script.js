var intoggle = 0;

function bfun(){
	var dge =document.getElementById("demo");
	// document.getElementById('demo').style.color='cyan';
	// dge.innerHTML='Insane-Ninja';

	if (intoggle == 0){
		document.getElementById("buttdiv").style.display="";
		intoggle=1;
	}
	else if(intoggle == 1){
		document.getElementById("buttdiv").style.display="none";
		intoggle=0;
	}
}


function headlines(x){

		var url = 'https://newsapi.org/v2/top-headlines?' +
		          'country=us&' +
		          'apiKey=f1c6a7a971994de99a0fb0534b67ae14';
		var req = new Request(url);
		
		fetch(req)
		    .then(function(response) {
		        console.log(response.json());
		    })

		x.innerHTML=req
}		