let idProduct = 1;
let idCustomer = 1;
let idOrder = 1;
let choice;
class Customer {
    constructor(name, email, shippingAddress) {
        this.id = idCustomer++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `ID: ${this.id}\nName: ${this.name}\nEmail: ${this.email}\nAddress: ${this.shippingAddress}`;
    }
}
class Product {
    constructor(name, price, stock, category) {
        this.id = idProduct++;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
    sell(quantity) {
        if (quantity > 0 && this.stock >= quantity) {
            this.stock -= quantity;
        }
    }
    restock(quantity) {
        if (quantity > 0) {
            this.stock += quantity;
        }
    }
}
class ElectronicsProduct extends Product {
    constructor(name, price, stock, warrantyPeriod) {
        super(name, price, stock, "Đồ điện tử");
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `ID: ${this.id}\nName: ${this.name}\nPrice: ${this.price}\nStock: ${this.stock}\nWarranty: ${this.warrantyPeriod} tháng`;
    }
    getShippingCost(distance) {
        return 50000;
    }
    getCategory() {
        return this.category;
    }
}
class ClothingProduct extends Product {
    constructor(name, price, stock, size, color) {
        super(name, price, stock, "Quần áo");
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `ID: ${this.id}\nName: ${this.name}\nPrice: ${this.price}\nStock: ${this.stock}\nSize: ${this.size}\nColor: ${this.color}`;
    }
    getShippingCost(distance) {
        return 25000;
    }
    getCategory() {
        return this.category;
    }
}
class Order {
    constructor(customer) {
        this.orderId = idOrder++;
        this.customer = customer;
        this.products = [];
        this.totalAmount = 0;
    }
    getDetails() {
        const productList = this.products
            .map((p) => `${p.product.name} (x${p.quantity})`)
            .join(", ");
        return `Order ID: ${this.orderId}\nCustomer: ${this.customer.name}\nProducts: ${productList}\nTotal: ${this.totalAmount}`;
    }
}
class Store {
    constructor() {
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    createOrder(customerId, productQuantities) {
        const customer = this.customers.find((c) => c.id === customerId);
        if (!customer) {
            alert("Khách hàng không tồn tại.");
            return null;
        }
        const order = new Order(customer);
        for (const { productId, quantity } of productQuantities) {
            const product = this.products.find((p) => p.id === productId);
            if (product && product.stock >= quantity) {
                order.products.push({ product, quantity });
                order.totalAmount += product.price * quantity;
                product.sell(quantity);
            }
            else {
                alert(`Sản phẩm ID ${productId} không đủ số lượng hoặc không tồn tại.`);
                return null;
            }
        }
        this.orders.push(order);
        alert("Tạo đơn hàng thành công!");
        return order;
    }
    cancelOrder(orderId) {
        const index = this.orders.findIndex((o) => o.orderId === orderId);
        if (index !== -1) {
            const order = this.orders[index];
            order.products.forEach((item) => item.product.restock(item.quantity));
            this.orders.splice(index, 1);
            alert("Hủy đơn hàng thành công!");
        }
        else {
            alert("Không tìm thấy đơn hàng.");
        }
    }
    listAvailableProducts() {
        const available = this.products.filter((p) => p.stock > 0);
        alert("Sản phẩm còn hàng:\n" +
            available.map((p) => p.getProductInfo()).join("\n\n"));
    }
    listCustomerOrders(customerId) {
        const orders = this.orders.filter((o) => o.customer.id === customerId);
        if (orders.length > 0) {
            alert(orders.map((o) => o.getDetails()).join("\n\n"));
        }
        else {
            alert("Khách hàng chưa có đơn hàng.");
        }
    }
    calculateTotalRevenue() {
        const total = this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
        alert(`Tổng doanh thu: ${total} VND`);
    }
    countProductsByCategory() {
        const count = this.products.reduce((acc, p) => {
            acc[p.getCategory()] = (acc[p.getCategory()] || 0) + 1;
            return acc;
        }, {});
        alert("Thống kê sản phẩm:\n" + JSON.stringify(count, null, 2));
    }
    updateProductStock(productId, newStock) {
        const index = this.products.findIndex((p) => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            alert("Cập nhật tồn kho thành công!");
        }
        else {
            alert("Không tìm thấy sản phẩm.");
        }
    }
    findById(arr, id) {
        return arr.find((item) => item.id === id);
    }
    viewProductDetails(productId) {
        const product = this.products.find((p) => p.id === productId);
        if (product) {
            alert(product.getProductInfo());
        }
        else {
            alert("Không tìm thấy sản phẩm.");
        }
    }
}
const store = new Store();
do {
    choice = Number(prompt(`
1. Thêm khách hàng mới
2. Thêm sản phẩm mới
3. Tạo đơn hàng mới
4. Hủy đơn hàng
5. Hiển thị danh sách sản phẩm còn hàng
6. Hiển thị đơn hàng của khách hàng
7. Tính tổng doanh thu
8. Thống kê sản phẩm theo danh mục
9. Cập nhật tồn kho
10. Tìm kiếm thông tin bằng ID
11. Xem thông tin chi tiết sản phẩm
12. Thoát
Nhập lựa chọn:`));
    switch (choice) {
        case 1:
            const name = prompt("Tên khách hàng:");
            const email = prompt("Email:");
            const address = prompt("Địa chỉ:");
            store.addCustomer(new Customer(name, email, address));
            break;
        case 2:
            const type = prompt("Chọn loại sản phẩm (1: Đồ điện tử, 2: Quần áo):");
            if (type === "1") {
                const ep = new ElectronicsProduct(prompt("Tên:"), Number(prompt("Giá:")), Number(prompt("Tồn kho:")), Number(prompt("Bảo hành (tháng):")));
                store.addProduct(ep);
            }
            else if (type === "2") {
                const cp = new ClothingProduct(prompt("Tên:"), Number(prompt("Giá:")), Number(prompt("Tồn kho:")), prompt("Size:"), prompt("Màu:"));
                store.addProduct(cp);
            }
            break;
        case 3:
            const cid = Number(prompt("Nhập ID khách hàng:"));
            const pid = Number(prompt("Nhập ID sản phẩm:"));
            const qty = Number(prompt("Nhập số lượng:"));
            store.createOrder(cid, [{ productId: pid, quantity: qty }]);
            break;
        case 4:
            store.cancelOrder(Number(prompt("Nhập ID đơn hàng:")));
            break;
        case 5:
            store.listAvailableProducts();
            break;
        case 6:
            store.listCustomerOrders(Number(prompt("Nhập ID khách hàng:")));
            break;
        case 7:
            store.calculateTotalRevenue();
            break;
        case 8:
            store.countProductsByCategory();
            break;
        case 9:
            store.updateProductStock(Number(prompt("Nhập ID sản phẩm:")), Number(prompt("Nhập tồn kho mới:")));
            break;
        case 10:
            const typeId = prompt("Tìm (1: Customer, 2: Product):");
            const idSearch = Number(prompt("Nhập ID:"));
            if (typeId === "1") {
                const c = store.findById(store.customers, idSearch);
                alert(c ? c.getDetails() : "Không tìm thấy khách hàng.");
            }
            else {
                const p = store.findById(store.products, idSearch);
                alert(p ? p.getProductInfo() : "Không tìm thấy sản phẩm.");
            }
            break;
        case 11:
            store.viewProductDetails(Number(prompt("Nhập ID sản phẩm:")));
            break;
        case 12:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }
} while (choice !== 12);
