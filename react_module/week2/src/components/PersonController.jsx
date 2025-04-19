import { useState, useEffect } from 'react';
import { Person } from './Person';

export const PersonController = () => {
  const [randomPerson, setRandomPerson] = useState(null);

  useEffect(() => {
    const getPerson = async () => {
      try {
        const response = await fetch('https://www.randomuser.me/api?results=1');
        if (!response.ok)
          throw new Error(
            `HTTP error: ${response.status}. ${response.statusText}`
          );
        const data = await response.json();
        const person = data.results[0];
        setRandomPerson({
          firstName: person.name.first,
          lastName: person.name.last,
          email: person.email,
        });
      } catch (error) {
        console.error(`Failed to fetch data: ${error.message}`);
      }
    };

    getPerson();
  }, []);

  return <Person person={randomPerson} />;
};
