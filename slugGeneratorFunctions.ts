import { alphabet } from "./constants";

const getRandomNumberFromTheRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * max + min);
};

const getRandomLetter = (listOfLetters: string[]): string => {
  let firstIndex: number = 0;
  let lastIndex: number = listOfLetters.length - 1;
  const index: number = getRandomNumberFromTheRange(firstIndex, lastIndex);
  const randomLetter: string = listOfLetters[index];
  return randomLetter;
};

const getRandom4DigitsNumber = (): string => {
  let number: string = "";
  let minNumber: number = 0;
  let maxNumber: number = 9;
  for (let i = 0; i < 4; i++) {
    number = number + getRandomNumberFromTheRange(minNumber, maxNumber);
  }

  return number;
};


export const getSlug = (): string => {
  let slug: string =
    getRandomLetter(alphabet) +
    getRandom4DigitsNumber() +
    getRandomLetter(alphabet);
  return slug;
};

export const protocole = (link: string): string => {
  const first4letters: string = link.slice(0, 4);
  const protocole: string = "http://";
  if (first4letters == "http") {
    return link;
  } else {
    return protocole + link;
  }
};
