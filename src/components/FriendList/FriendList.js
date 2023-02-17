import PropTypes from 'prop-types';
import {FriendsList} from './FriendList.styled';

export const FriendsList = ({friends}) => {
    return (
  <Container>
  {title && <Title>{title}</Title>}
    
  <List>
    {stats.map({avatar, name, isOnline} => (
      <ListItem key={id}>
        <Label>{label}</Label>
        <span class="percentage">{percentage}</span>
      </ListItem>
    ))}
  </List>
  </Container>
  );};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};