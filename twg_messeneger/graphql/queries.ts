import { gql } from '@apollo/client';

export const GET_USERS_ROOMS = gql`
  query GetUsersRooms {
    usersRooms {
      user {
        email
        firstName
        lastName
        id
        role
      }
      rooms {
        id
        name
      }
    }
  }
`;