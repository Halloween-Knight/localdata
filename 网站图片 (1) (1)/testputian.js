window.onload=function(){
var secondarymenu=document.getElementsByClassName('destination')[0];
var ulsecond=document.getElementsByClassName('city')[0];
secondarymenu.onmousemove=function(){
  this.style="box-sizing: border-box;outline: 1px solid lightgray;background: white;"
   ulsecond.style="display:block;"
}
secondarymenu.onmouseout=function(){
    this.style="";
    ulsecond.style="display:none;"
}
var language=document.getElementsByClassName('language')[0];
var languages=document.getElementsByClassName('languagechoose')[0];

language.onmousemove=function(){
languages.style="display:block;"
this.style="outline: 1px solid lightgray;background: white;"
}
languages.onmousemove=function(){
languages.style="display:block;"
language.style="outline: 1px solid lightgray;background: white;"
}
languages.onmouseout=function(){
languages.style="display:none;"
language.style="";

}
language.onmouseout=function(){
languages.style="display:none;"
this.style=""
}

var attentions=document.getElementsByClassName('attention')[0];
var attp=attentions.getElementsByTagName('p')[0];
var attentiontwo=document.getElementsByClassName('attentiontwo')[0];
var attentiondiv=attentiontwo.getElementsByTagName('div')[0];
var wechatpic=attentions.getElementsByClassName('wechat')[0];
attentions.onmousemove=function(){
    attp.style="color:#009c4c"
    attentions.style="background:white;outline:1px solid lightgray;"
    attentiontwo.style="display:block;background:white;"

}
attentions.onmouseout=function(){
    attp.style="color:"
    attentions.style="background:"
    attentiontwo.style="display:none;"
}
attentiondiv.onmousemove=function(){
    wechatpic.style="display:block;"
    attentiontwo.style="display:block;"
}
attentiondiv.onmouseout=function(){
    wechatpic.style="display:none;"
    attentiontwo.style="display:none;"
}
 var phone=document.getElementsByClassName('phone')[0];
var phoneqrcode=phone.getElementsByClassName('phoneqrcode')[0];
phone.onmousemove=function(){
    phoneqrcode.style="display:block;"
}
phone.onmouseout=function(){
    phoneqrcode.style="display:none;"
}
var myaccounts=document.getElementsByClassName("myaccount")[0];
var myaccounttwo=document.getElementsByClassName("myaccountsecond")[0];
myaccounts.onmousemove=function(){
 myaccounttwo.style="display:block;"
}
myaccounts.onmouseout=function(){
 myaccounttwo.style="display:none;"
}
var ulsbigbox=document.getElementsByClassName('flashimg')[0];
var imgs=ulsbigbox.getElementsByTagName('li');
var pages=document.getElementsByClassName('flashpage')[0];
var lis=pages.getElementsByTagName('li');
var prev=document.querySelector(".prev");
var next=document.querySelector(".next");



var index=0;
var timer=null;

    timer=setInterval(function(){
    index++
    change();
},2000)
ulsbigbox.onmouseenter=function(){
    clearInterval(timer)
}
ulsbigbox.onmouseleave=function(){
    timer=setInterval(function(){
    index++
    change();
},2000)
}

for(var n=0;n<lis.length;n++){
    lis[n].index=n;
    lis[n].onclick=function(){
        index=this.index;
        change();
    }
}

prev.onclick=function(){
    index--
    change();
}
next.onclick=function(){
    index++;
    change();
}

function change(){
    for(var t=0;t<imgs.length;t++){
        imgs[t].style.display="none";
        lis[t].style.background="gray";
    }
    if (index>imgs.length-1) {
        index=0;
    }
    if(index<0){
        index=imgs.length-1;

    }
    imgs[index].style.display="block";
    lis[index].style.background="springgreen";
}



var piccol=document.getElementById('piccol');
console.log(piccol)
piccol.style="background:url(img/remaixinpin.jpg)no-repeat";
var hotnew=document.getElementById('hotnew');


// 置顶
var scrtop=document.getElementsByClassName('scroll-top')[0];
var imgtop=scrtop.getElementsByTagName('img')[3];
    flag=true;
window.onscroll=function(){

    var scorollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if(scorollTop>=350&&flag){
     scrtop.style="display:block;"
    }else{
        scrtop.style="display:none;"
    }
}
imgtop.onclick=function(){
    scrtop.style="display:none;"
    var timer=setInterval(function(){
        flag=false;
    var scorollTop=document.body.scrollTop||document.documentElement.scrollTop;
    window.scrollBy(0,-100);
    if(scorollTop<=0){
        clearInterval(timer);
        flag=true;
    }
    },20)
}


$(".city li p").click(function(){
    $("#dizhi").html(this);
  
})



var intop= $(".topsearch").offset().top;
$(window).scroll(function(){
 if($(window).scrollTop()>intop){
    $(".topsearch").addClass("topfixed");
    $(".hot").css("display","none");
 


  
 }else{
    $(".topsearch").removeClass("topfixed");
    $(".hot").css("display","block");

    $(".nav-kind a").css("margin-top","");
    
   

 }

})

$(".nav-all li ").mouseover(function(){
    $(".opentwo").css("display","block")
    $(".nav-all li a").eq($(this).index()).css({"color":"#009c4c","margin-left":"-3px"})
    $(".nav-all li i").eq($(this).index()).css("background-position","-553px -259px")
})
$(".nav-all li ").mouseout(function(){
    // $(".opentwo").html();
    $(".nav-all li a").eq($(this).index()).css({"color":"","margin-left":"0px"})
    $(".nav-all li i").eq($(this).index()).css("background-position","")
    $(".opentwo").css("display","none")

})



// console.log($(".foodchoose:eq(1) li:eq(4) a"));
  


}






