window.onload=function(){
// var btns=document.getElementById('come');

// if(cookieObj.get("user")==undefined){
// 	cookieObj.set({name:"user",value:"[]"});
// }

// btns.onclick=function(){
// var userval=document.getElementsByTagName('input')[3].value;
// var passval=document.getElementsByTagName('input')[5].value;
// console.log(userval,passval);

// if(userval&&passval){
//  var userstr=cookieObj.get("user");
// var userarr=JSON.parse(userstr);
// for(var i=0;i<userarr.length;i++){
// 	if(userarr[i].user==userval){
// 		alert("用户名已存在");
// 		return
// 	}
// }
// userarr.push({user:userval,pass:passval});
// console.log(userarr);


// }
// }
 $(".newregiste li .checkbox").click(function(){
 
    if(i%2==0){
         $(this).css("background-position","-22px -22px");
    }else{
         $(this).css("background-position","-2px -22px");

    }
   i++;
 })
 $("newregiste li button").click(function(){
 	window.location.href="testputian.html"
 })
}