import React from "react";
import RecipeListHeader from "./RecipeListHeader";
import RecipeListItem from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {

  return (
    <div className="recipe-list">
      <table>
        <RecipeListHeader />
        <tbody>
          {recipes.map((recipe, i) => (
            <tr key={i}>
              <RecipeListItem
                index={i}
                recipe={recipe}
                deleteRecipe={deleteRecipe}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
