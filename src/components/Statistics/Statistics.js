import PropTypes from 'prop-types';
import {Container, Title, List, ListItem, Label} from './Statistics.styled';

const colors = ['#984ED0', '#CDD25A', '#FDB05E', '#0475ED', '#F02C6E'];

export const Statistics = ({title, stats}) => {
    return (
  <Container>
  {title && <Title>{title}</Title>}
    
  <List>
    {stats.map(({id, label, percentage}, index) => (
      <ListItem key={id} style={{background: colors[index]}}>
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