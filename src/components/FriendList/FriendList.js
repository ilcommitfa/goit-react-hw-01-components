import PropTypes from 'prop-types';
import {List, ListItem, Status, Avatar, Name} from './FriendList.styled';
import { FaCircle } from 'react-icons/fa';

export const FriendList = ({friends}) => {
    return (
      <List>
        {friends.map(({avatar, name, isOnline, id}) => (
          <ListItem key={id}>
            <Status isOnline={isOnline}><FaCircle /></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>  
          </ListItem>
        ))}
      </List>
  )}
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  };