var c = document.getElementById("board");
var ctx = c.getContext("2d");

var sbutton = document.getElementById("sbutton");

var expanding = true;
var requestID = 0;

sbutton.addEventListener('click', function() { 
	
	window.cancelAnimationFrame( requestID );

    });

var radius = 1;

var animate = function() {

    window.cancelAnimationFrame( requestID );

    ctx.clearRect(0, 0, c.width, c.height);

    var drawCircle = function() {
	if (expanding) {
	    ctx.beginPath();
	    ctx.arc(250, 250, radius, 0, 2* Math.PI);
	    ctx.fill();//draws circle
	    radius++;
	}
	else {
	    ctx.beginPath();
	    ctx.arc(250, 250, radius, 0, 2* Math.PI);
	    ctx.fill();//draws circle
	    radius--;
	}
    };

    var checkExpand = function() {
	
	if (radius == c.height/2 || radius == 0) {
	    expanding = !expanding;
	}
	
    };

    checkExpand();

    drawCircle();
    requestID = window.requestAnimationFrame( animate );
};



c.addEventListener('click', animate);
