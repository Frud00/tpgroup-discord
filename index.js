var move=false;
var is_moved=false;
var koala=false;
var shop=false;
var socials=false;




function move_window(){
	move = !move;
	if (!is_moved){
		if (move){
			document.getElementById("main-menu").style.marginLeft = "10%";
		}
		else{
			document.getElementById("main-menu").style.marginLeft = "35%";
		}
	}
}


function show_koala(){
	koala =!koala;
	shop=false;
	socials=false;
	if (koala) document.getElementById("koala").style.visibility = "visible";
	else document.getElementById("koala").style.visibility = "hidden";
	is_moved=true;
}

function show_shop(){
	shop=!shop;
	koala=false;
	socials=false;
	if (shop) document.getElementById("shop").style.visibility = "visible";
	else document.getElementById("shop").style.visibility = "hidden";
	is_moved=true;
}

function show_socials(){
	socials=!socials;
	shop=false;
	koala=false;	
	if (socials) document.getElementById("socials").style.visibility = "visible";
	else document.getElementById("socials").style.visibility = "hidden";
	is_moved=true;
	
	
}
function reload(){
	if (!koala) document.getElementById("koala").style.visibility = "hidden";
	if (!shop) document.getElementById("shop").style.visibility = "hidden";
	if (!socials) document.getElementById("socials").style.visibility = "hidden";
	if (!koala && !shop && !socials) is_moved=false; move_window()
}