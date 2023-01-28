import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './userSlice';
import { filtersSlice } from './filtersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistClickReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistClickReducer,
    filters: filtersSlice.reducer,
  },
});

export const persistor = persistStore(store);
