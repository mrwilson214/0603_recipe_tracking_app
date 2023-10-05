import React from "react";

function RecipeListItem({ index, recipe, deleteRecipe }) {
  const handleDelete = (event) => {
    event.preventDefault();
    deleteRecipe(event.target.id);
  };

  return (
    <>
      <td>
        <div name="name">{recipe.name}</div>
      </td>
      <td>
        <div name="cuisine">{recipe.cuisine}</div>
      </td>
      <td>
        <img name="photo" src={recipe.photo} alt="Meal" />
      </td>
      <td className="content_td">
        <p name="ingredients">{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p name="preparation">{recipe.preparation}</p>
      </td>
      <td>
        <button id={index} onClick={handleDelete} name="delete">
          Delete
        </button>
      </td>
    </>
  );
}

export default RecipeListItem;
