import { getLinkWithSecuredProtocol } from "../utils/getLinkWithSecuredProtocol";

test("replaces unsecured protocol with the secured one", () => {
  expect(getLinkWithSecuredProtocol("http://google.com")).toBe(
    "https://google.com/"
  );
});

test("returns link with secured protocol even though it is already secured", () => {
  expect(getLinkWithSecuredProtocol("https://google.com")).toBe(
    "https://google.com/"
  );
});

test("adds secured protocol if there is no protocole in url", () => {
  expect(getLinkWithSecuredProtocol("google.com")).toBe("https://google.com");
});

test("adds secured protocol if there is no protocole in url", () => {
  expect(getLinkWithSecuredProtocol("www.google.com")).toBe(
    "https://www.google.com"
  );
});

test("returns link with secured protocol when the user incorrectly copied the protocole", () => {
  expect(getLinkWithSecuredProtocol("ttp://google.com")).toBe(
    "https://google.com"
  );
});

test("returns link with secured protocol when there is a path in URL ", () => {
  expect(
    getLinkWithSecuredProtocol("https://www.markdownguide.org/basic-syntax")
  ).toBe("https://www.markdownguide.org/basic-syntax");
});

test("returns link with secured protocol when there are query parameters in URL ", () => {
  expect(
    getLinkWithSecuredProtocol(
      "https://www.amazon.pl/gp/bestsellers?ref_=nav_cs_bestsellers"
    )
  ).toBe("https://www.amazon.pl/gp/bestsellers?ref_=nav_cs_bestsellers");
});

test("returns link with secured protocol when there is a hash in URL ", () => {
  expect(
    getLinkWithSecuredProtocol(
      "https://www.markdownguide.org/basic-syntax/#overview"
    )
  ).toBe("https://www.markdownguide.org/basic-syntax/#overview");
});
