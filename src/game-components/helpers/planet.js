import { getRndInteger } from "../utils/math";
import { v4 as uuid } from "uuid";

const planetTypes = [
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

export const generatePlanet = (position) => {
  switch(position) {
    case 1:
    case 2:
    case 3:
      return {
        id: uuid(),
        name: 'Unnamed planet',
        type: generatePlanetType(0, 1),
        usedSlots: 0,
        slots: 50,
        position: generatePlanetPosition(position),
        imageSystem: generatePlanetImage()
      };
    default:
      return {
        id: uuid(),
        name: 'Unnamed planet',
        type: generatePlanetType(0, 15),
        usedSlots: 0,
        slots: 50,
        position: generatePlanetPosition(position),
        imageSystem: generatePlanetImage()
      };
  }
};