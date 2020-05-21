import { getRndInteger } from "../utils/math";

export const planetTypes = [
  {
    code: 'a',
    name: 'desert'
  },
  {
    code: 'b',
    name: 'dry'
  },
  {
    code: 'c',
    name: 'normal'
  },
  {
    code: 'd',
    name: 'jungle'
  },
  {
    code: 'e',
    name: 'oceanic'
  },
  {
    code: 'f',
    name: 'ice'
  },
  {
    code: 'g',
    name: 'gas'
  },
];

export const generatePlanetType = (arraystart, arrayend) => {
  const index = getRndInteger(arraystart, arrayend + 1);

  return planetTypes[index];
};

export const generatePlanetPosition = (position) => {
  const galaxy = getRndInteger(1, 6);      // 1 - 5
  const system = getRndInteger(1, 500);    // 1 - 499
  //const position = getRndInteger(1, 16); // 1 - 15

  return { galaxy, system, position };
};

export const generatePlanetImage = () => {
  let number = getRndInteger(1, 6); // 1 - 5
  return '0' + number;
};