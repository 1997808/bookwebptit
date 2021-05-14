export function CartSum(data) {
  let total = 0;
  if (data.length === 0) {
    total = 0;
  } else {
    data.map((items) => {
      total += items.price * items.qty;
      return 0;
    });
  }
  return total;
}

export const vndFormatter = new Intl.NumberFormat("vn-VN", {
  style: "currency",
  currency: "VND",
});
