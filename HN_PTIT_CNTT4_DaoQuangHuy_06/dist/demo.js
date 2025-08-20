let idAudience = 1;
let idMovie = 1;
let idBooking = 1;
let choice;
class Audience {
    constructor(name, email, phone) {
        this.id = idAudience++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `ID: ${this.id}\nName: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}`;
    }
}
class Movie {
    constructor(title, ticketPrice, genre, isShowing = false) {
        this.id = idMovie++;
        this.title = title;
        this.ticketPrice = ticketPrice;
        this.genre = genre;
        this.isShowing = isShowing;
    }
    startShow() {
        this.isShowing = true;
    }
    stopShow() {
        this.isShowing = false;
    }
    getMovieInfoBasic() {
        return `ID: ${this.id}\nTitle: ${this.title}\nGenre: ${this.genre}\nBase price: ${this.ticketPrice}\nIs showing: ${this.isShowing}`;
    }
}
class ActionMovie extends Movie {
    constructor(title, ticketPrice) {
        super(title, ticketPrice, "Hành động", false);
    }
    calculateTicketCost(quantity) {
        const subtotal = this.ticketPrice * quantity;
        return subtotal;
    }
    getSpecialOffers() {
        return ["Miễn phí bắp rang", "Tặng poster"];
    }
    getMovieInfo() {
        return "Phim hành động gay cấn, kỹ xảo hoành tráng";
    }
}
class ComedyMovie extends Movie {
    constructor(title, ticketPrice) {
        super(title, ticketPrice, "Hài", false);
    }
    calculateTicketCost(quantity) {
        const subtotal = this.ticketPrice * quantity;
        const discount = quantity >= 5 ? 0.1 : 0;
        return Math.round(subtotal * (1 - discount));
    }
    getSpecialOffers() {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo() {
        return "Phim hài nhẹ nhàng, vui nhộn";
    }
}
class AnimationMovie extends Movie {
    constructor(title, ticketPrice) {
        super(title, ticketPrice, "Hoạt hình", false);
    }
    calculateTicketCost(quantity) {
        const total = this.ticketPrice * quantity;
        return total;
    }
    getSpecialOffers() {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo() {
        return "Phim hoạt hình với hình ảnh sống động";
    }
}
class TicketBooking {
    constructor(audience, movie, quantity) {
        this.bookingId = idBooking++;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = movie.calculateTicketCost(quantity);
    }
    getDetails() {
        return `Booking ID: ${this.bookingId}\nAudience: ${this.audience.name} (ID:${this.audience.id})\nMovie: ${this.movie.title} (ID:${this.movie.id})\nQuantity: ${this.quantity}\nTotal: ${this.totalPrice} VND`;
    }
}
class Cinema {
    constructor() {
        this.movies = [];
        this.audiences = [];
        this.bookings = [];
    }
    addMovie(movie) {
        this.movies.push(movie);
    }
    addAudience(audience) {
        this.audiences.push(audience);
    }
    bookTickets(audienceId, movieId, quantity) {
        const audience = this.audiences.find((a) => a.id === audienceId);
        if (!audience) {
            alert("Khán giả không tồn tại.");
            return null;
        }
        const movie = this.movies.find((m) => m.id === movieId);
        if (!movie) {
            alert("Phim không tồn tại.");
            return null;
        }
        if (!movie.isShowing) {
            alert("Phim hiện không chiếu.");
            return null;
        }
        if (!Number.isInteger(quantity) || quantity <= 0) {
            alert("Số lượng vé không hợp lệ.");
            return null;
        }
        const booking = new TicketBooking(audience, movie, quantity);
        this.bookings.push(booking);
        alert("Tạo đặt vé thành công!");
        return booking;
    }
    cancelBooking(bookingId) {
        const index = this.bookings.findIndex((b) => b.bookingId === bookingId);
        if (index !== -1) {
            this.bookings.splice(index, 1);
            alert("Hủy đặt vé thành công!");
        }
        else {
            alert("Không tìm thấy đặt vé.");
        }
    }
    cancelMovie(movieId) {
        const movie = this.movies.find((m) => m.id === movieId);
        if (movie) {
            movie.stopShow();
            alert("Đã ngừng chiếu phim.");
        }
        else {
            alert("Không tìm thấy phim.");
        }
    }
    listShowingMovies() {
        const showing = this.movies.filter((m) => m.isShowing);
        if (showing.length === 0) {
            alert("Không có phim đang chiếu.");
            return;
        }
        alert("Phim đang chiếu:\n\n" +
            showing
                .map((m) => `${m.getMovieInfoBasic()}\nƯu đãi: ${m
                .getSpecialOffers()
                .join(", ")}\nMô tả: ${m.getMovieInfo()}`)
                .join("\n\n---\n\n"));
    }
    listAudienceBookings(audienceId) {
        const audience = this.audiences.find((a) => a.id === audienceId);
        if (!audience) {
            alert("Không tìm thấy khán giả.");
            return;
        }
        const list = this.bookings.filter((b) => b.audience.id === audienceId);
        if (list.length === 0) {
            alert("Khán giả chưa có đặt vé.");
            return;
        }
        alert("Đặt vé của " +
            audience.name +
            ":\n\n" +
            list.map((b) => b.getDetails()).join("\n\n"));
    }
    calculateTotalRevenue() {
        return this.bookings.reduce((sum, b) => sum + b.totalPrice, 0);
    }
    getMovieGenreCount() {
        const stats = this.movies.reduce((acc, m) => {
            var _a;
            acc[m.genre] = ((_a = acc[m.genre]) !== null && _a !== void 0 ? _a : 0) + 1;
            return acc;
        }, {});
        return stats;
    }
    getMovieSpecialOffers(movieId) {
        const movie = this.movies.find((m) => m.id === movieId);
        if (!movie) {
            alert("Không tìm thấy phim.");
            return;
        }
        alert("Ưu đãi phim '" +
            movie.title +
            "':\n" +
            movie.getSpecialOffers().join("\n"));
    }
    findMovieById(collection, id) {
        const idx = collection.findIndex((c) => c.id === id);
        if (idx === -1)
            return undefined;
        return collection.find((_, i) => i === idx);
    }
    findAudienceById(collection, id) {
        const idx = collection.findIndex((c) => c.id === id);
        if (idx === -1)
            return undefined;
        return collection.find((_, i) => i === idx);
    }
    findTicketBookingById(collection, id) {
        const idx = collection.findIndex((c) => c.bookingId === id);
        if (idx === -1)
            return undefined;
        return collection.find((_, i) => i === idx);
    }
}
const cinema = new Cinema();
do {
    choice = Number(prompt(`
1. Thêm khán giả mới
2. Thêm phim mới
3. Đặt vé
4. Hủy đặt vé
5. Ngừng chiếu phim
6. Hiển thị danh sách phim đang chiếu
7. Hiển thị các đặt vé của một khán giả
8. Đếm số lượng từng thể loại phim
9. Tính và hiển thị tổng doanh thu
10. Tìm kiếm và hiển thị thông tin bằng mã định danh
11. Hiển thị ưu đãi của một phim
12. Thoát
Nhập lựa chọn:`));
    switch (choice) {
        case 1:
            const name = prompt("Tên khán giả:");
            const email = prompt("Email:");
            const phone = prompt("SĐT:");
            cinema.addAudience(new Audience(name, email, phone));
            break;
        case 2:
            const type = prompt("Chọn loại phim (1: Action, 2: Comedy, 3: Animation):");
            if (type === "1") {
                const aTitle = prompt("Tên phim:");
                const aPrice = Number(prompt("Giá vé cơ bản:"));
                const am = new ActionMovie(aTitle, aPrice);
                am.startShow();
                cinema.addMovie(am);
            }
            else if (type === "2") {
                const cTitle = prompt("Tên phim:");
                const cPrice = Number(prompt("Giá vé cơ bản:"));
                const cm = new ComedyMovie(cTitle, cPrice);
                cm.startShow();
                cinema.addMovie(cm);
            }
            else if (type === "3") {
                const oTitle = prompt("Tên phim:");
                const oPrice = Number(prompt("Giá vé cơ bản:"));
                const om = new AnimationMovie(oTitle, oPrice);
                om.startShow();
                cinema.addMovie(om);
            }
            else {
                alert("Loại phim không hợp lệ.");
            }
            break;
        case 3:
            const aid = Number(prompt("Nhập ID khán giả:"));
            const mid = Number(prompt("Nhập ID phim:"));
            const qty = Number(prompt("Nhập số lượng vé:"));
            cinema.bookTickets(aid, mid, qty);
            break;
        case 4:
            const bid = Number(prompt("Nhập Booking ID cần hủy:"));
            cinema.cancelBooking(bid);
            break;
        case 5:
            const mstop = Number(prompt("Nhập ID phim cần ngừng chiếu:"));
            cinema.cancelMovie(mstop);
            break;
        case 6:
            cinema.listShowingMovies();
            break;
        case 7:
            const ar = Number(prompt("Nhập ID khán giả:"));
            cinema.listAudienceBookings(ar);
            break;
        case 8:
            const stats = cinema.getMovieGenreCount();
            let out = "";
            for (const g in stats) {
                out += `${g}: ${stats[g]}\n`;
            }
            alert("Số lượng phim theo thể loại:\n" + (out || "(Chưa có phim)"));
            break;
        case 9:
            const total = cinema.calculateTotalRevenue();
            alert(`Tổng doanh thu: ${total} VND`);
            break;
        case 10:
            const t = prompt("Tìm (1: Movie, 2: Audience, 3: Booking):");
            const idSearch = Number(prompt("Nhập ID:"));
            if (t === "1") {
                const f = cinema.findMovieById(cinema.movies, idSearch);
                alert(f
                    ? f.getMovieInfoBasic() + "\nMô tả: " + f.getMovieInfo()
                    : "Không tìm thấy phim.");
            }
            else if (t === "2") {
                const f = cinema.findAudienceById(cinema.audiences, idSearch);
                alert(f ? f.getDetails() : "Không tìm thấy khán giả.");
            }
            else if (t === "3") {
                const f = cinema.findTicketBookingById(cinema.bookings, idSearch);
                alert(f ? f.getDetails() : "Không tìm thấy booking.");
            }
            else {
                alert("Loại tìm kiếm không hợp lệ.");
            }
            break;
        case 11:
            const midOffer = Number(prompt("Nhập ID phim:"));
            cinema.getMovieSpecialOffers(midOffer);
            break;
        case 12:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }
} while (choice !== 12);
