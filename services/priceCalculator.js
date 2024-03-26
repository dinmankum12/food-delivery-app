const Pricing = require('../models/pricing');

class PriceCalculator {
  static async calculateTotalPrice(organizationId, zone, totalDistance, itemType) {
    // Fetch pricing details from the database based on organization, zone, and item type
    const pricing = await Pricing.findOne({
      where: { organization_id: organizationId, zone: zone },
    });

    if (!pricing) {
      throw new Error('Pricing not found');
    }

    // Calculate total price based on pricing details and distance
    let totalPrice = pricing.fix_price;
    if (totalDistance > pricing.base_distance_in_km) {
      const extraDistance = totalDistance - pricing.base_distance_in_km;
      const perKmPrice = itemType === 'perishable' ? pricing.km_price_perishable : pricing.km_price_non_perishable;
      totalPrice += extraDistance * perKmPrice;
    }

    return totalPrice;
  }
}

module.exports = PriceCalculator;
