const products = [
    // Tech products
    {
        id: 1,
        name: "JBL Tune 510BT",
        price: 29.95,
        rating: 4,
        category: "tech",
        description: "Wireless on-ear headphones with Pure Bass sound and 40h battery life",
        releaseDate: "2021-01-07",
        image: "https://m.media-amazon.com/images/I/61kFL7ywsZS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        amazonUrl: "https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B08WM3LMJF?crid=2K8MYGRR06LOS&dib=eyJ2IjoiMSJ9.vy187ElBnzzpVHO_6nXGf1qxy7KhJDg5hmJl-6v6i99Lwlwipoewarcdm-cAsrlMSnrbXbmGA3vK8qbfxlng_cGfzmeMJCxHXNbtSBZfiNNV6sPDDW_5vtILZ_5qLgSic3dsa2eTPx6URWSRFMstqUIERZuNYya_klRs0M9SqgqA1napsbBkgQJc10ATFXSwmtVI3Uqt3wQ8tqt5Pne5klRnmuJw_ZkWh67lrgDUlIg.ko7nqTVTy0VVmzTArvMmZqBSbPkvsvUgiJNE_bRAm2g&dib_tag=se&keywords=jbl%2Btune%2B510bt%2Bbluetooth%2Bwireless%2Bheadphones&qid=1736260174&sprefix=jbl%2Btune%2B510bt%2Caps%2C255&sr=8-1&th=1&linkCode=ll1&tag=essentialam-20&linkId=5ca8839d7214ba131cf092e92ba4fc68&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: 2,
        name: "Beats Solo3 Wireless",
        price: 39.99,
        rating: 5,
        category: "tech",
        description: "Apple W1 chip, 40 hours of battery life, built-in microphone",
        releaseDate: "2016-09-07",
        image: "https://m.media-amazon.com/images/I/61HH4j3GZdL._AC_SX522_.jpg",
        amazonUrl: "https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B08WM298TV?crid=2KV2NA1CVU805&dib=eyJ2IjoiMSJ9.IjQoIiJRaaldFOClSninkjbiXrn4MLgjtcp_bs8gScoDfTsIDUVxfUDQp-RmHhiF07SycIrxtmB5N7TE3MHX8ywFGf-dj_kVo8_3vXO865uFInMG2C4YXC8EY7PiMT8SuluhJT_iNyaUa2LWyH1pK7o82osL_ghz-ZH62lv7xymC3xQ409TSxS23HdBskfeWZ76-Qg5Pak0DOFp_GwHMDu5oFbnrFuOiOCvWqdKuVWQ.SpPghsg6RRy_2AD5PKJAzhXklZbgeUIOlEwRKXFwWtM&dib_tag=se&keywords=beats%2Bsolo%2B3%2Bwireless&qid=1738095315&sprefix=beats%2Bsolo%2B3%2Bwireless%2Caps%2C191&sr=8-4&th=1&linkCode=ll1&tag=essentialam-20&linkId=11e1faa452943b3e2f2239fe42e5bd5e&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: 3,
        name: "TOZO T10",
        price: 25.99,
        rating: 4,
        category: "tech",
        description: "Bluetooth 5.3 IPX8 Waterproof Wireless Earbuds with Wireless Charging Case",
        releaseDate: "2019-07-18",
        image: "https://m.media-amazon.com/images/I/715CLGC8OML._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/TOZO-Bluetooth-Wireless-Headphones-Waterproof/dp/B07J2Z5DBM?th=1&linkCode=ll1&tag=essentialam-20&linkId=6d586a9ab9f1bd5753ca77579c8a4039&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: 4,
        name: "Soundcore by Anker Life Q30",
        price: 79.99,
        rating: 4,
        category: "tech",
        description: "Hybrid Active Noise Cancelling Headphones with Multiple Modes",
        releaseDate: "2020-10-15",
        image: "https://m.media-amazon.com/images/I/61+WYAjltpL._AC_SL1500_.jpg",
        amazonUrl: "https://www.amazon.com/Soundcore-Cancelling-Headphones-Multiple-Bluetooth/dp/B08HMWZBXC?th=1&linkCode=ll1&tag=essentialam-20&linkId=ac06bd2fc81b950eee394839f4c0f55d&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: 5,
        name: "TOZO T6",
        price: 27.99,
        rating: 4,
        category: "tech",
        description: "True Wireless Earbuds with Qualcomm Apt-X Stereo and IPX8 Waterproof",
        releaseDate: "2019-03-15",
        image: "https://m.media-amazon.com/images/I/71cVOgvystL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/TOZO-T6-Bluetooth-Headphones-Waterproof/dp/B07RGZ5NKS?th=1&linkCode=ll1&tag=essentialam-20&linkId=f3649d335d0933ed8222a5579ef57c78&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: 6,
        name: "Skullcandy Dime 2",
        price: 19.99,
        rating: 4,
        category: "tech",
        description: "True Wireless Earbuds with Microphone, 12-Hour Battery Life",
        releaseDate: "2022-03-01",
        image: "https://m.media-amazon.com/images/I/61M8OEARTkL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Skullcandy-Dime-True-Wireless-Earbuds/dp/B09NPCLNMN?th=1&linkCode=ll1&tag=essentialam-20&linkId=bd39e2d61a475338cffa2340e32e074d&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: 7,
        name: "Sony WH-1000XM4",
        price: 348.00,
        rating: 5,
        category: "tech",
        description: "Industry Leading Noise Canceling Wireless Headphones with Alexa",
        releaseDate: "2020-08-06",
        image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
        amazonUrl: "https://www.amazon.com/Sony-WH-1000XM4-Canceling-Headphones-phone-call/dp/B0863TXGM3?th=1&linkCode=ll1&tag=essentialam-20&linkId=7b79879bc4764462399f123dc8ba78d7&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: 8,
        name: "Bose QuietComfort 45",
        price: 279.00,
        rating: 5,
        category: "tech",
        description: "Wireless Noise Cancelling Bluetooth Headphones with 24Hr Battery",
        releaseDate: "2021-09-23",
        image: "https://m.media-amazon.com/images/I/51JbsHSktkL._AC_SL1500_.jpg",
        amazonUrl: "https://www.amazon.com/Bose-QuietComfort-Wireless-Cancelling-Headphones/dp/B098FKXT8L?&linkCode=ll1&tag=essentialam-20&linkId=f7c9ea284667d1fbe6f102116faa403f&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: 9,
        name: "Sony WH-CH520 Wireless Headphones",
        price: 38.00,
        rating: 4,
        category: "tech",
        description: "Wireless Bluetooth On-Ear Headset with up to 50-hour battery life.",
        releaseDate: "2023-02-21",
        image: "https://m.media-amazon.com/images/I/41lArSiD5hL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Sony-WH-CH520-Headphones-Bluetooth-Microphone/dp/B0BS1PRC4L?crid=10822S99YWPUJ&dib=eyJ2IjoiMSJ9.Hgfz3J88tWCdHSckvjbGbqZj9eHFUWa0WpG0xAfIbhyKEAzykSf6yQoTYrcxEcCM6sdW2UITRSZB8rfpf-F4AyiCb-QytQIPLjnbZnfMB-NNJDbTXcASF2wnhdYOEeUbreqoxb2cnwfRsU3J4zQCS3Bc5z18kMYU0MSEUtGXv8uIjHU45vHV9YjtemwfB8Gb5R_smPZ2u1xBb3S-4AhkOG5LQsWC2rEYsI-5Hryn9D4.DlQIrtk0wMKjALqx6T666nLtODJUXkEbRuWUnH-4C_s&dib_tag=se&keywords=headphones&qid=1736260439&refinements=p_72%3A1248879011&rnid=1248877011&sprefix=headphon%2Caps%2C277&sr=8-11&th=1&linkCode=ll1&tag=essentialam-20&linkId=e300915d300203ac2eacdde116be474d&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: 10,
        name: "Jabra Elite 85h",
        price: 249.99,
        rating: 4,
        category: "tech",
        description: "SmartSound Audio, Noise Cancellation, Rain Resistant, Battery Life Up to 36 Hours",
        releaseDate: "2019-04-25",
        image: "https://m.media-amazon.com/images/I/819iDDsPmWL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        amazonUrl: "https://www.amazon.com/Jabra-Elite-Wireless-Noise-Canceling-Headphones/dp/B07RQ366VK?&linkCode=ll1&tag=essentialam-20&linkId=efa0dc273e09402d6327fd98297733b6&language=en_US&ref_=as_li_ss_tl"
    },
    // Home essentials products remain unchanged
    {
        id: "bed001",
        name: "Utopia Bedding 4-Piece Queen Sheet Set",
        description: "Soft brushed microfiber sheets with deep pockets, wrinkle and fade resistant. Includes flat sheet, fitted sheet, and 2 pillowcases.",
        price: 29.99,
        rating: 4,
        category: "home-essentials",
        image: "https://m.media-amazon.com/images/I/713afJ6oJ+L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Utopia-Bedding-4-Piece-Queen-Sheets/dp/B00NX0WXQI?th=1&linkCode=ll1&tag=essentialam-20&linkId=85277c32122693ce62d4cb1fbaedfe7d&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: "bed002",
        name: "Beckham Hotel Collection Bed Pillows",
        description: "Queen size cooling gel pillows, set of 2. Down alternative with luxury cotton cover, ideal for all sleeping positions.",
        price: 49.99,
        rating: 5,
        category: "home-essentials",
        image: "https://m.media-amazon.com/images/I/71329CVoVDL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Pillows-for-Sleeping-2-Pack/dp/B01LYNW421?th=1&linkCode=ll1&tag=essentialam-20&linkId=2afdda0d570e528c10440a837da16aed&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: "bed003",
        name: "LuxClub 6 PC Sheet Set",
        description: "Breathable luxury bed sheets with 18\" deep pockets, wrinkle-free cooling sheets. Machine washable hotel bedding.",
        price: 34.99,
        rating: 4,
        category: "home-essentials",
        image: "https://m.media-amazon.com/images/I/81REaH4eCzL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/LuxClub-Friendly-Hypoallergenic-Anti-Bacteria-Washable/dp/B072BKFF3K?&linkCode=ll1&tag=essentialam-20&linkId=f1ab4fe8d6cbac6db0c3d21dc9da2df5&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: "bed004",
        name: "Utopia Bedding Quilted Mattress Pad",
        description: "Fitted mattress protector with deep pockets, breathable and comfortable quilted design.",
        price: 24.99,
        rating: 4,
        category: "home-essentials",
        image: "https://m.media-amazon.com/images/I/810Kq8+YGvL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Utopia-Bedding-Quilted-Fitted-Mattress/dp/B00NESCOY0?th=1&linkCode=ll1&tag=essentialam-20&linkId=7bfaf7ecd437dab56f104eb466769953&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: "bed005",
        name: "Sweet Home Collection Sheet Set",
        description: "Queen size 6-piece bed sheets with deep pockets, includes extra pillowcases.",
        price: 27.99,
        rating: 4,
        category: "home-essentials",
        image: "https://m.media-amazon.com/images/I/71b8fh-dQ4L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Queen-Size-Piece-Sheet-Set/dp/B01M16WBW1?th=1&linkCode=ll1&tag=essentialam-20&linkId=160d62ee418ebce53ace1e59079f1b2a&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: "bed006",
        name: "Utopia Bedding Gusseted Pillow",
        description: "Premium quality bed pillows with gusseted design for enhanced support and comfort.",
        price: 39.99,
        rating: 5,
        category: "home-essentials",
        image: "https://m.media-amazon.com/images/I/61txMSeT2yL._AC_SL1500_.jpg",
        amazonUrl: "https://www.amazon.com/Utopia-Bedding-Gusseted-Premium-Quality/dp/B08DTH86Q2?th=1&linkCode=ll1&tag=essentialam-20&linkId=b061dd330ba7a9aaaf614102ef0eb3f1&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: "bed007",
        name: "BEDSURE California King Comforter Set",
        description: "Premium down alternative comforter with elegant design, perfect for all seasons",
        price: 89.99,
        rating: 4,
        category: "home-essentials",
        image: "https://m.media-amazon.com/images/I/71nKrm8ss+L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/BEDSURE-California-King-Comforter-Set/dp/B08PBJ94H4?th=1&linkCode=ll1&tag=essentialam-20&linkId=42b5b16014b0d34be58fa53e697f8d0b&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: "bed008",
        name: "Utopia Bedding Comforter Duvet Insert",
        description: "Quilted down alternative comforter with corner tabs, box stitched",
        price: 29.99,
        rating: 4,
        category: "home-essentials",
        image: "https://m.media-amazon.com/images/I/61ckZkGMlpL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Utopia-Bedding-Comforter-Duvet-Insert/dp/B00S1TC442?th=1&linkCode=ll1&tag=essentialam-20&linkId=83c01a1d9c75dd23e577c38942f20d3d&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: "bed009",
        name: "Amazon Basics Microfiber Sheet Set",
        description: "Lightweight super soft easy care microfiber sheets with 14-inch deep pockets",
        price: 16.50,
        rating: 5,
        category: "home-essentials",
        image: "https://m.media-amazon.com/images/I/81LhSdQK1nL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Amazon-Basics-Lightweight-Microfiber-14-inch/dp/B00Q7OB4EE?th=1&linkCode=ll1&tag=essentialam-20&linkId=b928e87ddec85ce211c5524e81feec85&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: "bed010",
        name: "Mellanni King Size Sheet Set",
        description: "Luxury bed sheets with deep pockets, wrinkle and fade resistant",
        price: 47.97,
        rating: 4,
        category: "home-essentials",
        image: "https://m.media-amazon.com/images/I/712Z-XsruGL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Mellanni-King-Size-Sheet-Set/dp/B08RZDH679?&linkCode=ll1&tag=essentialam-20&linkId=0a715e246fd8ba969672a8972178816a&language=en_US&ref_=as_li_ss_tl"
    },
    // Add new fitness products
    {
        id: "fit001",
        name: "Bowflex SelectTech 552 Adjustable Dumbbells",
        description: "Adjustable dumbbell pair with weight range from 5 to 52.5 lbs, perfect for home gym",
        price: 429.99,
        rating: 5,
        category: "fitness",
        image: "https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Bowflex-SelectTech-Adjustable-Dumbbells-Pair/dp/B001ARYU58"
    },
    {
        id: "fit002",
        name: "Vinsguir Ab Roller Wheel",
        description: "Ab roller wheel for core strength training with knee pad, perfect for home workouts",
        price: 25.99,
        rating: 4,
        category: "fitness",
        image: "https://m.media-amazon.com/images/I/71WYhvuQfbL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Vinsguir-Workout-Exercise-Equipment-Abdominal/dp/B07RKW5H68"
    },
    {
        id: "fit003",
        name: "Tangle-Free Jump Rope",
        description: "Speed jump rope with ball bearings and foam handles for fitness training",
        price: 8.99,
        rating: 4,
        category: "fitness",
        image: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Tangle-Free-Jumping-Bearings-Adjustable-Handles/dp/B09DF9NWC7"
    },
    {
        id: "fit004",
        name: "ProsourceFit Exercise Puzzle Mat",
        description: "Interlocking foam tiles for protective flooring, perfect for home gym equipment",
        price: 24.99,
        rating: 4,
        category: "fitness",
        image: "https://m.media-amazon.com/images/I/91NGIkWUIaL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/ProsourceFit-Exercise-Interlocking-Protective-Equipment/dp/B07YMZZ12Q"
    },
    {
        id: "fit005",
        name: "ZELUS Weighted Vest",
        description: "Adjustable weighted vest with reflective stripes for strength training",
        price: 39.99,
        rating: 4,
        category: "fitness",
        image: "https://m.media-amazon.com/images/I/710yBz6hfUL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/ZELUS-Weighted-Reflective-Strength-Weightlifting/dp/B07518RBH2"
    },
    {
        id: "fit006",
        name: "Tech Tools Boxing Ball Set",
        description: "Boxing reflex ball with adjustable headband for training and fitness",
        price: 68.00,
        rating: 4,
        category: "fitness",
        image: "https://m.media-amazon.com/images/I/81elAxjo3DL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Tech-Tools-Boxing-Punching-Adjustable/dp/B07JJP4XTL?th=1&linkCode=ll1&tag=essentialam-20&linkId=8eeeb1f86c753216a2772ef64e2487c7&language=en_US&ref_=as_li_ss_tl"
    },
    {
        id: "fit007",
        name: "Resistance Bands Set",
        description: "5-piece resistance bands set with instruction guide and carry bag",
        price: 12.99,
        rating: 4,
        category: "fitness",
        image: "https://m.media-amazon.com/images/I/71S4-NjoTDL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Fit-Simplify-Resistance-Exercise-Instruction/dp/B01AVDVHTI"
    },
    {
        id: "fit008",
        name: "NordicTrack T10 Treadmill",
        description: "Smart HD touchscreen treadmill with interactive training and incline control",
        price: 1299.99,
        rating: 4,
        category: "fitness",
        image: "https://m.media-amazon.com/images/I/51ol3YIgC8L._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/NordicTrack-NTL15425-T10-Treadmill/dp/B0D7XGWMRD"
    },
    {
        id: "fit009",
        name: "APHERMA Massage Gun",
        description: "Deep tissue massage gun for muscle recovery with multiple attachments",
        price: 79.99,
        rating: 4,
        category: "fitness",
        image: "https://m.media-amazon.com/images/I/712UHB03CbL._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/APHERMA-Massage-Athletes-Handheld-Massager/dp/B09P1DV7D8"
    },
    {
        id: "fit010",
        name: "Ally Peaks Pull Up Bar",
        description: "Heavy duty doorway pull up bar with multiple grip positions",
        price: 39.99,
        rating: 4,
        category: "fitness",
        image: "https://m.media-amazon.com/images/I/619ozwh22nS._AC_SX679_.jpg",
        amazonUrl: "https://www.amazon.com/Ally-Peaks-Thickened-Multi-Grip-Strength/dp/B08MY13HYC"
    }
];

