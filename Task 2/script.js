
function loginUser() {
    let nameValue = document.getElementById("name").value;
    let passwordValue = document.getElementById("password").value;

    // Name Validation
    if (!nameValue || nameValue === "") {
        document.getElementById("nameErr").innerHTML = "User Name is required";
    } else {
        document.getElementById("nameErr").innerHTML = "";
    }

    // Password Validation
    if (!passwordValue || passwordValue === "") {
        document.getElementById("passwordErr").innerHTML = "Password is required";
    } else {
        document.getElementById("passwordErr").innerHTML = "";
    }

    // Check both fields filled
    if (nameValue === "" || passwordValue === "") {
        return;
    }

    let correctUser = "Shojjoti";
    let correctPass = "Sh1234";

    if (nameValue === correctUser && passwordValue === correctPass) {
        alert("Login Successful!");
    } else {
        alert("Invalid Username or Password!");
    }
}
