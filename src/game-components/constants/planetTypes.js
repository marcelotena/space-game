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
  const index = getRndInteger(arraystart, arrayend);

  return planetTypes[index];
};

export const generatePlanetPosition = () => {
  const galaxy = getRndInteger(1, 5);
  const system = getRndInteger(1, 499);
  const position = getRndInteger(1, 3);

  return { galaxy, system, position };
};