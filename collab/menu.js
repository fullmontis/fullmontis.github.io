"use strict";

// todo: move to position when closing and opening a story
// todo: index
// todo: style hyperlinks

var monsters_to_authors =  {
    alraune: "Fishthemudkip",
    arachne: "fullmontis",
    cyclop: "Karnoss",
    dragon: "Nickzilla2000",
    dullahan: "Scarlet",
    elemental: "RHappyFace",
    fairy: "Nacon",
    goblin: "Movail",
    harpy: "Elsen",
    harpyquinn: "Sector",
    hydra: "reer",
    imp: "Zombiate",
    kitsune: "Zedrin",
    kobold: "Owl",
    lamia: "paperskinned",
    mermaid: "DaniDaniel",
    mimic: "MisterSouji",
    oni: "TushiTrash",
    slime: "pandaz90",
    sphinx: "Sable",
    succubus: "LethalBliss",
    werewolf: "Crimellgrim",
    zombie: "TheBigDuurnt"
};

var stories = document.getElementsByClassName("story");
var story_buttons = document.getElementsByClassName("monster-button");

function jump_to( id ) {
    window.location.href="#" + id; 
}

// open button callback

function open_story( id ) {
    return function () {
        story_id = id;
        story_elems[id].button.classList.add("hidden");
        story_elems[id].story.classList.remove("hidden");
        story_close.classList.remove("hidden");
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
    story_close.classList.add("hidden");
    jump_to(story_id);
}

var story_close = document.getElementById("button-close");
story_close.addEventListener( "click", close_all);
story_close.classList.add("hidden");

// create index

function capitalize( string ) {
    return string[0].toUpperCase() + string.slice(1);
}

// var index = document.getElementById("index");
// for( var monster in story_elems ) {
//     var li = document.createElement("li");
//     li.innerHTML = "<a href='#" + monster + "'><b>" + capitalize(monster) + "</b><br><span class='index-author'>by " + monsters_to_authors[monster] + "</span></a>";
//     li.classList.add("button");
//     index.appendChild(li);
// }
