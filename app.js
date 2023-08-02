function addNewWEField(){
 let newNode=document.createElement('textarea');
 newNode.classList.add('form-control');
 newNode.classList.add('weField');
 newNode.classList.add("mt-2");

 newNode.setAttribute("rows",3);
 newNode.setAttribute('placeholder','Enter here');

 
 let weOb=document.getElementById("we");
 let weAddButtonOb=document.getElementById("weAddButton");

 weOb.insertBefore(newNode,weAddButtonOb);

}

//////////////////////
function addNewAField(){
 let newNode=document.createElement('textarea');
 newNode.classList.add('form-control');
 newNode.classList.add('aField');
 newNode.classList.add("mt-2");

 newNode.setAttribute("rows",3);
 newNode.setAttribute('placeholder','Enter here');

 
 let aOb=document.getElementById("a");
 let aAddButtonOb=document.getElementById("aAddButton");

 aOb.insertBefore(newNode,aAddButtonOb);

}
////////////////////

//genarating cv from the below code write neetly sohail
function generateCV(){
    // console.log("generating cv");  

    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1"); 
    nameT1.innerHTML=nameField;


    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("linkedinT").innerHTML=document.getElementById("linkedinField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;


    let wes=document.getElementsByClassName("weField");

    let str="";
    for(let e of wes){
        str=str+`<li> ${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML=str;
  

    let as=document.getElementsByClassName("aField");

    let strr="";
    for(let e of as){
        strr=strr+`<li> ${e.value}</li>`;
    }
    document.getElementById('aT').innerHTML=strr;

   document.getElementById('cv-form').style.display='none';
   document.getElementById('cv-template').style.display="block";



 }

  function printCV(){
    window.print();
  }