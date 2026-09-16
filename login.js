function checkLogin(username, password) {

    if (username === "admin" && password === "1234") {
        return true;
    }

    return false;
}


document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    if (checkLogin(username, password)) {

        message.innerText = "Đăng nhập thành công!";
        message.style.color = "green";

    } else {

        message.innerText = "Sai tài khoản hoặc mật khẩu!";
        message.style.color = "red";

    }

});
