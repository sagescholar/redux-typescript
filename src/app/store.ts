import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dataReducer from '../features/data/equipeSlice'
import equipeReducer from '../features/data/equipeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
    equipe: equipeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
