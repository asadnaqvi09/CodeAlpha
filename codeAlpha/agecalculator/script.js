function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const currentDate = new Date();

    if (!dobInput) {
        document.getElementById('result').innerHTML = "Please select a valid date.";
        return;
    }

    let age = currentDate.getFullYear() - dob.getFullYear();
    const month = currentDate.getMonth() - dob.getMonth();
    const date = currentDate.getDate() - dob.getDate();

    if (month < 0 || (month === 0 && date < 0)) {
        age--;
    }

    document.getElementById('result').innerHTML = `You are ${age} years old.`;
}
