function  card()
{
    let myEnterNumber = Number(document.getElementById("enternumber").value);
    let myLimitNumber = Number(document.getElementById("enterlimit").value);
    let output  = "" ;

    for(let i=1; i <= myLimitNumber; i++)
    {
     output += `<tr><td>${myEnterNumber}</td><td> * </td><td>${i}</td><td>=</td><td>${myEnterNumber * i}</td> <br>`;
    }
    document.getElementById("maintableoutput").innerHTML = output;
}
function Reset(){
     document.getElementById("enternumber").value = "";
    document.getElementById("enterlimit").value  = "";
    document.getElementById("maintableoutput").innerHTML = output = "";
}