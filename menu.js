// menu management

// var submenus = document.getElementsByClassName("submenu");

// function showMenu() {
    
//     for( var i=0; i<submenus.length; i++ ) {
// 	    if( submenus[i].menuNumber != this.menuNumber ) {
// 	        submenus[i].getElementsByClassName("navbar")[0].classList.add("hide");
// 	    }
//     }
    
//     var sub = this.getElementsByClassName("navbar")[0];
    
//     if( sub.classList.contains("hide") ) {
// 	    sub.classList.remove("hide");
//     } else {
// 	    sub.classList.add("hide");
//     }
// }

// function hideMenu() {
//     for( var i=0; i<submenus.length; i++ ) {
// 	    submenus[i].getElementsByClassName("navbar")[0].classList.add("hide");
//     }
// }

// for( var i=0; i<submenus.length; i++ ) {
//     submenus[i].menuNumber = i;
//     submenus[i].addEventListener("click", showMenu);
// }

// document.getElementById("docbody").addEventListener("click", hideMenu);

// image display

var view = document.getElementById("showimage");
var bigimg = document.getElementById("imgbig");

if( view !== null ) {
    view.addEventListener("click", openView(false, "/icons/wait.svg", view));
    var oc_pics = Array.from(document.getElementsByClassName("oc-img"));
    var gallery_pics = Array.from(document.getElementsByClassName("gallery-img"));
    var pics = oc_pics.concat(gallery_pics);
    for( var i=0; i < pics.length; i++ ) {
	    pics[i].addEventListener("click", openView(true, pics[i], view));
    }
}

function openView( toggle, img, dest ) {
    return function() {
	    if( toggle ) {
	        bigimg.src = "/icons/wait.svg";
	        bigimg.src = img.src;
	        dest.classList.remove("hide");
	        dest.scrollTop = 0;
	        
	    } else {
	        dest.classList.add("hide");
	    }
    };
}

function toggleElement( element_id ){
  var d = document.getElementById(element_id);
  if( d.style.display == "none" ) {
    d.style.display = "block";
  } else {
    d.style.display = "none";
  }
  return false;
}

// generating links 

var a='mon';			
var b='ful';
var c='l';
var d='gm';
var t='lto:';
var e='ail.com';
var g='tis';
var h='@';
var s='mai';

var contact = document.getElementById('contact');
var contact2 = document.getElementById('contact2');
var link = document.getElementById('link');
if( contact !== null ) {
  contact.href= s+t+b+c+a+g+h+d+e;
  contact2.innerHTML += b+c+a+g+h+d+e;
  link.innerHTML = "<span class='color'>" +b+c+a+g+ "</span>"+h+d+e;
  console.log(contact,contact2);
}

var c1 = ".gg/";
var c2 = "https://";
var c3 = "discord";
var c4 = "jpQEAcDPyU";

document.getElementById("discord").href=c2+c3+c1+c4;
document.getElementById("discord2").innerHTML = c4;

// buttons to open up galleries

var link_list = document.getElementsByClassName("link-list")[0];
var open_links = document.getElementById("open-links");
open_links.addEventListener("click", function() {
    link_list.style.maxHeight = "none";
    link_list.classList.remove("masked");
    open_links.style.display = "none";
});

var oc_list = document.getElementsByClassName("oc-area")[0];
var open_ocs = document.getElementById("open-ocs");
open_ocs.addEventListener("click", function() {
    oc_list.style.maxHeight = "none";
    oc_list.classList.remove("masked");
    open_ocs.style.display = "none";
});


var gallery_list = document.getElementsByClassName("gallery")[0];
var open_gallery = document.getElementById("open-gallery");
open_gallery.addEventListener("click", function() {
    gallery_list.style.maxHeight = "none";
    gallery_list.classList.remove("masked");
    open_gallery.style.display = "none";
});
