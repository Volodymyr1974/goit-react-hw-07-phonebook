import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: contactsSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
