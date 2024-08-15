document.addEventListener('DOMContentLoaded' , () => {

    function calculateBMI() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) /100;
        const age = parseInt(document.getElementById('age').value);
        const gender = document.querySelector('input[name="Gender"]:checked')?.value;

        if (isNaN(weight) || isNaN(height) || isNaN(age) || !gender) {
            alert("Please enter all the fields correctly.");
            return;
        }

        const bmi = weight / (height*height);
        const bmiRounded = bmi.toFixed(1);

        const bmiValueElm = document.getElementById('bmi-value');
        const bmiCategoryElm = document.getElementById('bmi-category');
        const bmiDescriptionElm = document.getElementById('bmi-description');
        const bmiRangeElm = document.getElementById('bmi-range');
        const bmiInfoTextElm = document.getElementById('bmi-info-text');

        let bmiCategory = '';
        let bmiDescription = '';
        let bmiRange = '';
        let bmiInfoText = '';

        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
            bmiDescription = 'Your BMI indicates that you are underweight.';
            bmiRange = 'BMI < 18.5';
            bmiInfoText = 'Consider consulting a healthcare professional for advice on gaining weight.';
        }
        else if (bmi >= 18.5 && 24.9) {
            bmiCategory = 'Normal Weight';
            bmiDescription = 'Your BMI is within the normal weight range';
            bmiRange = '18.5 ≤ BMI < 24.9 ';
            bmiInfoText = 'Maintain a balanced diet and regular exercise to stay healthy.';

        }
        else if (bmi >= 25 && 29.9) {
            bmiCategory = 'Overweight';
            bmiDescription = 'Your BMI indicates that you are overweight.';
            bmiRange = '25 ≤ BMI < 29.9 ';
            bmiInfoText = 'Consider consulting a healthcare professional for advice on mainaging your weight.';

        }
        else {
            bmiCategory = 'Obesity';
            bmiDescription = 'Your BMI indicates obesity.';
            bmiRange = 'BMI ≥ 30';
            bmiInfoText = ' It is important to seek guidance from a healthcare professional for weight management.';
        }
    } 
    
    const calculateButton = document.querySelector('.bg-calculate');
    if (calculateButton) {
        calculateButton.addEventListener('click', (event) => {
            event.preventDefault();
            calculateBMI();
        });
    }

    const resetButton = document.querySelector('.bg-reset');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            document.querySelector('form').reset();
            document.getElementById('bmi-value').textContent = '0.0';
            document.getElementsById('bmi-category').textContent = '';
            document.getElementById('bmi-description').textContent = 'Your BMI result will appear here.';
            document.getElementsById('bmi-range').textContent = 'BMI result range will appear here';
            document.getElementById('bmi-info-text').textContent = 'Further infotmation about your BMI will be displayed here. Please consult a health professional for personalized advice.';
        });
    }

    
});
