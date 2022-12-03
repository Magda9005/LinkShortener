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

export const protocole = (link: string): string => {
  const first4letters: string = link.slice(0, 4).toLowerCase();
  const first5letters: string = link.slice(0, 5).toLowerCase();
  const securedProtocole: string = "https://";
  if (first5letters === "https") {
    return link;
  } else if (first4letters === "http") {
    return link.replace("http", "https");
  } else {
    return securedProtocole + link;
  }
};
