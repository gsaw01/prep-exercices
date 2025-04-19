export const Person = ({ person }) => {
  if (!person) return null;

  return (
    <ul className='person-info-list'>
      <li className='person-info-item person-first-name'>
        First Name: {person.firstName}
      </li>
      <li className='person-info-item person-last-name'>
        Last Name: {person.lastName}
      </li>
      <li className='person-info-item person-email'>Email: {person.email}</li>
    </ul>
  );
};
