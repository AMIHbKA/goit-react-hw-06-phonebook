import { createSlice } from '@reduxjs/toolkit';

const selectAllContacts = state => state.contacts;

export const selectContactById = (state, contactId) => {
  return selectAllContacts(state)[contactId];
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 1, name: 'Mango', number: '123-548-879' },
    { id: 2, name: 'Avocado', number: '323-548-879' },
  ],
  reducers: {
    addContact: (state, action) => {
      const contactToAdd = action.payload;
      const contactExists = state.find(
        ({ name, number }) =>
          name === contactToAdd.name || number === contactToAdd.number
      );

      if (!contactExists) {
        state.push(action.payload);
      } else {
        alert('This contact is already added');
      }
    },
  },

  deleteContact: (state, action) => {
    console.log(state);
    // state.filter(({ id }) => id !== action.payload);
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
