var c = document.getElementById("board");
var ctx = c.getContext("2d");

var sbutton = document.getElementById("sbutton");

var ebutton = document.getElementById("ebutton");
var cebutton = document.getElementById("cebutton");

var dbutton = document.getElementById("dbutton");
var cdbutton = document.getElementById("cdbutton");

var expanding = true;
var requestID = 0;

sbutton.addEventListener('click', function() { 
	
	window.cancelAnimationFrame( requestID );

    });

var radius = 1;

var restart1 = function() {

    window.cancelAnimationFrame( requestID );
    radius = 1;
    expanding = true;
    animate();

};

var animate = function() {

    window.cancelAnimationFrame( requestID );

    console.log(requestID);

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

var height1 = 20;
var width1 = 30;

var x = Math.floor(Math.random() * (500-width1));
var y = Math.floor(Math.random() * (500-height1));

var vx = 1;
var vy = 1;

var restart2 = function() {

    window.cancelAnimationFrame( requestID );
    x = Math.floor(Math.random() * (500-width1));
    y = Math.floor(Math.random() * (500-height1));    
    animate2();

};

var animate2 = function() {

    window.cancelAnimationFrame( requestID );

    console.log(requestID);

    ctx.clearRect(0, 0, c.width, c.height);
    
    var drawRect = function() {
	
	ctx.fillRect(x,y,width1,height1);
	x += vx;
	y += vy;

    };

    var checkDir = function() {
	
	if (x + width1 == c.width || x == 0) {
	    vx = vx * -1;
	}
	else if (y + height1 == c.height || y == 0) {
	    vy = vy * -1;
	}
	
    };

    checkDir();

    drawRect();
    requestID = window.requestAnimationFrame( animate2 );
};



ebutton.addEventListener('click', restart1);
cebutton.addEventListener('click', animate);
dbutton.addEventListener('click', restart2);
cdbutton.addEventListener('click', animate2);