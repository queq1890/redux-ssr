import React from 'react';
import { Animal } from '../mocks/animalAPI';

export interface AnimalsListProps {
  animals: Animal[];
  getAnimalsStart: () => void;
}

const AnimalsList = (props: AnimalsListProps) => (
  <div>
    <button onClick={() => props.getAnimalsStart()}>fetch animal</button>
    {props.animals.length > 0 &&
      props.animals.map(animal => (
        <div key={animal.id}>
          <p>{animal.kind}</p>
          <p>{animal.name}</p>
        </div>
      ))}
  </div>
);

export default AnimalsList;
