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
    console.log("OK");
}

for( var i=0; i<submenus.length; i++ ) {
    submenus[i].menuNumber = i;
    submenus[i].addEventListener("click", showMenu);
}

document.getElementById("docbody").addEventListener("click", hideMenu);

// image display

var view = document.getElementById("showimage");
if( view !== null ) {
    var bigimg = document.getElementById("imgbig");
    function openView(toggle, img) {
	return function() {
	    if( toggle ) {
		bigimg.src = img.dataset.src;
		view.classList.remove("hide");
	    } else {
		view.classList.add("hide");
	    }
	};
    }

    view.addEventListener("click", openView(false,"wait.svg"));
    var thumbs = document.getElementsByClassName("thumb");
    var screenshots = document.getElementsByClassName("screenshot");
    for( var i=0; i<thumbs.length; i++ ) {
	thumbs[i].addEventListener("click", openView(true, thumbs[i]));
    }
    for( var i=0; i<screenshots.length; i++ ) {
	screenshots[i].addEventListener("click", openView(true, screenshots[i]));
    }
}
