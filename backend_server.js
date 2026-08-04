// Structure simplifiée du Backend (Express + MongoDB)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion:', err));

// Modèle d'Article
const ArticleSchema = new mongoose.Schema({
  title: String,
  category: { type: String, enum: ['Magazine', 'Livre', 'Journal'] },
  coverImage: String,
  description: String,
  downloadUrl: String,
  createdAt: { type: Date, default: Date.now }
});

const Article = mongoose.model('Article', ArticleSchema);

// API Endpoints
app.get('/api/articles', async (req, res) => {
  const { category } = req.query;
  const query = category ? { category } : {};
  const articles = await Article.find(query).sort({ createdAt: -1 });
  res.json(articles);
});

app.post('/api/articles', async (req, res) => {
  const newArticle = new Article(req.body);
  await newArticle.save();
  res.status(201).json(newArticle);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));