function SACube(){
    var ti = document.createElement("p");
    ti.textContent = "SURFACE AREA OF A CUBE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    //var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the side length of a Cube");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    //input1.setAttribute("placeholder", "Enter the length of the side B");
    //input1.setAttribute("id", "solves2");
    //input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the length of the side C");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSACube()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    //container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskSACube(){
    var sideLength = parseInt(document.getElementById("solve2").value);

    
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
    pYR.textContent = "Find the Surface Area of a cube with a side length of " + sideLength;
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
    finalAnswerSACube();
}


function finalAnswerSACube(){
    var sideLength = document.getElementById("solve2").value;
    
    var SquareSL = sideLength * sideLength;
    var SA = 6 * SquareSL;

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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Surface Area (SA) of a cube with a side length of " + sideLength + " is " + SA;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionSACube()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionSACube(){
    
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

    var sideLength = parseInt(document.getElementById("solve2").value);

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
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Surface Area of a Cube: ";
    p2.style.textAlign = "center";

    p3.textContent = "SA = 6s²";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "SA = Surface Area";
    p5.style.textIndent = "50px";

    p6.textContent = "s = Side Length";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Surface Area of a cube";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "SA = 6(" + sideLength + ")²";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Square the value of s ";
    p10.style.textAlign = "center";

    var squareSL = sideLength * sideLength;
    var SA = squareSL * 6;

    p11.textContent = "6(" + squareSL + ")";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the product of 6 and " + squareSL;
    p14.style.textAlign = "center";

    p15.textContent = SA;
    p15.style.textAlign = "center";

    p12.textContent = "SA = " + SA;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the Surface Area of a cube with a side length of " + sideLength + " is " + SA;
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

//SURFACE AREA OF A CUBOID
//3 TEXT INPUTS

function SACuboid(){
    var ti = document.createElement("p");
    ti.textContent = "SURFACE AREA OF A CUBOID";
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

    input.setAttribute("placeholder", "Enter the Length");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Width");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    input2.setAttribute("placeholder", "Enter the Height");
    input2.setAttribute("id", "solve3");
    input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSACuboid()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskSACuboid(){

    var Length = parseInt(document.getElementById("solve2").value);
    var Width = parseInt(document.getElementById("solves2").value);
    var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Surface Area of a cuboid with a length of " + Length + ", a width of " + Width + ", and a height of " + Height;
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
    finalAnswerSACuboid();
}

function finalAnswerSACuboid(){
    var Length = parseInt(document.getElementById("solve2").value);
    var Width = parseInt(document.getElementById("solves2").value);
    var Height = parseInt(document.getElementById("solve3").value);

    var LW = Length * Width;
    var WH = Width * Height;
    var LH = Length * Height;

    var twiceLW = 2 * LW;
    var twiceWH = 2 * WH;
    var twiceLH = 2 * LH;

    var SA = twiceLH + twiceLW + twiceWH;

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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Surface Area (SA) of a cuboid with a length of " + Length + ", a width of " + Width + ", and a height of " + Height + " is " + SA;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionSACuboid()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionSACuboid(){
    
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
    var Height = parseInt(document.getElementById("solve3").value);

    var LW = Length * Width;
    var WH = Width * Height;
    var LH = Length * Height;

    var twiceLW = 2 * LW;
    var twiceWH = 2 * WH;
    var twiceLH = 2 * LH;

    var SA = twiceLH + twiceLW + twiceWH;

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Surface Area of a Cuboid: ";
    p2.style.textAlign = "center";

    p3.textContent = "SA = 2(LW + WH + LH)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "SA = Surface Area";
    p5.style.textIndent = "50px";

    p6.textContent = "L = Length";
    p6.style.textIndent = "50px";

    p16.textContent = "W = Width";
    p16.style.textIndent = "50px";

    p17.textContent = "H = Height";
    p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Surface Area of a cuboid";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "SA = 2 ( (" + Length + ")(" + Width + ")+(" + Width + ")(" + Height +")+(" + Length + ")(" + Height + "))";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Multiply the values inside the parentheses ";
    p10.style.textAlign = "center";


    p11.textContent = "2(" + LW + "+" + WH + "+" + LH + ")";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Using the distributive property, distribute 2 to the values inside the parentheses";
    p14.style.textAlign = "center";

    p15.textContent = twiceLW + " + " + twiceWH + " + " + twiceLH;
    p15.style.textAlign = "center";

    p18.textContent = "STEP 4: Get the sum of " + twiceLW + " , " + twiceWH + " , and " + twiceLH;
    p18.style.textAlign = "center";

    p19.textContent = SA;
    p19.style.textIndent = "center";

    p12.textContent = "SA = " + SA;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the Surface Area of a cuboid with a length of " + Length + ", a width of " + Width + ", and a height of " + Height + " is " + SA;
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
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p18);
    divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}



//SURFACE AREA OF A RIGHT CIRCULAR CYLINDER
//2 TEXT INPUTS

function SArcc(){
    var ti = document.createElement("p");
    ti.textContent = "SURFACE AREA OF A RIGHT CIRCULAR CYLINDER";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Radius");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Height");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the Height");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSArcc()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskSArcc(){

    var Radius = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Surface Area of a Right Circular Cylinder with a radius of " + Radius + ", and a height of " + Height;
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
    finalAnswerSArcc();
}

