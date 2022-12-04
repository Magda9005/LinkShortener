import { getLinkWithSecuredProtocole } from "../utils/getLinkWithSecuredProtocole";

test("replaces unsecured protocole with the secured one", () => {
  expect(getLinkWithSecuredProtocole("http://google.com")).toBe(
    "https://google.com"
  );
});

test("not replaces the protocole when it is already secured", () => {
  expect(getLinkWithSecuredProtocole("https://google.com")).toBe(
    "https://google.com"
  );
});

test("adds secured protocole if there is no protocole in url", () => {
  expect(getLinkWithSecuredProtocole("google.com")).toBe("https://google.com");
});
