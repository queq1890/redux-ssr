import AnimalAPI from '../mocks/animalAPI';

class AnimalAPIService {
  public getAnimalList = async () => {
    const result = await AnimalAPI();
    return result;
  };
}

export default AnimalAPIService;
