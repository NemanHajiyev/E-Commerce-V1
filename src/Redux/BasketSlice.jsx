import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
    const basket = localStorage.getItem("basket");
    if (basket) {
        try {
            return JSON.parse(basket);
        } catch (error) {
            console.error("Bos Json", error);
            return [];
        }
    }
    return [];
}

const getFavoritesFromStorage = () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
        try {
            return JSON.parse(favorites);
        } catch (error) {
            console.error("Bos Json", error);
            return [];
        }
    }
    return [];
};

const initialState = {
    products: getBasketFromStorage(),
    totalamount: 0,
    favorites: getFavoritesFromStorage()
};


const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("favorites", JSON.stringify(basket));
}


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products?.find((product) => product.id === action.payload.id);
            if (findProduct) {
                const extarctedProducts = state.products?.filter((product) => product.id !== action.payload.id);
                findProduct.count += action.payload.count
                state.products = [...extarctedProducts, findProduct]
                writeFromBasketToStorage(state.products)

            } else {
                state.products = [...state.products, action.payload]
                writeFromBasketToStorage(state.products)
            }
        },

        calculateBasket: (state) => {
            state.totalamount = 0;
            state.products?.map((product) => {
                state.totalamount += product.price * product.count
            })
        },

        removeBasketItem: (state, action) => {
            state.products = state.products?.filter(product => product.id !== action.payload.id);
            writeFromBasketToStorage(state.products);
        },

        favorieProduct: (state, action) => {
            const productId = action.payload.id;
            const findProduct = state.products.find(product => product.id === productId);

            if (findProduct) {
                const isAlreadyFavorite = state.favorites.some(fav => fav.id === productId);
                if (!isAlreadyFavorite) {
                    state.favorites.push(findProduct);
                } else {
                    state.favorites = state.favorites.filter(fav => fav.id !== productId);
                }
                localStorage.setItem("favorites", JSON.stringify(state.favorites));
            }
        }
    }
})


export const { addToBasket, calculateBasket, removeBasketItem, favorieProduct } = basketSlice.actions;
export default basketSlice.reducer;
