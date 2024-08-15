document.addEventListener('DOMContentLoaded' , () => {

    function calculateBMI() {
        //retrieves the values from the input element with the corresponding IDs and converts it to a floating-point number or integer
        //assigns to the corresponding javascript variable
        const weight = parseFloat(document.getElementById('weight').value); 
        const height = parseFloat(document.getElementById('height').value) /100;
        const age = parseInt(document.getElementById('age').value);

        //retrieves value of selected radio button and assigns it to the variable. If no radio button is selected, 'gender' will be undefined
        const gender = document.querySelector('input[name="Gender"]:checked')?.value; 

        if (isNaN(weight) || isNaN(height) || isNaN(age) || !gender) {
            alert("Please enter all the fields correctly.");
            return;
        } //if statement to make sure all fields are entered correctly

        const bmi = weight / (height*height); //bmi calculation
        const bmiRounded = bmi.toFixed(1); //round bmi result to one decimal place

        //select the HTML elements by the IDs and assign to javascript variables
        const bmiValueElm = document.getElementById('bmi-value');
        const bmiCategoryElm = document.getElementById('bmi-category');
        const bmiDescriptionElm = document.getElementById('bmi-description');
        const bmiRangeElm = document.getElementById('bmi-range');
        const bmiInfoTextElm = document.getElementById('bmi-info-text');

        //initialize as empty ''
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
        else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = 'Normal Weight';
            bmiDescription = 'Your BMI is within the normal weight range';
            bmiRange = '18.5 ≤ BMI < 24.9 ';
            bmiInfoText = 'Maintain a balanced diet and regular exercise to stay healthy.';

        }
        else if (bmi >= 25 && bmi < 29.9) {
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

        //update text content of the HTML elements with the corresponding values stored in the javascript variables
        bmiValueElm.textContent = bmiRounded;
        bmiCategoryElm.textContent = bmiCategory;
        bmiDescriptionElm.textContent = bmiDescription;
        bmiRangeElm.textContent = bmiRange;
        bmiInfoTextElm.textContent = bmiInfoText;
    } 

    //select the calculate button element
    const calculateButton = document.querySelector('.bg-calculate');
    //check if calculate button exists
    if (calculateButton) {
        calculateButton.addEventListener('click', (event) => {
            event.preventDefault(); //prevent default form submission behavior
            calculateBMI(); //call function
        });
    }

    //select reset button element
    const resetButton = document.querySelector('.bg-reset');
    //check if reset button exists
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            document.querySelector('form').reset(); //reset the form, clearing all input fields
            document.getElementById('bmi-value').textContent = '0.0'; //reset bmi display to 0.0
            document.getElementById('bmi-category').textContent = ''; //clear bmi category display
            
            //reset the messages to the default messages
            document.getElementById('bmi-description').textContent = 'Your BMI result will appear here.';
            document.getElementById('bmi-range').textContent = 'BMI result range will appear here';
            document.getElementById('bmi-info-text').textContent = 'Further infotmation about your BMI will be displayed here. Please consult a health professional for personalized advice.';
        });
    }

});
