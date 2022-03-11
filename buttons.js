document.body.onload = addButtons;

function addButtons () {

    var input = ""

    function createButton (button) {
        function someFunc() {
            button.inputChange();
            document.getElementsByClassName('calc-input')[0].value = input
        }
        let btn = document.createElement("button");
        btn.innerHTML = "<b>"+button.name+"</b>";
        btn.onclick = someFunc;
        btn.classList.add(button.class);
        document.getElementsByClassName(button.place)[0].appendChild(btn);
    }

    function inputChangeFunction() {input = input + this.name};

    function inputClear() {
        input = "";
        document.getElementById('result').innerHTML = "0"
        document.getElementsByClassName('calc-display')[0].style.visibility = "hidden";
    };

    function inputCancel() {input = input.slice(0, -1)};

    function getResult() {
        let result = eval(input);
        document.getElementById('result').innerHTML = result;
        document.getElementById('math-operations').innerHTML = input;
        document.getElementsByClassName('calc-display')[0].style.visibility = "visible";
        input = ""
    }

    function power () {
        result = Math.pow(parseFloat(eval(input)), 2);
        input = "(" + input + "*" + input + ")";
        document.getElementById('math-operations').innerHTML = input;
        document.getElementById('result').innerHTML = result
        document.getElementsByClassName('calc-display')[0].style.visibility = "visible";
        input = ""
    }

    function sqrt () {
        result = Math.sqrt(parseFloat(eval(input)));
        document.getElementById('math-operations').innerHTML = "sqrt(" + input + ")";
        document.getElementById('result').innerHTML = result
        document.getElementsByClassName('calc-display')[0].style.visibility = "visible";
        input = ""
    }

    const buttonSymbol = [
        {name: ".", inputChange: inputChangeFunction, place: "buttons-num", class: "normal-btn"},
        {name: "CE", inputChange: inputCancel, place: "buttons-num", class: "normal-btn"},
        {name: "/", inputChange: inputChangeFunction, place: "buttons-other", class: "normal-btn"},
        {name: "AC", inputChange:inputClear, place: "buttons-other", class: "clear-btn"},
        {name: "*", inputChange: inputChangeFunction, place: "buttons-other", class: "normal-btn"},
        {name: "(", inputChange: inputChangeFunction, place: "buttons-other", class: "normal-btn"},
        {name: ")", inputChange: inputChangeFunction, place: "buttons-other", class: "normal-btn"},
        {name: "-", inputChange: inputChangeFunction, place: "buttons-other", class: "normal-btn"},
        {name: "x2", inputChange: power, place: "buttons-other", class: "normal-btn"},
        {name: "sqrt", inputChange: sqrt, place: "buttons-other", class: "normal-btn"},
        {name: "+", inputChange: inputChangeFunction, place: "buttons-other", class: "normal-btn"},
        {name: "=", inputChange: getResult, place: "buttons-other", class: "result-btn"}
    ]

    for (let i = 9 ; i >= 0; i--) {
        let btn = document.createElement("button");
        btn.innerHTML = "<b>"+i+"</b>";
        btn.onclick = function() {
            input = input + i;
            document.getElementsByClassName("calc-input")[0].value = input
        }
        btn.classList.add("normal-btn")
        document.getElementsByClassName("buttons-num")[0].appendChild(btn);
    }

    buttonSymbol.forEach(createButton);

}
