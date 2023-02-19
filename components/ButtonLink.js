import { PrismicLink } from "@prismicio/react";

// An example of a reusable component from Prismic.
//It has two different styling looks depending on if it is filled or not
export const ButtonLink = ({ type = "filled", ...props }) => {
  return (
    <PrismicLink
      className={`inline-block rounded border-2 border-indigo-600 px-5 py-3 font-semibold text-white ${
        type === "filled" ? "bg-indigo-600 text-white" : "text-indigo-600	"
      }`}
      {...props}
    />
  );
};
