import React, { useContext, useState, useEffect } from 'react';

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppContext = React.createContext()

const getFavoritesFromLocalStorage = () => {
    let favorites = localStorage.getItem('favorites');
    if(favorites) {
        favorites = JSON.parse(localStorage.getItem('favorites'));
    }else {
        favorites = [];
    }
    return favorites;
}

const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMeal,setSelectedMeal] = useState(null);
    const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());
    const [showFavorite, setShowFavorite] = useState(false);

    const fetchMeals = async (url) => {
        setLoading(true);
        try {
              const response = await fetch(url);
              const data = await response.json();
              if(data.meals) {
                //   console.log(data.meals);
                  setMeals(data.meals);
              }
              else {
                  setMeals([])
              }
              setLoading(false);
          }
          catch(err) {
              console.log(err);
              setLoading(false);
          }
    }

    useEffect(() => { 
        fetchMeals(allMealsURL);
      }, []);


    //fetch all meals data on search
    useEffect(() => {
        if(!searchTerm) return
        fetchMeals(`${allMealsURL}${searchTerm}`)
    },[searchTerm])

      const fetchRandomMeal = () => {
        fetchMeals(randomMealURL);
      }

      const selectMeal = (idMeal,favoriteMeal) => {
        let meal;
        if(favoriteMeal) {
            meal = favorites.find(meal => meal.idMeal === idMeal);
        }else {
            meal = meals.find(meal => meal.idMeal === idMeal);
        }
        
        setSelectedMeal(meal);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const addToFavorites = (idMeal) => {
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
        if(alreadyFavorite) {
            removeFromFavorites(idMeal)
        }else {
            // add to favorites
        const meal = meals.find((meal) => meal.idMeal === idMeal);
        const updatedFavorites = [...favorites, meal];
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites',JSON.stringify(updatedFavorites));
        }
        
    }

    const removeFromFavorites = (idMeal) => {
        const updatedFavorites = favorites.filter(meal => meal.idMeal !== idMeal);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites',JSON.stringify(updatedFavorites));
    }

    const toggleShowFavorite = () => {
        // console.log("oops");
        setShowFavorite(pre => !pre);
    }

    return (
        <AppContext.Provider 
            value={{ loading, meals, selectMeal, fetchRandomMeal, closeModal, toggleShowFavorite, showModal, selectedMeal, favorites, addToFavorites, removeFromFavorites, showFavorite, setMeals, setShowModal, setSelectedMeal, setFavorites, setSearchTerm }}>
                {children}
        </AppContext.Provider>
       
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }