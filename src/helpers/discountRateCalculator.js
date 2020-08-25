function discountRateCalculator(oldPrice, currentPrice) {
  return Number(
    ((Number(oldPrice) - Number(currentPrice)) * 100) / Number(oldPrice)
  ).toFixed(2);
}

export default discountRateCalculator;
