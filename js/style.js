let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} تمت إضافته إلى السلة!`);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    if (!cartItems || !totalElement) return;

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price} ريال</td>
            <td><button class="btn btn-danger" onclick="removeFromCart(${index})">إزالة</button></td>
        `;
        cartItems.appendChild(row);
        total += item.price;
    });

    totalElement.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('السلة فارغة!');
        return;
    }
    alert('تم إتمام عملية الدفع المسبق بنجاح!');
    cart = [];
    updateCart();
}

document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`تم تسجيل الدخول بنجاح لـ ${email}`);
});