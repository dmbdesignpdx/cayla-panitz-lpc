import { Stage } from "../constants/main";
// const prod = process.env.PRODUCTION


export const document = `
fragment Content on ContentBlock {
  id
  heading
  content {
    copy
    image {
      url
      width
      height
    }
  }
}
{
  pages(stage: ${Stage.DRAFT}) {
    title
    description
    shero {
      ...Content
    }
    sections {
      __typename
      ...Content
      ... on ContentCollection {
        id
        heading
        type
        sections {
          ...Content
        }
      }
      ... on ContactBlock {
        id
        heading
        contact {
          email
          phone
          fax
        }
        address {
          street
          unit
          city
          state
          zipcode
        }
      }
    }
    footer {
      heading
      resources {
        id
        key
        value
      }
      copyright
    }
  }
}
`;
