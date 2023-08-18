import {User} from '../screens/types';
import client from './client';

type updateUserParams = Pick<
  User,
  'email' | 'name' | 'phoneNumber' | 'address' | 'userLat' | 'userLon'
>;

export async function getUser() {
  const response = await client.get('users');

  return response.data.data;
}

export async function updateUser(params: updateUserParams) {
  const res = await client.patch('users/update', params);

  return res.data.data;
}
