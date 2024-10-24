import express from 'express';
const router = express.Router();
import {getRestaurants, createRestaurant, deleteRestaurant} from "../data/restaurants.js";

router.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.render('restaurants', {restaurants});
});

router.get("/restaurants/:id", (req, res) => {
    const restaurantId = parseInt(req.params.id);
    const restaurant = getRestaurants().find(r => r.id === restaurantId);
    res.render("restaurant-details", {restaurant})
});

router.post('/restaurants', (req, res) => {
    const newRestaurant = req.body;
    const createdRestaurant = createRestaurant(newRestaurant);
    res.status(201).json(createdRestaurant);
});

router.delete('/restaurants/:id', (req, res) => {
    const restaurantId = parseInt(req.params.id);
    deleteRestaurant(restaurantId);
    res.status(200).json({ message: 'Restaurant deleted successfully' });
});

export {router as backendRouter};