import {useMutation} from 'react-query';
import {register} from '../api/auth';
import {useNavigation} from '@react-navigation/core';
import {useUserState} from '../contexts/UserContext';
import {AuthError, RootStackNavigationProp} from '../screens/types';
import {applyToken} from '../api/client';
import useInform from './useInform';
import authStorage from '../storage/authStorage';

export default function useRegister() {
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();
  const inform = useInform();

  const mutation = useMutation(register, {
    onSuccess: data => {
      setUser(data.user);
      navigation.pop();
      applyToken(data.jwt);
      authStorage.set(data);
    },
    onError: (error: AuthError) => {
      const message =
        error.response?.data?.data?.[0]?.messages[0].message ?? '회원가입 실패';
      inform({
        title: '오류',
        message,
      });
    },
  });
  return mutation;
}
