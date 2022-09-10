//  Step 1: Luu tru du lieu san pham trong localStorage.

var sanPham = {
  ten: "iPhone XR",
  gia: "6,390,000 ₫",
  mau: ["green", "red", "black"],
  anh: "https://clickbuy.com.vn/uploads/2019/03/apple-iphone-xr-den.png",
};

localStorage.setItem("sanPham", JSON.stringify(sanPham));

// Step 2: Tao trang san pham tu du lieu trong localStorage.
var sanPhamTrongKho = JSON.parse(localStorage.getItem("sanPham"));

// Tạo ra một element trong JS ( cụ thể đây là thẻ div )
var khungSanPham = document.createElement("div");
// Add class cho div
khungSanPham.classList.add("khung-san-pham");
// Render thẻ div trong HTML
document.body.appendChild(khungSanPham);
// bổ sung một node vào vị trí cuối cùng bên trong một node khác ( appendChild)

var anhSanPham = document.createElement("img");
anhSanPham.src = sanPhamTrongKho.anh;
khungSanPham.appendChild(anhSanPham);

var khungThongTin = document.createElement("div");
khungThongTin.classList.add("khung-thong-tin");
khungSanPham.appendChild(khungThongTin);

var tenSanPham = document.createElement("h2");
tenSanPham.textContent = sanPhamTrongKho.ten;
khungThongTin.appendChild(tenSanPham);

var giaSanPham = document.createElement("h3");
giaSanPham.textContent = sanPhamTrongKho.gia;
khungThongTin.appendChild(giaSanPham);

var khungMau = document.createElement("div");
khungMau.classList.add("khung-mau");
khungThongTin.appendChild(khungMau);

sanPhamTrongKho.mau.forEach(function (element) {
    var mauSanPham = document.createElement("div");
    mauSanPham.style.backgroundColor = element;
    khungMau.appendChild(mauSanPham)
});

