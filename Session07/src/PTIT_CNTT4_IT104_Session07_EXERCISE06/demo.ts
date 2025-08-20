abstract class Accounts {
  public id: number;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;

  constructor(id: number, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.isLogin = false;
    this.role = role;
  }
  abstract login(): void;
  logout() {
    if (this.isLogin) {
      console.log(`Đăng xuất thành công `);
      this.isLogin = false;
    }
  }
}
class userAccount extends Accounts {
  public status: "active" | "banned";
  constructor(
    id: number,
    userName: string,
    password: string,
    role: string,
    status: "active" | "banned"
  ) {
    super(id, userName, password, role);
    this.status = status;
  }
  public login() {
    if (this.status === "active") {
      this.isLogin = true;
      console.log(`Đăng nhập thành công`);
    } else if (this.status === "banned") {
      console.log(`Tài khoản đã bị khóa`);
    }
  }
}
class adminAcc extends Accounts {
  constructor(id: number, userName: string, password: string) {
    super(id, userName, password, "admin");
  }
  public login(): void {
    this.isLogin = true;
    console.log(`Đăng nhập thành công admin`);
  }
  public banUser(user: userAccount) {
    if (this.isLogin) {
      user.status = "banned";
      console.log(`Tài khoản ${user.userName} đã bị khóa`);
    } else {
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
