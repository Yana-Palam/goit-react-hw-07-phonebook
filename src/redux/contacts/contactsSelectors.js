import { createSelector } from '@reduxjs/toolkit';
import { selectValueFilter } from 'redux/filters/filtersSelectors';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
