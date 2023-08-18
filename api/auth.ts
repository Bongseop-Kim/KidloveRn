import {User} from '../screens/types';
import client from './client';

type RegisterParams = Pick<User, 'name' | 'email' | 'password' | 'phoneNumber'>;
type LoginParams = Pick<User, 'email' | 'password'>;

export async function register(params: RegisterParams) {
  const response = await client.post('users/clientsignup', params);

  return response.data.data;
}

export async function login(params: LoginParams) {
  const response = await client.post('users/login', params);

  return response.data.data;
}
