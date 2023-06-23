import { configureStore } from '@reduxjs/toolkit';
import { filterSlice, contactsSlice } from './features/index';

const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
