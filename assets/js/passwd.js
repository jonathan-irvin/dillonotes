function randOrd(){return(Math.round(Math.random())-0.5);}
function password(){var i1=0;var i2=0;var i3=0;var i4=0;var i5=0;var password=new Array();var r1;var r2;var r3;var r4;while(i1<4){r1=(Math.floor((Math.random()*100))%94)+33;if((r1>=33)&&(r1<=47)){continue;}
if((r1>=58)&&(r1<=126)){continue;}
i1++;password.push(String.fromCharCode(r1));}
while(i2<4){r2=(Math.floor((Math.random()*100))%94)+33;if((r2>=33)&&(r2<=96)){continue;}
if((r2>=123)&&(r2<=126)){continue;}
i2++;password.push(String.fromCharCode(r2));}
while(i3<4){r3=(Math.floor((Math.random()*100))%94)+33;if((r3>=33)&&(r3<=64)){continue;}
if((r3>=91)&&(r3<=126)){continue;}
i3++;password.push(String.fromCharCode(r3));}
while(i4<4){r4=(Math.floor((Math.random()*100))%94)+33;if((r4>=48)&&(r4<=57)){continue;}
if((r4>=65)&&(r4<=90)){continue;}
if((r4>=97)&&(r4<=122)){continue;}
i4++;password.push(String.fromCharCode(r4));}
while(i5<20){password.sort(function(){return 0.5-Math.random()});i5++;}
var genpass=password.join('');document.getElementById('afnetpasswd').value=genpass;}