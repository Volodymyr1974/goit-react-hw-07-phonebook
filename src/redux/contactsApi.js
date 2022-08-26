import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'newcontacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6307cb873a2114bac76bd05e.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/newcontacts',
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: values => ({
        url: '/newcontacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/newcontacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
