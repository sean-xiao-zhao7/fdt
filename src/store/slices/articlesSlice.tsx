import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ArticleType } from "../data/articles";

// Define a type for the slice state
interface articlesState {
    articles: ArticleType[];
}

// Define the initial state using that type
const initialState: articlesState = {
    articles: [],
};

export const articlesSlice = createSlice({
    name: "articles",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {},
    },
});

export const { incrementByAmount } = articlesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const articles = (state: RootState) => state.articles;

export default articlesSlice.reducer;
