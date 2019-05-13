// menu management

var submenus = document.getElementsByClassName("submenu");

function showMenu() {
    for( var i=0; i<submenus.length; i++ ) {
	if( submenus[i].menuNumber != this.menuNumber ) {
	    submenus[i].getElementsByClassName("navbar")[0].classList.add("hide");
	}
    }
    var sub = this.getElementsByClassName("navbar")[0];
    if( sub.classList.contains("hide") ) {
	sub.classList.remove("hide");
    } else {
	sub.classList.add("hide");
    }
}

function hideMenu() {
    for( var i=0; i<submenus.length; i++ ) {
	submenus[i].getElementsByClassName("navbar")[0].classList.add("hide");
    }
}

for( var i=0; i<submenus.length; i++ ) {
    submenus[i].menuNumber = i;
    submenus[i].addEventListener("click", showMenu);
}

document.getElementById("docbody").addEventListener("click", hideMenu);

// image display

var view = document.getElementById("showimage");
var bigimg = document.getElementById("imgbig");

if( view !== null ) {
    
    view.addEventListener("click", openView(false,"wait.svg", view, false));

    var thumbs = document.getElementsByClassName("thumb");
    var screenshots = document.getElementsByClassName("screenshot");
    var comics = document.getElementsByClassName("comic-thumb");

    for( var i=0; i<thumbs.length; i++ ) {
	thumbs[i].addEventListener("click", openView(true, thumbs[i], view, false));
    }
    for( var i=0; i<screenshots.length; i++ ) {
	screenshots[i].addEventListener("click", openView(true, screenshots[i], view, false));
    }
    for( var i=0; i<comics.length; i++ ) {
	comics[i].addEventListener("click", openView(true, comics[i], view, true));
    }
}

function openView(toggle, img, dest, isComic) {
    return function() {
	console.log(dest);
	if( toggle ) {
	    if( isComic ) {
		bigimg.classList.remove("artimg");
		bigimg.classList.add("comicimg");
	    } else {
		bigimg.classList.remove("comicimg");
		bigimg.classList.add("artimg");
	    }
	    bigimg.src = img.dataset.src;
	    dest.classList.remove("hide");
	    dest.scrollTop = 0;
	    
	} else {
	    dest.classList.add("hide");
	}
    };
}

