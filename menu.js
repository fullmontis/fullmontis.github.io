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
    view.addEventListener("click", openView(false, "/icons/wait.svg", view, false));

    var thumbs = document.getElementsByClassName("art-thumb");

    for( var i=0; i<thumbs.length; i++ ) {
	    thumbs[i].addEventListener("click", openView(true, thumbs[i], view, false));
    }
}

function openView( toggle, img, dest, is_comic ) {
    return function() {
	    if( toggle ) {
	        if( is_comic ) {
		        bigimg.classList.remove("artimg");
		        bigimg.classList.add("comicimg");
	        } else {
		        bigimg.classList.remove("comicimg");
		        bigimg.classList.add("artimg");
	        }
            
	        bigimg.src = "/icons/wait.svg";
	        bigimg.src = img.dataset.src;
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

var link_list = document.getElementsByClassName("link-list")[0];
var open_links = document.getElementById("open-links");
open_links.addEventListener("click", function() {
    link_list.style.maxHeight = "none";
    link_list.style.maskImage = "none";
    open_links.style.display = "none";
});
