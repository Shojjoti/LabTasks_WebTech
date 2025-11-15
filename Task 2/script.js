
function loginUser() {
    let nameValue = document.getElementById("name").value;
    let passwordValue = document.getElementById("password").value;

    // Name Validation
    if (!nameValue || nameValue === "") {
        const ErrorElement = document.getElementById("nameErr");
        ErrorElement.innerHTML = "User Name is required";
    } else {
        const ErrorElement = document.getElementById("nameErr");
        ErrorElement.innerHTML = "";
    }

    // Password Validation
    if (!passwordValue || passwordValue === "") {
        const ErrorElement = document.getElementById("passwordErr");
        ErrorElement.innerHTML = "Password is required";
    } else {
        const ErrorElement = document.getElementById("passwordErr");
        ErrorElement.innerHTML = "";
    }

    

    let correctUser = "Shojjoti";
    let correctPass = "Sh1234";

    if (username.value === correctUser && password.value === correctPass) {
        alert("Login Successful!");         
    } else {
        alert("Invalid Username or Password!");
    }
}
