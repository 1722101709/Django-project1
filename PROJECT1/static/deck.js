
var select1,option1,select2,option2;
var score=new Array(0,0,0,0);
var s3=1,s4=1;

function update1() {
	select1 =document.getElementById('select1');
	option1 =select1.options[select1.selectedIndex].value;
	if (option1==2) {
		document.getElementById('score3').style.visibility="hidden";
		document.getElementsByClassName('score3')[0].style.visibility="hidden";
		document.getElementsByClassName('score4')[0].style.visibility="hidden";
		document.getElementById('score4').style.visibility="hidden";
		s3=0;
		s4=0;
	}
	if (option1==3) {
	 
	 if(s3===0)
		{
        document.getElementById('score3').style.visibility="visible";
		document.getElementsByClassName('score3')[0].style.visibility="visible";
	    }
	  	document.getElementById('score4').style.visibility="hidden";
		document.getElementsByClassName('score4')[0].style.visibility="hidden";
	  	document.getElementById('score3').style.position="relative";
		document.getElementById('score3').style.left="65%";
		document.getElementsByClassName('score3')[0].style.position="relative";
		document.getElementsByClassName('score3')[0].style.left="65%";
		s3=1;
		s4=0;
	}
	if (option1==4) {
		document.getElementById('score3').style.visibility="visible";
		document.getElementsByClassName('score3')[0].style.visibility="visible";
		document.getElementById('score4').style.visibility="visible";
		document.getElementsByClassName('score4')[0].style.visibility="visible";
		if (s4==0) {
		document.getElementsByClassName('score3')[0].style.position="relative";
		document.getElementsByClassName('score3')[0].style.left="0%";
		document.getElementsByClassName('score3')[0].style.top="0%";
		document.getElementById('score3').style.position="relative";
		document.getElementById('score3').style.left="0%";


		document.getElementById('score4').style.position="relative";
		document.getElementById('score4').style.left="80%";
		document.getElementsByClassName('score4')[0].style.position="relative";
		document.getElementsByClassName('score4')[0].style.left="80%";
		s3=1;
		}
		s3=1;
		s4=1;
	}
}

function update2() {
	select2 =document.getElementById('select2');
	option2 =select2.options[select2.selectedIndex].value;

	alert("no of players="+option1+"\nno of turns="+option2);
	alert("Let's  start the Cards Game");
	alert("PRESS THE START BUTTON TO START THE GAME");
}

function fun() {
	var a = new Array(52);
	for(var i=0;i<52;i++)
	{
		a[i]=i;
	}

document.getElementById('output').value="\t   ========SCORE-BOARD=======\n\n";

for(var i=0;i<=4;i++)
	{
		score[i]=0;
	}
	for (var i = 0; i<option2; i++)
		{
          document.getElementById('output').value+="\nround-"+(i+1)+" is starting\n\n";
		    for (var j = 0; j <option1; j++)
		   {
		   	document.getElementById('output').value+="player"+(j+1)+"'s turn";
		    var temp=Math.floor(Math.random()*52);

		    while(a[temp]==-1)
		    {
		       temp=Math.floor(Math.random()*52);
		    }
		    a[temp]=-1;
		    var t=f((temp)%13);
		    var u=temp%13;
		    if (u==11 || u==12) {
		    	u++;
		    }
		    if (temp>=0 && temp<=12) {
		    	document.getElementById('output').value+="------->"+t+" of clubs"+String.fromCodePoint(127185+u)+"\n";
		    }
		    if (temp>=13 && temp<=25) {
		    	document.getElementById('output').value+="------->"+t+" of diamonds"+String.fromCodePoint(127169+u)+"\n";
		    }
		    if (temp>=26 && temp<=38) {
		    	document.getElementById('output').value+="------->"+t+" of hearts"+String.fromCodePoint(127153+u)+"\n";
		    }
		    if (temp>=39 && temp<=51) {
		    	document.getElementById('output').value+="------->"+t+" of spades"+String.fromCodePoint(127137+u)+"\n";
		    }
		    score[j]+=((temp)%13)+1;
		   }
       }
	document.getElementById('score1').value=score[0];
	document.getElementById('score2').value=score[1];
	document.getElementById('score3').value=score[2];
	document.getElementById('score4').value=score[3];

	var count=0,max=0;

for (var i = 0; i <4; i++) {
	if (score[i]>score[max]) {
		max=i;
	}
}
for (var i = 0; i <4; i++) {
	if(score[i]==score[max]){
		count++;
	}
}
if (count==1) {
	document.getElementById('output').value+="\nplayer"+(max+1)+" is the winner"+String.fromCodePoint(128526)+"\n";
}
else
  {
	document.getElementById('output').value+="\n{ ";
	for(var i=0;i<4;i++){
		if(score[i]==score[max])
		{
	document.getElementById('output').value+="player"+(i+1)+" ";
        }
    }
    document.getElementById('output').value+=" } are the winners"+String.fromCodePoint(128526)+String.fromCodePoint(128516)+"\n"+"\n";
  }
 document.getElementById('output').value+="\n--->\"PRESS THE DICE BUTTON TO PLAY AGAIN\"--->\n\nNOTE:-\n\tChange the players-count or winning-type, if you want ";

}


function f(x){

	if (x==0) {
		return "Ace";
	}
	else if(x>=1 && x<=9)
	{
		return x+1;
	}
	else if (x==10) {
		return "Jack";
	}
	else if (x==11) {
		return "Queen";
	}
	else if(x==12)
	{
		return "King";
	}
}