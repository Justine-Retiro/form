function clearForm() {
    document.getElementById("userDetailsForm").reset();
    alert("Clear")
}

function submitForm() {
    const firstName = document.getElementById("fName").value;
    const middleName = document.getElementById("mName").value;
    const lastName = document.getElementById("lName").value;
    const birthday = document.getElementById("bday").value;
    const address = document.getElementById("add").value;

    if (!firstName || !middleName || !lastName || !birthday || !address) {
        alert("All details are required.");
    } else {
        const userDetails = `First Name: ${firstName}\nMiddle Name: ${middleName}\nLast Name: ${lastName}\nBirthday: ${birthday}\nAddress: ${address}`;
        alert(userDetails);
    }
}