function renderProducts(productsToRender) {
    const container = document.getElementById('products-container');
    container.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p class="rating">Rating: ${'⭐'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</p>
                <p class="description">${product.description}</p>
                ${product.releaseDate ? 
                    `<p class="date-added">Released: ${new Date(product.releaseDate).toLocaleDateString()}</p>` 
                    : ''}
                <a href="${product.amazonUrl}" 
                   target="_blank" 
                   class="buy-button"
                   rel="noopener noreferrer">
                    View on Amazon
                </a>
            </div>
        </div>
    `).join('');
}

function filterProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(checkbox => checkbox.value);
    const selectedRatings = Array.from(document.querySelectorAll('.rating-filter:checked'))
        .map(checkbox => parseInt(checkbox.value));
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(product.rating);
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        
        return matchesSearch && matchesCategory && matchesRating && matchesPrice;
    });

    sortAndRenderProducts(filteredProducts);
}

function sortAndRenderProducts(productsToSort) {
    const sortValue = document.getElementById('sort-select').value;
    
    const sortedProducts = [...productsToSort].sort((a, b) => {
        switch(sortValue) {
            case 'latest':
                return new Date(b.releaseDate) - new Date(a.releaseDate);
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });

    renderProducts(sortedProducts);
}

function clearFilters() {
    // Reset price inputs
    const maxPrice = Math.max(...products.map(p => p.price));
    document.getElementById('price-slider').value = maxPrice;
    document.getElementById('min-price').value = 0;
    document.getElementById('max-price').value = maxPrice;

    // Reset checkboxes
    document.querySelectorAll('.category-filter, .rating-filter').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset search
    document.getElementById('product-search').value = '';

    // Reapply filters
    filterProducts();
}

function initializeProducts() {
    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    // If category parameter exists, check the corresponding checkbox
    if (categoryParam) {
        const categoryCheckbox = document.querySelector(`.category-filter[value="${categoryParam}"]`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
        }
    }

    // Set max price for slider based on highest product price
    const maxPrice = 1300;
    const priceSlider = document.getElementById('price-slider');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');

    // Initialize slider and price inputs
    priceSlider.max = maxPrice;
    priceSlider.value = maxPrice;
    maxPriceInput.value = maxPrice;
    minPriceInput.value = 0;

    // Add event listeners for price inputs and slider
    minPriceInput.addEventListener('input', function() {
        filterProducts();
    });

    maxPriceInput.addEventListener('input', function() {
        filterProducts();
    });

    priceSlider.addEventListener('input', function() {
        maxPriceInput.value = this.value;
        filterProducts();
    });

    // Initial render
    filterProducts();

    // Add event listeners
    document.getElementById('product-search').addEventListener('input', filterProducts);
    document.querySelectorAll('.rating-filter').forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });
    // Add event listeners for category filters
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });
    document.getElementById('sort-select').addEventListener('change', filterProducts);
    document.getElementById('clear-filters').addEventListener('click', clearFilters);
    // ... add other event listeners
}

// Add clear filters functionality
document.getElementById('clear-filters').addEventListener('click', function() {
    // Reset price inputs
    const maxPrice = Math.max(...products.map(p => p.price));
    document.getElementById('price-slider').value = maxPrice;
    document.getElementById('min-price').value = 0;
    document.getElementById('max-price').value = maxPrice;

    // Reset checkboxes
    document.querySelectorAll('.category-filter, .rating-filter').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset search
    document.getElementById('product-search').value = '';

    // Reapply filters
    filterProducts();
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProducts);

function redirectToHome() {
    window.location.href = 'index.html';
} 