function calculateInvoiceTotal(invoice) {
    return invoice.orders.reduce((total, order) => {
        const orderTotal = order.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        return total + orderTotal;
    }, 0);
}
function getUnpaidOrders(invoice) {
    return invoice.orders.filter((order) => !order.isPaid);
}
function printInvoice(invoice) {
    console.log(`HÓA ĐƠN: #${invoice.invoiceId} - Ngày tạo: ${invoice.createdAt.toISOString().split("T")[0]}`);
    console.log("-----------------------------");
    invoice.orders.forEach((order) => {
        console.log(`ĐƠN HÀNG: #${order.orderId} - ${order.customerName}`);
        order.items.forEach((item) => {
            const itemTotal = item.product.price * item.quantity;
            const noteText = item.note ? ` (note: ${item.note})` : "";
            console.log(`- ${item.product.name} x ${item.quantity} → ${itemTotal.toLocaleString()} VND${noteText}`);
        });
        const orderTotal = order.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        console.log(`Tổng đơn: ${orderTotal.toLocaleString()} VND`);
        console.log(`Trạng thái: ${order.isPaid ? "ĐÃ THANH TOÁN" : "CHƯA THANH TOÁN"}`);
        console.log("");
    });
    console.log(`>> Tổng cộng hóa đơn: ${calculateInvoiceTotal(invoice).toLocaleString()} VND`);
}
const products1 = { id: "P001", name: "Áo sơ mi", price: 250000 };
const products2 = { id: "P002", name: "Quần jean", price: 400000 };
const products3 = { id: "P003", name: "Váy hoa", price: 700000 };
const order1 = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: products1, quantity: 2 },
        { product: products2, quantity: 1 },
    ],
    deliveryAddress: "Hà Nội",
    isPaid: true,
};
const order2 = {
    orderId: "ORD002",
    customerName: "Trần Thị B",
    items: [{ product: products3, quantity: 1, note: "size M" }],
    deliveryAddress: "TP.HCM",
    isPaid: false,
};
const invoice = {
    invoiceId: "INV001",
    orders: [order1, order2],
    createdAt: new Date("2024-05-14"),
};
printInvoice(invoice);
