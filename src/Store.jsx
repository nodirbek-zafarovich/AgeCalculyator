import { configureStore } from '@reduxjs/toolkit';
import AgeReducer from './Age';

export default configureStore({
  reducer: {
    age: AgeReducer,
  },
});
