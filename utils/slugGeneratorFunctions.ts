import { alphabet } from "./constants";

const getRandomNumberFromTheRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * max + min);
};

const getRandomLetter = (listOfLetters: string[]): string => {
  const firstIndex: number = 0;
  const lastIndex: number = listOfLetters.length - 1;
  const index: number = getRandomNumberFromTheRange(firstIndex, lastIndex);
  return listOfLetters[index];
};

const getRandom4DigitsNumber = (): string => {
  const number: number[] = [];
  const minNumber: number = 0;
  const maxNumber: number = 9;
  for (let i = 0; i < 4; i++) {
    number.push(getRandomNumberFromTheRange(minNumber, maxNumber));
  }

  return number.join("");
};

export const getSlug = (): string => {
  let slug: string =
    getRandomLetter(alphabet) +
    getRandom4DigitsNumber() +
    getRandomLetter(alphabet);
  return slug;
};
