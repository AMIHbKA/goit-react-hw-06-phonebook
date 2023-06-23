import PropTypes from 'prop-types';
import { List } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem } from './ListItem';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <List>
      <ListItem id={1} key={1} />
    </List>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
