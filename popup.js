document.addEventListener('DOMContentLoaded', function() {
    const whiteboard = document.getElementById('whiteboard');
    // detect when first click occurs (can use mousedown event listener)
    // on initial mousedown, get current location of cursor 
    // last known position obj {x: num, y: num}; 
    // let mouseX = mouseY = 0;
    // let lastMouseX = lastMouseY = 0;
    // whiteboard has selected the canvas from the html file, need to convert it into a 2d version
    let canvas2d = whiteboard.getContext('2d');
    // let canvasx = canvas2d.st
    let mouseLoc = {x: 0, y: 0};

    //event listening to mousedown --> you clicked and are starting  
    whiteboard.addEventListener('mousedown', setLoc);
    whiteboard.addEventListener('mousemove', draw);
    whiteboard.addEventListener('mouseenter', setLoc);
    
    
    // def function setLoc; 
    function setLoc(e) {
        mouseLoc.x = parseInt(e.clientX - 25);
        mouseLoc.y = parseInt(e.clientY - 50);
    }
    // }
    //skipping resize --> popup and main window don't talk


    //def function for draw
    function draw(e) {
        //if no left click 
        if (e.buttons !== 1) return; 

        //start line
        canvas2d.beginPath();

        //def line specs
        canvas2d.lineWidth = 2;
        canvas2d.lineCap = 'round';
        canvas2d.strokeStyle = '#c0392b';

        //moving the line
        canvas2d.moveTo(mouseLoc.x, mouseLoc.y);
        setLoc(e);
        canvas2d.lineTo(mouseLoc.x, mouseLoc.y);

        canvas2d.stroke(); //painting
    }
})
