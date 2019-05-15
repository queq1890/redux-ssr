import React from 'react';
import { Animal } from '../mocks/animalAPI';

export interface AnimalsListProps {
  animals: Animal[];
  getAnimalsStart: () => void;
}

const AnimalsList = (props: AnimalsListProps) => (
  <div>
    <button onClick={() => props.getAnimalsStart()}>fetch animal</button>
    {props.animals && props.animals.map(animal => <p key={animal.id}>{animal}</p>)}
  </div>
);

export default AnimalsList;
