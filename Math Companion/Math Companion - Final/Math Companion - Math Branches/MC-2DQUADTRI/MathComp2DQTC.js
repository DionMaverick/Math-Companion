//AREA OF A SQUARE

function SquareA(){
    var ti = document.createElement("p");
    ti.textContent = "AREA OF A SQUARE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the side length of a Square");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskAreaofASquare()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskAreaofASquare(){
    var SideLengthSquare = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the area of a square with a side length of " + SideLengthSquare;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    finalAnswer();
}

function finalAnswer(){
    var sidelength = document.getElementById("solve").value;
    
    var Area = sidelength * sidelength;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The area of a square with the side length of " + sidelength + " is " + Area;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "butareaSquare()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}

function butareaSquare(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var squareSideLength = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Area of a Square given the Side length:";
    p2.style.textAlign = "center";

    p3.textContent = "A = s²";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = area";
    p5.style.textIndent = "50px";

    p6.textContent = "s = side length";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the area of a square:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the side length (s)."
    p8.style.textAlign = "center";
    
    p9.textContent = squareSideLength + "²";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Square the side length (s)";
    p10.style.textAlign = "center";

    var AreaofASquare = squareSideLength * squareSideLength;
    p11.textContent = squareSideLength + "² = " + AreaofASquare;
    p11.style.textAlign = "center";

    p12.textContent = "A = " + AreaofASquare;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the area of a square with the side length of " + squareSideLength + " is " + AreaofASquare;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}
// PERIMETER OF A SQUARE

function PerimeterSquare(){
    var ti = document.createElement("p");
    ti.textContent = "PERIMETER OF A SQUARE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the side length of a Square");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskPerimeterofASquare()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskPerimeterofASquare(){
    var SideLengthSquare = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the perimeter of a square with a side length of " + SideLengthSquare;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    finalAnswerPerimeterSq();
}

function finalAnswerPerimeterSq(){
    var sidelength = document.getElementById("solve").value;
    
    var Perimeter = sidelength * 4;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The perimeter of a square with the side length of " + sidelength + " is " + Perimeter;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "PerimeterSquareRectangle()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}

function PerimeterSquareRectangle(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var squareSideLength = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Perimeter of a Square given the Side length:";
    p2.style.textAlign = "center";

    p3.textContent = "P = 4s";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "P = Perimeter";
    p5.style.textIndent = "50px";

    p6.textContent = "s = Side length";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the perimeter of a square:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the side length (s)."
    p8.style.textAlign = "center";
    
    p9.textContent = "4(" + squareSideLength + ")";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Multiply the side length by four (4)";
    p10.style.textAlign = "center";

    var PerimeterofASquare = 4 * squareSideLength;
    p11.textContent = squareSideLength + "* 4 = " + PerimeterofASquare;
    p11.style.textAlign = "center";

    p12.textContent = "P = " + PerimeterofASquare;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the perimeter of a square with the side length of " + squareSideLength + " is " + PerimeterofASquare;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//SIDE LENGTH OF A SQUARE GIVEN THE AREA

function SQSIDELENGTHGIVENAREA(){
    var ti = document.createElement("p");
    ti.textContent = "SIDE LENGTH OF A SQUARE GIVEN THE AREA";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the area of a Square");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSideofASquareA()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskSideofASquareA(){
    var Area = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the side length of a square with an area of " + Area;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    SLofASquareGivenArea();
}

function SLofASquareGivenArea(){
    var Area = document.getElementById("solve").value;
    
    var sidelength = Math.sqrt(Area);

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The side length of a square with an area of " + Area + " is " + sidelength;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionSideLengthGivenArea()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}

function SolutionSideLengthGivenArea(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Area = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Side Length of a Square given the area:";
    p2.style.textAlign = "center";

    p3.textContent = "S = √A";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area";
    p5.style.textIndent = "50px";

    p6.textContent = "S = Side length";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the side length of a square:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the area (A)."
    p8.style.textAlign = "center";
    
    p9.textContent = "S = √" + Area;
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Square root the area";
    p10.style.textAlign = "center";

    var SideLength = Math.sqrt(Area);
    p11.textContent = SideLength;
    p11.style.textAlign = "center";

    p12.textContent = "S = " + SideLength;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the side length of a square with an area of " + Area + " is " + SideLength;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}
//SIDE LENGTH OF A SQUARE GIVEN THE PERIMETER
function SQSIDELENGTHGIVENPERIMETER(){
    var ti = document.createElement("p");
    ti.textContent = "SIDE LENGTH OF A SQUARE GIVEN THE PERIMETER";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Perimeter of a Square");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSideofASquareP()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskSideofASquareP(){
    var Perimeter = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the side length of a square with a perimeter of " + Perimeter;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    SLofASquareGivenPerimeter();
}

function SLofASquareGivenPerimeter(){
    var Perimeter = document.getElementById("solve").value;
    
    var sidelength = Perimeter / 4;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The side length of a square with a perimeter of " + Perimeter + " is " + sidelength;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionSideLengthGivenPerimeter()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}

function SolutionSideLengthGivenPerimeter(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Perimeter = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Side Length of a Square given the perimeter:";
    p2.style.textAlign = "center";

    p3.textContent = "S = P / 4";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "P = Perimeter";
    p5.style.textIndent = "50px";

    p6.textContent = "S = Side length";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the side length of a square:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the perimeter (P)."
    p8.style.textAlign = "center";
    
    p9.textContent = Perimeter + " / 4";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Divide the Perimeter by 4";
    p10.style.textAlign = "center";

    var SideLength = Perimeter / 4;
    p11.textContent = SideLength;
    p11.style.textAlign = "center";

    p12.textContent = "S = " + SideLength;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the side length of a square with an perimeter of " + Perimeter + " is " + SideLength;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//DIAGONAL OF A SQUARE GIVEN THE SIDE LENGTH

function squarediagonal(){
    var ti = document.createElement("p");
    ti.textContent = "DIAGONAL OF A SQUARE GIVEN THE SIDE LENGTH";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Side Length of a Square");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskDiagonalOfASquare()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskDiagonalOfASquare(){
    var SideLength = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the diagonal of a square with a side length of " + SideLength;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    DiagonalOfASquareS();
}

function DiagonalOfASquareS(){
    var SideLength = document.getElementById("solve").value;
    
    var root2 = Math.sqrt(2);
    var diagonal = SideLength * root2;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The diagonal of a square with a perimeter of " + SideLength + " is " + diagonal;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionDiagonal()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}

function SolutionDiagonal(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var SideLength = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Diagonal of a Square given the side length:";
    p2.style.textAlign = "center";

    p3.textContent = "d = s√2";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "d = Diagonal of a Square";
    p5.style.textIndent = "50px";

    p6.textContent = "s = Side length";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the diagonal of a square:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the Side Length (s)."
    p8.style.textAlign = "center";
    
    p9.textContent = "d = " + SideLength + "√2";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Get the square root of 2";
    p10.style.textAlign = "center";

    var root2 = Math.sqrt(2);
    var diagonal = SideLength * root2;

    p11.textContent = SideLength + "(" + root2 + ")";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Multiply the side length to the square root of 2";
    p14.style.textAlign = "center";

    p15.textContent = diagonal;
    p15.style.textAlign = "center";

    p12.textContent = "d = " + diagonal;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the diagonal of a square with a side length of " + SideLength + " is " + diagonal;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}
//DIAGONAL OF A SQUARE GIVEN THE AREA
function DIAGONALOFASQUAREGIVENA(){
    var ti = document.createElement("p");
    ti.textContent = "DIAGONAL OF A SQUARE GIVEN THE AREA";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Area of a Square");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskDiagonalOfASquareA()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskDiagonalOfASquareA(){
    var Area = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the diagonal of a square with an area of " + Area;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    DiagonalOfASquare();
}

function DiagonalOfASquare(){
    var SideLength = document.getElementById("solve").value;
    
    var twiceArea = 2 * SideLength;
    var diagonal = Math.sqrt(twiceArea);

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The diagonal of a square with an area of " + SideLength + " is " + diagonal;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionDiagonalA()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionDiagonalA(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Area = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Diagonal of a Square given the area:";
    p2.style.textAlign = "center";

    p3.textContent = "d = √2A";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "d = Diagonal of a Square";
    p5.style.textIndent = "50px";

    p6.textContent = "A = Area";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the diagonal of a square given the Area:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "d = √2(" + Area +")";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Twice the Area ";
    p10.style.textAlign = "center";

    var AreaTwice = Area * 2;
    var diagonal = Math.sqrt(AreaTwice);

    p11.textContent = "√" + Area;
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the square root of √" + diagonal;
    p14.style.textAlign = "center";

    p15.textContent = "√"+diagonal;
    p15.style.textAlign = "center";

    p12.textContent = "d = " + diagonal;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the diagonal of a square with an area of " + Area + " is " + diagonal;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Diameter of a Circle given the Radius~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function DiameterOfCircleGivenR(){
    var ti = document.createElement("p");
    ti.textContent = "DIAMETER OF A CIRCLE GIVEN THE RADIUS";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Radius of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskDiameterOfACircle()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskDiameterOfACircle(){
    var Radius = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the diameter of a circle with a radius of " + Radius;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    DiameterOfACircle();
}

function DiameterOfACircle(){
    var Radius = document.getElementById("solve").value;
    
    var diameter = 2 * Radius;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var DiameterCircle = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The diameter of a circle with a radius of " + Radius + " is " + diameter;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionDiameterR()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionDiameterR(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var circleRadius = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";
    

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Diameter of a Circle given the radius:";
    p2.style.textAlign = "center";

    p3.textContent = "d = 2r";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "d = Diameter of a Circle";
    p5.style.textIndent = "50px";

    p6.textContent = "R = Radius";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the diameter of a circle given the radius:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "d = 2("+ circleRadius +")";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Multiply the Radius to two ";
    p10.style.textAlign = "center";

    var Diameter = 2 * circleRadius;

    p11.textContent = "2 x "+circleRadius;
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the square root of " + Diameter;
    p14.style.textAlign = "center";

    p15.textContent = Diameter;
    p15.style.textAlign = "center";

    p12.textContent = "d = " + Diameter;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the diameter of a circle with a radius of " + circleRadius + " is " + Diameter;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Radius of a Circle given the Diameter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function RadiusOfCircleGivenD(){
    var ti = document.createElement("p");
    ti.textContent = "RADIUS OF A CIRCLE GIVEN THE DIAMETER";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Diameter of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskRadiusOfACircle()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskRadiusOfACircle(){
    var Diameter = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the radius of a circle with a diameter of " + Diameter;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    RadiusOfACircle();
}

function RadiusOfACircle(){
    var Diameter = document.getElementById("solve").value;
    
    var Radius = Diameter / 2;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var RadiusCircle = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The radius of a circle with a diameter of " + Diameter + " is " + Radius;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionRadiusD()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionRadiusD(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var circleDiameter = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Diameter of a Circle given the Radius:";
    p2.style.textAlign = "center";

    p3.textContent = "R = d/2";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "d = Diameter of a Circle";
    p5.style.textIndent = "50px";

    p6.textContent = "R = Radius";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the radius of a circle given the diameter:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "R = "+circleDiameter+"/2";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Divide the Diameter to two ";
    p10.style.textAlign = "center";

    var Radius = circleDiameter / 2;

    p11.textContent = circleDiameter+"/2 or "+circleDiameter+" ÷ 2";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the quotient of two dividend ";
    p14.style.textAlign = "center";

    p15.textContent = Radius;
    p15.style.textAlign = "center";

    p12.textContent = "R = " + Radius;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the radius of a circle with a diameter of " + circleDiameter + " is " + Radius;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CIRCUMFERENCE OF A CIRCLE GIVEN THE RADIUS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function CircumferenceOfCircleGivenR(){
    var ti = document.createElement("p");
    ti.textContent = "CIRCUMFERENCE OF A CIRCLE GIVEN THE RADIUS";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Radius of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskCircumferenceOfACircle()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskCircumferenceOfACircle(){
    var Radius = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the circumference of a circle with a radius of " + Radius;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    CircumferenceOfACircle();
}

function CircumferenceOfACircle(){
    var Radius = document.getElementById("solve").value;
    
    var Circumference = 2 * 3.14 * Radius;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var CircumferenceCircle = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The circumference of a circle with a radius of " + Radius + " is " + Circumference;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionCircumferenceR()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionCircumferenceR(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Radius = parseInt(document.getElementById("solve").value); 
    
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");
    var p16 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Circumference of a Circle given the Radius:";
    p2.style.textAlign = "center";

    p3.textContent = "C = 2 x π x r";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "C = circumference of a circle";
    p5.style.textIndent = "50px";

    p6.textContent = "π(Pi) = Pi is constant and is always equal to 3.14";
    p6.style.textIndent = "50px";

    p7.textContent = "r = Radius";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for calculating the circumference of a circle given the radius:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values"
    p9.style.textAlign = "center";
    
    p10.textContent = "C = 2 x π x "+Radius; 
    p10.style.textAlign = "center";
    
    p11.textContent = "STEP 2: Twice the radius and multiply to the value of pi(You can follow the commutative property of multiplication)";
    p11.style.textAlign = "center";

    var TwiceRadius = 2 * Radius; 
    var Circumference = 3.14 * TwiceRadius;

    p12.textContent = "π(3.14) x "+TwiceRadius; 
    p12.style.textAlign = "center";

    p15.textContent = "STEP 3: Now multiply or get the product of the remaining values";
    p15.style.textAlign = "center";

    p16.textContent = Radius;
    p16.style.textAlign = "center";

    p13.textContent = "C = " + Circumference;
    p13.style.color = "red";
    p13.style.textAlign = "center";

    p14.textContent = "Therefore, the circumference of a circle with a radius of " + Radius + " is " + Circumference;
    p14.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~AREA OF A CIRCLE GIVEN THE RADIUS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function AreaOfCircleR(){
    var ti = document.createElement("p");
    ti.textContent = "AREA OF A CIRCLE GIVEN THE RADIUS";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Radius of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskAreaOfCircle()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskAreaOfCircle(){
    var Radius = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Area of a circle given the Radius with a value of " + Radius;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerToAreaOfACircle();
}

function AnswerToAreaOfACircle(){
    var Radius = document.getElementById("solve").value;
    
    var TwiceRadius = Radius * Radius;
    var Area = 3.14 * TwiceRadius;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var CircumferenceCircle = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Area of a circle given the Radius with a value of " + Radius + " is " + Area;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "AreaOfCircleSolution()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function AreaOfCircleSolution(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Radius = parseInt(document.getElementById("solve").value); 
    
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");
    var p16 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Area of a Circle given the Radius:";
    p2.style.textAlign = "center";

    p3.textContent = "A = π x r²";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area of a circle";
    p5.style.textIndent = "50px";

    p6.textContent = "π(Pi) = Pi is constant and is always equal to 3.14";
    p6.style.textIndent = "50px";

    p7.textContent = "r = Radius";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for calculating the circumference of a circle given the radius:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values"
    p9.style.textAlign = "center";
    
    p10.textContent = "A = π x "+Radius+"²"; 
    p10.style.textAlign = "center";
    
    p11.textContent = "STEP 2: Square the value of radius";
    p11.style.textAlign = "center";

    var TwiceRadius = Radius * Radius; 
    var Area = 3.14 * TwiceRadius;

    p12.textContent = "A = π x "+TwiceRadius; 
    p12.style.textAlign = "center";

    p13.textContent = "STEP 3: Now multiply the value of pi to squared radius";
    p13.style.textAlign = "center";

    p14.textContent = "A = π(3.14) x "+TwiceRadius;
    p14.style.textAlign = "center";

    p15.textContent = "A = "+Area;
    p15.style.color = "red";
    p15.style.textAlign = "center";

    p16.textContent = "Therefore, the Area of a circle with a radius of " + Radius + " is " + Area;
    p16.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p16);
    
    col3.appendChild(divAnswer);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Radius of a Circle given the Diameter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function RadiusOfCircleGivenD(){
    var ti = document.createElement("p");
    ti.textContent = "RADIUS OF A CIRCLE GIVEN THE DIAMETER";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Diameter of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskRadiusOfACircle()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskRadiusOfACircle(){
    var Diameter = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the radius of a circle with a diameter of " + Diameter;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    RadiusOfACircle();
}

function RadiusOfACircle(){
    var Diameter = document.getElementById("solve").value;
    
    var Radius = Diameter / 2;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var RadiusCircle = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The radius of a circle with a diameter of " + Diameter + " is " + Radius;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionRadiusD()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionRadiusD(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var circleDiameter = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Diameter of a Circle given the Radius:";
    p2.style.textAlign = "center";

    p3.textContent = "R = d/2";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "d = Diameter of a Circle";
    p5.style.textIndent = "50px";

    p6.textContent = "R = Radius";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the radius of a circle given the diameter:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "R = "+circleDiameter+"/2";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Divide the Diameter to two ";
    p10.style.textAlign = "center";

    var Radius = circleDiameter / 2;

    p11.textContent = circleDiameter+"/2 or "+circleDiameter+" ÷ 2";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the quotient of two dividend ";
    p14.style.textAlign = "center";

    p15.textContent = Radius;
    p15.style.textAlign = "center";

    p12.textContent = "R = " + Radius;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the radius of a circle with a diameter of " + circleDiameter + " is " + Radius;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CIRCUMFERENCE OF A CIRCLE GIVEN THE RADIUS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function CircumferenceOfCircleGivenR(){
    var ti = document.createElement("p");
    ti.textContent = "CIRCUMFERENCE OF A CIRCLE GIVEN THE RADIUS";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Radius of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskCircumferenceOfACircle()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskCircumferenceOfACircle(){
    var Radius = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the circumference of a circle with a radius of " + Radius;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    CircumferenceOfACircle();
}

function CircumferenceOfACircle(){
    var Radius = document.getElementById("solve").value;
    
    var Circumference = 2 * 3.14 * Radius;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var CircumferenceCircle = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The circumference of a circle with a radius of " + Radius + " is " + Circumference;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionCircumferenceR()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionCircumferenceR(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Radius = parseInt(document.getElementById("solve").value); 
    
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");
    var p16 = document.createElement("p");
    var p17 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Circumference of a Circle given the Radius:";
    p2.style.textAlign = "center";

    p3.textContent = "C = 2 x π x r";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "C = circumference of a circle";
    p5.style.textIndent = "50px";

    p6.textContent = "π(Pi) = Pi is constant and is always equal to 3.14";
    p6.style.textIndent = "50px";

    p7.textContent = "r = Radius";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for calculating the circumference of a circle given the radius:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values"
    p9.style.textAlign = "center";
    
    p10.textContent = "C = 2 x π x "+Radius; 
    p10.style.textAlign = "center";
    
    p11.textContent = "STEP 2: Twice the radius and multiply to the value of pi(You can follow the commutative property of multiplication)";
    p11.style.textAlign = "center";

    var TwiceRadius = 2 * Radius; 
    var Circumference = 3.14 * TwiceRadius;

    p12.textContent = "C = 2 x π x "+Radius; 
    p12.style.textAlign = "center";

    p13.textContent = "STEP 3: Now multiply or get the product of the remaining values";
    p13.style.textAlign = "center";

    p14.textContent = "C =π(3.14) x "+TwiceRadius; 
    p14.style.textAlign = "center";

    p15.textContent = Radius;
    p15.style.textAlign = "center";

    p16.textContent = "C = " + Circumference;
    p16.style.color = "red";
    p16.style.textAlign = "center";

    p17.textContent = "Therefore, the circumference of a circle with a radius of " + Radius + " is " + Circumference;
    p17.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p16);
    divAnswer.appendChild(p17);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Circumference of a Circle Given the Diameter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function CircumferenceOfCircleGivenD(){
    var ti = document.createElement("p");
    ti.textContent = "CIRCUMFERENCE OF A CIRCLE GIVEN THE DIAMETER";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Diameter of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskCircumferenceOfACircleD()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskCircumferenceOfACircleD(){
    var Diameter = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the circumference of a circle with a radius of " + Diameter;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    CircumferenceOfACircleD();
}

function CircumferenceOfACircleD(){
    var Diameter = document.getElementById("solve").value;
    
    var Radius = Diameter / 2;
    var Circumference = 2 * Math.PI * Radius;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var CircumferenceCircle = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The circumference of a circle with a radius of " + Diameter + " is " + Circumference;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionCircumferenceD()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionCircumferenceD(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var CDiameter = parseInt(document.getElementById("solve").value); 
    
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");
    var p16 = document.createElement("p");
    var p17 = document.createElement("p");
    var p18 = document.createElement("p");
    
    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Circumference of a Circle given the Radius:";
    p2.style.textAlign = "center";

    p3.textContent = "1. R = d/2";
    p3.style.textAlign = "center";

    p4.textContent = "2. C = 2 x π x r";
    p4.style.textAlign = "center";
    
    p5.textContent = "Where:";
    p5.style.textIndent = "40px";

    p6.textContent = "C = circumference of a circle";
    p6.style.textIndent = "50px";

    p7.textContent = "π(Pi) = Pi is constant and is always equal to 3.14";
    p7.style.textIndent = "50px";

    p8.textContent = "r = Radius";
    p8.style.textIndent = "50px";

    p9.textContent = "Here is the step-by-step solution for calculating the circumference of a circle given the diameter:";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 1: Get the radius first using the 1st formula and substitute the given value of diameter."
    p10.style.textAlign = "center";
    
    var Radius = CDiameter / 2;

    p11.textContent = "R ="+CDiameter+"/2 = "+Radius; 
    p11.style.textAlign = "center";
    
    p12.textContent = "STEP 2: Proceed to utalize 2nd formula and substitute the radius to the formula then square it(You can follow the commutative property of multiplication)";
    p12.style.textAlign = "center";

    p13.textContent = "2 x π x "+Radius; 
    p13.style.textAlign = "center";

    var TwiceRadius = 2 * Radius; 
    var Circumference = Math.PI * TwiceRadius;

    p14.textContent = "π(3.14) x "+TwiceRadius; 
    p14.style.textAlign = "center";

    p15.textContent = "STEP 3: Now multiply or get the product of the remaining values";
    p15.style.textAlign = "center";

    p16.textContent = "π(3.14) x "+TwiceRadius;
    p16.style.textAlign = "center";

    p17.textContent = "C = " + Circumference;
    p17.style.color = "red";
    p17.style.textAlign = "center";

    p18.textContent = "Therefore, the circumference of a circle with a diameter of " + CDiameter + " is " + Circumference;
    p18.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p16);
    divAnswer.appendChild(p17);
    divAnswer.appendChild(p18);

    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~AREA OF A CIRCLE GIVEN THE DIAMETER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function AreaOfCircleGivenD(){
    var ti = document.createElement("p");
    ti.textContent = "AREA OF A CIRCLE GIVEN THE DIAMETER";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Diameter of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskAreaOfACircle()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskAreaOfACircle(){
    var Diameter = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the area of a circle with a diameter of " + Diameter;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AreaOfACircle();
}

function AreaOfACircle(){
    var Diameter = document.getElementById("solve").value;
    
    var Radius = Diameter / 2;
    var Area = Math.PI * Radius * Radius;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var RadiusCircle = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The area of a circle with a diameter of " + Diameter + " is " + Area;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionAreaD()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionAreaD(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var circleDiameter = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");
    var p16 = document.createElement("p");
    var p17 = document.createElement("p");
    var p18 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formulas to get the Area of a Circle given the Diameter:";
    p2.style.textAlign = "center";

    p3.textContent = "1. R = d/2";
    p3.style.textAlign = "center";

    p4.textContent = "2. A = πr²";
    p4.style.textAlign = "center";
    
    p5.textContent = "Where:";
    p5.style.textIndent = "40px";

    p6.textContent = "R = Radius";
    p6.style.textIndent = "50px";

    p7.textContent = "d = Diameter of a Circle";
    p7.style.textIndent = "50px";

    p8.textContent = "A = Area of a circle";;
    p8.style.textIndent = "50px";

    p9.textContent = "π(Pi) = Pi is constant and is always equal to 3.14";;
    p9.style.textIndent = "50px";

    p10.textContent = "Here is the step-by-step solution for calculating the radius of a circle given the diameter:";

    p11.textContent = "STEP 1: First get the radius first using the given Diameter before proceding to 2nd formula"
    p11.style.textAlign = "center";

    var Radius = circleDiameter / 2;
    
    p12.textContent = "R = "+circleDiameter+"/2 = "+Radius;
    p12.style.textAlign = "center";
    
    p13.textContent = "STEP 2: After getting the radius proceed to 2nd formula on gettiing the area and substitue the radius";
    p13.style.textAlign = "center";

    p14.textContent = "A = π("+Radius+"²)";
    p14.style.textAlign = "center";

    p15.textContent = "STEP 3: Square the radius first then proceed on multiplying it to Pi";
    p15.style.textAlign = "center";

    var TwiceRadius = Radius * Radius;

    p16.textContent = "R = π("+TwiceRadius+")";
    p16.style.textAlign = "center";

    p17.textContent = Math.PI * TwiceRadius;
    p17.style.color = "red";
    p17.style.textAlign = "center";

    p18.textContent = "Therefore, the radius of a circle with a diameter of " + circleDiameter + " is " + Radius;
    p18.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p16);
    divAnswer.appendChild(p17);
    divAnswer.appendChild(p18);
    
    col3.appendChild(divAnswer);
}

//AREA OF A RECTANGLE
//2 input
function RectangleArea(){
    var ti = document.createElement("p");
    ti.textContent = "AREA OF A RECTANGLE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter Length");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter Width");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskAreaofRectangle()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}


function uAskAreaofRectangle(){
    var Length = parseInt(document.getElementById("solve2").value);
    var Width = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the area of a rectangle with a length of " + Length + " and a width of " + Width;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    finalAnswerArea();
}

function finalAnswerArea(){
    var Length = document.getElementById("solve2").value;
    var Width = document.getElementById("solves2").value;

    var Area = Length * Width;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The area of a rectangle with a length of " + Length + " and a width of " + Width + " is " + Area;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "butareaRect()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}
function butareaRect(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Length = parseInt(document.getElementById("solve2").value);
    var Width = parseInt(document.getElementById("solves2").value);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Area of a Rectangle given the Length and the Width:";
    p2.style.textAlign = "center";

    p3.textContent = "A = L x W";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area";
    p5.style.textIndent = "50px";

    p6.textContent = "L = Length";
    p6.style.textIndent = "50px";

    p14.textContent = " W = Width";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the area of a rectang;e:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the Length (L) and the Width (W)."
    p8.style.textAlign = "center";
    
    p9.textContent = Length + " x " + Width;
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Multiply the Length and Width";
    p10.style.textAlign = "center";

    var AreaofARectangle = Length * Width;
    p11.textContent = AreaofARectangle;
    p11.style.textAlign = "center";

    p12.textContent = "A = " + AreaofARectangle;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the area of a rectangle with the length of " + Length + " and width of " + Width + " is " + AreaofARectangle;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//LENGTH OF A RECTANGLE GIVEN THE AREA AND WIDTH
// 2 TEXT INPUT

function RectLengthGAW(){
    var ti = document.createElement("p");
    ti.textContent = "LENGTH OF A RECTANGLE GIVEN THE AREA AND WIDTH";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter Area");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter Width");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskLengthofRectangleGAW()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}


function uAskLengthofRectangleGAW(){
    var Area = parseInt(document.getElementById("solve2").value);
    var Width = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the length of a rectangle with an area of " + Area + " and a width of " + Width;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    finalAnswerLength();
}

function finalAnswerLength(){
    var Area = document.getElementById("solve2").value;
    var Width = document.getElementById("solves2").value;

    var Length = Area / Width;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The length of a rectangle with an area of " + Area + " and a width of " + Width + " is " + Length;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "butLengthRect()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}
function butLengthRect(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Area = parseInt(document.getElementById("solve2").value);
    var Width = parseInt(document.getElementById("solves2").value);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Length of a Rectangle given the Area and the Width:";
    p2.style.textAlign = "center";

    p3.textContent = "L = A/W";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area";
    p5.style.textIndent = "50px";

    p6.textContent = "L = Length";
    p6.style.textIndent = "50px";

    p14.textContent = " W = Width";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the length of a rectang;e:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the Area (A) and the Width (W)."
    p8.style.textAlign = "center";
    
    p9.textContent = Area + " / " + Width;
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Divide Area and Width";
    p10.style.textAlign = "center";

    var LengthofARectangle = Area / Width;
    p11.textContent = LengthofARectangle;
    p11.style.textAlign = "center";

    p12.textContent = "L = " + LengthofARectangle;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the length of a rectanglE with an area of " + Area + " and width of " + Width + " is " + LengthofARectangle;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

// WIDTH OF A RECTANGLE GIVEN THE AREA AND LENGTH
// 2 TEXT INPUTS

function RectWidthGAL(){
    var ti = document.createElement("p");
    ti.textContent = "WIDTH OF A RECTANGLE GIVEN THE AREA AND LENGTH";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter Area");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter Length");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskWidthofRectangleGAL()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}


function uAskWidthofRectangleGAL(){
    var Area = parseInt(document.getElementById("solve2").value);
    var Length = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Width of a rectangle with an area of " + Area + " and a length of " + Length;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    finalAnswerWidth();
}

function finalAnswerWidth(){
    var Area = document.getElementById("solve2").value;
    var Length = document.getElementById("solves2").value;

    var Width = Area / Length;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The width of a rectangle with an area of " + Area + " and a length of " + Length + " is " + Width;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "butWidthRect()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}
function butWidthRect(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Area = parseInt(document.getElementById("solve2").value);
    var Length = parseInt(document.getElementById("solves2").value);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Width of a Rectangle given the Area and the Length:";
    p2.style.textAlign = "center";

    p3.textContent = "W = A/L";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area";
    p5.style.textIndent = "50px";

    p6.textContent = "L = Length";
    p6.style.textIndent = "50px";

    p14.textContent = " W = Width";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the width of a rectang;e:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the Area (A) and the Length (L)."
    p8.style.textAlign = "center";
    
    p9.textContent = Area + " / " + Length;
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Divide Area and Length";
    p10.style.textAlign = "center";

    var WidthofARectangle = Area / Length;
    p11.textContent = WidthofARectangle;
    p11.style.textAlign = "center";

    p12.textContent = "W = " + WidthofARectangle;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the width of a rectanglE with an area of " + Area + " and length of " + Length + " is " + WidthofARectangle;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//PERIMETER OF A RECTANGLE
// 2 TEXT INPUTS

function RectPeri(){
    var ti = document.createElement("p");
    ti.textContent = "PERIMETER OF A RECTANGLE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter Length");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter Width");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskPeriRectangle()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}


function uAskPeriRectangle(){
    var Length = parseInt(document.getElementById("solve2").value);
    var Width = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the perimeter of a rectangle with a length of " + Length + " and a width of " + Width;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    finalAnswerPerimeter();
}

function finalAnswerPerimeter(){
    var Length = document.getElementById("solve2").value;
    var Width = document.getElementById("solves2").value;

    var TLength = 2 * Length;
    var TWidth = 2 * Width;
    var perimeter = TLength + TWidth;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Perimeter of a rectangle with an length of " + Length + " and a width of " + Width + " is " + perimeter;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "butPeriRect()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}
function butPeriRect(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Length = parseInt(document.getElementById("solve2").value);
    var Width = parseInt(document.getElementById("solves2").value);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Perimeter of a Rectangle";
    p2.style.textAlign = "center";

    p3.textContent = "P = 2L + 2W";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "P = Perimeter";
    p5.style.textIndent = "50px";

    p6.textContent = "L = Length";
    p6.style.textIndent = "50px";

    p14.textContent = " W = Width";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the perimeter of a rectang;e:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the Length (L) and the Width (W)."
    p8.style.textAlign = "center";
    
    p9.textContent = "2(" + Length + ") + 2(" + Width + ")";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Twice the length and the Area";
    p10.style.textAlign = "center";

    var twiceL = 2 * Length;
    var twiceW = 2 * Width;
    var perimeter = twiceL + twiceW;

    p14.textContent = twiceL + " + " + twiceW;
    p14.style.textAlign = "center";

    p15.textContent = "STEP 3: Get the sum of " + twiceL + " and " + twiceW;
    p15.style.textAlign = "center";

    p11.textContent = perimeter;
    p11.style.textAlign = "center";
    
    p12.textContent = "P = " + perimeter;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the perimeter of a rectanglE with a length of " + Length + " and width of " + Width + " is " + perimeter;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//LENGTH OF A RECTANGLE GIVEN THE PERIMETER AND WIDTH
// 2 TEXT INPUTS
function RectLengthGPW(){
    var ti = document.createElement("p");
    ti.textContent = "LENGTH OF A RECTANGLE GIVEN THE PERIMETER AND WIDTH";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter Perimeter");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter Width");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskLRectangle()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}


function uAskLRectangle(){
    var Perimeter = parseInt(document.getElementById("solve2").value);
    var Width = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the length of a rectangle with a perimeter of " + Perimeter + " and a width of " + Width;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    finalAnswerLengthGPW();
}

function finalAnswerLengthGPW(){
    var Perimeter = document.getElementById("solve2").value;
    var width = document.getElementById("solves2").value;

    var perihalf = Perimeter/2;
    var length = perihalf - width;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Length of a rectangle with a perimeter of " + Perimeter + " and a width of " + width + " is " + length;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "butLPRect()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}
function butLPRect(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Perimeter = parseInt(document.getElementById("solve2").value);
    var width = parseInt(document.getElementById("solves2").value);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Length of a Rectangle given the Perimeter and Width";
    p2.style.textAlign = "center";

    p3.textContent = "L = (p/2) - W";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "P = Perimeter";
    p5.style.textIndent = "50px";

    p6.textContent = "L = Length";
    p6.style.textIndent = "50px";

    p14.textContent = " W = Width";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the length of a rectang;e:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the Perimeter (P) and the Width (W)."
    p8.style.textAlign = "center";
    
    p9.textContent = "(" + Perimeter + "/2) - " + width;
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Get the quotient of the perimeter and 2";
    p10.style.textAlign = "center";

    var perihalf = Perimeter / 2;
    var length = perihalf - width;

    p14.textContent = "(" + perihalf + ") - " + width;
    p14.style.textAlign = "center";

    p15.textContent = "STEP 3: Subtract " + perihalf + " and " + width;
    p15.style.textAlign = "center";

    p11.textContent = length;
    p11.style.textAlign = "center";
    
    p12.textContent = "L = " + length;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the length of a rectanglE with a perimeter of " + Perimeter + " and width of " + width + " is " + length;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//WIDTH OF A RECTANGLE GIVEN THE LENGTH AND PERIMETER

function RectWidthGPL(){
    var ti = document.createElement("p");
    ti.textContent = "WIDTH OF A RECTANGLE GIVEN THE PERIMETER AND LENGTH";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter Perimeter");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter Length");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskWRectangle()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}


function uAskWRectangle(){
    var Perimeter = parseInt(document.getElementById("solve2").value);
    var Length = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Width of a rectangle with a perimeter of " + Perimeter + " and a length of " + Length;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    finalAnswerWidthGPL();
}

function finalAnswerWidthGPL(){
    var Perimeter = document.getElementById("solve2").value;
    var Length = document.getElementById("solves2").value;

    var perihalf = Perimeter/2;
    var width = perihalf - Length;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Width of a rectangle with a perimeter of " + Perimeter + " and a length of " + Length + " is " + width;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "butWPRect()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}
function butWPRect(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Perimeter = parseInt(document.getElementById("solve2").value);
    var Length = parseInt(document.getElementById("solves2").value);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openQuad()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the width of a Rectangle given the Perimeter and Length";
    p2.style.textAlign = "center";

    p3.textContent = "W = (p/2) - L";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "P = Perimeter";
    p5.style.textIndent = "50px";

    p6.textContent = "L = Length";
    p6.style.textIndent = "50px";

    p14.textContent = " W = Width";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the width of a rectang;e:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the Perimeter (P) and the Length (L)."
    p8.style.textAlign = "center";
    
    p9.textContent = "(" + Perimeter + "/2) - " + Length;
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Get the quotient of the perimeter and 2";
    p10.style.textAlign = "center";

    var perihalf = Perimeter / 2;
    var width = perihalf - Length;

    p14.textContent = "(" + perihalf + ") - " + Length;
    p14.style.textAlign = "center";

    p15.textContent = "STEP 3: Subtract " + perihalf + " and " + Length;
    p15.style.textAlign = "center";

    p11.textContent = width;
    p11.style.textAlign = "center";
    
    p12.textContent = "L = " + width;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the length of a rectanglE with a perimeter of " + Perimeter + " and length of " + Length + " is " + width;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//CIRCUMFERENCE OF A CIRCLE GIVEN THE AREA
//1 TEXT INPUT

function CircumCircleGA(){
    var ti = document.createElement("p");
    ti.textContent = "CIRCUMFERENCE OF A CIRCLE GIVEN THE AREA";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Area of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskCircumCircleGA()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskCircumCircleGA(){
    var Area = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Circumference of a circle with an area of " + Area;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    CircumCircleGASoln();
}

function CircumCircleGASoln(){
    var Area = document.getElementById("solve").value;
    
    var pi = Math.PI;
    var piArea = Area / pi;
    var radius = Math.sqrt(piArea);
    var circu = 2 * pi * radius;


    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Circumference of a circle with an area of " + Area + " is " + circu;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionCircuGA()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}

function SolutionCircuGA(){
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Area = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");
    var p16 = document.createElement("p");
    var p17 = document.createElement("p");
    var p18 = document.createElement("p");
    var p19 = document.createElement("p");
    var p20 = document.createElement("p");
    var p21 = document.createElement("p");
    var p22 = document.createElement("p");
    var p23 = document.createElement("p");
    var p24 = document.createElement("p");
    var p25 = document.createElement("p");
    var p26 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Circumference of a Circle given the Area:";
    p2.style.textAlign = "center";

    p3.textContent = "C = 2πr";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "C = Circumference of a Circle";
    p5.style.textIndent = "50px";

    p6.textContent = "r = radius";
    p6.style.textIndent = "50px";

    p16.textContent = "A = πr²";
    p16.style.textAlign = "center";

    p17.textContent = "Where:";
    p17.style.textIndent = "40px";

    p18.textContent = "A = Area";
    p18.style.textIndent = "50px";

    p19.textContent = "r = radius";
    p19.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the circumference of a circle:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Using the formula for the Area of a Circle, substitute the value of the Area (A)"
    p8.style.textAlign = "center";
    
    p9.textContent = Area + " = (3.14)r²";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Divide both sides by the value of PI to isolate r² ";
    p10.style.textAlign = "center";

    var pi = Math.PI;

    p20.textContent = "(" + Area + "/" + pi + ") = " + "r²";
    p20.style.textAlign = "center";


    var areaPi = Area / pi;
    var radius = Math.sqrt(areaPi);

    p21.textContent = "STEP 3: Get the square root of " + radius + " to cancel the exponent";
    p21.style.textAlign = "center";

    p22.textContent = "r = " + radius;
    p22.style.textAlign = "center";

    p23.textContent = "STEP 4: Substitute the radius (r)";
    p23.style.textAlign = "center";

    p24.textContent = "C = 2π(" + radius + ")";
    p24.style.textAlign = "center";

    p14.textContent = "STEP 5: Multiply the value of " + pi + ", radius and 2";
    p14.style.textAlign = "center";

    var circum = 2 * pi * radius;
    
    p15.textContent = circum;
    p15.style.textAlign = "center";
    
    p12.textContent = "C = " + circum;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the circumference of a circle with an area of " + Area + " is " + circum;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p16);
    divAnswer.appendChild(p17);
    divAnswer.appendChild(p18);
    divAnswer.appendChild(p19);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p20);
    divAnswer.appendChild(p21);
    divAnswer.appendChild(p22);
    divAnswer.appendChild(p23);
    divAnswer.appendChild(p24);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//AREA OF A CIRCLE GIVEN THE CIRCUMFERENCE
// 2 TEXT INPUTS

function AreaCircleGC() {
    var ti = document.createElement("p");
    ti.textContent = "AREA OF A CIRCLE GIVEN THE CIRCUMFERENCE";
    ti.style.textAlign = "center";
    ti.style.color = "white";
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Circumference of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskAreaCircleGC()");

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
}

function uAskAreaCircleGC() {
    var Circumference = parseInt(document.getElementById("solve").value);

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 

    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";

    var backread = document.createElement("br");

    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Area of a circle with a circumference of " + Circumference;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AreaCircleGCSoln();
}

function AreaCircleGCSoln() {
    var Circumference = document.getElementById("solve").value;

    var pi = Math.PI;
    var radius = Circumference / (2 * pi);
    var area = pi * radius * radius;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 

    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);

    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Area of a circle with a circumference of " + Circumference + " is " + area;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionAreaGC()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);
}

function SolutionAreaGC() {
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Circumference = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");
    var p16 = document.createElement("p");
    var p17 = document.createElement("p");
    var p18 = document.createElement("p");
    var p19 = document.createElement("p");
    var p20 = document.createElement("p");
    var p21 = document.createElement("p");
    var p22 = document.createElement("p");
    var p23 = document.createElement("p");
    var p24 = document.createElement("p");
    var p25 = document.createElement("p");
    var p26 = document.createElement("p");
    var p27 = document.createElement("p");
    var p28 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Area of a Circle given the Circumference:";
    p2.style.textAlign = "center";

    p3.textContent = "C = 2πr";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "C = Circumference of a Circle";
    p5.style.textIndent = "50px";

    p6.textContent = "r = radius";
    p6.style.textIndent = "50px";

    p16.textContent = "A = πr²";
    p16.style.textAlign = "center";

    p17.textContent = "Where:";
    p17.style.textIndent = "40px";

    p18.textContent = "A = Area";
    p18.style.textIndent = "50px";

    p19.textContent = "r = radius";
    p19.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Area of a circle:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Using the formula for the Circumference of a Circle, substitute the value of the Circumference (C)"
    p8.style.textAlign = "center";
    
    p9.textContent =  Circumference + " = (3.14)r";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: To isolate r, divide both sides by the twice of PI ";
    p10.style.textAlign = "center";

    var pi = Math.PI;

    p20.textContent = "(" + Circumference + " / " + pi + ") = r";
    p20.style.textAlign = "center";


    var radius = Circumference / (2*pi);

    p21.textContent = "STEP 3: The radius of a circle with a circumference of " + Circumference + " is " + area;
    p21.style.textAlign = "center";

    p22.textContent = "r = " + radius;
    p22.style.textAlign = "center";

    p23.textContent = "STEP 4: Using the formula for the area of a circle, substitute the radius: ";
    p23.style.textAlign = "center";

    p24.textContent = "A = (3.14) " + radius + "²";
    p24.style.textAlign = "center";

    p14.textContent = "STEP 5: Square the radius";
    p14.style.textAlign = "center";

    var squaredRadius = radius * radius;
    p27.textContent = squaredRadius;
    p27.style.textAlign = "center";

    var area = pi * squaredRadius;

    p28.style.textAlign = "center";
    p28.textContent = "STEP 4: Multiply " + squaredRadius + " and " + pi;
    
    p15.textContent = area;
    p15.style.textAlign = "center";
    
    p12.textContent = "A = " + area;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the area of a circle with a circumference of " + Circumference + " is " + area;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p16);
    divAnswer.appendChild(p17);
    divAnswer.appendChild(p18);
    divAnswer.appendChild(p19);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p20);
    divAnswer.appendChild(p21);
    divAnswer.appendChild(p22);
    divAnswer.appendChild(p23);
    divAnswer.appendChild(p24);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p27);
    divAnswer.appendChild(p28);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);    
}

//DIAMETER OF A CIRCLE GIVEN THE AREA
//1 TEXT INPUT

function DiameterCircleGA() {
    var ti = document.createElement("p");
    ti.textContent = "DIAMETER OF A CIRCLE GIVEN THE AREA";
    ti.style.textAlign = "center";
    ti.style.color = "white";
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Area of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskDIameterCircleGA()");

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
}

function uAskDIameterCircleGA() {
    var Area = parseInt(document.getElementById("solve").value);

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 

    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";

    var backread = document.createElement("br");

    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Diameter of a circle with an area of " + Area;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    DiameterCircleGASoln();
}

function DiameterCircleGASoln() {
    var Area = document.getElementById("solve").value;

    var pi = Math.PI;
    var Api = Area / pi;
    var radius = Math.sqrt(Api);

    var diameter = radius * 2;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 

    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);

    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Diameter of a circle with an area of " + Area + " is " + diameter;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionDiameterGA()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);
}

function SolutionDiameterGA() {
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Area = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");
    var p16 = document.createElement("p");
    var p17 = document.createElement("p");
    var p18 = document.createElement("p");
    var p19 = document.createElement("p");
    var p20 = document.createElement("p");
    var p21 = document.createElement("p");
    var p22 = document.createElement("p");
    var p23 = document.createElement("p");
    var p24 = document.createElement("p");
    var p25 = document.createElement("p");
    var p26 = document.createElement("p");
    var p27 = document.createElement("p");
    var p28 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Diameter of a Circle given the Area:";
    p2.style.textAlign = "center";

    p3.textContent = "r = √(A/π)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area of a Circle";
    p5.style.textIndent = "50px";

    p6.textContent = "r = radius";
    p6.style.textIndent = "50px";

    p16.textContent = "d = 2r";
    p16.style.textAlign = "center";

    p17.textContent = "Where:";
    p17.style.textIndent = "40px";

    p18.textContent = "d = diameter";
    p18.style.textIndent = "50px";

    p19.textContent = "r = radius";
    p19.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Diameter of a circle:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Using the formula for the radius of a Circle, substitute the value of the Area (A)"
    p8.style.textAlign = "center";
    
    p9.textContent =  "r = √(" + Area + "/ 3.14)" ;
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Divide the equation inside the parentheses ";
    p10.style.textAlign = "center";

    var pi = Math.PI;
    var piA = Area / pi;

    p20.textContent = "r = √"+ piA;
    p20.style.textAlign = "center";


    var radius = Math.sqrt(piA);

    p21.textContent = "STEP 3: Get the square root of " + piA;
    p21.style.textAlign = "center";

    p22.textContent = radius;
    p22.style.textAlign = "center";

    p23.textContent = "STEP 4: Twice the radius to get the diameter ";
    p23.style.textAlign = "center";

    //p24.textContent = "A = (3.14) " + radius + "²";
    //p24.style.textAlign = "center";

    //p14.textContent = "STEP 5: Square the radius";
    //p14.style.textAlign = "center";

    var diameter = radius * 2;

    p27.textContent = diameter;
    p27.style.textAlign = "center";


    //p28.style.textAlign = "center";
    //p28.textContent = "STEP 4: Multiply " + squaredRadius + " and " + pi;
    
    //p15.textContent = area;
    //p15.style.textAlign = "center";
    
    p12.textContent = "d = " + diameter;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the diameter of a circle with an area of " + Area + " is " + diameter;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p16);
    divAnswer.appendChild(p17);
    divAnswer.appendChild(p18);
    divAnswer.appendChild(p19);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p20);
    divAnswer.appendChild(p21);
    divAnswer.appendChild(p22);
    divAnswer.appendChild(p23);
    //divAnswer.appendChild(p24);
    divAnswer.appendChild(p11);
    //divAnswer.appendChild(p14);
    divAnswer.appendChild(p27);
    //divAnswer.appendChild(p28);
    //divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);    
}

//RADIUS OF A CIRCLE GIVEN THE AREA
// 1 TEXT INPUT

function RadiusCircleGA() {
    var ti = document.createElement("p");
    ti.textContent = "RADIUS OF A CIRCLE GIVEN THE AREA";
    ti.style.textAlign = "center";
    ti.style.color = "white";
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Area of a Circle");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskRadiusCircleGA()");

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
}

function uAskRadiusCircleGA() {
    var Area = parseInt(document.getElementById("solve").value);

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 

    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";

    var backread = document.createElement("br");

    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Radius of a circle with an area of " + Area;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    RadiusCircleGASoln();
}

function RadiusCircleGASoln() {
    var Area = document.getElementById("solve").value;

    var pi = Math.PI;
    var Api = Area / pi;
    var radius = Math.sqrt(Api);

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 

    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);

    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Radius of a circle with an area of " + Area + " is " + radius;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionRadiusGA()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);
}

function SolutionRadiusGA() {
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Area = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");
    var p16 = document.createElement("p");
    var p17 = document.createElement("p");
    var p18 = document.createElement("p");
    var p19 = document.createElement("p");
    var p20 = document.createElement("p");
    var p21 = document.createElement("p");
    var p22 = document.createElement("p");
    var p23 = document.createElement("p");
    var p24 = document.createElement("p");
    var p25 = document.createElement("p");
    var p26 = document.createElement("p");
    var p27 = document.createElement("p");
    var p28 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Radius of a Circle given the Area:";
    p2.style.textAlign = "center";

    p3.textContent = "r = √(A/π)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area of a Circle";
    p5.style.textIndent = "50px";

    p6.textContent = "r = radius";
    p6.style.textIndent = "50px";

   // p16.textContent = "d = 2r";
   // p16.style.textAlign = "center";

   /* p17.textContent = "Where:";
    p17.style.textIndent = "40px";

    p18.textContent = "d = diameter";
    p18.style.textIndent = "50px";

    p19.textContent = "r = radius";
    p19.style.textIndent = "50px";
*/
    p7.textContent = "Here is the step-by-step solution for calculating the Radius of a circle:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Using the formula for the radius of a Circle, substitute the value of the Area (A)"
    p8.style.textAlign = "center";
    
    p9.textContent =  "r = √(" + Area + "/ 3.14)" ;
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Divide the equation inside the parentheses ";
    p10.style.textAlign = "center";

    var pi = Math.PI;
    var piA = Area / pi;

    p20.textContent = "r = √"+ piA;
    p20.style.textAlign = "center";


    var radius = Math.sqrt(piA);

    p21.textContent = "STEP 3: Get the square root of " + piA;
    p21.style.textAlign = "center";

    p22.textContent = radius;
    p22.style.textAlign = "center";

    //p23.textContent = "STEP 4: Twice the radius to get the diameter ";
    //p23.style.textAlign = "center";

    //p24.textContent = "A = (3.14) " + radius + "²";
    //p24.style.textAlign = "center";

    //p14.textContent = "STEP 5: Square the radius";
    //p14.style.textAlign = "center";

    //var diameter = radius * 2;

    //p27.textContent = diameter;
    //p27.style.textAlign = "center";


    //p28.style.textAlign = "center";
    //p28.textContent = "STEP 4: Multiply " + squaredRadius + " and " + pi;
    
    //p15.textContent = area;
    //p15.style.textAlign = "center";
    
    p12.textContent = "r = " + radius;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the radius of a circle with an area of " + Area + " is " + radius;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    //divAnswer.appendChild(p16);
    //divAnswer.appendChild(p17);
    //divAnswer.appendChild(p18);
    //divAnswer.appendChild(p19);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p20);
    divAnswer.appendChild(p21);
    divAnswer.appendChild(p22);
    //divAnswer.appendChild(p23);
    //divAnswer.appendChild(p24);
    //divAnswer.appendChild(p11);
    //divAnswer.appendChild(p14);
    //divAnswer.appendChild(p27);
    //divAnswer.appendChild(p28);
    //divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);    
}

//ARC LENGTH
//2 TEXT INPUTS

function ArcLength(){
    var ti = document.createElement("p");
    ti.textContent = "ARC LENGTH";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the radius");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the central angle");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskArcLength()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}


function uAskArcLength(){
    var radius = parseInt(document.getElementById("solve2").value);
    var centralAngle = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the arc length of a circle with a radius of " + radius + " and a central angle of " + centralAngle;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    finalAnswerArcLength();
}

function finalAnswerArcLength(){
    var radius = document.getElementById("solve2").value;
    var centralAngle = document.getElementById("solves2").value;

    var pi = Math.PI;
    var right = 2 * pi * radius;

    var left = centralAngle / 360;
    var arclength = left * right;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The arc length of a circle with a radius of " + radius + " and a central angle of " + centralAngle + " is " + arclength;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "butarcLen()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}
function butarcLen(){
    

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var radius = parseInt(document.getElementById("solve2").value);
    var centralAngle = parseInt(document.getElementById("solves2").value);


    //soln

    var pi = Math.PI;
    var right = pi * 2 * radius;

    var left = centralAngle / 360;
    var arclength = left * right;


    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Arc of a Circle given the radius and its central angle:";
    p2.style.textAlign = "center";

    p3.textContent = "L = (θ)/360 x 2(pi)r";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "L = Arc Length";
    p5.style.textIndent = "50px";

    p6.textContent = "θ = Central Angle";
    p6.style.textIndent = "50px";

    p14.textContent = " r = Radius";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the arc Length:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the Central Angle (θ) and the radius (r)."
    p8.style.textAlign = "center";
    
    p9.textContent = "L = (" + centralAngle + "/360) x ( (2) (3.14) (" + radius + ")";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Evaluate the expressions inside the parentheses";
    p10.style.textAlign = "center";

    
    p11.textContent = "(" + left + ") x (" + right + ")";
    p11.style.textAlign = "center";

    p12.textContent = "L = " + arclength;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the arc length of a circle with the radius of " + radius + " and a central angle of " + centralAngle + " is " + arclength;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//SECTOR OF A CIRCLE
// 2 TEXT INPUTS

function Sector(){
    var ti = document.createElement("p");
    ti.textContent = "AREA OF A SECTOR";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the radius");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the central angle");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSector()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}


function uAskSector(){
    var radius = parseInt(document.getElementById("solve2").value);
    var centralAngle = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Area of a sector of a circle with a radius of " + radius + " and a central angle of " + centralAngle;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    finalAnswerSector();
}

function finalAnswerSector(){
    var radius = document.getElementById("solve2").value;
    var centralAngle = document.getElementById("solves2").value;

    var pi = Math.PI;
    var sqaredRadius = radius * radius
    var right = pi * sqaredRadius;

    var left = centralAngle / 360;
    var sector = left * right;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Area of a sector of a circle with a radius of " + radius + " and a central angle of " + centralAngle + " is " + sector;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "butSector()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}
function butSector(){
    

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var radius = parseInt(document.getElementById("solve2").value);
    var centralAngle = parseInt(document.getElementById("solves2").value);


    //soln

    var pi = Math.PI;
    var sqaredRadius = radius * radius
    var right = pi * sqaredRadius;

    var left = centralAngle / 360;
    var sector = left * right;

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openCircle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Area of a sector of a Circle given the radius and its central angle:";
    p2.style.textAlign = "center";

    p3.textContent = "A = (θ)/360 x (pi)r²";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area of a Sector";
    p5.style.textIndent = "50px";

    p6.textContent = "θ = Central Angle";
    p6.style.textIndent = "50px";

    p14.textContent = " r = Radius";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the area of a Sector:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the value of the Central Angle (θ) and the radius (r)."
    p8.style.textAlign = "center";
    
    p9.textContent = "L = (" + centralAngle + "/360) x ( (3.14) (" + radius + "²)";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Evaluate the expressions inside the parentheses";
    p10.style.textAlign = "center";

    
    p11.textContent = "(" + left + ") x (" + right + ")";
    p11.style.textAlign = "center";

    p12.textContent = "A = " + sector;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the area of a sector of a circle with the radius of " + radius + " and a central angle of " + centralAngle + " is " + sector;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 2D TRIANGLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// PERIMETER OF A TRIANGLE
// 3 TEXT INPUTS

function PeriTriangle(){
    var ti = document.createElement("p");
    ti.textContent = "PERIMETER OF A TRIANGLE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the length of the side A");
    input.setAttribute("type", "text");
    input.setAttribute("id", "Value1");

    input1.setAttribute("placeholder", "Enter the length of the side B");
    input1.setAttribute("id", "Value2");
    input1.setAttribute("type", "text");

    input2.setAttribute("placeholder", "Enter the length of the side C");
    input2.setAttribute("id", "Value3");
    input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskPerimeterOfTri()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(button);   

}
function uAskPerimeterOfTri(){
    var A = parseInt(document.getElementById("Value1").value);
    var B = parseInt(document.getElementById("Value2").value);
    var C = parseInt(document.getElementById("Value3").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Perimeter of a triangle with this given values: A(side) = "+A+" B(base) = "+B+" C(side) = "+C;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);
    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerToPerimeter();
}

function AnswerToPerimeter(){
    var A = parseInt(document.getElementById("Value1").value);
    var B = parseInt(document.getElementById("Value2").value);
    var C = parseInt(document.getElementById("Value3").value);

    var Perimeter = A + B + C;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);

    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Perimeter of a triangle with a given value of side a as "+A+" and side b as "+B+" Lastly side C as "+C+" is "+Perimeter;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "PerimeterSolution()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}
function PerimeterSolution(){

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);

    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var A = parseInt(document.getElementById("Value1").value);
    var B = parseInt(document.getElementById("Value2").value);
    var C = parseInt(document.getElementById("Value3").value);

    //soln
    var Perimeter = A + B + C;

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get Perimeter of a triangle:";
    p2.style.textAlign = "center";

    p3.textContent = "P = a + b + c;"
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "P = perimeter";
    p5.style.textIndent = "50px";

    p6.textContent = "a and b = sides of a triangle";
    p6.style.textIndent = "50px";

    p7.textContent = "b = base";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for getting the Perimeter of a triangle:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values into the formula."
    p9.style.textAlign = "center";
    
    p10.textContent = "P = "+A+" + "+B+" + "+C;
    p10.style.textAlign = "center";

    p11.textContent = "STEP 2: Simply add the given values to get the Perimeter of a triangle.";
    p11.style.textAlign = "center";

    p12.textContent = "P = "+Perimeter;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, The Perimeter of a triangle with a given value of side a as "+A+" and side b as "+B+" Lastly side C as "+C+" is "+Perimeter;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}    

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~AREA OF A TRIANGLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function AreaOfTriangle(){
    var ti = document.createElement("p");
    ti.textContent = "AREA OF A TRIANGLE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Height");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Base");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskAreaOfTriangle()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskAreaOfTriangle(){
    var Height = parseInt(document.getElementById("solve2").value);
    var Base = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Area of a triangle given the Height with a value of " +Height+ " and  a base with a value of " + Base;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerAreaTriangle();
}

function AnswerAreaTriangle(){
    var Height = document.getElementById("solve2").value;
    var Base = document.getElementById("solves2").value;

    var parenthe = Height * Base;
    var Area = 1/2 * parenthe;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Area of a triangle with a given Height with a value of " + Height + " and Base with a value of " + Base + " is " + Area;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "AreaTriangleSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function AreaTriangleSol(){

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Height = parseInt(document.getElementById("solve2").value);
    var Base = parseInt(document.getElementById("solves2").value);


    //soln

    var parenthe = Height * Base;
    var Area = 1/2 * parenthe;

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Area of a Triangle given the Height and Base:";
    p2.style.textAlign = "center";

    p3.textContent = "A = 1/2 (B x H)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area of a Triangle";
    p5.style.textIndent = "50px";

    p6.textContent = "B = Base of a Triangle";
    p6.style.textIndent = "50px";

    p7.textContent = "H = Height of a Triangle";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for getting the Area of a Triangle given the Height and Base:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values into the formula."
    p9.style.textAlign = "center";
    
    p10.textContent = "A = 1/2 ("+Height+" x "+Height+")";
    p10.style.textAlign = "center";

    p11.textContent = "STEP 2: By Following the rule of PEMDAS multiply the values first inside the parentheses then proceed to divide the product to 1/2.";
    p11.style.textAlign = "center";
    
    p12.textContent = "A = 1/2 ("+parenthe+")";
    p12.style.textAlign = "center";

    p13.textContent = "A = "+Area;
    p13.style.color = "red";
    p13.style.textAlign = "center";

    p14.textContent = "Therefore, the Area of a triangle with the given Height with a value of " +Height+ " and Base with a value of" +Base+ " is " +Area;
    p14.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HEIGHT OF A TRAINGLE GIVEN THE BASE AND AREA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function HeightGivenBaseArea(){
    var ti = document.createElement("p");
    ti.textContent = "HEIGHT OF A TRIANGLE GIVEN THE BASE AND AREA";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Base");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Area");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskHeightTri()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskHeightTri(){
    var Base = parseInt(document.getElementById("solve2").value);
    var Area = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Height of a triangle given the base of " + Base + " and an area " + Area;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerHeightTriBA();
}

function AnswerHeightTriBA(){
    var Base = document.getElementById("solve2").value;
    var Area = document.getElementById("solves2").value;

    var Height = 2 * Area / Base;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Height of a triangle with a given base of " + Base + " and an Area of " + Area + " is " + Height;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "RectHeightSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);


}
function RectHeightSol(){
    

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Base = parseInt(document.getElementById("solve2").value);
    var Area = parseInt(document.getElementById("solves2").value);


    //soln

    var TwiceArea = 2 * Area;
    var RectHeight = TwiceArea / Base;

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    
    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";


    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Height of a Rectangle given the Base and Area:";
    p2.style.textAlign = "center";

    p3.textContent = "H = 2a/b";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "H = height of a rectangle";
    p5.style.textIndent = "50px";

    p6.textContent = "A = Area of a rectangle";
    p6.style.textIndent = "50px";

    p7.textContent = "B = Base of a rectangle";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for getting the height of a rectangle given the base and area:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values into the formula."
    p9.style.textAlign = "center";
    
    p10.textContent = "H = 2("+Area+")/"+Base;
    p10.style.textAlign = "center";

    p11.textContent = "STEP 2: First multiply the given value of area to two then divide its product to the value of base";
    p11.style.textAlign = "center";

    
    p12.textContent = TwiceArea+"/"+Base;
    p12.style.textAlign = "center";

    p13.textContent = "H = "+RectHeight;
    p13.style.color = "red";
    p13.style.textAlign = "center";

    p14.textContent = "Therefore, the height of a triangle with the base of " + Base + " and an Area of " +Area+ " is " +RectHeight;
    p14.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~BASE OF A TRIANGLE GIVEN THE HEIGHT AND AREA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function TriangleBaseGivenHA(){
    var ti = document.createElement("p");
    ti.textContent = "BASE OF A TRIANGLE GIVEN THE HEIGHT AND AREA";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the value of Height");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the value of Area");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskBaseTri()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskBaseTri(){
    var Height = parseInt(document.getElementById("solve2").value);
    var Area = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Base of a triangle given the Height of" + Height + " and an area " + Area;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerBaseTriHA();
}

function AnswerBaseTriHA(){
    var Height = document.getElementById("solve2").value;
    var Area = document.getElementById("solves2").value;

    var Base = 2 * Area / Height;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Base of a triangle with a given Height of " + Height + " and an Area of " + Area + " is " + Base;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "RectBaseSolution()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}
function RectBaseSolution(){

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);

    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Height = parseInt(document.getElementById("solve2").value);
    var Area = parseInt(document.getElementById("solves2").value);


    //soln

    var TwiceArea = 2 * Area;
    var RectBase = TwiceArea / Height;

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Base of a Triangle given the Height and Area:";
    p2.style.textAlign = "center";

    p3.textContent = "B = 2a/h";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "B = Base of a triangle";
    p5.style.textIndent = "50px";

    p6.textContent = "A = Area of a triangle";
    p6.style.textIndent = "50px";

    p7.textContent = "H = Height of a triangle";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for getting the base of a triangle given the height and area:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values into the formula."
    p9.style.textAlign = "center";
    
    p10.textContent = "H = 2("+Area+")/"+Height;
    p10.style.textAlign = "center";

    p11.textContent = "STEP 2: First multiply the given value of area to two then divide its product to the value of height";
    p11.style.textAlign = "center";

    p12.textContent = "H = 2 x "+Area+"/"+Height;
    p12.style.textAlign = "center";

    p13.textContent = "H = "+TwiceArea+"/"+Height;
    p13.style.textAlign = "center";

    p14.textContent = "H = "+RectBase;
    p14.style.color = "red";
    p14.style.textAlign = "center";

    p15.textContent = "Therefore, the base of a triangle with a height of " + Height + " and an Area of " +Area+ " is " +RectBase;
    p15.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Pythagorean Theorem(Hypotenuse)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function PythagoreanTheorem(){
    var ti = document.createElement("p");
    ti.textContent = "LENGTH OF THE HYPOTENUSE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter leg a(Opposite)");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter leg b(Adjacent)");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskHypotenuse()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskHypotenuse(){
    var LegA = parseInt(document.getElementById("solve2").value);
    var LegB = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Hypotenuse of a Right triangle given both legs, a as " + LegA + " and b as " + LegB;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);
    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerToHypotenuse();
}

function AnswerToHypotenuse(){
    var LegA = document.getElementById("solve2").value;
    var LegB = document.getElementById("solves2").value;

    var A = LegA * LegA;
    var B = LegB * LegB;
    var parentheses = A + B;
    var Hypotenuse = Math.sqrt(parentheses); 

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Hypotenuse of a right triangle given Leg A as " + LegA + " and Leg B as " +LegB+ " is " + Hypotenuse;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "HypotenuseSolution()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}
function HypotenuseSolution(){

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);

    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var LegA = parseInt(document.getElementById("solve2").value);
    var LegB = parseInt(document.getElementById("solves2").value);


    //soln

    var A = LegA * LegA;
    var B = LegB * LegB;
    var parenthe = A + B;
    var Hypotenuse = Math.sqrt(parenthe);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Hypotenuse of a right triangle given the value of Leg A(Opposite) and Leg B(Adjacent):";
    p2.style.textAlign = "center";

    p3.textContent = "C = √a² + b²;"
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "C = Hypotenuse";
    p5.style.textIndent = "50px";

    p6.textContent = "A = Opposite";
    p6.style.textIndent = "50px";

    p7.textContent = "B = Adjacent";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for getting the hypotenuse of a right triangle:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values into the formula."
    p9.style.textAlign = "center";
    
    p10.textContent = "C = √"+LegA+"² + "+LegB+"²;"
    p10.style.textAlign = "center";

    p11.textContent = "STEP 2: Square the value of a and b inside the square root then add its product, after it get the square root of the sum";
    p11.style.textAlign = "center";

    p12.textContent = "C = √"+A+" + "+B;
    p12.style.textAlign = "center";

    p13.textContent = "C = √"+parenthe;
    p13.style.textAlign = "center";

    p14.textContent = "C = "+Hypotenuse;
    p14.style.color = "red";
    p14.style.textAlign = "center";

    p15.textContent = "Therefore, the Hypotenuse of a right triangle with Leg A as " + LegA + " and Leg b as" +LegB+ " is " +Hypotenuse;
    p15.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~LEG OF A RIGHT TRIANGLE GIVEN THE HYPOTENUSE AND ANOTHER LEG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function LegOfRightTriangle(){
    var ti = document.createElement("p");
    ti.textContent = "LEG OF A RIGHT TRIANGLE GIVEN THE HYPOTENUSE AND ANOTHER LEG";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter Hypotenuse");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter given Leg");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskMissingLeg()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskMissingLeg(){
    var Hypotenuse = parseInt(document.getElementById("solve2").value);
    var Leg = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the missing Leg of a Right triangle given the Hypotenuse with a value of " + Hypotenuse + " and Leg with a value of " + Leg;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";

    divYR.appendChild(pYR);
    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerToMissingL();
}

function AnswerToMissingL(){
    var Hypotenuse = document.getElementById("solve2").value;
    var Leg = document.getElementById("solves2").value;

    var C = Hypotenuse * Hypotenuse;
    var B = Leg * Leg;
    var parentheses = C + B;
    var missingLeg = Math.sqrt(parentheses); 

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);

    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The value of the missing Leg with given a hypotenuse of" + Hypotenuse + " and a given leg " +Leg+ " is " + missingLeg;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "MissLegSolution()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}
function MissLegSolution(){

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);

    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Hypotenuse = parseInt(document.getElementById("solve2").value);
    var Leg = parseInt(document.getElementById("solves2").value);


    //soln
    var C = Hypotenuse * Hypotenuse;
    var B = Leg * Leg;
    var parentheses = C + B;
    var missingLeg = Math.sqrt(parentheses);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    var p15 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the missing leg of a right triangle given the value of Hypotenuse and another Leg:";
    p2.style.textAlign = "center";

    p3.textContent = "A or B = √c² + a² or b²;"
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "C = Hypotenuse";
    p5.style.textIndent = "50px";

    p6.textContent = "A = Opposite";
    p6.style.textIndent = "50px";

    p7.textContent = "B = Adjacent";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for getting the hypotenuse of a right triangle:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values into the formula."
    p9.style.textAlign = "center";
    
    p10.textContent = "A or B = √"+Hypotenuse+"² + "+Leg+"²"
    p10.style.textAlign = "center";

    p11.textContent = "STEP 2: Square the value of c and the given leg inside the square root then add its product, after it get the square root of the sum";
    p11.style.textAlign = "center";

    p12.textContent = "A or B = √"+C+" + "+Leg;
    p12.style.textAlign = "center";

    p13.textContent = "A or B = √"+parentheses;
    p13.style.textAlign = "center";

    p14.textContent = "A or B = "+missingLeg;
    p14.style.color = "red";
    p14.style.textAlign = "center";

    p15.textContent = "Therefore, the Missing Leg of a right triangle with a given hypotenuse of " + Hypotenuse + " and a given leg of " +Leg+ " is " +missingLeg;
    p15.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    
    col3.appendChild(divAnswer);
}    

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~AREA OF AN EQUILATERAL TRIANGLE GIVEN THE SIDE LENGTH~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function AreaOfEquilateralTriangle(){
    var ti = document.createElement("p");
    ti.textContent = "AREA OF AN EQUILATERAL TRIANGLE GIVEN THE SIDE LENGTH";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the value of Side Length");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskAreaOfEquiTri()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskAreaOfEquiTri(){
    var SideLength = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Evaluate the Area of an equilateral triangle given the " +SideLength;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerToAreaOfEquiTri();
}

function AnswerToAreaOfEquiTri(){
    var SideLength = document.getElementById("solve").value;

    var TwiceSideLength = SideLength * SideLength;
    var Area = TwiceSideLength+"√3/4";

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Area of an Equilateral Triangle Given the Side Length with a value of "+SideLength+" is "+Area;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "AreaOfEquilateralTriSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function AreaOfEquilateralTriSol(){

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var SideLength = parseInt(document.getElementById("solve").value);

    //soln

    var TwiceSideLength = SideLength * SideLength;
    var Area = TwiceSideLength+"√3/4";

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");
    
    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Area of an Equilateral Triangle given the Side Length:";
    p2.style.textAlign = "center";

    p3.textContent = "A = √3/4 × (s)²";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area of a Triangle";
    p5.style.textIndent = "50px";

    p6.textContent = "s = Side Length";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for getting the Area of an Equilateral Triangle given the Side Length:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values into the formula."
    p8.style.textAlign = "center";
    
    p9.textContent = "A = √3/4 × ("+SideLength+")²";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Square the given value of the side length then put it outside the square root sign .";
    p10.style.textAlign = "center";
    
    p11.textContent = "A = √3/4 × "+TwiceSideLength;
    p11.style.textAlign = "center";

    p12.textContent = "A = "+Area;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the Area of an Equilateral Triangle given the Side Length with a value of "+SideLength+" is "+Area;
    p13.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SIDE LENGTH OF A TRIANGLE GIVEN THE AREA OF AN EQUILATERAL TRIANGLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function SideLengthOfEquiTri(){
    var ti = document.createElement("p");
    ti.textContent = "SIDE LENGTH OF A TRIANGLE GIVEN THE AREA OF AN EQUILATERAL TRIANGLE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Area");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSideLengthOfEquiTri()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskSideLengthOfEquiTri(){
    var Area = parseInt(document.getElementById("solve").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Evaluate the Side length of an equilateral triangle given the " +Area;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerToSideLengthEquiTri();
}

function AnswerToSideLengthEquiTri(){
    var Area = document.getElementById("solve").value;

    var Numerator = 4 * Area;
    var Denominator = 1.732;
    var Fraction = Numerator / Denominator;
    var SideLength = Math.sqrt(Fraction)

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var SquareArea = parseInt(document.getElementById("solve").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Side Length of an equilateral triangle given the Area with a value of "+Area+" is "+SideLength;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SideLengthOfEquiTriSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SideLengthOfEquiTriSol(){

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Area = parseInt(document.getElementById("solve").value);

    //soln

    var TwiceArea = Area * Area;
    var Numerator = 4 * TwiceArea;
    var Denominator = 1.732;
    var Fraction = Numerator / Denominator;
    var SideLength = Math.sqrt(Fraction)

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Side Length of an Equilateral Triangle given the Area:";
    p2.style.textAlign = "center";

    p3.textContent = "S = √4a / √3 ";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "S = Side Length";
    p5.style.textIndent = "50px";

    p6.textContent = "A = Area of a Triangle";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for getting the Area of an Equilateral Triangle given the Side Length:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values into the formula."
    p8.style.textAlign = "center";
    
    p9.textContent = "S = √4("+Area+") / √3";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Multiply the given value of Area to 4 then proceed on getting the square root of 3 in the denominator.";
    p10.style.textAlign = "center";
    
    p11.textContent = "S = √ "+Numerator+" / "+Denominator;
    p11.style.textAlign = "center";

    p12.textContent = "S = √"+Fraction;
    p12.style.textAlign = "center";

    p13.textContent = "A = "+SideLength;
    p13.style.color = "red";
    p13.style.textAlign = "center";

    p14.textContent = "Therefore, the Side Length of an Equilateral Triangle given the Area with a value of "+Area+" is "+SideLength;
    p14.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~AREA OF AN ISOSCELES TRIANGLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function AreaOfIsoscelesTri(){
    var ti = document.createElement("p");
    ti.textContent = "AREA OF A TRIANGLE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Height");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Base");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskAreaOfTriangle()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskAreaOfTriangle(){
    var Height = parseInt(document.getElementById("solve2").value);
    var Base = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Area of a triangle given the Height with a value of " +Height+ " and  a base with a value of " + Base;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerAreaTriangle();
}

function AnswerAreaTriangle(){
    var Height = document.getElementById("solve2").value;
    var Base = document.getElementById("solves2").value;

    var parenthe = Height * Base;
    var Area = 1/2 * parenthe;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Area of a triangle with a given Height with a value of " + Height + " and Base with a value of " + Base + " is " + Area;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "AreaTriangleSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function AreaTriangleSol(){

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Height = parseInt(document.getElementById("solve2").value);
    var Base = parseInt(document.getElementById("solves2").value);


    //soln

    var parenthe = Height * Base;
    var Area = 1/2 * parenthe;

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Area of a Triangle given the Height and Base:";
    p2.style.textAlign = "center";

    p3.textContent = "A = 1/2 (B x H)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "A = Area of a Triangle";
    p5.style.textIndent = "50px";

    p6.textContent = "B = Base of a Triangle";
    p6.style.textIndent = "50px";

    p7.textContent = "H = Height of a Triangle";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for getting the Area of a Triangle given the Height and Base:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values into the formula."
    p9.style.textAlign = "center";
    
    p10.textContent = "A = 1/2 ("+Height+" x "+Height+")";
    p10.style.textAlign = "center";

    p11.textContent = "STEP 2: By Following the rule of PEMDAS multiply the values first inside the parentheses then proceed to divide the product to 1/2.";
    p11.style.textAlign = "center";
    
    p12.textContent = "A = 1/2 ("+parenthe+")";
    p12.style.textAlign = "center";

    p13.textContent = "A = "+Area;
    p13.style.color = "red";
    p13.style.textAlign = "center";

    p14.textContent = "Therefore, the Area of a triangle with the given Height with a value of " +Height+ " and Base with a value of" +Base+ " is " +Area;
    p14.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~BASE OF AN ISOSCELES TRIANGLE GIVEN THE AREA AND HEIGHT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function BaseOfIsoscelesTriangle(){
    var ti = document.createElement("p");
    ti.textContent = "BASE OF AN ISOSCELES TRIANGLE GIVEN THE AREA AND HEIGHT";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Area");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Height");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskBaseOfIsoscelesTri()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskBaseOfIsoscelesTri(){
    var Area = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Base of Isosceles triangle given the Area with a value of " +Area+ " and  a Height with a value of " + Height;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerBaseTriangle();
}

function AnswerBaseTriangle(){
    var Area = document.getElementById("solve2").value;
    var Height = document.getElementById("solves2").value;

    var parenthe = 2 * Area;
    var Base = parenthe / Height;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Base of Isosceles Triangle with a given Area with a value of " + Area + " and Height with a value of " +Height+ " is " + Base;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "BaseOfIsoscelesTriSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function BaseOfIsoscelesTriSol(){

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Area = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);


    //soln

    var parenthe = 2 * Area;
    var Base = parenthe / Height;

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Base of Isosceles Triangle given the Area and Height:";
    p2.style.textAlign = "center";

    p3.textContent = "B = (2a) / h";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "B = Base of a Triangle";
    p5.style.textIndent = "50px";

    p6.textContent = "A = Area of a Triangle";
    p6.style.textIndent = "50px";

    p7.textContent = "H = Height of a Triangle";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for getting the Area of a Triangle given the Height and Base:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values into the formula."
    p9.style.textAlign = "center";
    
    p10.textContent = "B = (2("+Area+")) / "+Height;
    p10.style.textAlign = "center";

    p11.textContent = "STEP 2: By Following the rule of PEMDAS multiply the values first inside the parentheses then proceed to divide the product to the value of Height.";
    p11.style.textAlign = "center";
    
    p12.textContent = "B = "+parenthe+" / "+Height;
    p12.style.textAlign = "center";

    p13.textContent = "B = "+Base;
    p13.style.color = "red";
    p13.style.textAlign = "center";

    p14.textContent = "Therefore, the Base of Isosceles Triangle with the given Area with a value of " +Area+ " and Height with a value of" +Height+ " is " +Base;
    p14.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HEIGHT OF AN ISOSCELES TRIANGLE GIVEN THE AREA AND BASE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function HeightOfIsoscelesTriangle(){
    var ti = document.createElement("p");
    ti.textContent = "HEIGHT OF AN ISOSCELES TRIANGLE GIVEN THE AREA AND BASE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Area");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Base");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskHeightOfIsoscelesTri()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskHeightOfIsoscelesTri(){
    var Area = parseInt(document.getElementById("solve2").value);
    var Base = parseInt(document.getElementById("solves2").value);
    
    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-end";
    container.style.marginRight = "40px"; 


    var ava1 = document.createElement("img");
    ava1.setAttribute("src", "MCLOGOICON.png");
    ava1.setAttribute("height", "30px");
    ava1.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "You";
    you.style.color = "white";

    
    container.appendChild(ava1);
    container.appendChild(you);
    container.style.marginTop = "30px";


    
    var backread = document.createElement("br");
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO BALA KA HAHAHAHA
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Height of Isosceles triangle given the Area with a value of " +Area+ " and Base with a value of " + Base;
    pYR.style.color = "black";

    divYR.setAttribute("id", "divvYR");
    divYR.style.padding = "5px";
    divYR.style.textAlign = "right";
    divYR.style.marginLeft = "50%";
    divYR.style.backgroundColor = "white";
    divYR.style.border = "2px solid black";
    divYR.style.borderRadius = "5%";
    divYR.style.paddingRight = "10px";



    divYR.appendChild(pYR);

    
    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container); 
    col3.appendChild(divYR);
    AnswerHeightTriangle();
}

function AnswerHeightTriangle(){
    var Area = document.getElementById("solve2").value;
    var Base = document.getElementById("solves2").value;

    var parenthe = 2 * Area;
    var Height = parenthe / Base;

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Height of Isosceles Triangle with a given Area with a value of " + Area + " and Base with a value of " +Base+ " is " + Height;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "HeightOfIsoscelesTriSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function HeightOfIsoscelesTriSol(){

    var container = document.createElement("div");
    container.style.display = "flex"; 
    container.style.alignItems = "center"; 
    container.style.justifyContent = "flex-start"; 
    
    var imag = document.createElement("img");
    imag.setAttribute("src", "MCLOGOICON.png");
    imag.setAttribute("height", "30px");
    container.style.marginLeft = "40px";
    imag.style.marginRight = '5px';

    var you = document.createElement("p");
    you.textContent = "Math Companion";
    you.style.color = "white";

    container.appendChild(imag);
    container.appendChild(you);


    var backread = document.createElement("br");

    var col3 = document.getElementById("right");
    col3.appendChild(backread);
    col3.appendChild(container);
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO YAN KAW NA GUMAWA HAHA

    var Area = parseInt(document.getElementById("solve2").value);
    var Base = parseInt(document.getElementById("solves2").value);


    //soln

    var parenthe = 2 * Area;
    var Height = parenthe / Base;

    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "60px";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p13 = document.createElement("p");
    var p14 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openTriangle()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Height of Isosceles Triangle given the Area and Base:";
    p2.style.textAlign = "center";

    p3.textContent = "H = (2a) / b";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "H = Height of a Triangle";
    p5.style.textIndent = "50px";

    p6.textContent = "A = Area of a Triangle";
    p6.style.textIndent = "50px";

    p7.textContent = "B = Base of a Triangle";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for getting the Area of a Triangle given the Height and Base:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values into the formula."
    p9.style.textAlign = "center";
    
    p10.textContent = "H = (2("+Area+")) / "+Base;
    p10.style.textAlign = "center";

    p11.textContent = "STEP 2: By Following the rule of PEMDAS multiply the values first inside the parentheses then proceed to divide the product to the value of Base.";
    p11.style.textAlign = "center";
    
    p12.textContent = "H = "+parenthe+" / "+Base;
    p12.style.textAlign = "center";

    p13.textContent = "H = "+Height;
    p13.style.color = "red";
    p13.style.textAlign = "center";

    p14.textContent = "Therefore, the Height of Isosceles Triangle with the given Area with a value of " +Area+ " and Base with a value of" +Base+ " is " +Height;
    p14.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    divAnswer.appendChild(p14);
    
    col3.appendChild(divAnswer);
}


//ONCLICK CIRCLES

function openCircle(){
    window.location.href="../MC-DEF-2DC/MCD-CIRCLES2D.html";
}

function openQuad(){
    window.location.href="../MC-DEF-2DQ/MCD-CIRCLES2DQUADRI.html";
}

function openTriangle(){
    window.location.href="../MC-DEF-2DT/MCD-2DTRIANGLE.html";
}

function home(){
    window.location.href="../../MathCompanion/MathCompanion.html"
}