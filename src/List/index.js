import { people } from './data.js';
import { getImageUrl } from './utils.js';
// import { Fragment } from 'react';

function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );

  const listItems = chemists.map(person =>
    <li key={person.id}>
      {/* <Fragment key={person.id}> */}
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.id} : </b>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
      {/* </Fragment> */}
    </li>
  );

  return <ul>{listItems}</ul>;
}

export default List;