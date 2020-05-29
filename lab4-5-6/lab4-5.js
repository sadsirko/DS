'use strict';
 
class GraphClass
 {
	constructor(num,G_count)
	{
		this.alfa = 2 * Math.PI / G_count * (num - 1);
		this.x = canvas.width / 2 + RADIUS * Math.cos(this.alfa);
		this.y = canvas.height / 2 + RADIUS * Math.sin(this.alfa);
		this.num = num;
		this.x2 = canvas.width / 2 + (RADIUS + R_OF_OUT_CIRCLE + RADIUS_GR) * Math.cos(this.alfa) ;
		this.y2 = canvas.height / 2 + (RADIUS + R_OF_OUT_CIRCLE + RADIUS_GR) * Math.sin(this.alfa);
		this.x3 = canvas.width / 2 + (RADIUS + R_OF_OUT_CIRCLE*2 + RADIUS_GR) * Math.cos(this.alfa) ;
		this.y3 = canvas.height / 2 + (RADIUS + R_OF_OUT_CIRCLE*2 + RADIUS_GR) * Math.sin(this.alfa);
    this.graphDegree = 0;
    this.graphInDegree = 0;
    this.graphOutDegree = 0;
    
		
	}
}

class Vector
 {
	
	constructor(x1, y1, x2, y2 , num)
	{
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.num = num;
		this.x = x2 - x1;
		this.y = y2 - y1;
		this.x3 = x1 + this.x / ((this.length()) / RADIUS_GR);
	  this.y3 = y1 + this.y / ((this.length()) / RADIUS_GR);
		this.x4 = x2 - this.x / ((this.length()) / RADIUS_GR);
	  this.y4 = y2 - this.y / ((this.length()) / RADIUS_GR);
	  this.pair = false;
	}

	add(secVector) 
	{
		this.x = secVector.x + this.x;
	 	this.y = secVector.y + this.y;
	}
    
	sub(secVector) 
	{
		this.x = this.x - secVector.x;
	 	this.y = this.y - secVector.y;
	}

	length()
	{
		return Math.sqrt(this.x ** 2 + this.y ** 2); 
	}
	lengthx3x4()
	{
		return Math.sqrt((this.x4 - this.x3) ** 2 + (this.y4 - this.y3) ** 2); 
	
	}

}


// next - controle the count of times when you click NEXT
createAndDrawG(G_COUNT);

//source.innerHTML += arrN;
//document.body.appendChild(element2);

elemN.onclick = Napr;
elemNext.onclick = workWithBFS;
elemUn.onclick = UnNapr;
elemMatrix.onclick = writeArr;
elemClear.onclick = clearBFS;
elemBFS.onclick = justBFS;
elemTwoStep.onclick = writeTwoStep;
elemThreeStep.onclick = writeThreeStep;
elemDos.onclick = writeDos;
elemLink.onclick = writeLink;
elemSortLink.onclick = writeStrongLinks;
elemCreateCondGr.onclick = makeGraphConds;
elemPrim.onclick = fullKist;
elemPrimStep.onclick = weightIteration;
elemWeight.onclick = fullWeight;
elemDejkStep.onclick = dejkStep;