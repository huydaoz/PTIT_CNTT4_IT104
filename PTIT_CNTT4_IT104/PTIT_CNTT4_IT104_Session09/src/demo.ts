let idProduct = 1;
let idCustomer = 1;
let idOrder = 1;
let choice: number;

class Customer {
  id: number = idCustomer++;
  name: string;
  email: string;
  shippingAddress: string;

  constructor(name: string, email: string, shippingAddress: string) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
  }

  getDetails(): string {
    return `ID: ${this.id}\nName: ${this.name}\nEmail: ${this.email}\nAddress: ${this.shippingAddress}`;
  }
}

abstract class Product {
  id: number = idProduct++;
  category: "Đồ điện tử" | "Quần áo";
  name: string;
  price: number;
  stock: number;

  constructor(
    name: string,
    price: number,
    stock: number,
    category: "Đồ điện tử" | "Quần áo"
  ) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
  }

  sell(quantity: number): void {
    if (quantity > 0 && this.stock >= quantity) {
      this.stock -= quantity;
    }
  }

  restock(quantity: number): void {
    if (quantity > 0) {
      this.stock += quantity;
    }
  }

  abstract getProductInfo(): string;
  abstract getShippingCost(distance: number): number;
  abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
  warrantyPeriod: number;

  constructor(
    name: string,
    price: number,
    stock: number,
    warrantyPeriod: number
  ) {
    super(name, price, stock, "Đồ điện tử");
    this.warrantyPeriod = warrantyPeriod;
  }

  getProductInfo(): string {
    return `ID: ${this.id}\nName: ${this.name}\nPrice: ${this.price}\nStock: ${this.stock}\nWarranty: ${this.warrantyPeriod} tháng`;
  }

  getShippingCost(distance: number): number {
    return 50000;
  }

  getCategory(): string {
    return this.category;
  }
}

class ClothingProduct extends Product {
  size: string;
  color: string;

  constructor(
    name: string,
    price: number,
    stock: number,
    size: string,
    color: string
  ) {
    super(name, price, stock, "Quần áo");
    this.size = size;
    this.color = color;
  }

  getProductInfo(): string {
    return `ID: ${this.id}\nName: ${this.name}\nPrice: ${this.price}\nStock: ${this.stock}\nSize: ${this.size}\nColor: ${this.color}`;
  }

  getShippingCost(distance: number): number {
    return 25000;
  }

  getCategory(): string {
    return this.category;
  }
}

class Order {
  orderId: number = idOrder++;
  customer: Customer;
  products: { product: Product; quantity: number }[];
  totalAmount: number;

  constructor(customer: Customer) {
    this.customer = customer;
    this.products = [];
    this.totalAmount = 0;
  }

  getDetails(): string {
    const productList = this.products
      .map((p) => `${p.product.name} (x${p.quantity})`)
      .join(", ");
    return `Order ID: ${this.orderId}\nCustomer: ${this.customer.name}\nProducts: ${productList}\nTotal: ${this.totalAmount}`;
  }
}

class Store {
  products: Product[] = [];
  customers: Customer[] = [];
  orders: Order[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  createOrder(
    customerId: number,
    productQuantities: { productId: number; quantity: number }[]
  ): Order | null {
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
      } else {
        alert(`Sản phẩm ID ${productId} không đủ số lượng hoặc không tồn tại.`);
        return null;
      }
    }
    this.orders.push(order);
    alert("Tạo đơn hàng thành công!");
    return order;
  }

  cancelOrder(orderId: number): void {
    const index = this.orders.findIndex((o) => o.orderId === orderId);
    if (index !== -1) {
      const order = this.orders[index];
      order.products.forEach((item) => item.product.restock(item.quantity));
      this.orders.splice(index, 1);
      alert("Hủy đơn hàng thành công!");
    } else {
      alert("Không tìm thấy đơn hàng.");
    }
  }

  listAvailableProducts(): void {
    const available = this.products.filter((p) => p.stock > 0);
    alert(
      "Sản phẩm còn hàng:\n" +
        available.map((p) => p.getProductInfo()).join("\n\n")
    );
  }

  listCustomerOrders(customerId: number): void {
    const orders = this.orders.filter((o) => o.customer.id === customerId);
    if (orders.length > 0) {
      alert(orders.map((o) => o.getDetails()).join("\n\n"));
    } else {
      alert("Khách hàng chưa có đơn hàng.");
    }
  }

  calculateTotalRevenue(): void {
    const total = this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    alert(`Tổng doanh thu: ${total} VND`);
  }

  countProductsByCategory(): void {
    const count = this.products.reduce((acc, p) => {
      acc[p.getCategory()] = (acc[p.getCategory()] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    alert("Thống kê sản phẩm:\n" + JSON.stringify(count, null, 2));
  }

  updateProductStock(productId: number, newStock: number): void {
    const index = this.products.findIndex((p) => p.id === productId);
    if (index !== -1) {
      this.products[index].stock = newStock;
      alert("Cập nhật tồn kho thành công!");
    } else {
      alert("Không tìm thấy sản phẩm.");
    }
  }

  findById<T extends Customer | Product>(arr: T[], id: number): T | undefined {
    return arr.find((item) => (item as any).id === id);
  }

  viewProductDetails(productId: number): void {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      alert(product.getProductInfo());
    } else {
      alert("Không tìm thấy sản phẩm.");
    }
  }
}

const store = new Store();

do {
  choice = Number(
    prompt(`
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
Nhập lựa chọn:`)
  );

  switch (choice) {
    case 1:
      const name = prompt("Tên khách hàng:");
      const email = prompt("Email:");
      const address = prompt("Địa chỉ:");
      store.addCustomer(new Customer(name!, email!, address!));
      break;
    case 2:
      const type = prompt("Chọn loại sản phẩm (1: Đồ điện tử, 2: Quần áo):");
      if (type === "1") {
        const ep = new ElectronicsProduct(
          prompt("Tên:")!,
          Number(prompt("Giá:")),
          Number(prompt("Tồn kho:")),
          Number(prompt("Bảo hành (tháng):"))
        );
        store.addProduct(ep);
      } else if (type === "2") {
        const cp = new ClothingProduct(
          prompt("Tên:")!,
          Number(prompt("Giá:")),
          Number(prompt("Tồn kho:")),
          prompt("Size:")!,
          prompt("Màu:")!
        );
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
      store.updateProductStock(
        Number(prompt("Nhập ID sản phẩm:")),
        Number(prompt("Nhập tồn kho mới:"))
      );
      break;
    case 10:
      const typeId = prompt("Tìm (1: Customer, 2: Product):");
      const idSearch = Number(prompt("Nhập ID:"));
      if (typeId === "1") {
        const c = store.findById(store.customers, idSearch);
        alert(c ? c.getDetails() : "Không tìm thấy khách hàng.");
      } else {
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
