const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

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
export const getShort = (): string => {
  let short: string =
    getRandomLetter(alphabet) +
    getRandom4DigitsNumber() +
    getRandomLetter(alphabet);
  return short;
};

export const getLinkWithProtocole = (link: string): string => {
  const first4letters: string = link.slice(0, 4);
  const protocole: string = "http://";
  if (first4letters == "http") {
    return link;
  } else {
    return protocole + link;
  }
};
