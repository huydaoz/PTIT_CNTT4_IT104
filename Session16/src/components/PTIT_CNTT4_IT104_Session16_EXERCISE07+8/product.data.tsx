export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
  stock: number;
};

export const products: ProductType[] = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy",
    image:
      "https://product.hstatic.net/200000348419/product/fold6-pink_fabc4b43fc5141a49bb6dc85fa05555d_master.png",
    price: 22000000,
    stock: 5,
  },
  {
    id: 2,
    name: "Điện thoại iPhone14 Promax",
    image:
      "https://clickbuy.com.vn/uploads/pro/iphone-14-pro-max-128gb-cu-dep-99html-6734-bfmp-1024x1024-180515.jpg",
    price: 25000000,
    stock: 3,
  },
  {
    id: 3,
    name: "Điện thoại Samsung Galaxy S22",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4w-94JO5AT9zoGcnwy1goKIoIKjGjBQsqAF8MFUjy8jPZ9NeYVRkhvM5uPiM3p-QN_8&usqp=CAU",
    price: 23000000,
    stock: 4,
  },
  {
    id: 4,
    name: "Điện thoại iPhone11 Promax",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg",
    price: 15000000,
    stock: 6,
  },
  {
    id: 5,
    name: "Điện thoại Oppo A9",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/202028/oppo-a9-600x600-trang-600x600.jpg",
    price: 12000000,
    stock: 10,
  },
  {
    id: 6,
    name: "Điện thoại V5",
    image: "https://cdn.tgdd.vn/Products/Images/42/89027/vivo-v5-1-600x600.jpg",
    price: 13000000,
    stock: 2,
  },
];
