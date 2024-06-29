const foodService = require('../services/foodService');

async function getAllFoods(req, res) {
    try {
        const foods = await foodService.getAllFoods();
        res.json(foods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getFoodById(req, res) {
    try {
        const food = await foodService.getFoodById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Alimento não encontrado' });
        }
        res.json(food);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createFood(req, res) {
    try {
        const newFood = await foodService.createFood(req.body);
        res.status(201).json(newFood);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateFood(req, res) {
    try {
        const updatedFood = await foodService.updateFood(req.params.id, req.body);
        res.json(updatedFood);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteFood(req, res) {
    try {
        await foodService.deleteFood(req.params.id);
        res.json({ message: 'Alimento removido' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
};
