function couponDiscount() {
  const coupons = ["user_coupon_discount", "LuchoDev", "app_descueno_cupon"];

  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  let descuentoCupon; // modificar en vista

  switch (couponValue) {
    case coupons[0]: // "JuanDC_es_Batman"
      descuentoCupon = 15; // 15%
      break;
    case coupons[1]: // "pero_no_le_digas_a_nadie"
      descuentoCupon = 30; // 30%
      break;
    case coupons[2]: // "es_un_secreto"
      descuentoCupon = 25; // 25%
      break;
  }
  return descuentoCupon;
}

function sumPorcentage(discount = 0, coupon = 0) {
  const sumaDiscountCoupon = discount + coupon;
  const porcentageDiscountCoupon = (100 - sumaDiscountCoupon) / 100;

  return porcentageDiscountCoupon;
}

function onClickButtonPriceDiscountCoupon() {
  const resultPrice = document.getElementById("resultPrice");

  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = parseFloat(inputDiscount.value);

  if (inputDiscount.value.length === 0 && inputCoupon.value.length === 0) {
    const resultPriceTotal = priceValue;
    return (resultPrice.textContent =
      "Total Sin Descuentos: " + "$" + resultPriceTotal);
  } else if (inputDiscount.value.length === 0) {
    const resultPriceCouponValue = priceValue * sumPorcentage(couponDiscount());
    return (resultPrice.textContent =
      "Total + Cupon: " + "$" + resultPriceCouponValue);
  } else if (inputCoupon.value.length === 0) {
    const resultPriceDiscountValue = priceValue * sumPorcentage(discountValue);
    return (resultPrice.textContent =
      "Total + Descuento: " + "$" + resultPriceDiscountValue);
  }

  const priceDiscount =
    priceValue * sumPorcentage(discountValue, couponDiscount());

  resultPrice.textContent = "Total + Descuento + Cupon: " + "$" + priceDiscount;
}

/* 1.- Calcular cuanto me estoy ahorrando. y plastamar */
/* 2.- Hacer que los resultados tengas maximo 2 digitos y redondear. */
