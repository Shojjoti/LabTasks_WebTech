
function loginUser() {
    let nameValue = document.getElementById("name").value;
    let passwordValue = document.getElementById("password").value;

    // Name validation
    if (nameValue === "") {
        document.getElementById("nameErr").innerHTML = "User Name is required";
    } else {
        document.getElementById("nameErr").innerHTML = "";
    }

    // Password validation
    if (passwordValue === "") {
        document.getElementById("passwordErr").innerHTML = "Password is required";
    } else {
        document.getElementById("passwordErr").innerHTML = "";
    }
 
    if (nameValue === "" || passwordValue === "") 
        return;

    

    let correctUser = "Shojjoti";
    let correctPass = "Sh1234";

    if (nameValue === correctUser && passwordValue === correctPass) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Username or Password!");
    }
}
