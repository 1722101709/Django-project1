var jou="";
var con="";
var boo="";
var nov="";
var mag="";
var cost=0;
var res=document.getElementById('resource');
var journal=document.getElementById('journals');
var conference=document.getElementById('conferences');
var book=document.getElementById('books');
var novel=document.getElementById('novels');
var magazine=document.getElementById('magazines');
var f=document.getElementById('result');

function update() {
	select1 =document.getElementById('select1');
	option =select1.options[select1.selectedIndex].value;
	if(option==2){
		document.getElementById('journals').style.visibility="visible";
	}
	if(option==3){
		document.getElementById('conferences').style.visibility="visible";
	}
	if(option==4){
		document.getElementById('books').style.visibility="visible";
	}
	if(option==5){
		document.getElementById('novels').style.visibility="visible";
	}
	if(option==6){
		document.getElementById('magazines').style.visibility="visible";
	}
}

function update1(){
	select1 =document.getElementById('select2');
	option =select1.options[select1.selectedIndex].value;
	if(option==2){
		jou="journal1";
	}
	if(option==3){
		jou="journal2";
	}
	if(option==4){
		jou="journal3";
	}
}
function update2(){
	select1 =document.getElementById('select3');
	option =select1.options[select1.selectedIndex].value;
	if(option==2){
		con="conferences1";
	}
	if(option==3){
		con="conferences2";
	}
	if(option==4){
		con="conferences3";
	}
}
function update3(){
	select1 =document.getElementById('select4');
	option =select1.options[select1.selectedIndex].value;
	if(option==2){
		boo="book1";
	}
	if(option==3){
		boo="book2";
	}
	if(option==4){
		boo="book3";
	}
}
function update4(){
	select1 =document.getElementById('select5');
	option =select1.options[select1.selectedIndex].value;
	if(option==2){
		nov="novel1";
	}
	if(option==3){
		nov="novel2";
	}
	if(option==4){
		nov="novel3";
	}
}
function update5(){
	select1 =document.getElementById('select6');
	option =select1.options[select1.selectedIndex].value;
	if(option==2){
		mag="magazine1";
	}
	if(option==3){
		mag="magazine2";
	}
	if(option==4){
		mag="magazine3";
	}
}
function display(){

	alert("selected items are :-\n"+jou+" "+con+" "+boo+" "+nov+" "+mag+"\n\n");
	if(jou=="journal1"){
	cost+=2;
	}
	if(jou=="journal2"){
	cost+=4;
	}
	if(jou=="journal3"){
	cost+=3;
	}
	if(con=="conference1"){
	cost+=5;
	}
	if(con=="conference2"){
	cost+=6;
	}
	if(con=="conference3"){
	cost+=7;
	}
	if(nov=="novel1"){
	cost+=2;
	}
	if(nov=="novel2"){
	cost+=1;
	}
	if(nov=="novel3"){
	cost+=3;
	}
	if(mag=="magazine1"){
	cost+=8;
	}
	if(mag=="magazine2"){
	cost+=3;
	}
	if(mag=="magazine3"){
	cost+=10;
	}
	if(boo=="book1"){
	cost+=2;
	}
	if(boo=="book2"){
	cost+=5;
	}
	if(boo=="book4"){
	cost+=7;
	}
	alert("cost="+cost);
}