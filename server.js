const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 4000;

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/tonProjetDB')
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Définir le modèle pour les "items"
const itemSchema = new mongoose.Schema({
    name: String,
    description: String
});
const Item = mongoose.model('Item', itemSchema);

// Endpoint GET pour récupérer tous les items
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération des items.');
    }
});

// Endpoint GET pour récupérer un item spécifique par ID
app.get('/api/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).send('Item non trouvé');
        res.json(item);
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération de l\'item.');
    }
});

// Endpoint POST pour créer un nouvel item
app.post('/api/items', async (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).send('Les champs "name" et "description" sont requis.');
    }

    const newItem = new Item({
        name,
        description
    });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(500).send('Erreur lors de la création de l\'item.');
    }
});

// Si tu as déjà généré ton frontend (après npm run build), tu peux le servir ici
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Route pour toutes les autres requêtes (par exemple, pour Vue.js si tu l'utilises)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
