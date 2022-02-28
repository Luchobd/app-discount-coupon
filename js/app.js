function couponDiscount() {
  const coupons = ["user_coupon_discount", "LuchoDev", "app_discount_coupon"];

  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  let descuentoCupon;

  switch (couponValue) {
    case coupons[0]:
      descuentoCupon = 15;
      break;
    case coupons[1]:
      descuentoCupon = 30;
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

function priceSaving(discount = 0, coupon = 0) {
  const sumaSaving = discount + coupon;
  const porcentageSaving = sumaSaving / 100;

  return porcentageSaving;
}

// function resultSavingTotal() {
//   if (inputDiscount.value.length === 0 && inputCoupon.value.length === 0) {
//     const resultSavingTotal = "No hay Descuento.";
//     const resultViewTotal = (resultSaving.textContent =
//       "Esta ahorrando $" + resultSavingTotal);
//     return resultViewTotal;
//   } else if (inputDiscount.value.length === 0) {
//     const resultSavingCouponValue = priceValue * priceSaving(couponDiscount());
//     return (resultSaving.textContent =
//       "Con su CUPON de Descuento, Esta ahorrando $" + resultSavingCouponValue);
//   } else if (inputCoupon.value.length === 0) {
//     const resultSavingDiscountValue = priceValue * priceSaving(discountValue);
//     return (resultSaving.textContent =
//       "Con el DESCUENTO del  Esta ahorrando $" + resultSavingDiscountValue);
//   } else {
//     const priceSavingTotal =
//       priceValue * priceSaving(discountValue, couponDiscount());
//     return (resultSaving.textContent = "Esta ahorrando $" + priceSavingTotal);
//   }
// }

function onClickButtonPriceDiscountCoupon() {
  const resultPrice = document.getElementById("resultPrice");
  const resultSaving = document.getElementById("resultSaving");

  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = parseFloat(inputDiscount.value);

  if (inputDiscount.value.length === 0 && inputCoupon.value.length === 0) {
    const resultPriceTotal = priceValue;
    return (resultPrice.textContent =
      "Total Sin Descuentos: " + "$" + resultPriceTotal);
  } else if (inputDiscount.value.length === 0) {
    const resultPriceCouponValue = (
      priceValue * sumPorcentage(couponDiscount())
    ).toFixed(2);
    return (resultPrice.textContent =
      "Total + Cupon: " + "$" + resultPriceCouponValue);
  } else if (inputCoupon.value.length === 0) {
    const resultPriceDiscountValue = (
      priceValue * sumPorcentage(discountValue)
    ).toFixed(2);
    return (resultPrice.textContent =
      "Total + Descuento: " + "$" + resultPriceDiscountValue);
  } else {
    const priceDiscount = (
      priceValue * sumPorcentage(discountValue, couponDiscount())
    ).toFixed(2);

    return (resultPrice.textContent =
      "Total + Descuento + Cupon: " + "$" + priceDiscount);
  }

  // const priceSavingTotal =
  //   priceValue * priceSaving(discountValue, couponDiscount());

  // resultSaving.textContent = "Esta ahorrando $" + priceSavingTotal;
}

function onClickButtonResultSaving() {
  const resultPrice = document.getElementById("resultPrice");
  const resultSaving = document.getElementById("resultSaving");

  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = parseFloat(inputDiscount.value);

  if (inputDiscount.value.length === 0 && inputCoupon.value.length === 0) {
    const resultSavingTotal = "No hay Descuento.";
    return (resultSaving.textContent = "Esta ahorrando $" + resultSavingTotal);
  } else if (inputDiscount.value.length === 0) {
    const resultSavingCouponValue = (
      priceValue * priceSaving(couponDiscount())
    ).toFixed(2);
    return (resultSaving.textContent =
      "Con su CUPON de Descuento, Esta ahorrando $" + resultSavingCouponValue);
  } else if (inputCoupon.value.length === 0) {
    const resultSavingDiscountValue = (
      priceValue * priceSaving(discountValue)
    ).toFixed(2);
    return (resultSaving.textContent =
      "Con el DESCUENTO del  Esta ahorrando $" + resultSavingDiscountValue);
  } else {
    const priceSavingTotal = (
      priceValue * priceSaving(discountValue, couponDiscount())
    ).toFixed(2);
    return (resultSaving.textContent = "Esta ahorrando $" + priceSavingTotal);
  }
}
