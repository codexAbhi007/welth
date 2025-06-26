// Standard format: ₹1,20,000.00
export function formatCurrency(amount) {
  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount)) return "₹0.00";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(parsedAmount);
}

// Compact format: ₹1.2K, ₹3.5L
export function formatCurrencyCompact(amount) {
  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount)) return "₹0";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(parsedAmount);
}
