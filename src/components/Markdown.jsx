//
// This file only contains exported styled components. These components are used
// to replace the default components in the "markdown-to-jsx" package. See
// the `[...path_params].js` file to see how they are used.
//

import styled from "styled-components";

const MARGIN_BOTTOM = "margin-bottom: 1.25rem !important;";

export const Heading1 = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  ${MARGIN_BOTTOM};
  transition-duration: 0.25s;
  transition-property: color;
`;

export const Heading2 = styled.h2`
  border-top: .25rem solid ${({ theme }) =>
  theme.markdown.heading2.borderTopColor};
  margin-top: 2.5rem !important;
  padding-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  ${MARGIN_BOTTOM};
  transition-duration: 0.25s;
  transition-property: border-top, color;
`;

export const Heading3 = styled.h3`
  margin-top: 1.6rem !important;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
  ${MARGIN_BOTTOM};
  transition-duration: 0.25s;
  transition-property: color;
`;

export const Heading4 = styled.h3`
  margin-top: 1.6rem !important;
  font-size: 1.3rem;
  font-weight: bold;
  ${MARGIN_BOTTOM};
  transition-duration: 0.25s;
  transition-property: color;
`;

export const ListItem = styled.li`
`;

export const Code = function ({ className, children }) {
  function getPrismJsClassName(ogClassName) {
    if (ogClassName.includes("diff")) {
      const diffClassName = ogClassName.replace("lang-", " language-diff-");
      return diffClassName + " diff-highlight";
    }

    // For everything else, just make sure we prefix languages with `language-`
    return ogClassName.replace("lang-", " language-")
  }

  return (
    <code
      className={className && getPrismJsClassName(className)}
    >
      {children}
    </code>
  );
};

export const Paragraph = styled.p`
  ${MARGIN_BOTTOM};
  transition-duration: 0.25s;
  transition-property: color;
`;

export const RestyledCode = styled(Code)`
  font-size: .85rem;
  background: ${({ theme }) => theme.markdown.code.backgroundColor};
  border-radius: 1rem;
  color: ${({ theme }) => theme.markdown.code.color};
  font-weight: 500;
  padding: .25rem .5rem;
  transition-duration: 0.25s;
  transition-property: background, color;
`;

export const Pre = styled.pre`
  background: #2f343c !important;
  border-radius: 1rem;
  ${MARGIN_BOTTOM};

  &[class*=language-] {
    ${MARGIN_BOTTOM};
  }

  code {
    font-size: .85rem;
    background-color: transparent;
    padding: 0;
    color: inherit;
  }
`;

export const OrderedList = styled.ol`
  margin-left: 1rem;
  ${MARGIN_BOTTOM};
`;

export const UnorderedList = styled.ul`
  margin-left: 1rem;
  ${MARGIN_BOTTOM};
`;

export const Image = styled.img`
  border: 1px solid #dfdfdf;
`;
