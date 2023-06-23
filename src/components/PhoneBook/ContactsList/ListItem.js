import React from 'react';
import PropTypes from 'prop-types';
import { Button, Trash } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactById } from 'redux/features';

export const ListItem = ({ id }) => {
  const contact = useSelector(state => selectContactById(state, id));
  console.log('contact', contact);
  const { name, number } = contact;
  const dispatch = useDispatch();

  return (
    <li>
      <Button
        type="button"
        // onClick={() => onDelete(id)}
        aria-label="Delete Contact"
      >
        <Trash width={18} height={18} />
      </Button>
      {name}: {number}
    </li>
  );
};

ListItem.propTypes = {};
