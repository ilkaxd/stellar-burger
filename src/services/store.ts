import { ThunkAction, ThunkDispatch, thunk } from 'redux-thunk';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import burgerConstructor from './slices/burgerConstructorSlice';
import feed from './slices/feedSlice';
import ingredients from './slices/ingredientsSlice';
import order from './slices/orderSlice';
import user from './slices/userSlice';

const store = configureStore({
  reducer: {
    burgerConstructor,
    feed,
    ingredients,
    order,
    user
  }
});

export type RootState = any;

type TApplicationActions = any;

export type AppThunk<Return = void> = ThunkAction<
  Return,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
