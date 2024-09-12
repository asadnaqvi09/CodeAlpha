# Age Calculator

This is a simple web-based age calculator that allows users to input their date of birth and calculates their age in years.

## Features

- User-friendly interface
- Accurate age calculation
- Error handling for invalid date input

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Use

1. Open the `index.html` file in your web browser.
2. Enter your date of birth in the input field.
3. Click the "Calculate Age" button.
4. Your age will be displayed below the button.

## Code Explanation

### HTML

The HTML file contains an input field for the date of birth and a button to trigger the age calculation.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Calculator</title>
</head>
<body>
    <h1>Age Calculator</h1>
    <input type="date" id="dob">
    <button onclick="calculateAge()">Calculate Age</button>
    <p id="result"></p>
    <script src="script.js"></script>
</body>
</html>
