import { useState } from 'react';
import Timer from '../components/Timer'; 
import '../styles/CookingPage.css';

export default function CookingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [customTime, setCustomTime] = useState(1800);
  const API_KEY = 'ed72150fce5f43a0969ae417e07f690a'; // ✅ Replace with your actual API key

  const fetchRecipe = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchQuery}&number=1`
      );
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        alert('No recipes found for that search!');
        return;
      }

      const recipeData = data.results[0];

      const recipeDetailsRes = await fetch(
        `https://api.spoonacular.com/recipes/${recipeData.id}/information?apiKey=${API_KEY}`
      );
      const recipeDetails = await recipeDetailsRes.json();

      const formattedRecipe = {
        title: recipeDetails.title,
        ingredients: recipeDetails.extendedIngredients.map((ing) => ing.original),
        instructions: recipeDetails.instructions || 'No instructions provided.',
        image: recipeDetails.image || 'https://via.placeholder.com/300',
      };

      setRecipe(formattedRecipe);
    } catch (error) {
      console.error('Failed to fetch recipe:', error);
      alert('There was an error fetching the recipe.');
    }
  };

  return (
    <div className="cooking-page">
      <h1>🍳 Search for a Recipe</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter recipe name (e.g. pasta)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={fetchRecipe}>Search</button>
      </div>

      {recipe && (
        <div className="recipe-container">
          <h2>{recipe.title}</h2>
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }}
          />
          <div className="recipe-section">
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="recipe-section">
            <h3>Instructions:</h3>
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          </div>
        </div>
      )}

      <div className="timer-section">
        <h3>⏲️ Cooking Timer (minutes)</h3>
        <input
          type="number"
          value={customTime / 60}
          onChange={(e) => setCustomTime(Number(e.target.value) * 60)}
          min="1"
        />
        <Timer initialTime={customTime} />
      </div>

      <div className="cooking-motivation">
        <h2>🥕 Stay Inspired in the Kitchen</h2>
        <ul>
          <li>“Cooking is love made visible.”</li>
          <li>“The kitchen is the heart of every home.”</li>
          <li>“Healthy food fuels a strong mind and body.”</li>
          <li>“Cook with passion, eat with gratitude.”</li>
        </ul>
      </div>
    </div>
  );
}
