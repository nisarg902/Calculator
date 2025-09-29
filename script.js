const btnEle = document.querySelectorAll("button");
const inputEle = document.getElementById("result");

for (let i = 0; i < btnEle.length; i++) 
    {
    btnEle[i].addEventListener("click", () => {
        const btnValue = btnEle[i].textContent;

        if (btnValue === "C") 
            {
            clearResult();
             } else if (btnValue === "=") 
                {
                  calculateResult();
               } else if 
                 (btnValue === "←") 
            {
             backspace();
            } else
                 {
                   appendValue(btnValue);
               }
    });
}

function clearResult() {
    inputEle.value = "";
}

function calculateResult() {
    try {
        inputEle.value = eval(inputEle.value);
    } catch (error) {
        inputEle.value = "Error";
    }
}

function appendValue(btnValue) {
    inputEle.value += btnValue;
}

function backspace() {
    inputEle.value = inputEle.value.slice(0, -1);
}