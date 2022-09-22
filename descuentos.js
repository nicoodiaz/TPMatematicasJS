const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const couponsList = [];
couponsList.push({
    name: 'Cuponsote',
    discount: 30,
});
couponsList.push({
    name: 'Cuponsin',
    discount: 25,
});
couponsList.push({
    name: 'Cuponsinsin',
    discount: 15,
});

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if (!price || !coupon) {
        pResult.innerText = 'CHANCLA por favor llena el formulario';
        return;
    }

    let discount;

    function isCouponInArray(couponElement) { // {name, discount}
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.find(isCouponInArray); // {}
   
    if (couponInArray) {
        discount = couponInArray.discount;
    } else {
        pResult.innerText = 'El cupón no es válido';
        return;
    }

    console.log ({
        coupon,
        discount,
        couponInArray,
        couponsList,
    });

    const newPrice = (price*( 100 - discount)) / 100;
    pResult.innerText = 'El nuevo precio con descuento es $' +newPrice;
}