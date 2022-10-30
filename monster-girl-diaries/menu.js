"use strict";

var stories = document.getElementsByClassName("story");
var story_buttons = document.getElementsByClassName("monster-button");
var story_close = document.getElementById("button-close");
var story_close_container = document.getElementsByClassName("button-close-container")[0];

function jump_to( id ) {
    window.location.href="#" + id; 
}

// open button callback

function open_story( id ) {
    return function () {
        story_id = id;
        story_elems[id].button.classList.add("hidden");
        story_elems[id].story.classList.remove("hidden");
        story_close_container.classList.remove("hidden");
    };
}

// create events for each button

var story_elems = {};

for( var i=0; i < story_buttons.length; i++ ) {
    var b = story_buttons[i];
    if( b.id != "button-close" ) {
        var story_name = b.dataset.monster;
        story_elems[story_name] = {};
        story_elems[story_name].button = b;
        b.addEventListener("click", open_story(story_name));
    }
}

for( var i=0; i < stories.length; i++ ) {
    var s = stories[i];
    var story_name = s.dataset.monster;
    story_elems[story_name].story = s;
    s.classList.add("hidden");
}

// close button

var story_id = "index";

function close_all() {
    for( var monster in story_elems ) {
        var e = story_elems[monster];
        e.story.classList.add("hidden");
        e.button.classList.remove("hidden");
    }
    story_close_container.classList.add("hidden");
    jump_to(story_id);
}

story_close.addEventListener( "click", close_all);
story_close_container.classList.add("hidden");

// create index

function capitalize( string ) {
    return string[0].toUpperCase() + string.slice(1);
}
