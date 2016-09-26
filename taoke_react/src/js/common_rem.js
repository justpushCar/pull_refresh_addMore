export const b_rem=  function(){
	(function(n){
		var e=n.document,t=e.documentElement,i=1600,d=i/100,
		o="orientationchange"in n?"orientationchange":"resize",
        a=function(){
    	var n=t.clientWidth||320;n>1000&&(n=1000)
    	t.style.fontSize=n/d+"px"
    	};
        e.addEventListener&&(n.addEventListener(o,a,!1),
        e.addEventListener("DOMContentLoaded",a,!1))
    }(window));
//默认为16rem
}
