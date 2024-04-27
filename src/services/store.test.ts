import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store';
import burgerConstructorReducer from './slices/burger-constructor/slice';
import feedReducer from './slices/feed/slice';
import ingredientsReducer from './slices/ingredients/slice';
import orderReducer from './slices/order/slice';
import userReducer from './slices/user/slice';

describe('Проверяют правильную инициализацию rootReducer', () => {
  const store = configureStore({ reducer: rootReducer });

  test('smoke test burger constructor', () => {
    expect(store.getState().burgerConstructor).toEqual(
      burgerConstructorReducer(undefined, { type: 'UNKNOWN_ACTION' })
    );

    const addIngredientAction = { type: 'addIngredient' };
    store.dispatch(addIngredientAction);
    expect(store.getState().burgerConstructor).toEqual(
      burgerConstructorReducer(undefined, addIngredientAction)
    );

    const upIngredientAction = { type: 'upIngredient' };
    store.dispatch(upIngredientAction);
    expect(store.getState().burgerConstructor).toEqual(
      burgerConstructorReducer(undefined, upIngredientAction)
    );

    const downIngredientAction = { type: 'downIngredient' };
    store.dispatch(downIngredientAction);
    expect(store.getState().burgerConstructor).toEqual(
      burgerConstructorReducer(undefined, downIngredientAction)
    );

    const removeIngredientAction = { type: 'removeIngredient' };
    store.dispatch(removeIngredientAction);
    expect(store.getState().burgerConstructor).toEqual(
      burgerConstructorReducer(undefined, removeIngredientAction)
    );

    const clearBurgerConstructorAction = { type: 'clearBurgerConstructor' };
    store.dispatch(clearBurgerConstructorAction);
    expect(store.getState().burgerConstructor).toEqual(
      burgerConstructorReducer(undefined, clearBurgerConstructorAction)
    );
  });

  test('smoke test feed', () => {
    expect(store.getState().feed).toEqual(
      feedReducer(undefined, { type: 'UNKNOWN_ACTION' })
    );

    const getFeedsThunkAction = { type: 'getFeedsThunk' };
    store.dispatch(getFeedsThunkAction);
    expect(store.getState().feed).toEqual(
      feedReducer(undefined, getFeedsThunkAction)
    );

    const getOrderByNumberThunkAction = { type: 'getOrderByNumberThunk' };
    store.dispatch(getOrderByNumberThunkAction);
    expect(store.getState().feed).toEqual(
      feedReducer(undefined, getOrderByNumberThunkAction)
    );
  });

  test('smoke test ingredients', () => {
    expect(store.getState().ingredients).toEqual(
      ingredientsReducer(undefined, { type: 'UNKNOWN_ACTION' })
    );

    const getIngredientsThunkAction = { type: 'getIngredientsThunk' };
    store.dispatch(getIngredientsThunkAction);
    expect(store.getState().ingredients).toEqual(
      ingredientsReducer(undefined, getIngredientsThunkAction)
    );
  });

  test('smoke test order', () => {
    expect(store.getState().order).toEqual(
      orderReducer(undefined, { type: 'UNKNOWN_ACTION' })
    );

    const clearOrderAction = { type: 'clearOrder' };
    store.dispatch(clearOrderAction);
    expect(store.getState().order).toEqual(
      orderReducer(undefined, clearOrderAction)
    );

    const orderBurgerThunkAction = { type: 'orderBurgerThunk' };
    store.dispatch(orderBurgerThunkAction);
    expect(store.getState().order).toEqual(
      orderReducer(undefined, orderBurgerThunkAction)
    );
  });

  test('smoke test user', () => {
    expect(store.getState().user).toEqual(
      userReducer(undefined, { type: 'UNKNOWN_ACTION' })
    );

    const clearErrorsAction = { type: 'clearErrors' };
    store.dispatch(clearErrorsAction);
    expect(store.getState().user).toEqual(
      userReducer(undefined, clearErrorsAction)
    );

    const loginUserThunkAction = { type: 'loginUserThunk' };
    store.dispatch(loginUserThunkAction);
    expect(store.getState().user).toEqual(
      userReducer(undefined, loginUserThunkAction)
    );

    const logoutUserThunkAction = { type: 'logoutUserThunk' };
    store.dispatch(logoutUserThunkAction);
    expect(store.getState().user).toEqual(
      userReducer(undefined, logoutUserThunkAction)
    );

    const getUserThunkAction = { type: 'getUserThunk' };
    store.dispatch(getUserThunkAction);
    expect(store.getState().user).toEqual(
      userReducer(undefined, getUserThunkAction)
    );

    const updateUserThunkAction = { type: 'updateUserThunk' };
    store.dispatch(updateUserThunkAction);
    expect(store.getState().user).toEqual(
      userReducer(undefined, updateUserThunkAction)
    );

    const getOrdersThunkAction = { type: 'getOrdersThunk' };
    store.dispatch(getOrdersThunkAction);
    expect(store.getState().user).toEqual(
      userReducer(undefined, getOrdersThunkAction)
    );
  });
});
