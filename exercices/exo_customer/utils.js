export const calculatePriceTTC = (priceHT, tauxTVA = 0.2) => {
    return Math.floor((priceHT * tauxTVA + priceHT) * 100) / 100;
};
