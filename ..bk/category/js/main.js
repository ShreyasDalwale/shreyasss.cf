var collection = {
        "name":"Names and Links",
		"nal" : [{
				"name": "Gangtok", 
				"link"  : "https://www.holidify.com/images/tooltipImages/GANGTOK.jpg",
				"themes":["Hill Stations","Nature","Heritage"],
                "season":"Autumn",
			},
		{	
				"name" : "Darjeeling",
				"link" :"https://www.holidify.com/images/tooltipImages/DARJEELING.jpg",
                "themes":["Hill Stations","Nature","Trekking","Road Trips","Honeymoon"],
                "season":"Monsoon",

			},
		{
				"name" : "Udaipur",
				"link" : "https://www.holidify.com/images/tooltipImages/UDAIPUR.jpg",
				"themes":["Adventure","Nature","Heritage","Wildlife",""],
                "season": "Autumn",
			},
		{
				"name" :"Mcleodganj",
				"link" :"https://www.holidify.com/images/tooltipImages/MCLEODGANJ.jpg",
				"themes":["Adventure","Nature","Water Activities","Beaches","Wildlife"],
                "season":"Winter",
			},
		{
				"name" : "Munnar",
				"link" : "https://www.holidify.com/images/tooltipImages/MUNNAR.jpg",
                "themes":["Adventure","Nature","Trekking","Heritage","Wildlife"],
                "season":"Summer",
			},
		{
				"name" : "Coorg",
				"link" : "https://www.holidify.com/images/tooltipImages/COORG.jpg",
                "themes":["Adventure","Nature","Trekking","Deserts","Wildlife"],
                "season":"Summer",

			}
          ]
};
var mmtog =1;
var myJSON = JSON.stringify(collection);
var txt = '{"name":"John","some":[{"one":"valueone"},{"two":"valuetwo"}], "age":30, "city":"New York"}'
var obj2= JSON.parse(myJSON);
var obj = JSON.parse(txt);
function fun(){

document.getElementsByClassName("head")[0].innerHTML = obj.name + ", " + obj.age +"<br>"+ obj2.nal[0].name+"<br>"+obj2.nal[2].link;


}
window.mmtoggle = function(){
    var xy = document.getElementById("elementmm");
    var aniMage = document.getElementsByClassName("animage");
    var bodyClass = document.getElementsByClassName("body");
    if (mmtog==0) {
        xy.style.display ="none";
        mmtog=1;



        bodyClass[0].style.marginLeft="13%";
        aniMage[0].style.display="";
        // bodyClass[0].style.margin="0px";
        // alert(mmtog);
        console.log(xy.style);
    }
    else if(mmtog==1){
        xy.style.display="";
        mmtog=0;
        aniMage[0].style.display="none";
        bodyClass[0].style.marginLeft="";
        bodyClass[0].style.margin=""; 
        // alert(mmtog);

    }
}
window.mon = function(x){
    if(mmtog==1){
        x.style.opacity="2";
        // x.style.padding="";
    }
}
window.mleave = function(x){
    if(mmtog){
        x.style.opacity="0.8";
        // x.style.padding="30px";
    }
}
window.load = function(){
    var i,it;
    var ib = document.getElementsByClassName("ib");
    var divs = '<div style="width:100%;height:40%;background-image:url(';
    var divc=');background-size:cover;background-repeat:no-repeat;text-align:center;transition-duration:500ms;opacity:1;" class="ibimg">Ratings</div>';
    var divts= '<div style="color:mediumseagreen;text-align:center;font-size:14px;width:100%;line-height:50px;background-color:rgba(0,0,0,0.1);">';
    var divtc ='</div>';
    it=0;
    for(i=0;i<15;i++)
    {   ib[i].style.display="";
        ib[i].innerHTML=divs+ obj2.nal[it].link+divc;
        var x = ib[i].innerHTML;
        ib[i].innerHTML = x + divts+ obj2.nal[it++].name+divtc;
        ib[i].style.opacity="0.8";
        if(it==5){it=0;}
//        i2++;
    }
    mmtoggle();
}

window.sort = function(){
    var chkbox = document.getElementsByClassName("themes");
    var i=0;
    var n= chkbox.length;
    var chks= [];
    
    console.log(n);
    while(i<13){
        if(chkbox[i].checked===true){chks.push(chkbox[i].value);}
        i++;
    }
    console.log(chks);
    clear();
    
    // console.log(obj2.nal[0].themes.length);
    sortIB(chks);

}
window.clear = function (){
    let xib = document.getElementsByClassName("ib");
    let nib = xib.length;
    let j=0;
    while(j<nib){
        console.log(j);
        xib[j].style.display="none";
        xib[j].innerHTML="";
        j++;
    }
    
}
window.sortIB = function (chks){
    let i=0;
    let j=0;
    let m=0;
    let k=0;
    let chkThemes =[];
    let ib = document.getElementsByClassName("ib");
    let divs = '<div style="width:100%;height:40%;background-image:url(';
    let divc=');background-size:cover;background-repeat:no-repeat;text-align:center;transition-duration:1000ms;opacity:1;" class="ibimg">Ratings</div>';
    let divts= '<div style="color:mediumseagreen;text-align:center;font-size:14px;width:100%;line-height:50px;background-color:rgba(0,0,0,0.1);">';
    let divtc ='</div>';
    let nObj2Nal= Object.keys(obj2.nal).length;// or obj2.nal.length;
    // console.log(chks.length,Object.keys(obj2.nal).length,obj2.nal.length);
    while(i<chks.length){//no of selections
        while(j<nObj2Nal){//no of loacations in JSON
            while(k<obj2.nal[j].themes.length){//no of themes in JSON's themes key
                if(chks[i]==obj2.nal[j].themes[k]){
                        // ib[m].innerHTML=divs + obj2.nal[i]
                        chks.push(obj2.nal[j].name);
                        console.log("in");
                        //m++;
                }console.log("in out");
                k++;
            }console.log("in out 2");
            j++;
        }console.log("in out 3");
        i++;
    }
    console.log(chks);
    console.log(chkThemes);
}

// function print(n){
//   var defhtml;
//   var i=0;
//   var srno = ++i;
//   for(i=0;i<n;i++){
    
//   defhtml = document.getElementById("demo2").innerHTML;
  
//   document.getElementById("demo2").innerHTML =defhtml+"<br><br>"+"<p>Sr.No :"+srno+"</p><p>Name : "+obj2.nal[i].name+'</p><p>Link : <a href="'+obj2.nal[i].link+'">'+obj2.nal[i].link+'</a></p>';
//     srno++;
//   }
  
  
// }