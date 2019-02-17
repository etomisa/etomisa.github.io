//スマートフォン

/*menu*/
function dispMenu(){
	$('#menu').animate({height:'toggle'},180);
	}

/*google+1ボタン*/
  window.___gcfg = {lang: 'ja'};

  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();

function goPC(){
	var exp=new Date();
	exp.setDate(exp.getDate()+1);
	document.cookie='ngzk_smph_sw=1; expires='+exp.toGMTString()+'; domain=nogizaka46.com; path=/';
	var pcurl=window.location.pathname.replace('/smph','');
	window.location.href=pcurl;
	}