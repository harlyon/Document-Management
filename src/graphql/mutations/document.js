import gql from "graphql-tag";

export const CREATE_PRIVATE_DOCUMENT = gql`
  mutation createDocument($text: String!, $title: String!) {
    createDocument(text: $text, title: $title) {
      id
      text
      title
    }
  }
`;
