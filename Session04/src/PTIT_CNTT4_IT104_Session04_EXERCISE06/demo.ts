interface Product {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
}

let listProduct: Product[] = [
  {
    id: "IP01",
    name: "Iphone",
    price: 100000,
    category: {
      id: "1",
      name: "Điện tử",
    },
    discount: 0.2,
  },
  {
    id: "LP09",
    name: "LapTop Gaming DELL G3",
    price: 200000,
    category: {
      id: "2",
      name: "Điện tử",
    },
    discount: 0.1,
  },
  {
    id: "FSO14",
    name: "Áo sơ mi",
    price: 300000,
    category: {
      id: "3",
      name: "Thời trang",
    },
    discount: 0.2,
  },
];
function getFinalPrice(product: Product): number {
  if (!product.discount) {
    return product.price;
  }
  let finalPrice = product.price * (1 - product.discount);
  return finalPrice;
}

for (let i = 0; i < listProduct.length; i++) {
  console.log(`
      Tên: ${listProduct[i].name}
      Giá gốc: ${listProduct[i].price}
      Giá sau giảm: ${getFinalPrice(listProduct[i])}
      Danh mục: ${listProduct[i].category.name}`);
}
