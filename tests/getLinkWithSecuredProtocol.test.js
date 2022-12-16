import { getLinkWithSecuredProtocol } from "../utils/getLinkWithSecuredProtocol";

test("replaces unsecured protocol with the secured one", () => {
  expect(getLinkWithSecuredProtocol("http://google.com")).toBe(
    "https://google.com"
  );
});

test("returns link with secured protocol even though it is already secured", () => {
  expect(getLinkWithSecuredProtocol("https://google.com")).toBe(
    "https://google.com"
  );
});

test("adds secured protocol if there is no protocole in url", () => {
  expect(getLinkWithSecuredProtocol("google.com")).toBe("https://google.com");
});

test("adds secured protocol if there is no protocole in url", () => {
  expect(getLinkWithSecuredProtocol("www.google.com")).toBe("https://www.google.com");
});

test("returns link with secured protocol when the user incorrectly copied the protocole",() => {
  expect(getLinkWithSecuredProtocol("ttp://google.com")).toBe("https://google.com");
})

