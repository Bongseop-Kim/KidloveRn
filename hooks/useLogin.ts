import {useMutation} from 'react-query';
import {login} from '../api/auth';
import {useNavigation} from '@react-navigation/core';
import {AuthError, RootStackNavigationProp} from '../screens/types';
import {applyToken} from '../api/client';
import authStorage from '../storage/authStorage';
import useInform from './useInform';

export default function useLogin() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const inform = useInform();

  const mutation = useMutation(login, {
    onSuccess: data => {
      navigation.pop();
      applyToken(data.token);
      authStorage.set(data);
    },
    onError: (error: AuthError) => {
      const message = error.response?.data.error.message ?? '로그인 실패';
      inform({
        title: '오류',
        message,
      });
    },
  });
  return mutation;
}
