var i = 0;
var fei = 0;
var cui = 0;
var bo = document.getElementsByClassName("body");
var t = document.getElementsByClassName("top");
var fe = document.getElementsByClassName("freeEstimate");
var fep = document.getElementsByClassName("freeEstimatePic");
var m = document.getElementsByClassName("middle");
var mc = document.getElementsByClassName("middleContainer");
var cb = document.getElementsByClassName("covidBar");
var lb = document.getElementsByClassName("locationBar");
var cl = document.getElementsByClassName("cleaningLogo");
var ddb = document.getElementsByClassName("dropDownBar");
var ep = document.getElementsByClassName("employeePic");
var fto = document.getElementsByClassName("flavorTextOne");
var eco = document.getElementsByClassName("estimateCopyOne");
var cno = document.getElementsByClassName("contactNumberOne");
var tm = document.getElementsByClassName("territoryMap");
var ftt = document.getElementsByClassName("flavorTextTwo");
var cnt = document.getElementsByClassName("contactNumberTwo");
var g = document.getElementsByClassName("guarantee");
var ftth = document.getElementsByClassName("flavorTextThree");
var s = document.getElementsByClassName("slogan");
var ect = document.getElementsByClassName("estimateCopyTwo");
var b = document.getElementsByClassName("bottom");
var cu = document.getElementsByClassName("contactUs");
var dum = document.getElementsByClassName("dropUpMenu");
var dumcu = document.getElementsByClassName("dumcu");
var dumcup = document.getElementsByClassName("dumcuPhone");
var dumcue = document.getElementsByClassName("dumcuEmail");
var dumcua = document.getElementsByClassName("dumcuAddress");




function freeEstimates(){
if(fei==0) {
	
	//bo[0].style.backgroundImage="url('backgroundImage.jpeg')";
	//bo[0].style.backgroundColor="none";
	fe[0].style.backgroundColor="#98f7fa";
	fe[0].style.width="80vw";
	fe[0].style.height="75vh";
	fep[0].style.rotate="90deg";
	fe[0].style.marginLeft="10vw";
	fe[0].style.marginTop="10vh";
	fep[0].style.marginLeft="30vw";

	//fe[0].innerHTML="<span onclick=freeEstimate(1);></span>";
	//rotate: 270deg;
	
	
	
    fei = 1;
} else if (fei ==1) {
	
	fe[0].style.backgroundColor="#98f7fa";
	fe[0].style.width="15vw";
	fe[0].style.height="30vh";
	fep[0].style.rotate="0deg";
	//fe[0].innerHTML="<span onclick=freeEstimate(1);></span>";
	fe[0].style.marginLeft="85vw";
	fe[0].style.marginTop="20vh";
	fep[0].style.marginLeft="0vw";



	fei = 0;
	
} 
	
};



function contactUs() {
if (cui==0) {
		b[0].style.height="50vh";
		b[0].style.marginTop="50vh";
		b[0].style.marginLeft="0vw";
		dum[0].style.height="46vh";
		dum[0].style.marginTop="0vh";
		dumcu[0].style.height="46vh";
		dumcu[0].style.marginTop="0vh";
		dumcup[0].style.visibility="visible";
		
		
		
		cui = 1;
	} else if (cui==1){
		b[0].style.height="4vh";
		b[0].style.marginTop="96vh";
		b[0].style.marginLeft="0vw";
		dum[0].style.height="4vh";
		dum[0].style.marginTop="0vh";
		dumcu[0].style.height="4vh";
		dumcu[0].style.marginTop="0vh";
		dumcup[0].style.visibility="hidden";
		
		
		cui = 0;
	}
	
	
};