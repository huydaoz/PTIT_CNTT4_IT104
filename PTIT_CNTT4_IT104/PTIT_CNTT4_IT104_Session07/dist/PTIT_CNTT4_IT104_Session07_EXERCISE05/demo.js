class Account {
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
class userAcc extends Account {
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
const user1 = new userAcc(1, "huydao", "123456", "user", "active");
const user2 = new userAcc(2, "longnguyen", "abcdef", "user", "banned");
console.log(`user1:`);
user1.login();
user1.logout();
console.log(`user2:`);
user2.login();
user2.logout();
