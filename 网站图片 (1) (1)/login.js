$(function(){var i=0;
 $(".checkbox").click(function(){
 
 	if(i%2==0){
 		 $(this).css("background-position","-22px -22px");
 	}else{
 		 $(this).css("background-position","-2px -22px");

 	}
   i++;
 })
$(".inputlogin").click(function(){
	$(this).css("border","0.5px solid #009c4c")

})


})