import { useQuery } from '@apollo/client';
import { GET_USERS_ROOMS } from '../graphql/queries';

export function useRooms() {
  const { loading, error, data } = useQuery(GET_USERS_ROOMS, {
    pollInterval: 1000,
  });

  return { loading, error, data };
}