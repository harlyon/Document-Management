import gql from "graphql-tag";

export const FETCH_DOCUMENTS_QUERY = gql`
  {
    getDocuments {
      id
      title
      text
      createdAt
      username
    }
  }
`;
