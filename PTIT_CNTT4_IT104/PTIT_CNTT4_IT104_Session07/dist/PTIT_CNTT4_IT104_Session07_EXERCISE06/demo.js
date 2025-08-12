class Accounts {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    logout() {
        if (this.isLogin) {
            console.log(`Đăng xuất thành công `);
            this.isLogin = false;
        }
    }
}
class userAccount extends Accounts {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`Đăng nhập thành công`);
        }
        else if (this.status === "banned") {
            console.log(`Tài khoản đã bị khóa`);
        }
    }
}
class adminAcc extends Accounts {
    constructor(id, userName, password) {
        super(id, userName, password, "admin");
    }
    login() {
        this.isLogin = true;
        console.log(`Đăng nhập thành công admin`);
    }
    banUser(user) {
        if (this.isLogin) {
            user.status = "banned";
            console.log(`Tài khoản ${user.userName} đã bị khóa`);
        }
        else {
            console.log(`Bạn chưa đăng nhập`);
        }
    }
}
const users1 = new userAccount(1, "huydao", "123456", "user", "active");
const admin1 = new adminAcc(100, "admin01", "adminpass");
console.log(`user1 login:`);
users1.login();
console.log(`admin login và ban: `);
admin1.login();
admin1.banUser(users1);
console.log(`user1 login:`);
users1.login();
