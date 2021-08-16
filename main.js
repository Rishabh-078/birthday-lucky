inputDate = document.querySelector("#input-date");
luckyNumber = document.querySelector("#lucky-number");
checkButton = document.querySelector("#check-btn");
resultBox = document.querySelector("#result-box");
privacyBox = document.querySelector(".privacy-box");
privacyX = document.querySelector("#privacy-cross");
picture= document.querySelector("#picture");


function outputResult(msg) {
    resultBox.style.display = "block";
    resultBox.innerText = msg;
}

privacyX.addEventListener("click", () => {
    privacyBox.style.display = "none";
})

checkButton.addEventListener("click", inputCheck);

function inputCheck() {
    if (luckyNumber.value == 0 || inputDate.value == 0) {
        outputResult(`Please don't leave the fields empty`);
    } else {
        var dob = inputDate.value;
        var luckyNo = luckyNumber.value;
        var sum = sumCalculator(dob);
        luckyCheck(sum, luckyNo);
    }
}


function sumCalculator(dob) {
    dob = dob.replaceAll("-", "");
    var add = 0;
    for (var i = 0; i < dob.length; i++) {
        add += Number(dob.charAt(i));
    }
    return add;
}

function luckyCheck(sum, luckyNo) {
    if (sum % luckyNo === 0) {
        outputResult(`Congrats, your birth is lucky for you 😊`);
        resultBox.style.backgroundColor = "green";
    } else {
        outputResult(`Oops, your birth isn't lucky for you 😢`);
        resultBox.style.backgroundColor = "red";
        picture.style.display="inline-flex";
    }
}