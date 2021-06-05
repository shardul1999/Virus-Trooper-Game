function init()
{

	canvas = document.getElementById('mycanvas');
	console.log(canvas);
	W=canvas.width=1400;
	H=canvas.height=1250;
	pen = canvas.getContext('2d');
	console.log(pen);
	soldier={
		x:50,
		y:450,
		w:100,
		h:200,
		moving: false
	};

	box1={
		x:250,
		y:900,
		w:60,
		h:60,
		speed:1
	};

	box2={
		x:450,
		y:800,
		w:60,
		h:60,
		speed:-1
	};


	box3={
		x:650,
		y:1100,
		w:60,
		h:60,
		speed:1
	};

	box4={
		x:850,
		y:400,
		w:60,
		h:60,
		speed:1
	};

	gem={
		x:1050,
		y:300,
		w:100,
		h:100
	};

	soldier_img=new Image();
	soldier_img.src="assets/img_face.png";

	virus_img1=new Image();
	virus_img1.src="assets/img_virus1.png";


	virus_img2=new Image();
	virus_img2.src="assets/img_virus1.png";

	virus_img3=new Image();
	virus_img3.src="assets/img_virus1.png";

	gem_img=new Image();
	gem_img.src="assets/img_gem.png";

	function keyPressed()
	{
		soldier.moving=true;
	}
	function keyPressed1()
	{
		soldier.moving=false;
	}
	classes=[box1,box2,box3,box4,soldier,gem];
	imgs=[virus_img1,virus_img2,virus_img3,virus_img3,soldier_img,gem_img];
	sz=[2,2,2,2,1,3];
	canvas.addEventListener('mousedown',keyPressed);
	canvas.addEventListener('mouseup',keyPressed1);

}

function draw()
{
	pen.clearRect(0,0,W,H);
	pen.fillText("!",50,500);
	pen.fillStyle="red";
	for(let i=0;i<imgs.length;i++)
		pen.drawImage(imgs[i],classes[i].x,classes[i].y,classes[i].w*sz[i],classes[i].h*sz[i]);
}

function update()
{

	if(soldier.x>=1150)
	{
		pen.font="100px roboto";
		pen.fillText("YOU WON!!",450,600);
		clearInterval(f);
	}
	/*(((box.x<soldier.x && soldier.x<(box.x+box.w))&&(box.y<soldier.y && soldier.y<(box.y+box.w ))) || 
		((box.x<soldier.x && soldier.x<(box.x+box.w))&&(soldier.y<box.y && box.y<(soldier.y+soldier.w))) ||
		((soldier.x<box.x && box.x<(soldier.x+soldier.w))&&((box.y<soldier.y && soldier.y<(box.y+box.w )))) ||
		((soldier.x<box.x && box.x<(soldier.x+soldier.w))&&(box.y<soldier.y && soldier.y<(box.y+box.w ))))*/
	
	console.log(soldier.x);
	if(((box1.x<soldier.x && soldier.x<(box1.x+2*box1.w-5))&&(box1.y<soldier.y && soldier.y<(box1.y+2*box1.w-5 ))) || 
		((box1.x<soldier.x && soldier.x<(box1.x+2*box1.w-5))&&(soldier.y<box1.y && box1.y<(soldier.y+soldier.h-5))) ||
		((soldier.x<box1.x && box1.x<(soldier.x+soldier.w-5))&&((box1.y<soldier.y && soldier.y<(box1.y+2*box1.w -5)))) ||
		((soldier.x<box1.x && box1.x<(soldier.x+soldier.w-5))&&(soldier.y<box1.y && box1.y<(soldier.y+soldier.h-5))))
		{
			clearInterval(f);
			pen.fillStyle="Red";
			pen.font="100px roboto";
			pen.fillText("GAME OVER!",400,650);
		}
	else if(((box2.x<soldier.x && soldier.x<(box2.x+2*box2.w))&&(box2.y<soldier.y && soldier.y<(box2.y+2*box2.w ))) || 
		((box2.x<soldier.x && soldier.x<(box2.x+2*box2.w))&&(soldier.y<box2.y && box2.y<(soldier.y+soldier.h))) ||
		((soldier.x<box2.x && box2.x<(soldier.x+soldier.w))&&((box2.y<soldier.y && soldier.y<(box2.y+2*box2.w )))) ||
		((soldier.x<box2.x && box2.x<(soldier.x+soldier.w))&&(soldier.y<box2.y && box2.y<(soldier.y+soldier.h))))
		{
			clearInterval(f);
			pen.fillStyle="Red";
			pen.font="100px roboto";
			pen.fillText("GAME OVER!",400,650);
		}
	else if(((box3.x<soldier.x && soldier.x<(box3.x+2*box3.w))&&(box3.y<soldier.y && soldier.y<(box3.y+2*box3.w ))) || 
		((box3.x<soldier.x && soldier.x<(box3.x+2*box3.w))&&(soldier.y<box3.y && box3.y<(soldier.y+soldier.h))) ||
		((soldier.x<box3.x && box3.x<(soldier.x+soldier.w))&&((box3.y<soldier.y && soldier.y<(box3.y+2*box3.w )))) ||
		((soldier.x<box3.x && box3.x<(soldier.x+soldier.w))&&(soldier.y<box3.y && box3.y<(soldier.y+soldier.h))))
		{
			clearInterval(f);
			pen.fillStyle="Red";
			pen.font="100px roboto";
			pen.fillText("GAME OVER!",400,650);
		}
	else if(((box4.x<soldier.x && soldier.x<(box4.x+2*box4.w))&&(box4.y<soldier.y && soldier.y<(box4.y+2*box4.w ))) || 
		((box4.x<soldier.x && soldier.x<(box4.x+2*box4.w))&&(soldier.y<box4.y && box4.y<(soldier.y+soldier.h))) ||
		((soldier.x<box4.x && box4.x<(soldier.x+soldier.w))&&((box4.y<soldier.y && soldier.y<(box4.y+2*box4.w )))) ||
		((soldier.x<box4.x && box4.x<(soldier.x+soldier.w))&&(soldier.y<box4.y && box4.y<(soldier.y+soldier.h))))
		{
			clearInterval(f);
			pen.fillStyle="Red";
			pen.font="100px roboto";
			pen.fillText("GAME OVER!",400,650);
		}
	if(soldier.moving)
	soldier.x+=50;
	soldier.direction=0;
	box1.y+=20*box1.speed;
	if((box1.x<=-10) || (box1.y<=-15) || (box1.x+100)>=W|| (box1.y+100)>=H)
				box1.speed*=-1;

	box2.y+=20*box2.speed;
	if((box2.x<=-10) || (box2.y<=-15) || (box2.x+100)>=W || (box2.y+100)>=H)
				box2.speed*=-1;

	box3.y+=20*box3.speed;
	if((box3.x<=-10) || (box3.y<=-15) || (box3.x+100)>=W|| (box3.y+100)>=H)
				box3.speed*=-1;
	box4.y+=20*box4.speed;
	if((box4.x<=-10) || (box4.y<=-15) || (box4.x+100)>=W|| (box4.y+100)>=H)
				box4.speed*=-1;
}

function game_loop()
{
	draw();
	update();
}

init();
var f=setInterval(game_loop,100);