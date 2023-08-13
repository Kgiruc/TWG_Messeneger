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

export const GET_MESSAGES = gql`
  query GetMessages($roomId: String!) {
    room(id: $roomId) {
      id
      name
      messages {
        id
        body
        insertedAt
        user {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage($roomId: String!, $body: String!) {
    sendMessage(roomId: $roomId, body: $body) {
      id
      body
      insertedAt
      user {
        email
        firstName
        id
        lastName
        role
      }
    }
  }
`;