function finalAnswerSArcc(){
    var Radius = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var squaredRadius = Radius * Radius;
    var pi = Math.PI;
    var left = 2 * pi * squaredRadius;
    var right = 2 * pi * Radius * Height;

    var SA = left + right;

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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Surface Area (SA) of a Right Circular Cylinder with a radius of " + Radius + ", a height of " + Height + " is " + SA;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionSArcc()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionSArcc(){
    
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

    var Radius = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var squaredRadius = Radius * Radius;
    var pi = Math.PI;
    var left = 2 * pi * squaredRadius;
    var right = 2 * pi * Radius * Height;

    var SA = left + right;

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");


    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Surface Area of a Right Circular Cylinder: ";
    p2.style.textAlign = "center";

    p3.textContent = "SA = 2πr² + 2πrh";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "SA = Surface Area";
    p5.style.textIndent = "50px";

    p6.textContent = "r = radius";
    p6.style.textIndent = "50px";

    p16.textContent = "H = Height";
    p16.style.textIndent = "50px";

    //p17.textContent = "H = Height";
    //p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Surface Area of a Right Circular Cylinder";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "SA = ( (2)(3.14)(" + Radius + ")² ) + ( (2)(3.14)(" + Radius + ")(" + Height + ")";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Evaluate the values inside the parentheses ";
    p10.style.textAlign = "center";


    p11.textContent = left + " + " + right;
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the sum of " + left + " and " + right ;
    p14.style.textAlign = "center";

    p15.textContent = SA;
    p15.style.textAlign = "center";

    //p18.textContent = "STEP 4: Get the sum of " + twiceLW + " , " + twiceWH + " , and " + twiceLH;
    //p18.style.textAlign = "center";

    //p19.textContent = SA;
    //p19.style.textIndent = "center";

    p12.textContent = "SA = " + SA;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the Surface Area of a Right Circular Cylinder with a radius of " + Radius + ", a height of " + Height + " is " + SA;
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
    //divAnswer.appendChild(p17);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(br3);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(br4);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    //divAnswer.appendChild(p18);
    //divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

// SURFACE AREA OF A SPHERE
//1 TEXT INPUT

function SASphere(){
    var ti = document.createElement("p");
    ti.textContent = "SURFACE AREA OF A SPHERE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    //var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the radius");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    //input1.setAttribute("placeholder", "Enter the length of the side B");
    //input1.setAttribute("id", "solves2");
    //input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the length of the side C");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSASphere()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    //container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskSASphere(){
    var radius = parseInt(document.getElementById("solve2").value);

    
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
    pYR.textContent = "Find the Surface Area of a Sphere with a radius of " + radius;
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
    finalAnswerSASphere();
}


function finalAnswerSASphere(){
    var radius = document.getElementById("solve2").value;
    
    var pi = Math.PI;
    var squaredRadius = radius * radius;
    var SA = 4 * pi * squaredRadius;

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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Surface Area (SA) of a Sphere with a radius of " + radius + " is " + SA;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionSASphere()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionSASphere(){
    
    var radius = parseInt(document.getElementById("solve2").value);
    var pi = Math.PI;
    var squaredRadius = radius * radius;
    var SA = 4 * pi * squaredRadius;

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

    var sideLength = parseInt(document.getElementById("solve2").value);

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
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Surface Area of a Sphere: ";
    p2.style.textAlign = "center";

    p3.textContent = "SA = 4πr²";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "SA = Surface Area";
    p5.style.textIndent = "50px";

    p6.textContent = "r = radius";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Surface Area of a Sphere";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "SA = (4)(3.14)(" + radius + ")²";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Square the radius ";
    p10.style.textAlign = "center";


    p11.textContent = "(4)(3.14)(" + squaredRadius + ")";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the product of 4, the PI, and " + squaredRadius;
    p14.style.textAlign = "center";

    p15.textContent = SA;
    p15.style.textAlign = "center";

    p12.textContent = "SA = " + SA;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the Surface Area of a Sphere with a radius of " + radius + " is " + SA;
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

// SURFACE AREA OF A HEMISPHERE
// 1 TEXT INPUT

function SAHemisphere(){
    var ti = document.createElement("p");
    ti.textContent = "SURFACE AREA OF A HEMISPHERE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    //var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the radius");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    //input1.setAttribute("placeholder", "Enter the length of the side B");
    //input1.setAttribute("id", "solves2");
    //input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the length of the side C");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSAHemisphere()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    //container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskSAHemisphere(){
    var radius = parseInt(document.getElementById("solve2").value);

    
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
    pYR.textContent = "Find the Surface Area of a Hemiphere with a radius of " + radius;
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
    finalAnswerSAHemisphere();
}


function finalAnswerSAHemisphere(){
    var radius = document.getElementById("solve2").value;
    

    var pi = Math.PI;
    var squaredRadius = radius * radius;
    var SA = 3 * pi * squaredRadius;

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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Surface Area (SA) of a Hemisphere with a radius of " + radius + " is " + SA;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionSAHemisphere()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionSAHemisphere(){
    
    var radius = parseInt(document.getElementById("solve2").value);
    var pi = Math.PI;
    var squaredRadius = radius * radius;
    var SA = 3 * pi * squaredRadius;

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

    var sideLength = parseInt(document.getElementById("solve2").value);

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
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Surface Area of a Hemisphere: ";
    p2.style.textAlign = "center";

    p3.textContent = "SA = 3πr²";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "SA = Surface Area";
    p5.style.textIndent = "50px";

    p6.textContent = "r = radius";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Surface Area of a Hemisphere";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values";
    p8.style.textAlign = "center";
    
    p9.textContent = "SA = (3)(3.14)(" + radius + ")²";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Square the radius ";
    p10.style.textAlign = "center";


    p11.textContent = "(3)(3.14)(" + squaredRadius + ")";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the product of 3, the PI, and " + squaredRadius;
    p14.style.textAlign = "center";

    p15.textContent = SA;
    p15.style.textAlign = "center";

    p12.textContent = "SA = " + SA;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the Surface Area of a Hemisphere with a radius of " + radius + " is " + SA;
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

//VOLUME OF A CUBE
//1 TEXT INPUT

function VolumeCube(){
    var ti = document.createElement("p");
    ti.textContent = "VOLUME OF A CUBE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    //var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the side length");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    //input1.setAttribute("placeholder", "Enter the length of the side B");
    //input1.setAttribute("id", "solves2");
    //input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the length of the side C");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskVolumeCube()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    //container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskVolumeCube(){
    var sideLength = parseInt(document.getElementById("solve2").value);

    
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
    pYR.textContent = "Find the Volume of a Cube with a side length of " + sideLength;
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
    finalAnswerVolumeCube();
}


