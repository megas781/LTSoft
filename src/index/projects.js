console.log('projects.js here!');

let scrollController = require("./index.js").scrollController;

document.querySelectorAll('.projects__project').forEach(function (project) {

    let tween = new TweenLite.from(project, 1, {
        y: 50,
        opacity: 0,
        ease: Power1.easeOut
    });
    let projectCellScene = new ScrollMagic.Scene({
        triggerHook: 0.9,
        triggerElement: project
    });
    projectCellScene.setTween(tween);
    projectCellScene.addTo(scrollController);
});
