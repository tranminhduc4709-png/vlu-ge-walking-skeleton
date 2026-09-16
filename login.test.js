const fs = require("fs");

const code = fs.readFileSync("./login.js", "utf8");

eval(
    code.substring(
        0,
        code.indexOf("document.getElementById")
    )
);


test("Đăng nhập đúng tài khoản và mật khẩu", () => {

    expect(checkLogin("admin", "123")).toBe(true);

});


test("Sai mật khẩu", () => {

    expect(checkLogin("admin", "1234")).toBe(false);

});


test("Sai tài khoản", () => {

    expect(checkLogin("user", "123")).toBe(false);

});


test("Sai cả tài khoản và mật khẩu", () => {

    expect(checkLogin("user", "1234")).toBe(false);

});
