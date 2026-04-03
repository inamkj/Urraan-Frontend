function agetoDays(age) {
    if (age < 0) {
        return "Age cannot be negative.";
    }
    return age * 365.25;
}

function handleAge(){
    let age = document.getElementById("ageInput").value;
    let days = agetoDays(parseFloat(age));
    document.getElementById("ageResult").innerText = `You have lived for approximately ${days} days`;
}

function hourtoSeconds(hours) {
    if (hours < 0) {
        return "Hours cannot be negative.";
    }
    return hours * 3600;
}

function handleHours(){
    let hours = document.getElementById("hoursInput").value;
    let seconds = hourtoSeconds(parseFloat(hours));
    document.getElementById("hoursResult").innerText = `There are ${seconds} seconds in ${hours} hours`;
}

function nextInArray(arr, num) {
    let index = arr.indexOf(num);
    if (index === -1) {
        return "Number not found in array.";
    }

    else if (index === arr.length - 1) {
        return "No next element, this is the last one.";
    }

    return arr[index + 1];
}

function handleArrayNext(){
    let arrInput = document.getElementById("arrayInput").value;
    let numInput = document.getElementById("targetNumber").value;

    if ( arrInput === "" || isNaN(numInput) ) {
        document.getElementById("arrayResult").innerText = "Please enter both an array and a number.";
        return
    }

    let arr = arrInput.split(",").map(x=> parseFloat(x.trim()));
    let result = nextInArray(arr, parseFloat(numInput));

    document.getElementById("arrayResult").innerText = `The next element in the array is: ${result}`;
}

function nextNumber(num) {
    if (Number.isInteger(num)) {
        return num + 1;
    }
    else {
        return parseFloat((num+0.1).toFixed(1));
    }
}

function handleSingleNext(){
    let numInput = document.getElementById("singleNumber").value;

    if (numInput === "" || isNaN(numInput)) {
        document.getElementById("singleResult").innerText = "Please enter a valid number.";
        return;
    }
    let num = parseFloat(numInput);

    let result = nextNumber(num);
    document.getElementById("singleResult").innerText = `The next number is: ${result}`;
}

function nameCapitalize(name) {
    if(!name) return "";

    name = name.trim();
    return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase();
}

function handleName(){
    let nameInput = document.getElementById("nameInput").value;
    if (nameInput === "") {
        document.getElementById("nameResult").innerText = "Please enter a name.";
        return;
    }
    let result = nameCapitalize(nameInput);
    document.getElementById("nameResult").innerText = `Capitalized Name: ${result}`;
}

function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "Weight and height must be positive numbers.";
    }
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category = "";
    if (bmi < 18,5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal weight";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }
    return { bmi, category };
}

function handleBMI(){
    let weightInput = document.getElementById("weightInput").value;
    let heightInput = document.getElementById("heightInput").value;

    if(weightInput <= 0 || heightInput <= 0 || isNaN(weightInput) || isNaN(heightInput)) {
        document.getElementById("bmiResult").innerText = "Please enter valid weight and height.";
        return;
    }

    let result = calculateBMI(weightInput, heightInput);
    document.getElementById("bmiResult").innerText = `Your BMI is ${result.bmi} (${result.category})`;
}

function pickFirstLast(length) {
    if (length <= 0) {
        return "Length must be a positive integer.";
    }
    let arr = [];
    for (let i=0; i<length; i++) {
        arr.push(Math.floor(Math.random() * 100)+1);
    }

    return {
        array: arr,
        first: arr[0],
        last: arr[arr.length - 1]
    };
}

function handleFirstLast(){
    let lengthInput = document.getElementById("lengthInput").value;

    if(isNaN(lengthInput) || lengthInput <= 0) {
        document.getElementById("firstLastResult").innerText = "Please enter a valid positive integer for length.";
        return;
    }
    let result = pickFirstLast(lengthInput);
    document.getElementById("randomArrayResult").innerText = `Generated Array: ${result.array.join(", ")}`;
}