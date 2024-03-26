const express = require('express');
const router = express.Router();
const PriceCalculator = require('../services/priceCalculator');

// Endpoint for calculating delivery cost
router.post('/calculate-price', async (req, res) => {
  const { organization_id, zone, total_distance, item_type } = req.body;

  try {
    const totalPrice = await PriceCalculator.calculateTotalPrice(organization_id, zone, total_distance, item_type);
    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
