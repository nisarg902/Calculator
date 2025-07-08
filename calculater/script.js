   const  btnEle = document.querySelectorAll("button")
 //  console.log(btg);
    const inputEle    =Document.getElementById("result")

for(let i=0; i<btnEle.length;i++ ){


    btnEle[i].addEventListener("click",()=>{
       //console.log( btnEle[i].textContent);
          const btnValue = btnEle[i].textContent
          if(btnValue==="C"){
            clearResult()
          }
          else if(btnValue==="="){
            calculateResult()
          }else{
            appendValue (btnValue)
          }
    })
}

function clearResult(){
      inputEle.valuealue=""

}

function calculateResult(){
    inputEle.value =eval(inputEle.value)
}
function appendValue(btnValue){
    inputEle.value+=btnValue
}