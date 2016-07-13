
var cont_modal = 0;
function modal_int_t(opt) {

cont_modal++;
var tamanio = opt.size || 'grande'
,open_ = opt.open_ || '1'
,ajaxs_ = opt.ajax || 'false'
,archivo = opt.archivo || ''
,url = opt.url_ || ''
,fin_ajax = opt.fin || function () { console.log('no'); }
id_modal =  'modal_'+opt.id_m || 'modal_'+cont_modal;
console.log(ajaxs_);

var modal_g = document.createElement('div');
modal_g.className = "cont_modal_front_princ";
modal_g.id = id_modal;
modal_g.style.zIndex = "100"+cont_modal;
 modal_g.innerHTML = '<div class="modal_headr"> <div class="cont_icon_back"><a href="#back" onclick= "modal_int_t({ open_:\'0\', id_m: \''+id_modal+'\', size:\'grandre\' })" ><i class="material-icons">&#xE5C4;</i></a> </div> </div><div class="cont_body_modal"></div>';

var modal_back = document.createElement('div');
modal_back.className = "cont_modal_peq_back";
modal_back.id = "modal_peq_back_modal_"+cont_modal;

var modal_peq = document.createElement('div');
modal_peq.className = "cont_modal_peq";
modal_peq.id = id_modal;
modal_peq.style.zIndex = "100"+cont_modal;
modal_peq.innerHTML = '	<div class="modal_headr"> <div class="cont_icon_back"> <a href="#back" onclick= "modal_int_t({ open_:\'0\', id_m: \''+id_modal+'\', size:\'peq\' })"  > <i class="material-icons">&#xE14C;</i> </a> </div> </div> <div class="cont_body_modal_p"></div>'; 

if (tamanio == 'grande') {
	document.body.appendChild(modal_g);
if (ajaxs_ == true ) {

 _ajaxs({ 
 	url: url,
 	file: archivo,
    fin:function(rpst) { 

 document.querySelectorAll('#'+id_modal+' > .cont_body_modal')[0].innerHTML = rpst; 
fin_ajax();
} });
 
}


}

if (tamanio == 'peq') {
	document.body.appendChild(modal_peq);
	document.body.appendChild(modal_back);

if (ajaxs_ == true) {

 _ajaxs({ 
 	url: url,
 	file: archivo,
    fin:function(rpst) { 
 document.querySelectorAll('#'+id_modal+' > .cont_body_modal_p')[0].innerHTML = rpst; 
fin_ajax();
} });
 
}
 
}
 
var elemt = document.querySelector('#'+id_modal);
if (open_ == '1' ) {
elemt.style.display = "block"; 
if(document.getElementById('modal_peq_back_'+id_modal)){
document.getElementById('modal_peq_back_'+id_modal).style.display = "block";	
} 
setTimeout(function  () {
elemt.style.opacity = "1"; 
console.log('modal_peq_back_'+id_modal);
if(document.getElementById('modal_peq_back_'+id_modal)){
document.getElementById('modal_peq_back_'+id_modal).style.opacity = "1";	
} 

}, 100);
}else{
elemt.style.opacity = "0";
if(document.getElementById('modal_peq_back_'+id_modal)){
document.getElementById('modal_peq_back_'+id_modal).style.opacity = "0";	
}  
setTimeout(function() {
elemt.style.display = "none"; 
if(document.getElementById('modal_peq_back_'+id_modal)){
document.getElementById('modal_peq_back_'+id_modal).style.display = "none";	 
} 

if (tamanio == 'grande') {
 document.querySelectorAll('#'+id_modal+' > .cont_body_modal')[0].innerHTML = ''; 
 }else{
 	document.querySelectorAll('#'+id_modal+' > .cont_body_modal_p')[0].innerHTML = ''; 
 }
}, 500);
}
 }
