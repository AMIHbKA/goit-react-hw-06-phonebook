import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';

const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState();

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const contactToAdd = action.payload;
      const contactExists = Object.values(state.entities).find(
        ({ name, number }) =>
          name === contactToAdd.name || number === contactToAdd.number
      );

      if (!contactExists) {
        contactsAdapter.addOne(state, action.payload);
      } else {
        alert('This contact is already added');
      }
    },
    deleteContact: contactsAdapter.removeOne,
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const { selectAll: selectContacts, selectById: selectContactById } =
  contactsAdapter.getSelectors(state => state.contacts);

export const selectContactIds = createSelector(selectContacts, contacts =>
  contacts.map(contact => contact.id)
);

export const selectFilteredContactsIds = createSelector(
  [selectContacts, state => state.filter],
  (contacts, filter) =>
    contacts
      .filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.toLowerCase().includes(filter.toLowerCase())
      )
      .map(contact => contact.id)
);
