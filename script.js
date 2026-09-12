// ========================================
// DATA PRODUK
// ========================================

const products = [

    {
        name: "Hoodie Oversize Premium",
        price: 129000,
        category: "hoodie",
        image: "https://picsum.photos/500/500?random=1",
        link: "#"
    },

    {
        name: "Keyboard Mechanical RGB",
        price: 249000,
        category: "celana",
        image: "c:\Users\Karel\Pictures\Camera Roll\WIN_20260906_18_43_40_Pro.mp4",
        link: "#"
    },

    {
        name: "Headset Gaming",
        price: 179000,
        category: "celana",
        image: "https://picsum.photos/500/500?random=3",
        link: "#"
    },

    {
        name: "celana",
        price: 99000,
        category: "Elektronik",
        image: "https://picsum.photos/500/500?random=4",
        link: "#"
    },

    {
        name: "Jam Tangan Casual",
        price: 85000,
        category: "sepatu",
        image: "https://picsum.photos/500/500?random=5",
        link: "#"
    },

    {
        name: "Tas Selempang Streetwear",
        price: 75000,
        category: "sepatu",
        image: "https://picsum.photos/500/500?random=6",
        link: "#"
    }

];


// ========================================
// ELEMENT HTML
// ========================================

const productContainer =
    document.querySelector("#productContainer");

const searchInput =
    document.querySelector("#searchInput");

const categoryButtons =
    document.querySelectorAll(".category-button");

const lihatProduk =
    document.querySelector("#lihatProduk");


// ========================================
// MENAMPILKAN PRODUK
// ========================================

function displayProducts(productList) {

    productContainer.innerHTML = "";


    if (productList.length === 0) {

        productContainer.innerHTML = `
            <p>
                Produk tidak ditemukan.
            </p>
        `;

        return;
    }


    productList.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-price">
                    Rp${product.price.toLocaleString("id-ID")}
                </p>

                <a
                    class="buy-button"
                    href="${product.link}"
                    target="_blank"
                >
                    Beli Sekarang
                </a>

            </div>

        `;


        productContainer.appendChild(card);

    });

}


// ========================================
// PENCARIAN
// ========================================

searchInput.addEventListener(
    "input",
    function () {

        const keyword =
            searchInput.value.toLowerCase();


        const result =
            products.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(keyword)

            );


        displayProducts(result);

    }
);


// ========================================
// FILTER KATEGORI
// ========================================

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            // hapus active dari semua tombol

            categoryButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            // beri active ke tombol yang diklik

            button.classList.add("active");


            const category =
                button.textContent.trim();


            if (category === "Semua") {

                displayProducts(products);

                return;
            }


            const result =
                products.filter(product =>

                    product.category === category

                );


            displayProducts(result);

        }
    );

});


// ========================================
// TOMBOL LIHAT PRODUK
// ========================================

lihatProduk.addEventListener(
    "click",
    function () {

        document
            .querySelector("#produk")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// ========================================
// JALANKAN SAAT WEBSITE DIBUKA
// ========================================

displayProducts(products);