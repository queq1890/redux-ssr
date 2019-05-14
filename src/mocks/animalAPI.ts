const animalAPIResponse = {
  1: { kind: 'dog', name: 'hachi' },
  2: { kind: 'cat', name: 'doraemon' },
};

export type animalAPIResultType = typeof animalAPIResponse | Error;

const animalAPI = async (): Promise<animalAPIResultType> => {
  const rand = Math.random();
  await setTimeout(() => {
    //eslint-disable-next-line
    console.log('calling API');
  }, rand * 1000);

  if (rand > 0.2) {
    return animalAPIResponse;
  } else {
    throw new Error('503 service unavailable');
  }
};

export default animalAPI;
