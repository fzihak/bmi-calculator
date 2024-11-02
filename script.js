function calculateBMI() {
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.querySelector('input[name="gender"]:checked');
    const result = document.getElementById('result');
    const bmiIndicator = document.getElementById('bmi-indicator');

    if (isNaN(age) || age < 2 || age > 120 || !gender || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.textContent = "Please enter valid values for all fields.";
        result.style.color = "red";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
        bmiIndicator.style.background = "#ffc107";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        bmiIndicator.style.background = "#28a745";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        bmiIndicator.style.background = "#fd7e14";
    } else {
        category = "Obesity";
        bmiIndicator.style.background = "#dc3545";
    }

    result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
    result.style.color = "#333";

    const bmiPercentage = Math.min((bmi / 40) * 100, 100);
    bmiIndicator.style.width = `${bmiPercentage}%`;
}
