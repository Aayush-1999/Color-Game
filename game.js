var numcolors=6;
var color=generaterandomcolors(numcolors);
var square=document.querySelectorAll(".square");
var displaycolor=document.getElementById("displaycolor");
var pickedcolor=pickcolor(numcolors);
var mssg=document.getElementById("message");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var mode=document.querySelectorAll(".mode");


for(var i=0;i<mode.length;i++)
{
	mode[i].addEventListener("click",function(){
	mode[0].classList.remove("selected");
	mode[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent==="Easy"?numcolors=3:numcolors=6;
	resetting();	
	})
}

reset.addEventListener("click",function(){
    resetting();
});


function resetting(){
    color=generaterandomcolors(numcolors);
    pickedcolor=pickcolor(numcolors);
    displaycolor.textContent=pickedcolor;
    for(var i=0;i<square.length;i++)
    {
    	if(color[i]){
            square[i].style.display="block";
	        square[i].style.background=color[i];
    	}
    	else{
            square[i].style.display="none";
       	}
    }
    h1.style.background="steelblue";
    mssg.textContent="";
    reset.textContent="New colors"	
}

displaycolor.textContent=pickedcolor;

for(var i=0;i<square.length;i++)
{
	square[i].style.background=color[i];

	square[i].addEventListener("click",function(){

		var clickcolor=this.style.background;
		
		if(pickedcolor===clickcolor)
		{
			mssg.textContent="Correct!";
		    changecolor(pickedcolor);
		    h1.style.background=pickedcolor;
		    reset.textContent="Play Again";
		}	
		else
		{
			mssg.textContent="Try Again";
	        this.style.background="#232323";

		}	
	
	});
}


function changecolor(color)
{
	for(var i=0;i<square.length;i++){
        square[i].style.background=color;
	}
}

function pickcolor(num){
    var random=Math.floor(Math.random()*num);     
    return color[random];
}

function generaterandomcolors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolors());
	}
	return arr;
}

function randomcolors()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")"; 
}