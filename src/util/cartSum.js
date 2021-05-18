export function CartSum(data) {
  let total = 0;
  if (data.length === 0) {
    total = 0;
  } else {
    data.map((items) => {
      let discount = (100 - items.discount) / 100;
      total += items.price * items.qty * discount;
      return 0;
    });
  }
  return total;
}

export const vndFormatter = new Intl.NumberFormat("vn-VN", {
  style: "currency",
  currency: "VND",
});