function finalAnswerVolumeCube(){
    var sideLength = document.getElementById("solve2").value;
    
    var volume = sideLength * sideLength * sideLength;

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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Volume (V) of a cube with a side length of " + sideLength + " is " + volume;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionVCube()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionVCube(){
    
    var sideLength = parseInt(document.getElementById("solve2").value);

    var volume = sideLength * sideLength * sideLength;

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

    var sideLength = parseInt(document.getElementById("solve2").value);

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
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Volume of a Cube: ";
    p2.style.textAlign = "center";

    p3.textContent = "V = (" + sideLength +")³";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = volume";
    p5.style.textIndent = "50px";

    p6.textContent = "s = side length";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Volume of a Cube";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values";
    p8.style.textAlign = "center";
    
    p9.textContent = "V = s³";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Cube the side length ";
    p10.style.textAlign = "center";


    p11.textContent = "(" + sideLength + ")³";
    p11.style.textAlign = "center";

    //p14.textContent = "STEP 3: Get the product of 3, the PI, and " + squaredRadius;
    //p14.style.textAlign = "center";

    //p15.textContent = SA;
    //p15.style.textAlign = "center";

    p12.textContent = "V = " + volume;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the Volume of a CUbe with a side length of " + sideLength + " is " + volume;
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
    //divAnswer.appendChild(p14);
    //divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//SIDE LENGTH OF A CUBE GIVEN THE VOLUME
//1 TEXT INPUT

function SLCube(){
    var ti = document.createElement("p");
    ti.textContent = "SIDE LENGTH OF A CUBE GIVEN THE VOLUME";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    //var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Volume");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    //input1.setAttribute("placeholder", "Enter the length of the side B");
    //input1.setAttribute("id", "solves2");
    //input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the length of the side C");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSLCube()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    //container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskSLCube(){
    var Volume = parseInt(document.getElementById("solve2").value);

    
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
    pYR.textContent = "Find the side length of a Cube with a volume of " + Volume;
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
    finalAnswerSLCube();
}


function finalAnswerSLCube(){
    var volume = document.getElementById("solve2").value;
    
    var sideLength = Math.cbrt(volume);

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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Side length of a cube with a volume of " + volume + " is " + sideLength;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionSLCube()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionSLCube(){
    
    var volume = parseInt(document.getElementById("solve2").value);

    var sideLength = Math.cbrt(volume);

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

    var volume2 = parseInt(document.getElementById("solve2").value);

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
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the side length of a Cube given the Volume: ";
    p2.style.textAlign = "center";

    p3.textContent = "s = ³√V";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "s = side length";
    p5.style.textIndent = "50px";

    p6.textContent = "V = Volume";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the side length of a Cube";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values";
    p8.style.textAlign = "center";
    
    p9.textContent = "s = ³√" + volume;
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Get the cuberoot of " + volume;
    p10.style.textAlign = "center";


    p11.textContent = sideLength;
    p11.style.textAlign = "center";

    //p14.textContent = "STEP 3: Get the product of 3, the PI, and " + squaredRadius;
    //p14.style.textAlign = "center";

    //p15.textContent = SA;
    //p15.style.textAlign = "center";

    p12.textContent = "s = " + sideLength;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the Side Length of a cube with a volume of " + volume + " is " + sideLength;
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
    //divAnswer.appendChild(p14);
    //divAnswer.appendChild(p15);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//VOLUME OF A RIGHT PYRAMID
//2 TEXT INPUTS

function VRP(){
    var ti = document.createElement("p");
    ti.textContent = "VOLUME OF A RIGHT PYRAMID";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Base");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Height");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the Height");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskVRP()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskVRP(){

    var Base = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Volume of a Right Pyramid with a base of " + Base + ", and a height of " + Height;
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
    finalAnswerVRP();
}

function finalAnswerVRP(){
    var Base = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var squaredBase = Base * Base;
    var volume = (1/3) * Base * Height;


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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Volume of a Right Pyramid with a base of " + Base + ", a height of " + Height + " is " + volume;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionVRP()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionVRP(){
    
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
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var squaredBase = Base * Base;
    var volume = (1/3) * Base * Height; 

    

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Volume of a Right Pyramid: ";
    p2.style.textAlign = "center";

    p3.textContent = "V = (1/3) (b) (h)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "B = Base";
    p6.style.textIndent = "50px";

    p16.textContent = "H = Height";
    p16.style.textIndent = "50px";

    //p17.textContent = "H = Height";
    //p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Volume of a Right Pyramid";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "V = (1/3)(" + Base + ")(" + Height + ")";
    p9.style.textAlign = "center";
    
    //p10.textContent = "STEP 2: Square the base";
    //p10.style.textAlign = "center";


    //p11.textContent = squaredBase;
    //p11.style.textAlign = "center";

    p14.textContent = "STEP 2: Get the product of (1/3), " + Base + " and " + Height ;
    p14.style.textAlign = "center";

    p15.textContent = volume;
    p15.style.textAlign = "center";

    //p18.textContent = "STEP 4: Get the sum of " + twiceLW + " , " + twiceWH + " , and " + twiceLH;
    //p18.style.textAlign = "center";

    //p19.textContent = SA;
    //p19.style.textIndent = "center";

    p12.textContent = "V = " + volume;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the Volume of a Right Pyramid with a base of " + Base + ", a height of " + Height + " is " + volume;
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
    //divAnswer.appendChild(p17);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    //divAnswer.appendChild(br3);
    //divAnswer.appendChild(p10);
    //divAnswer.appendChild(p11);
    //divAnswer.appendChild(br4);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    //divAnswer.appendChild(p18);
    //divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//BASE OF A RIGHT PYRAMID GIVEN THE VOLUME AND HEIGHT
//2 TEXT INPUTS

function BaseGVH(){
    var ti = document.createElement("p");
    ti.textContent = "BASE OF A RIGHT PYRAMID GIVEN THE VOLUME AND HEIGHT";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Volume");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Height");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the Height");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskBaseGVH()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskBaseGVH(){

    var Volume = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Base of a Right Pyramid with a volume of " + Volume + ", and a height of " + Height;
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
    finalAnswerBGVH();
}

function finalAnswerBGVH(){
    var Volume = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var thriceVolume = Volume * 3;
    var base = thriceVolume / Height;


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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Base of a Right Pyramid with a Volume of " + Volume + ", a height of " + Height + " is " + base;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionBaseRPGVH()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionBaseRPGVH(){
    
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

    var Volume = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    var thriceVolume = Volume * 3;
    var base = thriceVolume / Height

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Base of a Right Pyramid given the Volume and Height: ";
    p2.style.textAlign = "center";

    p3.textContent = "b = (V * 3) / h";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "B = Base";
    p6.style.textIndent = "50px";

    p16.textContent = "h = Height";
    p16.style.textIndent = "50px";

    //p17.textContent = "H = Height";
    //p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Base of a Right Pyramid";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "b = (" + Volume + "* 3) / " + Height;
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Thrice the base";
    p10.style.textAlign = "center";


    p11.textContent = thriceVolume + " / " + Height;
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the quotient of " + thriceVolume + " and " + Height ;
    p14.style.textAlign = "center";

    p15.textContent = base;
    p15.style.textAlign = "center";

    //p18.textContent = "STEP 4: Get the sum of " + twiceLW + " , " + twiceWH + " , and " + twiceLH;
    //p18.style.textAlign = "center";

    //p19.textContent = SA;
    //p19.style.textIndent = "center";

    p12.textContent = "b = " + base;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the base of a Right Pyramid with a volume of " + Volume + ", a height of " + Height + " is " + base;
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
    //divAnswer.appendChild(p17);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    //divAnswer.appendChild(br3);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    //divAnswer.appendChild(br4);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    //divAnswer.appendChild(p18);
    //divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//HEIGHT OF A RIGHT PYRAMID GIVEN THE VOLUME AND BASE
// 2 TEXT INPUTS

function HeightGVB(){
    var ti = document.createElement("p");
    ti.textContent = "HEIGHT OF A RIGHT PYRAMID GIVEN THE VOLUME AND THE BASE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Volume");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Base");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the Height");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskHeightGVB()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskHeightGVB(){

    var Volume = parseInt(document.getElementById("solve2").value);
    var Base = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Height of a Right Pyramid with a volume of " + Volume + ", and a base of " + Base;
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
    finalAnswerHGVB();
}

function finalAnswerHGVB(){
    var Volume = parseInt(document.getElementById("solve2").value);
    var Base = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var thriceVolume = Volume * 3;
    var height = thriceVolume / Base;


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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Height of a Right Pyramid with a Volume of " + Volume + ", and a base of " + Base + " is " + height;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionHeightRPGVB()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionHeightRPGVB(){
    
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

    var Volume = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    var thriceVolume = Volume * 3;
    var base = thriceVolume / Height

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Height of a Right Pyramid given the Volume and Base: ";
    p2.style.textAlign = "center";

    p3.textContent = "h = (V * 3) / b";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "B = Base";
    p6.style.textIndent = "50px";

    p16.textContent = "h = Height";
    p16.style.textIndent = "50px";

    //p17.textContent = "H = Height";
    //p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Height of a Right Pyramid";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "h = (" + Volume + "* 3) / " + Height;
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Thrice the Volume";
    p10.style.textAlign = "center";


    p11.textContent = thriceVolume + " / b"
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the quotient of " + thriceVolume + " and " + base ;
    p14.style.textAlign = "center";

    p15.textContent = Height;
    p15.style.textAlign = "center";

    //p18.textContent = "STEP 4: Get the sum of " + twiceLW + " , " + twiceWH + " , and " + twiceLH;
    //p18.style.textAlign = "center";

    //p19.textContent = SA;
    //p19.style.textIndent = "center";

    p12.textContent = "h = " + Height;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the height of a Right Pyramid with a volume of " + Volume + ", and a base of " + base + " is " + Height;
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
    //divAnswer.appendChild(p17);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    //divAnswer.appendChild(br3);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    //divAnswer.appendChild(br4);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    //divAnswer.appendChild(p18);
    //divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//VOLUME OF A SPHERE
//1 TEXT INPUT

function VolumeSphere(){
    var ti = document.createElement("p");
    ti.textContent = "VOLUME OF A SPHERE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    //var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the radius");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    //input1.setAttribute("placeholder", "Enter the length of the side B");
    //input1.setAttribute("id", "solves2");
    //input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the length of the side C");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskVolumeSphere()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    //container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskVolumeSphere(){
    var radius = parseInt(document.getElementById("solve2").value);

    
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
    pYR.textContent = "Find the Volume of a Sphere with a radius of " + radius;
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
    finalAnswerVolumeSphere();
}
function finalAnswerVolumeSphere(){
    var radius = document.getElementById("solve2").value;
    
    var cuberadius = radius * radius * radius;
    var pi = Math.PI;
    var volume = (4/3) * pi * cuberadius;

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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Volume of a Sphere with a radius of " + radius + " is " + volume;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionVolumeSphere()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionVolumeSphere(){
    
    var radius = parseInt(document.getElementById("solve2").value);

    var cuberadius = radius * radius * radius;
    var pi = Math.PI;
    var volume = (4/3) * pi * cuberadius;

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

    var lol = parseInt(document.getElementById("solve2").value);

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
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Volume of a Sphere: ";
    p2.style.textAlign = "center";

    p3.textContent = "V = 4/3πr³";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "r = radius";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Volume of a Sphere";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values";
    p8.style.textAlign = "center";
    
    p9.textContent = "V = (4/3)(π)("+ radius + ")³";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Get the cube of " + radius;
    p10.style.textAlign = "center";


    p11.textContent = "(4/3)(3.14)("+cuberadius + ")";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the product of 4/3, the PI, and " + cuberadius;
    p14.style.textAlign = "center";

    p15.textContent = volume;
    p15.style.textAlign = "center";

    p12.textContent = "V = " + volume;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, Volume of a Sphere with a radius of " + radius + " is " + volume;
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

//SURFACE AREA OF A RIGHT PRISM
//3 TEXT INPUTS

function SArightprism(){
    var ti = document.createElement("p");
    ti.textContent = "SURFACE AREA OF A RIGHT TRIANGULAR PRISM";
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
    var input3 = document.createElement("input");
    var input4 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Side A");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Side B");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    input2.setAttribute("placeholder", "Enter the Side C");
    input2.setAttribute("id", "solve3");
    input2.setAttribute("type", "text");

    input3.setAttribute("placeholder", "Enter base");
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "solve4");

    input4.setAttribute("placeholder", "Enter the height");
    input4.setAttribute("id", "solve5");
    input4.setAttribute("type", "Text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskSARightPrism()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(input3);
    container.appendChild(input4);
    container.appendChild(button);
   
}

function uAskSARightPrism(){

    var sideA = parseInt(document.getElementById("solve2").value);
    var sideB = parseInt(document.getElementById("solves2").value);
    var sideC = parseInt(document.getElementById("solve3").value);
    var base = parseInt(document.getElementById("solve4").value);
    var height = parseInt(document.getElementById("solve4").value);


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
    pYR.textContent = "Find the Surface Area of a right triangular prism with a side of " + sideA + ", " + sideB + ", and " + sideC + ", a base of " + base + " and a height of " + height;
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
    finalAnswerSArighttriangularprism();
}

function finalAnswerSArighttriangularprism(){
    var sideA = parseInt(document.getElementById("solve2").value);
    var sideB = parseInt(document.getElementById("solves2").value);
    var sideC = parseInt(document.getElementById("solve3").value);
    var base = parseInt(document.getElementById("solve4").value);
    var height = parseInt(document.getElementById("solve5").value);

    var perimeter = sideA + sideB + sideC;
    var bh = base * height;

    var hperi = height * perimeter;
    
    var SA = bh + hperi;

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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Surface Area (SA) of a right triangular prism with sides of " + sideA + ", "+ sideB + ", and " + sideC + ", a base of " + base + ", and a height of " + height + " is " + SA;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionSARightTriangularPrism()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionSARightTriangularPrism(){
    
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

    var sideA = parseInt(document.getElementById("solve2").value);
    var sideB = parseInt(document.getElementById("solves2").value);
    var sideC = parseInt(document.getElementById("solve3").value);
    var base = parseInt(document.getElementById("solve4").value);
    var height = parseInt(document.getElementById("solve5").value);

    var perimeter = sideA + sideB + sideC;
    var bh = base * height;

    var hperi = height * perimeter;
    
    var SA = bh + hperi;


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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Surface Area of a right triangular prism: ";
    p2.style.textAlign = "center";

    p3.textContent = "SA = bh + (a+b+c)h";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "SA = Surface Area";
    p5.style.textIndent = "50px";

    p6.textContent = "b = base";
    p6.style.textIndent = "50px";

    p16.textContent = "h = height";
    p16.style.textIndent = "50px";

    p17.textContent = "H = Height";
    p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Surface Area of a right triangular prism";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "SA = (" + base + ")(" + height + ") + (" + sideA + " + " + sideB + " + " + sideC + " ) " + height;
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Get the sum of all sides ";
    p10.style.textAlign = "center";


    p11.textContent = "(" + base + ")(" + height + ") + " + perimeter + "(" + height + ")";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Multiply the height to the perimeter ";
    p14.style.textAlign = "center";

    p15.textContent = "(" + base + ")(" + height + ") + " + hperi;
    p15.style.textAlign = "center";

    p18.textContent = "STEP 4: Get the product of the base and height";
    p18.style.textAlign = "center";

    p19.textContent = bh + " + " + hperi;
    p19.style.textAlign = "center";
    
    p20.textContent =  "STEP 5: Get the sum of " + bh +" and " + hperi;
    p20.style.textAlign = "center";

    p12.textContent = "SA = " + SA;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the Surface Area of a Right Triangular Prism withsides of " + sideA + " , " + sideB + " and " + sideC + ", a base of " + base + ", and a height of " + height + " is " + SA;
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
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p18);
    divAnswer.appendChild(p19);
    divAnswer.appendChild(p20);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//RADIUS OF A SPHERE GIVEN THE RADIUS
//1 TEXT INPUT

function radiusSphereGV(){
    var ti = document.createElement("p");
    ti.textContent = "RADIUS OF A SPHERE GIVEN THE VOLUME";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    //var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the radius");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    //input1.setAttribute("placeholder", "Enter the length of the side B");
    //input1.setAttribute("id", "solves2");
    //input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the length of the side C");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskRadiusSphereGV()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    //container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskRadiusSphereGV(){
    var VOLUME = parseInt(document.getElementById("solve2").value);

    var thriceVolume = 3 * VOLUME;
    var pi = Math.PI;
    var fourpi = 4 * pi;
    var radius = thriceVolume / fourpi;

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
    pYR.textContent = "Find the radius of a Sphere with a Volume of " + VOLUME;
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
    finalAnswerRadiusSphere();
}
function finalAnswerRadiusSphere(){
    var VOLUME = document.getElementById("solve2").value;
    
    var thriceVolume = 3 * VOLUME;
    var pi = Math.PI;
    var fourpi = 4 * pi;
    var radius = thriceVolume / fourpi; 

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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The radius of a Sphere with a volume of " + VOLUME + " is " + radius;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionRadiusGV()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionRadiusGV(){
    
    var VOLUME = parseInt(document.getElementById("solve2").value);

    var thriceVolume = 3 * VOLUME;
    var pi = Math.PI;
    var fourpi = 4 * pi;
    var radius = thriceVolume / fourpi; 

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

    var lol = parseInt(document.getElementById("solve2").value);

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
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Radius of a Sphere given the Volume: ";
    p2.style.textAlign = "center";

    p3.textContent = "r = (3V / 4π)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "r = radius";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the radius of a Sphere";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values";
    p8.style.textAlign = "center";
    
    p9.textContent = "r = (3" + VOLUME + ") / (4(3.14))";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Get the product of 3 and the" + VOLUME + " and the product of PI and 4";
    p10.style.textAlign = "center";


    p11.textContent = thriceVolume + " / " + fourpi;
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the quotient of " + thriceVolume + " and " + fourpi;
    p14.style.textAlign = "center";

    p15.textContent = radius ;
    p15.style.textAlign = "center";

    p12.textContent = "r = " + radius;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the radius of a Sphere with a volume of " + VOLUME + " is " + radius;
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

//VOLUME OF A RIGHT PRISM
// 2 TEXT INPUT

function VolumeRightPrism(){
    var ti = document.createElement("p");
    ti.textContent = "VOLUME OF A RIGHT PRISM";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Base");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Height");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the Height");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskVolumeRightPrism()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskVolumeRightPrism(){

    var Base = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Volume of a Right Prism with a base of " + Base + ", and a height of " + Height;
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
    finalAnswerVolumeRightPrism();
}

function finalAnswerVolumeRightPrism(){
    var Base = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var volume = Base * Height;


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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Volume of a Right Prism with a base of " + Base + ", and a height of " + Height + " is " + volume;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionVolumeRightPrism()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionVolumeRightPrism(){
    
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

    var base = parseInt(document.getElementById("solve2").value);
    var height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    var volume = base * height;

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Volume of a Right Prism:";
    p2.style.textAlign = "center";

    p3.textContent = "V = b * h";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "B = Base";
    p6.style.textIndent = "50px";

    p16.textContent = "h = Height";
    p16.style.textIndent = "50px";

    //p17.textContent = "H = Height";
    //p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Base of a Right Prism";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "V = " + base + " * " + height;
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Get the product of base and height";
    p10.style.textAlign = "center";


    p11.textContent = volume;
    p11.style.textAlign = "center";

    //p14.textContent = "STEP 3: Get the quotient of " + thriceVolume + " and " + base ;
    //p14.style.textAlign = "center";

    //p15.textContent = Height;
    //p15.style.textAlign = "center";

    //p18.textContent = "STEP 4: Get the sum of " + twiceLW + " , " + twiceWH + " , and " + twiceLH;
    //p18.style.textAlign = "center";

    //p19.textContent = SA;
    //p19.style.textIndent = "center";

    p12.textContent = "V = " + volume;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the volume of a Right Prism with a base of " + base + ", and a height of " + height + " is " + volume;
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
    //divAnswer.appendChild(p17);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    //divAnswer.appendChild(br3);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    //divAnswer.appendChild(br4);
   // divAnswer.appendChild(p14);
    //divAnswer.appendChild(p15);
    //divAnswer.appendChild(p18);
    //divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//BASE OF A RIGHT PRISM GIVEN THE VOLUME AND HEIGHT
//2 TEXT INPUTS

function BaseRightPrismGVH(){
    var ti = document.createElement("p");
    ti.textContent = "BASE OF A RIGHT PRISM GIVEN THE VOLUME AND HEIGHT";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Volume");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Height");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the Height");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskBaseRightPrismGVH()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskBaseRightPrismGVH(){

    var Volume = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Base of a Right Prism with a volume of " + Volume + ", and a height of " + Height;
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
    finalAnswerBaseRightPrismGVH();
}

function finalAnswerBaseRightPrismGVH(){
    var Volume = parseInt(document.getElementById("solve2").value);
    var Height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var Base = Volume / Height;


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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Base of a Right Prism with a Volume of " + Volume + ", and a height of " + Height + " is " + Base;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionBaseeRightPrismGVH()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionBaseeRightPrismGVH(){
    
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

    var volume = parseInt(document.getElementById("solve2").value);
    var height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    var base = volume / height;

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Base of a Right Prism given the Volume and Height:";
    p2.style.textAlign = "center";

    p3.textContent = "b = V / h";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "b = Base";
    p6.style.textIndent = "50px";

    p16.textContent = "h = Height";
    p16.style.textIndent = "50px";

    //p17.textContent = "H = Height";
    //p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Base of a Right Prism";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "b = " + volume + " / " + height;
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Get the quotient of the volumee and height";
    p10.style.textAlign = "center";


    p11.textContent = base;
    p11.style.textAlign = "center";

    //p14.textContent = "STEP 3: Get the quotient of " + thriceVolume + " and " + base ;
    //p14.style.textAlign = "center";

    //p15.textContent = Height;
    //p15.style.textAlign = "center";

    //p18.textContent = "STEP 4: Get the sum of " + twiceLW + " , " + twiceWH + " , and " + twiceLH;
    //p18.style.textAlign = "center";

    //p19.textContent = SA;
    //p19.style.textIndent = "center";

    p12.textContent = "b = " + base;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the base of a Right Prism with a volume of " + volume + ", and a height of " + height + " is " + base;
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
    //divAnswer.appendChild(p17);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    //divAnswer.appendChild(br3);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    //divAnswer.appendChild(br4);
   // divAnswer.appendChild(p14);
    //divAnswer.appendChild(p15);
    //divAnswer.appendChild(p18);
    //divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//HEIGHT OF A RIGHT PRISM GIVEN THE VOLUME AND BASE
//2 text inputs

function HeightRightPrismGVB(){
    var ti = document.createElement("p");
    ti.textContent = "HEIGHT OF A RIGHT PRISM GIVEN THE VOLUME AND BASE";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Volume");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Base");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the Height");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskHeightRightPrismGVB()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskHeightRightPrismGVB(){

    var Volume = parseInt(document.getElementById("solve2").value);
    var Base = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Height of a Right Prism with a volume of " + Volume + ", and a base of " + Base;
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
    finalAnswerHeightRightPrismGVB();
}

function finalAnswerHeightRightPrismGVB(){
    var Volume = parseInt(document.getElementById("solve2").value);
    var Base = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var Height = Volume / Base;


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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Height of a Right Prism with a Volume of " + Volume + ", and a base of " + Base + " is " + Height;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionHeightRightPrismGVB()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionHeightRightPrismGVB(){
    
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

    var volume = parseInt(document.getElementById("solve2").value);
    var height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    var base = volume / height;

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Height of a Right Prism given the Volume and Base:";
    p2.style.textAlign = "center";

    p3.textContent = "h = V / b";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "b = Base";
    p6.style.textIndent = "50px";

    p16.textContent = "h = Height";
    p16.style.textIndent = "50px";

    //p17.textContent = "H = Height";
    //p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Height of a Right Prism";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "h = " + volume + " / " + base;
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Get the quotient of the volume and base";
    p10.style.textAlign = "center";


    p11.textContent = height;
    p11.style.textAlign = "center";

    //p14.textContent = "STEP 3: Get the quotient of " + thriceVolume + " and " + base ;
    //p14.style.textAlign = "center";

    //p15.textContent = Height;
    //p15.style.textAlign = "center";

    //p18.textContent = "STEP 4: Get the sum of " + twiceLW + " , " + twiceWH + " , and " + twiceLH;
    //p18.style.textAlign = "center";

    //p19.textContent = SA;
    //p19.style.textIndent = "center";

    p12.textContent = "h =" + height;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the height of a Right Prism with a volume of " + volume + ", and a base of " + base + " is " + height;
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
    //divAnswer.appendChild(p17);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    //divAnswer.appendChild(br3);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    //divAnswer.appendChild(br4);
   // divAnswer.appendChild(p14);
    //divAnswer.appendChild(p15);
    //divAnswer.appendChild(p18);
    //divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//VOLUME OF A RIGHT CIRCULAR CYLINDER
//2 TEXT INPUTS

function VolumeRightCircularCylinder(){
    var ti = document.createElement("p");
    ti.textContent = "VOLUME OF A RIGHT CIRCULAR CYLINDER";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Height");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Radius");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the Height");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskVRCC()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskVRCC(){

    var Height = parseInt(document.getElementById("solve2").value);
    var radius = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Volume of a Right Circular Cylinder with a height of " + Height + ", and a radius of " + radius;
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
    finalAnswerVRCC();
}

function finalAnswerVRCC(){
    var Height = parseInt(document.getElementById("solve2").value);
    var radius = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var pi = Math.PI;
    var squaredRadius = radius * radius;
    var volume = pi * squaredRadius * Height;


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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Volume of a Right Circular Cylinder with a height of " + Height + ", and a radius of " + radius + " is " + volume;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionVRCC()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionVRCC(){
    
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

    var height = parseInt(document.getElementById("solve2").value);
    var radius = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var pi = Math.PI;
    var squaredRadius = radius * radius;
    var volume = pi * squaredRadius * height;
    

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Height of a Right Circular Cylinder given the Height and Radius:";
    p2.style.textAlign = "center";

    p3.textContent = "V = πr²h";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "h = height";
    p6.style.textIndent = "50px";

    p16.textContent = "r = radius";
    p16.style.textIndent = "50px";

    //p17.textContent = "H = Height";
    //p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the Volume of a Right Circular Cylider";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "V = (" + pi + ")(" + radius + ")²(" + height + ")";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Square the radius";
    p10.style.textAlign = "center";


    p11.textContent = "V = (" + pi + ")(" + squaredRadius + ")(" + height + ")";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the product of " + pi + ", " + squaredRadius + ", and " + height;
    p14.style.textAlign = "center";

    p15.textContent = volume;
    p15.style.textAlign = "center";

    //p18.textContent = "STEP 4: Get the sum of " + twiceLW + " , " + twiceWH + " , and " + twiceLH;
    //p18.style.textAlign = "center";

    //p19.textContent = SA;
    //p19.style.textIndent = "center";

    p12.textContent = "V = " + volume;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the volume of a Right Circular Cylinder with a radius of " + radius + ", and a height of " + height + " is " + volume;
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
    divAnswer.appendChild(br3);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    //divAnswer.appendChild(br3);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    //divAnswer.appendChild(br4);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    //divAnswer.appendChild(p18);
    //divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//RADIUS OF A RIGHT CIRCULAR CYLINDER GIVEN THE VOLUME AND HEIGHT
//2 TEXT INPUTS

function RadiusRightCircularCylinderGVH(){
    var ti = document.createElement("p");
    ti.textContent = "RADIUS OF A RIGHT CIRCULAR CYLINDER GIVEN THE VOLUME AND HEIGHT";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Volume");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Height");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the Height");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskRadiusRCCGVH()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskRadiusRCCGVH(){

    var Volume = parseInt(document.getElementById("solve2").value);
    var height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Radius of a Right Circular Cylinder with a volume of " + Volume + ", and a height of " + height;
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
    finalAnswerRadiusRCCGVH();
}

function finalAnswerRadiusRCCGVH(){
    var Volume = parseInt(document.getElementById("solve2").value);
    var height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var pi = Math.PI;
    var Hpi = height * pi;
    var quotient = Volume / Hpi;
    var radius = Math.sqrt(quotient);


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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Radius of a Right Circular Cylinder with a volume of " + Volume + ", and a height of " + height + " is " + radius;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionRadiusVRCCGVH()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionRadiusVRCCGVH(){
    
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

    var volume = parseInt(document.getElementById("solve2").value);
    var height = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var pi = Math.PI;
    var Hpi = height * pi;
    var quotient = volume / Hpi;
    var radius = Math.sqrt(quotient);
    

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");


    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Height of a Right Circular Cylinder given the Height and Radius:";
    p2.style.textAlign = "center";

    p3.textContent = "r = √(V / (πh))";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "h = height";
    p6.style.textIndent = "50px";

    p16.textContent = "r = radius";
    p16.style.textIndent = "50px";

    //p17.textContent = "H = Height";
    //p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the radius of a Right Circular Cylider";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "r = √(" + volume + "/ (3.14(" + height + ")))";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Get the product of pi and the height";
    p10.style.textAlign = "center";


    p11.textContent = "r = √(" + volume + " / (" + Hpi + ")";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the quotient of " + volume + ", and " +  Hpi;
    p14.style.textAlign = "center";

    p15.textContent = quotient;
    p15.style.textAlign = "center";

    p18.textContent = "STEP 4: Get the squareroot of " + quotient;
    p18.style.textAlign = "center";

    p19.textContent = radius;
    p19.style.textAlign = "center";

    p12.textContent = "r = " + radius;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the radius of a Right Circular Cylinder with a volume of " + volume + ", and a height of " + height + " is " + radius;
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
    divAnswer.appendChild(br3);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    //divAnswer.appendChild(br3);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    //divAnswer.appendChild(br4);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p18);
    divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

//HEIGHT OF A RIGHT CIRCULAR CYLINDER GIVEN THE VOLUME AND RADIUS
// 2 TEXT INPUTS

function HeightRightCircularCylinderGVR(){
    var ti = document.createElement("p");
    ti.textContent = "HEIGHT OF A RIGHT CIRCULAR CYLINDER GIVEN THE VOLUME AND RADIUS";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
    //var input2 = document.createElement("input");

    input.setAttribute("placeholder", "Enter the Volume");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Radius");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    //input2.setAttribute("placeholder", "Enter the Height");
    //input2.setAttribute("id", "solve3");
    //input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskHeightRCCGVR()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskHeightRCCGVR(){

    var Volume = parseInt(document.getElementById("solve2").value);
    var radius = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the Height of a Right Circular Cylinder with a volume of " + Volume + ", and a radius of " + radius;
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
    finalAnswerHeightRCCGVR();
}

function finalAnswerHeightRCCGVR(){
    var Volume = parseInt(document.getElementById("solve2").value);
    var radius = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var pi = Math.PI;
    var squaredRadius = radius * radius;
    var Rpi = pi * squaredRadius;
    var height = Volume / Rpi;


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

    var RadiusCircle = parseInt(document.getElementById("solve2").value);
    var divAnswer = document.createElement("div");

    divAnswer.style.backgroundColor = "white";
    divAnswer.style.padding = "20px";
    divAnswer.style.marginLeft ='40px';
    divAnswer.style.marginRight = "50%";
    divAnswer.style.borderRadius = "5%";
    divAnswer.style.border = "2px solid black";


    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Height of a Right Circular Cylinder with a volume of " + Volume + ", and a radius of " + radius + " is " + height;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionHeightVRCCGVR()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionHeightVRCCGVR(){
    
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

    var volume = parseInt(document.getElementById("solve2").value);
    var radius = parseInt(document.getElementById("solves2").value);
    //var Height = parseInt(document.getElementById("solve3").value);

    var pi = Math.PI;
    var squaredRadius = radius * radius;
    var Rpi = pi * squaredRadius;
    var height = volume / Rpi;
    

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "open3D()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";


    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Height of a Right Circular Cylinder given the Height and Radius:";
    p2.style.textAlign = "center";

    p3.textContent = "h = V / (πr²)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "V = Volume";
    p5.style.textIndent = "50px";

    p6.textContent = "h = height";
    p6.style.textIndent = "50px";

    p16.textContent = "r = radius";
    p16.style.textIndent = "50px";

    //p17.textContent = "H = Height";
    //p17.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for calculating the height of a Right Circular Cylider";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values"
    p8.style.textAlign = "center";
    
    p9.textContent = "h = (" + volume + "/ (3.14(" + radius + ")²))";
    p9.style.textAlign = "center";
    
    p10.textContent = "STEP 2: Square the radius";
    p10.style.textAlign = "center";


    p11.textContent = "h = " + volume + " / (3.14)(" + squaredRadius + ")";
    p11.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the product of pi and " + squaredRadius;
    p14.style.textAlign = "center";

    p15.textContent = "h = " + volume + " / " + Rpi;
    p15.style.textAlign = "center";

    p18.textContent = "STEP 4: Get the quotient of " + volume + ", and " + Rpi ;
    p18.style.textAlign = "center";

    p19.textContent = height;
    p19.style.textAlign = "center";

    p12.textContent = "h = " + height;
    p12.style.color = "red";
    p12.style.textAlign = "center";

    p13.textContent = "Therefore, the height of a Right Circular Cylinder with a volume of " + volume + ", and a radius of " + radius + " is " + height;
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
    divAnswer.appendChild(br3);
    divAnswer.appendChild(p7);
    divAnswer.appendChild(p8);
    divAnswer.appendChild(p9);
    //divAnswer.appendChild(br3);
    divAnswer.appendChild(p10);
    divAnswer.appendChild(p11);
    //divAnswer.appendChild(br4);
    divAnswer.appendChild(p14);
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p18);
    divAnswer.appendChild(p19);
    divAnswer.appendChild(p12);
    divAnswer.appendChild(br2);
    divAnswer.appendChild(p13);
    
    col3.appendChild(divAnswer);
}

function open3D(){
    window.location.href="../MC-DEF-3D/MCD-3D.html";
}

function home(){
    window.location.href="../../MathCompanion/MathCompanion.html";
}