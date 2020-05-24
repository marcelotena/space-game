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
  {
    code: 'c',
    name: 'normal'
  },
];

export const generatePlanetType = (arraystart, arrayend) => {
  const index = getRndInteger(arraystart, arrayend + 1);

  return planetTypes[index];
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
    case 4:
    case 5:
      return {
        id: uuid(),
        name: 'Unnamed planet',
        type: generatePlanetType(1, 2),
        usedSlots: 0,
        slots: 50,
        position: generatePlanetPosition(position),
        imageSystem: generatePlanetImage()
      };
    case 6:
    case 7:
      return {
        id: uuid(),
        name: 'Unnamed planet',
        type: generatePlanetType(2, 3),
        usedSlots: 0,
        slots: 50,
        position: generatePlanetPosition(position),
        imageSystem: generatePlanetImage()
      };
    case 8:
    case 9:
      return {
        id: uuid(),
        name: 'Unnamed planet',
        type: generatePlanetType(3, 4),
        usedSlots: 0,
        slots: 50,
        position: generatePlanetPosition(position),
        imageSystem: generatePlanetImage()
      };
    case 10:
    case 11:
      return {
        id: uuid(),
        name: 'Unnamed planet',
        type: generatePlanetType(4, 5),
        usedSlots: 0,
        slots: 50,
        position: generatePlanetPosition(position),
        imageSystem: generatePlanetImage()
      };
    case 12:
    case 13:
      return {
        id: uuid(),
        name: 'Unnamed planet',
        type: generatePlanetType(5, 6),
        usedSlots: 0,
        slots: 50,
        position: generatePlanetPosition(position),
        imageSystem: generatePlanetImage()
      };
    case 14:
    case 15:
      return {
        id: uuid(),
        name: 'Unnamed planet',
        type: generatePlanetType(6, 7),
        usedSlots: 0,
        slots: 50,
        position: generatePlanetPosition(position),
        imageSystem: generatePlanetImage()
      };
    default:
      return {
        id: uuid(),
        name: 'Unnamed planet',
        type: generatePlanetType(0, 7),
        usedSlots: 0,
        slots: 50,
        position: generatePlanetPosition(position),
        imageSystem: generatePlanetImage()
      };
  }
};

// Refactor to Player position, planets will be generated in order, to fill all universe.
export const generatePlanetPosition = (position) => {
  const galaxy = getRndInteger(1, 6);      // 1 - 5
  const system = getRndInteger(1, 500);    // 1 - 499
  //const position = getRndInteger(1, 16); // 1 - 15

  return { galaxy, system, position };
};