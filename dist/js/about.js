"use strict";for(var about=document.getElementById("about"),lis=about.getElementsByTagName("li"),divs=about.getElementsByClassName("change"),i=0;i<lis.length;i++)lis[i].onclick=function(){for(var e=0;e<lis.length;e++)console.log(e),lis[e].className="",divs[e].className="change";this.className="active";var s=this.getAttribute("wy");divs[s].className="change active"};