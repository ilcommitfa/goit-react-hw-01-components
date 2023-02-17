import PropTypes from 'prop-types';
import { Container, Name, Description, Avatar, Tag, Location, Stats, StatsItem, Label, Quantity } from './Profile.styled';

export const Profile = (
    {user: {username, tag, location, avatar,
         stats: {followers, views, likes}}}) => {
    return <Container class="profile">
    <Description>
      <Avatar
        src={avatar} width='240'
        alt="User avatar"
        class="avatar"
      />
      <Name>{username}</Name>
      <Tag class="tag">@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  
    <Stats class="stats">
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsItem>
    </Stats>
  </Container>;
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};