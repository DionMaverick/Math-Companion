//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ARITHEMETIC SEQUENCE NTH TERM~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function ArithmeSeqNthTerm(){
    var ImgFormula = document.createElement("div");
    var img = document.createElement("img");
    img.src = "ArithSeqnthFormula.png";
    ImgFormula.setAttribute("id", "ImgFormula");
    img.setAttribute("id", "ImgForm");
    ImgFormula.appendChild(img);
    

    var ti = document.createElement("p");
    ti.textContent = "ARITHMETIC SEQUENCE NTH TERM";
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

    input.setAttribute("placeholder", "Enter the a1");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter n");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    input2.setAttribute("placeholder", "Enter the d");
    input2.setAttribute("id", "solve3");
    input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskNthTermOfArith()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(ImgFormula);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskNthTermOfArith(){
    var a1 = parseInt(document.getElementById("solve2").value);
    var n = parseInt(document.getElementById("solves2").value);
    var d = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the value of "+n+"th term of an Arithmethic Sequence given the a1 with a value of "+a1+", n, with a value of "+n+", and d with the value of "+d;
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
    AnswertoNthTerm();
}

function AnswertoNthTerm(){
    var a1 = parseInt(document.getElementById("solve2").value);
    var n = parseInt(document.getElementById("solves2").value);
    var d = parseInt(document.getElementById("solve3").value);

    var parentheses = n - 1;
    var Multiplied = parentheses * d;
    var nthTerm = a1 + Multiplied;

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
    p1.textContent = "The value of "+n+"th term given the a1 with a value of "+a1+", n, with a value of "+n+", and d with the value of "+d+" is "+nthTerm;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionToAriNthTerm()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionToAriNthTerm(){
    
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

    var a1 = parseInt(document.getElementById("solve2").value);
    var n = parseInt(document.getElementById("solves2").value);
    var d = parseInt(document.getElementById("solve3").value);

    var parentheses = n - 1;
    var Multiplied = parentheses * d;
    var nthTerm = a1 + Multiplied;

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
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the nth term of an Arithmetic Sequence:";
    p2.style.textAlign = "center";

    p3.textContent = "An = a1+(n-1)d";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "An = nth term of the Arithmetic Sequence";
    p5.style.textIndent = "50px";

    p6.textContent = "a1 = the first term of the sequence";
    p6.style.textIndent = "50px";

    p7.textContent = "n = The position of term in the sequence";
    p7.style.textIndent = "50px";

    p8.textContent = "Here is the step-by-step solution for getting the nth of an Arithmetic Sequence:";
    p8.style.textAlign = "center";

    p9.textContent = "STEP 1: Substitute the given values into the formula."
    p9.style.textAlign = "center";
    
    p10.textContent = "An = "+a1+"("+n+"-1)"+d;
    p10.style.textAlign = "center";

    p11.textContent = "STEP 2: By Following the rule of PEMDAS subtract the values inside the parentheses then proceed to multiply the subtracted value to common difference.";
    p11.style.textAlign = "center";
    
    p12.textContent = "An = "+a1+"("+parentheses+")"+d;
    p12.style.textAlign = "center";

    p13.textContent = "An = "+a1+" + "+Multiplied;
    p13.style.textAlign = "center";

    p14.textContent = "STEP 3: Add the remaining values to get the final answer.";
    p14.style.textAlign = "center";

    p15.textContent = "An = "+a1+" + "+Multiplied;
    p15.style.textAlign = "center";

    p16.textContent = "An = "+nthTerm;
    p16.style.color = "red";
    p16.style.textAlign = "center";

    p17.textContent = "Therefore, the "+n+"th term given the a1 with the value of "+a1+" and d with a value of "+d+" is "+nthTerm;
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ARITHMETIC SEQUENCE SUM OF TERMS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function SumOfArithmeticSequence(){
  /*var ImgFormula = document.createElement("div");
    var img = document.createElement("img");
    img.src = "ArithSeqnthFormula.png";
    ImgFormula.setAttribute("id", "ImgFormula");
    img.setAttribute("id", "ImgForm");
    ImgFormula.appendChild(img);*/
    

    var ti = document.createElement("p");
    ti.textContent = "ARITHMETIC SUM OF TERMS";
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

    input.setAttribute("placeholder", "Enter the value of a1");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the value of an");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    input2.setAttribute("placeholder", "Enter the value of n");
    input2.setAttribute("id", "solve3");
    input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAsKSumOfTerms()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    //document.getElementById("right").appendChild(ImgFormula);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(button);
   
}

function uAsKSumOfTerms(){
    var a1 = parseInt(document.getElementById("solve2").value);
    var an = parseInt(document.getElementById("solves2").value);
    var n = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the sum of terms of an Arithmetic Sequence given these values: a1="+a1+", an="+an+" n="+n;
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
    ArithSumOfTermsAnswer();
}

function ArithSumOfTermsAnswer(){
    var a1 = parseInt(document.getElementById("solve2").value);
    var an = parseInt(document.getElementById("solves2").value);
    var n = parseInt(document.getElementById("solve3").value);

    var parentheses = an + n;
    var Multiplied = n * parentheses;
    var SumOfTerms = Multiplied / 2;

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
    p1.textContent = "The sum of terms of an Arithmetic Sequence given the a1, an, and n with given values of: a1="+a1+", an="+an+" n="+n+" is "+SumOfTerms;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionToAriSumOfTerms()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionToAriSumOfTerms() { 
    
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

    var a1 = parseInt(document.getElementById("solve2").value);
    var an = parseInt(document.getElementById("solves2").value);
    var n = parseInt(document.getElementById("solve3").value);

    var parentheses = an + n;
    var Multiplied = n * parentheses;
    var SumOfTerms = Multiplied / 2;

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
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula for the sum of terms of an Arithmetic Sequence:";
    p2.style.textAlign = "center";

    p3.textContent = "Sn = n/2(a1 + an)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "Sn = The sum of terms of Arithmetic Sequence";
    p5.style.textIndent = "50px";

    p6.textContent = "n = The position of term in the sequence";
    p6.style.textIndent = "50px";

    p7.textContent = "a1 = The first term of a sequence";
    p7.style.textIndent = "50px";

    p8.textContent = "an = The nth term of a sequence";
    p8.style.textIndent = "50px";

    p9.textContent = "Here is the step-by-step solution for getting the sum of terms of an Arithmetic Sequence:";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 1: Substitute the given values into the formula."
    p10.style.textAlign = "center";
    
    p11.textContent = "Sn = "+n+"/2("+a1+" + "+an+")";
    p11.style.textAlign = "center";

    p12.textContent = "STEP 2: By Following the rule of PEMDAS add the values inside the parentheses then proceed to multiply the sum to the value of n.";
    p12.style.textAlign = "center";
    
    p13.textContent = "Sn = "+n+"("+parentheses+") / 2";
    p13.style.textAlign = "center";

    p14.textContent = "Sn = "+Multiplied+" / 2";
    p14.style.textAlign = "center";

    p15.textContent = "STEP 3: get the quotient of the remainig values.";
    p15.style.textAlign = "center";

    p16.textContent = "Sn = "+Multiplied+" / 2 or "+Multiplied+" ÷ 2";
    p16.style.textAlign = "center";

    p17.textContent = "Sn = "+SumOfTerms;
    p17.style.color = "red";
    p17.style.textAlign = "center";

    p18.textContent = "Therefore, the sum of terms of an Arithmetic Sequence given the a1, an, and n with given values of: a1"+a1+", an"+an+" n="+n+" is "+SumOfTerms;
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Common Difference missing given the first and following term~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function ArithmeCommonDifference(){
    var ti = document.createElement("p");
    ti.textContent = "COMMON DIFFERENCE OF AN ARITHMETIC SEQUENCE GIVEN FIRST AND FOLLOWING TERM";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter a1(First Term)");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter a2(Second Term)");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskCommonDifference()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskCommonDifference(){
    var a1 = parseInt(document.getElementById("solve2").value);
    var a2 = parseInt(document.getElementById("solves2").value);
    
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
    pYR.textContent = "Find the Common Difference given this Arithmetic Sequence of a1="+a1+", a2="+a2;
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
    AnswerCommonDifference();
}

function AnswerCommonDifference(){
    var a1 = document.getElementById("solve2").value;
    var a2 = document.getElementById("solves2").value;

    var CommonDiff = Math.abs(a2 - a1);

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
    p1.textContent = "The Common Difference of an Arithmetic Sequence of a1="+a1+", a2="+a2+" is "+CommonDiff;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "ArithmeCommonDifferenceSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function ArithmeCommonDifferenceSol(){

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

    var a1 = parseInt(document.getElementById("solve2").value);
    var a2 = parseInt(document.getElementById("solves2").value);


    //soln

    var CommonDiff = Math.abs(a2 - a1);

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";
    
    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Common Difference of an Arithemetic Sequence:";
    p2.style.textAlign = "center";

    p3.textContent = "D = a1 - a2";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "a1 = First term of the sequence";
    p5.style.textIndent = "50px";

    p6.textContent = "a2 = Second term of the sequence";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for getting the Common Difference of an Arithmetic Sequence:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values into the formula."
    p8.style.textAlign = "center";
    
    p9.textContent = "D = "+a1+" - "+a2;
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Simply subtract both values to get the final answer.";
    p10.style.textAlign = "center";

    p11.textContent = "D = "+CommonDiff;
    p11.style.color = "red";
    p11.style.textAlign = "center";

    p12.textContent = "Therefore, the Common Difference of an Arithmetic Sequence of a1="+a1+", a2="+a2+" is "+CommonDiff;
    p12.style.textAlign = "center";

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
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GEOMETRIC SEQUENCE NTH TERMS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function GeomSeqNthTerm(){
    /*var ImgFormula = document.createElement("div");
    var img = document.createElement("img");
    img.src = "ArithSeqnthFormula.png";
    ImgFormula.setAttribute("id", "ImgFormula");
    img.setAttribute("id", "ImgForm");
    ImgFormula.appendChild(img);*/
    

    var ti = document.createElement("p");
    ti.textContent = "GEOMETRIC SEQUENCE NTH TERM";
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

    input.setAttribute("placeholder", "Enter the a1");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the r");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    input2.setAttribute("placeholder", "Enter the n");
    input2.setAttribute("id", "solve3");
    input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskNthTermOfGeom()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    //document.getElementById("right").appendChild(ImgFormula);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskNthTermOfGeom(){
    var a1 = parseInt(document.getElementById("solve2").value);
    var r = parseInt(document.getElementById("solves2").value);
    var n = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the value of "+n+"th term of Geometric Sequence given the a1 with a value of "+a1+", r, with a value of "+r+", and n with the value of "+n;
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
    AnswertoNthTerm();
}

function AnswertoNthTerm(){
    var a1 = parseInt(document.getElementById("solve2").value);
    var r = parseInt(document.getElementById("solves2").value);
    var n = parseInt(document.getElementById("solve3").value);

    var exponent = n - 1;
    var power = r ** exponent;
    var nthTerm = a1 * power;

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
    p1.textContent = "The value of "+n+"th term of Geometric Sequence given the a1 with a value of "+a1+", r, with a value of "+r+", and n with the value of "+n+" is "+nthTerm;
    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionToAriNthTerm()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionToAriNthTerm(){
    
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

    var a1 = parseInt(document.getElementById("solve2").value);
    var r = parseInt(document.getElementById("solves2").value);
    var n = parseInt(document.getElementById("solve3").value);

    var exponent = n - 1;
    var power = r ** exponent;
    var nthTerm = a1 * power;

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
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the nth term of an Arithmetic Sequence:";
    p2.style.textAlign = "center";

    p3.textContent = "An = a1 x r^(n-1)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "An = nth term of the Geometric Sequence";
    p5.style.textIndent = "50px";

    p6.textContent = "a1 = The first term of the sequence";
    p6.style.textIndent = "50px";

    p7.textContent = "r = The common ratio between consecutive terms";
    p7.style.textIndent = "50px";

    p8.textContent = "n = The position of term in the sequence";
    p8.style.textIndent = "50px";

    p9.textContent = "Here is the step-by-step solution for getting the nth of an Arithmetic Sequence:";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 1: Substitute the given values into the formula."
    p10.style.textAlign = "center";
    
    p11.textContent = "A"+n+" = "+a1+" x "+r+"^("+n+"-1)";
    p11.style.textAlign = "center";

    p12.textContent = "STEP 2: By following the PEMDAS rule proceed on subtracting the values in the exponent, then raise the common ratio to this power.";
    p12.style.textAlign = "center";
    
    p13.textContent = "A"+n+" = "+a1+" x "+r+"^("+exponent+")";
    p13.style.textAlign = "center";

    p14.textContent = "A"+n+" = "+a1+" x "+power;
    p14.style.textAlign = "center";

    p15.textContent = "STEP 3: Multiply the remaining values to get the final answer.";
    p15.style.textAlign = "center";

    p16.textContent = "A"+n+" = "+a1+" x "+power;
    p16.style.textAlign = "center";

    p17.textContent = "A"+n+" = "+nthTerm;
    p17.style.color = "red";
    p17.style.textAlign = "center";

    p18.textContent = "Therefore, The value of "+n+"th term of Geometric Sequence given the a1 with a value of "+a1+", r, with a value of "+r+", and n with the value of "+n+" is "+nthTerm;
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GEOMETRIC SEQUENCE SUM OF TERMS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function GeomSeqSumOfTerms(){
    /*var ImgFormula = document.createElement("div");
    var img = document.createElement("img");
    img.src = "ArithSeqnthFormula.png";
    ImgFormula.setAttribute("id", "ImgFormula");
    img.setAttribute("id", "ImgForm");
    ImgFormula.appendChild(img);*/


    var ti = document.createElement("p");
    ti.textContent = "GEOMETRIC SEQUENCE SUM OF TERMS";
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

    input.setAttribute("placeholder", "Enter the a1");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the r");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    input2.setAttribute("placeholder", "Enter the n");
    input2.setAttribute("id", "solve3");
    input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskGeomSumOfTerms()()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    //document.getElementById("right").appendChild(ImgFormula);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskGeomSumOfTerms(){
    var a1 = parseInt(document.getElementById("solve2").value);
    var r = parseInt(document.getElementById("solves2").value);
    var n = parseInt(document.getElementById("solve3").value);

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
    pYR.textContent = "Find the sum of terms of Geometric Sequence given the value of a1="+a1+", r="+r+", and n="+n;
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
    AnswerToGeomSumOfTerms()
}

function AnswerToGeomSumOfTerms(){
    var a1 = parseInt(document.getElementById("solve2").value);
    var r = parseInt(document.getElementById("solves2").value);
    var n = parseInt(document.getElementById("solve3").value);

    var exponent = r ** n;
    var parentheses = 1 - exponent;
    var Numerator = a1 * parentheses;
    var Denominator = 1 - r;
    var SumOfTerms = Numerator / Denominator;

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
    p1.textContent = "The sum of terms of Geometric Sequence given the value of a1="+a1+", r="+r+", and n="+n+" is "+SumOfTerms;
    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolutionToAriNthTerm()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function SolutionToAriNthTerm(){
    
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

    var a1 = parseInt(document.getElementById("solve2").value);
    var r = parseInt(document.getElementById("solves2").value);
    var n = parseInt(document.getElementById("solve3").value);

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
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the sum of terms of Geometric Sequence:";
    p2.style.textAlign = "center";
 
    p3.textContent = "Sn = a1 x (1-r^n)/r-1";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "Sn = The sum of terms";
    p5.style.textIndent = "50px";

    p6.textContent = "a1 = The first term of the sequence";
    p6.style.textIndent = "50px";

    p7.textContent = "r = The common ratio between consecutive terms";
    p7.style.textIndent = "50px";

    p8.textContent = "n = The number of terms in the sequence";
    p8.style.textIndent = "50px";

    p9.textContent = "Here is the step-by-step solution for getting the sum of terms of Geometric Sequence:";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 1: Substitute the given values into the formula."
    p10.style.textAlign = "center";
    
    p11.textContent = "S"+n+" = "+a1+" x (1-"+r+"^"+n+") / 1-"+r;
    p11.style.textAlign = "center";

    p12.textContent = "STEP 2: Raise r to the power of n then subtract the product to the value of one inside the parentheses.";
    p12.style.textAlign = "center";
    
    var exponent = r ** n;
    var parentheses = 1 - exponent;
    var Numerator = a1 * parentheses;
    var Denominator = 1 - r;
    var SumOfTerms = Numerator / Denominator;

    p13.textContent = "S"+n+" = "+a1+" x (1-"+exponent+") / 1-"+r;
    p13.style.textAlign = "center";

    p14.textContent = "S"+n+" = "+a1+" x ("+parentheses+") / 1-"+r;
    p14.style.textAlign = "center";

    p15.textContent = "STEP 3: Multiply the remaining values on the numerator then subtract 1 to the value of r in the denominator";
    p15.style.textAlign = "center";

    p16.textContent = "S"+n+" = "+Numerator+" / "+Denominator;
    p16.style.textAlign = "center";

    p16.textContent = "STEP 3: Divide both numerator and denominator to get the final answer.";
    p16.style.textAlign = "center";

    p17.textContent = "Sn = "+SumOfTerms;
    p17.style.color = "red";
    p17.style.textAlign = "center";

    p18.textContent = "Therefore, The sum of terms of Geometric Sequence given the value of a1="+a1+", r="+r+", and n="+n+" is "+SumOfTerms;
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Factorial~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Factorial(){
    var ti = document.createElement("p");
    ti.textContent = "Factorial";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter a number you want to factor");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskFactorial()");
    
    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(label);
    document.getElementById("right").appendChild(input);
    document.getElementById("right").appendChild(button);
   
}

function uAskFactorial(){
    var factor = parseInt(document.getElementById("solve").value);
    
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
    pYR.textContent = "Get the factorial value of " +factor;
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
    AnswerToFactorial();
}

function AnswerToFactorial(){
    var factor = parseInt(document.getElementById("solve").value);
    
    var factorial = 1;
    for (var i = 1; i <= factor; i++) {
        factorial *= i;
    }

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
    p1.textContent = "The factorial value of " + factor + " is " + factorial;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "FactorialSolution()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function FactorialSolution(){

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

    var factor = parseInt(document.getElementById("solve").value);
    
    var factorial = 1;
    for (var i = 1; i <= factor; i++) {
        factorial *= i;
    }

    var result = 1;
    var expression = "";

    for (var i = factor; i >= 1; i--) {
        result *= i;
        expression += i;
        if (i !== 1) {
            expression += " x ";
        }
    }

    var pValue = document.createElement("p");
    pValue.textContent = expression;
    document.body.appendChild(pValue);
    

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

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";


    var br1 = document.createElement("br");

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the step-by-step solution for getting the factorial of a given number:";
    p2.style.textAlign = "center";

    p3.textContent = "STEP 1: Simply multiply the given number to its smallest value continously.";
    p3.style.textAlign = "center";
    
    p4.textContent = "!" + factor + " = " + expression;
    p4.style.textAlign = "center";

    p5.style.textAlign = "center";
    p5.textContent = "A = " + factorial;
    p5.style.color = "red";
    p5.style.textAlign = "center";

    p6.textContent = "Therefore, the factorial value of " + factor + " is " + factorial;
    p6.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    divAnswer.appendChild(p5);
    divAnswer.appendChild(p6);
    
    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PERMUTATION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
function Permutation(){
    var ti = document.createElement("p");
    ti.textContent = "PERMUTATION";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter n(total number of objects)");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter k(number of objects taken at a time)");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskPermutation()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskPermutation(){
    var n = parseInt(document.getElementById("solve2").value);
    var k = parseInt(document.getElementById("solves2").value);
    
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
    pYR.textContent = "Get the permutation of n with the value of "+n+" given a set of distinc elements(k) of "+k;
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
    AnswerToPermutation();
}

function AnswerToPermutation(){
    var n = document.getElementById("solve2").value;
    var k = document.getElementById("solves2").value;

    for (var i = 1; i <= n; i++) {
        n *= i;
    }

    var denominator = n - k;

    var Denominator = denominator;
    for (var i = 1; i <= Denominator; i++) {
        Denominator *= i;
    }
    
    var permutation = n / Denominator;

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
    p1.textContent = "The Permutation of n with the value of "+n+" given a set of distinc elements(k) of "+k+" is "+permutation;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "PermutationSolution()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function PermutationSolution(){

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

    var n = parseInt(document.getElementById("solve2").value);
    var k = parseInt(document.getElementById("solves2").value);


    //soln

    var n = 1;
    for (var i = 1; i <= factor; i++) {
        n *= i;
    }

    var denominator = n - k;

    var denominator = 1;
    for (var i = 1; i <= factor; i++) {
        denominator *= i;
    }
    
    var permutation = n / denominator;

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Common Difference of an Arithemetic Sequence:";
    p2.style.textAlign = "center";

    p3.textContent = "D = a1 - a2";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "a1 = First term of the sequence";
    p5.style.textIndent = "50px";

    p6.textContent = "a2 = Second term of the sequence";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for getting the Common Difference of an Arithmetic Sequence:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values into the formula."
    p8.style.textAlign = "center";
    
    p9.textContent = "D = "+a1+" - "+a2;
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Simply subtract both values to get the final answer.";
    p10.style.textAlign = "center";

    p11.textContent = "D = "+CommonDiff;
    p11.style.color = "red";
    p11.style.textAlign = "center";

    p12.textContent = "Therefore, the Common Difference of an Arithmetic Sequence of a1="+a1+", a2="+a2+" is "+CommonDiff;
    p12.style.textAlign = "center";

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
    
    col3.appendChild(divAnswer);

}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DECIMAL TO FRACTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function DecimalToFraction(){
    /*var ImgFormula = document.createElement("div");
    var img = document.createElement("img");
    img.src = "ArithSeqnthFormula.png";
    ImgFormula.setAttribute("id", "ImgFormula");
    img.setAttribute("id", "ImgForm");
    ImgFormula.appendChild(img);*/
    

    var ti = document.createElement("p");
    ti.textContent = "DECIMAL TO FRACTION";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");

    input.setAttribute("placeholder", "Enter the decimal (round off to the nearest hundredths)");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    label.style.color = "white";

    //input.addEventListener("input", function() {
    //    this.value = this.value.replace(/\D/g, '');
    //});
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskDecimaltoFraction()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    //document.getElementById("right").appendChild(ImgFormula);
    document.getElementById("right").appendChild(container);``
    container.appendChild(input);
    container.appendChild(button);
}

function uAskDecimaltoFraction(){
    var d1 = parseFloat(document.getElementById("solve2").value);

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
    pYR.textContent = "Find the Fraction of " + d1 ;
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
    AnswerDecimaltoFraction();
}

function AnswerDecimaltoFraction(){
    var d1 = document.getElementById("solve2").value;

    var input = parseFloat(d1); // Convert input to a float
    var tolerance = 1.0E-6; // Tolerance value to avoid floating point errors

    var Numerator = Math.round(input * 1000000); // Multiply by a large number to avoid floating point errors
    var Denominator = 1000000;
    
    // Find greatest common divisor using Euclid's algorithm
    function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    }

    var divisor = gcd(Numerator, Denominator);

    Numerator /= divisor;
    Denominator /= divisor;

    var Fraction = Numerator + "/" + Denominator;

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
    p1.textContent = "The Fraction of given the decimal of "+d1+" is "+Fraction;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "DecimaltoFractionSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);
} 

function DecimaltoFractionSol(){
    
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

    var d1 = document.getElementById("solve2").value;

    var input = parseFloat(d1); 
    var tolerance = 1.0E-6; 

    var Numerator = Math.round(input * 1000000); 
    var Denominator = 1000000;

    var numeratori;
    var denominatori;
    
    
    function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    }

    var divisor = gcd(Numerator, Denominator);
    Numerator /= divisor;
    Denominator /= divisor;

    var Fraction = Numerator + "/" + Denominator;

    var Fraction = Numerator + "/" + Denominator;
    

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
    var p20 = document.createElement("p");
    var p21 = document.createElement("p");
    var p22 = document.createElement("p");
    var p23 = document.createElement("p");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    //p2.textContent = "Here is the formula to get the Fraction of a Decimal:";
    //p2.style.textAlign = "center";
 
    //p3.textContent = "pic";
    //p3.style.textAlign = "center";
    
    //p4.textContent = "Where:";
    //p4.style.textIndent = "40px";

    //p5.textContent = "Sn = The sum of terms";
    //p5.style.textIndent = "50px";

    //p6.textContent = "a1 = The first term of the sequence";
    //p6.style.textIndent = "50px";

    //p7.textContent = "r = The common ratio between consecutive terms";
    //p7.style.textIndent = "50px";

    //p8.textContent = "n = The number of terms in the sequence";
    //p8.style.textIndent = "50px";

    p9.textContent = "Here is the step-by-step solution to convert decimal to fraction";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 1: For the numerator, get the product of 1000000 and " + input
    p10.style.textAlign = "center";
     
    p11.textContent = Numerator
    p11.style.textAlign = "center";

    p12.textContent = "STEP 2: Change the denominator from 1 to 1000000";
    p12.style.textAlign = "center";

    var p24 = document.createElement("p");

    p13.textContent = Numerator + " / " + Denominator
    p13.style.textAlign = "center";

    p14.textContent = "STEP 3: Get the GCD of " + Numerator + " and " + Denominator;
    p14.style.textAlign = "center";

    p15.textContent = divisor;
    p15.style.textAlign = "center";

    p24.textContent = "STEP 4: Get the quotient of numerator and " + divisor;
    p24.style.textAlign = "center";

    p16.textContent = Numerator;
    p16.style.textAlign = "center";

    p20.textContent = "STEP 5: Get the quotient of denominator and " + divisor;
    p20.style.textAlign = "center";
    
    p21.textContent = Denominator;
    p21.style.textAlign = "center";

    p22.textContent = "STEP 6: Get the quotient of " + Numerator + " and " + Denominator;
    p22.style.textAlign = "center";

    p23.textContent = Fraction;
    p23.style.textAlign = "center";

    p17.textContent = Fraction
    p17.style.color = "red";
    p17.style.textAlign = "center";

    p18.textContent = "Therefore, " + input + " is equal to " + Fraction;
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
    divAnswer.appendChild(p24);
    divAnswer.appendChild(p16);
    divAnswer.appendChild(p20);
    divAnswer.appendChild(p21);
    divAnswer.appendChild(p22);
    divAnswer.appendChild(p23);
    divAnswer.appendChild(p17);
    divAnswer.appendChild(p18);

    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FRACTION TO DECIMAL~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function FractionToDecimal(){
    /*var ImgFormula = document.createElement("div");
    var img = document.createElement("img");
    img.src = "ArithSeqnthFormula.png";
    ImgFormula.setAttribute("id", "ImgFormula");
    img.setAttribute("id", "ImgForm");
    ImgFormula.appendChild(img);*/


    var ti = document.createElement("p");
    ti.textContent = "IMPROPER FRACTIONS TO MIXED FRACTION";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
   

    input.setAttribute("placeholder", "Enter the Numerator");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Denominator");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskFractiontoDecimal()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    //document.getElementById("right").appendChild(ImgFormula);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
}
function uAskFractiontoDecimal(){
    var f1 = parseInt(document.getElementById("solve2").value);
    var f2 = parseInt(document.getElementById("solves2").value);
    
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
    pYR.textContent = "Find the Decimal of the Fraction numerator="+f1+", Denominator="+f2;
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
    AnswerFractiontoDecimal();
}
function AnswerFractiontoDecimal(){
    var f1 = document.getElementById("solve2").value;
    var f2 = document.getElementById("solves2").value;

    let ans = f1 / f2;

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
    p1.textContent = "The Numerator="+f1+", Denominator="+f2+" is " + ans;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "FractiontoDecimalSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);
}
function FractiontoDecimalSol(){

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

    var f1 = parseInt(document.getElementById("solve2").value);
    var f2 = parseInt(document.getElementById("solves2").value);


    //soln

    let ans = f1 / f2

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Decimal of a Fraction:";
    p2.style.textAlign = "center";

    p3.textContent = "mf = f1 / f2";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "f1 = Numerator";
    p5.style.textIndent = "50px";

    p6.textContent = "f2 = Denominator";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for getting the Decimal of a Fraction:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: dibide da praction"
    p8.style.textAlign = "center";
    
    p9.textContent = "Q = "+f1+ "/" +2;
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2 (Optional): Round off to the nearest hundredths";
    p10.style.textAlign = "center";

    p11.textContent = "mf = " + ans;
    p11.style.color = "red";
    p11.style.textAlign = "center";

    p12.textContent = "Therefore, the Decimal of a Fraction of "+f1+" / "+f2+" is " + ans;
    p12.style.textAlign = "center";

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
    
    col3.appendChild(divAnswer);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~IMPROPER FRACTIONS TO MIXED FRACTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function ImproperFracToMixedFrac(){
    /*var ImgFormula = document.createElement("div");
    var img = document.createElement("img");
    img.src = "ArithSeqnthFormula.png";
    ImgFormula.setAttribute("id", "ImgFormula");
    img.setAttribute("id", "ImgForm");
    ImgFormula.appendChild(img);*/


    var ti = document.createElement("p");
    ti.textContent = "IMPROPER FRACTIONS TO MIXED FRACTION";
    ti.style.textAlign = "30px";
    ti.style.color = "white";
    ti.style.textAlign = "center";

    
    var container = document.createElement("div");

    document.getElementById("right").innerHTML = "";

    var input = document.createElement("input");
    var input1 = document.createElement("input");
    var label = document.createElement("p");
    var button = document.createElement("input");
   

    input.setAttribute("placeholder", "Enter the Numerator");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Denominator");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskImproperFraction()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    //document.getElementById("right").appendChild(ImgFormula);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(button);
   
}

function uAskImproperFraction(){
    var e1 = parseInt(document.getElementById("solve2").value);
    var e2 = parseInt(document.getElementById("solves2").value);
    
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
    pYR.textContent = "Find the Mixed Fraction of numerator="+e1+", Denominator="+e2;
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
    AnswerImproperFraction();
}

function AnswerImproperFraction(){
    var e1 = document.getElementById("solve2").value;
    var e2 = document.getElementById("solves2").value;

    let wholePart = Math.floor(e1 / e2);
    let remainder = e1 % e2;
    

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
    p1.textContent = "The Mixed Fraction of Numerator="+e1+", Denominator="+e2+" is "+wholePart +  +remainder+ "/" +e2;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "ImproperFractionSol()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}
function ImproperFractionSol(){

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

    var e1 = parseInt(document.getElementById("solve2").value);
    var e2 = parseInt(document.getElementById("solves2").value);


    //soln

    let wholePart = Math.floor(e1 / e2);
    let remainder = e1 % e2;

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

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");

    var def = document.createElement("input");
    def.setAttribute("value", "DEFINITION OF TERMS");
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Mixed Fraction of an Improper Fraction:";
    p2.style.textAlign = "center";

    p3.textContent = "A = e1/e2    Quotient = Whole no.,  Remainder = Numerator,  Divisor = Denominator";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "e1 = Numerator";
    p5.style.textIndent = "50px";

    p6.textContent = "e2 = Denominator";
    p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for getting the Mixed Fraction of an Improper Fraction:";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: dibide da praction"
    p8.style.textAlign = "center";
    
    p9.textContent = "Q = "+e1+ "/" +e2;
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Assemble the Whole no. , Numerator and the Denominator in the correct order";
    p10.style.textAlign = "center";

    p11.textContent = "Q = "+wholePart + " "+ remainder + "/" + e2;
    p11.style.color = "red";
    p11.style.textAlign = "center";

    p12.textContent = "Therefore, the Mixed Fraction of an Improper Fraction of "+e1+" / "+e2+" is "+wholePart +" "+ remainder + "/" + e2;
    p12.style.textAlign = "center";

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
    
    col3.appendChild(divAnswer);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MIXED FRACTION TO IMPROPER FRACTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function MixedFracToProperFrac(){
    /*var ImgFormula = document.createElement("div");
    var img = document.createElement("img");
    img.src = "ArithSeqnthFormula.png";
    ImgFormula.setAttribute("id", "ImgFormula");
    img.setAttribute("id", "ImgForm");
    ImgFormula.appendChild(img);*/


    var ti = document.createElement("p");
    ti.textContent = "MIXED FRACTION TO IMPROPER";
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

    input.setAttribute("placeholder", "Enter the Whole no.");
    input.setAttribute("type", "text");
    input.setAttribute("id", "solve2");

    input1.setAttribute("placeholder", "Enter the Numerator");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

    input2.setAttribute("placeholder", "Enter the Denominator");
    input2.setAttribute("id", "solve3");
    input2.setAttribute("type", "text");

    label.style.color = "white";

    input.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '');
    });
    button.setAttribute("type", "button");
    button.setAttribute("value", "Solve");
    button.setAttribute("id", "ButSolve");
    button.setAttribute("onclick", "uAskMixedFraction()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    //document.getElementById("right").appendChild(ImgFormula);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(button);
   
}

function uAskMixedFraction(){
    var i1 = parseInt(document.getElementById("solve2").value);
    var i2 = parseInt(document.getElementById("solves2").value);
    var i3 = parseInt(document.getElementById("solve3").value);

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
    //DON'T TOUCH THE CODE ABOVE, PAG GINALAW MO KAKALTUKAN KITA 
    
    var divYR = document.createElement("div");
    var pYR = document.createElement("p");
    pYR.textContent = "Find the Improper Fraction of i1="+i1+", i2="+i2+", and i3="+i3;
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
    AnsMixedFraction()
}
function AnsMixedFraction(){
    var i1 = parseInt(document.getElementById("solve2").value);
    var i2 = parseInt(document.getElementById("solves2").value);
    var i3 = parseInt(document.getElementById("solve3").value);

    let ImpNum = i1 * i3 + i2;

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
    p1.textContent = "The Improper Fraction of the Whole no. = " +i1+ ", Numerator = " + i2 + ", Denominator = " + i3 + " is "+ ImpNum + " / " + i3;
    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "SolMixedFraction()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}
function SolMixedFraction(){
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

    var i1 = parseInt(document.getElementById("solve2").value);
    var i2 = parseInt(document.getElementById("solves2").value);
    var i3 = parseInt(document.getElementById("solve3").value);
    
    let ImpNum = i1 * i3 + i2;
    
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
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Improper Function:";
    p2.style.textAlign = "center";

    p3.textContent = "f = i1 x i3 + i2";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    p5.textContent = "f = The Improper Function";
    p5.style.textIndent = "50px";

    p6.textContent = "i1 = The Whole Number";
    p6.style.textIndent = "50px";

    p7.textContent = "i2 = The Numerator";
    p7.style.textIndent = "50px";

    p8.textContent = "i3 = The Denominator";
    p8.style.textIndent = "50px";

    p9.textContent = "Here is the step-by-step solution for getting the Improper Function";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 1: Multiply i1 x i3."
    p10.style.textAlign = "center";
    
    p11.textContent = "f = " + i1 + " x " + i3 + " + " + i2;
    p11.style.textAlign = "center";

    p12.textContent = "STEP 2: Add the product of i1 and i3 to i2";
    p12.style.textAlign = "center";

    p13.textContent = "f = " + ImpNum + "/" + i3;
    p13.style.color = "red";
    p13.style.textAlign = "center";

    p14.textContent = "Therefore, The value of the Improper Fraction of the Mixed Function is " + ImpNum + "/" + i3 ; 
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
    divAnswer.appendChild(p15);
    divAnswer.appendChild(p16);
    divAnswer.appendChild(p17);
    divAnswer.appendChild(p18);

    col3.appendChild(divAnswer);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SCIENTIFIC NOTATION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function ScientificNotation(){
    var ti = document.createElement("p");
    ti.textContent = "SCIENTIFIC NOTATION";
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

    input1.setAttribute("placeholder", "Enter the Exponent");
    input1.setAttribute("id", "solves2");
    input1.setAttribute("type", "text");

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
    button.setAttribute("onclick", "uAskScientificNotation()");
    
    container.style.display = "flex";

    document.getElementById("right").appendChild(ti);
    document.getElementById("right").appendChild(container);
    container.appendChild(input);
    container.appendChild(input1);
    //container.appendChild(input2);
    container.appendChild(button);
}

function uAskScientificNotation(){
    var base = parseInt(document.getElementById("solve2").value);
    var expo = parseInt(document.getElementById("solves2").value);
    
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
    pYR.textContent = "Get the Scientific Notation of "+ base + " with an exponent of " + expo;
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
    AnswerToScientificNotation();
}

function AnswerToScientificNotation(){
    var base = parseInt(document.getElementById("solve2").value);
    var expo = parseInt(document.getElementById("solves2").value);
    //var ScientificNotation =

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

    var expo10 = Math.pow(10, expo)
    var notation = base * expo10;

    var p1 = document.createElement("p");
    col3.appendChild(divAnswer);
    p1.textContent = "The Scientific Notation of "+ base + " with an exponent of " + expo + " is " + notation;

    var but = document.createElement("input");
    but.setAttribute("type", "button");
    but.setAttribute("id", "solution");
    but.setAttribute("value", "Show solution");
    but.setAttribute("onclick", "Solnscientific()");

    divAnswer.appendChild(p1);
    divAnswer.appendChild(but);

}

function Solnscientific(){

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
    var expo = parseInt(document.getElementById("solves2").value);

    //soln

    var expo10 = Math.pow(10, expo);
    var notation = base * expo10;

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
    def.setAttribute("onclick", "openBasMath()");
    def.setAttribute("type", "button");
    def.style.width = "100%";
    def.style.backgroundColor = "rgba(32,12,77,0.2)";
    def.style.color = "white";
    def.style.fontSize = "12px";
    def.style.padding = "10px";
    def.style.borderRadius = "10px";

    p1.textContent = "To provide further context and definitions for the terminologies used in this topic, you can refer to the explanations available through the link below.";
    p1.style.textIndent = "40px";

    p2.textContent = "Here is the formula to get the Scientific Notation:";
    p2.style.textAlign = "center";

    p3.textContent = "base (10 * exponent)";
    p3.style.textAlign = "center";
    
    p4.textContent = "Where:";
    p4.style.textIndent = "40px";

    //p5.textContent = "S = Side Length";
    //p5.style.textIndent = "50px";

    //p6.textContent = "A = Area of a Triangle";
    //p6.style.textIndent = "50px";

    p7.textContent = "Here is the step-by-step solution for getting the scientific notation";
    p7.style.textAlign = "center";

    p8.textContent = "STEP 1: Substitute the given values into the formula."
    p8.style.textAlign = "center";
    
    p9.textContent = base + " (" + 10 + " ^ " + expo + ")";
    p9.style.textAlign = "center";

    p10.textContent = "STEP 2: Evaluate  10^" + expo;
    p10.style.textAlign = "center";
    
    p11.textContent = base + "(" + expo10 + ")";
    p11.style.textAlign = "center";

    p12.textContent = "STEP 3: Multiply the base to " + expo10;
    p12.style.textAlign = "center";

    p13.textContent = notation;
    p13.style.color = "red";
    p13.style.textAlign = "center";

    p14.textContent = "Therefore, the value of a number with a base of " + base + " and with an exponent of " + expo + " is " + notation ;
    p14.style.textAlign = "center";

    divAnswer.appendChild(p1);
    divAnswer.appendChild(def);
    divAnswer.appendChild(br1);
    divAnswer.appendChild(p2);
    divAnswer.appendChild(p3);
    divAnswer.appendChild(p4);
    //divAnswer.appendChild(p5);
    //divAnswer.appendChild(p6);
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

function home(){
    window.location.href = "../../MathCompanion/MathCompanion.html";
}

function openBasMath(){
    window.location.href = "../MC-DEF-BASMATH/MCD-BASCAL.html";
}