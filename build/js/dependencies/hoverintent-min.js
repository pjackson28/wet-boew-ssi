/*!*
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function(a){a.fn.hoverIntent=function(k,j){var l={sensitivity:7,interval:100,timeout:0};l=a.extend(l,j?{over:k,out:j}:k);var n,m,h,d;var e=function(f){n=f.pageX;m=f.pageY};var c=function(g,f){f.hoverIntent_t=clearTimeout(f.hoverIntent_t);if((Math.abs(h-n)+Math.abs(d-m))<l.sensitivity){a(f).unbind("mousemove",e);f.hoverIntent_s=1;return l.over.apply(f,[g])}else{h=n;d=m;f.hoverIntent_t=setTimeout(function(){c(g,f)},l.interval)}};var i=function(g,f){f.hoverIntent_t=clearTimeout(f.hoverIntent_t);f.hoverIntent_s=0;return l.out.apply(f,[g])};var b=function(o){var g=jQuery.extend({},o);var f=this;if(f.hoverIntent_t){f.hoverIntent_t=clearTimeout(f.hoverIntent_t)}if(o.type=="mouseenter"){h=g.pageX;d=g.pageY;a(f).bind("mousemove",e);if(f.hoverIntent_s!=1){f.hoverIntent_t=setTimeout(function(){c(g,f)},l.interval)}}else{a(f).unbind("mousemove",e);if(f.hoverIntent_s==1){f.hoverIntent_t=setTimeout(function(){i(g,f)},l.timeout)}}};return this.bind("mouseenter",b).bind("mouseleave",b)}})(jQuery);