import React from 'react';
import './drinks.styles.css';

const drinkTemplate = drink => {
    //debugger
    let ingredientArr = [];
    let count = 1;
    while (count <= 15) {
        if (drink['strIngredient' + count] !== null) {
            ingredientArr.push({
                type: drink['strIngredient' + count],
                quantity: drink['strMeasure' + count]
            });
        }
        count++;
    }

    let template = (
        <div className="drink-container">
            <div className="drink-image">
                <img src={ drink.strDrinkThumb } alt={ drink.strDrink } />
            </div>
            <div className="drink-info">
                <p className="drink-title">{ drink.strDrink }</p>
                <p className="drink-glass">glass type: { drink.strGlass }</p>
                <ul className="drink-ingredients">
                    {ingredientArr.map(ingred => ingredientTemplate(ingred))}
                </ul>
                <p className="drink-instructions">{ drink.strInstructions }</p>
            </div>
        </div>
    );

    return template;
}

const ingredientTemplate = ingred => {
    let template = (
        <li>{ ingred.quantity } { ingred.type }</li>
    );
    return template;
}

export const Drinks = props => (
    <div className="drink-wrapper">
        {props.drinks.map(drink => (
            drinkTemplate(drink)
        ))}
    </div>
)