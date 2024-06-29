// services/foodService.js
const Food = require('../models/Food');

async function getAllFoods() {
    return await Food.find();
}

async function getFoodById(id) {
    return await Food.findById(id);
}

async function createFood(foodData) {
    const food = new Food(foodData);
    return await food.save();
}

async function updateFood(id, newData) {
    const food = await Food.findById(id);
    if (!food) {
        throw new Error('Alimento não encontrado');
    }
    Object.assign(food, newData);
    return await food.save();
}

async function deleteFood(id) {
    const food = await Food.findById(id);
    if (!food) {
        throw new Error('Alimento não encontrado');
    }
    await food.remove();
}

module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
};
