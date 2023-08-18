import {useEffect} from 'react';
import {applyToken} from '../api/client';
import {useUserState} from '../contexts/UserContext';
import authStorage from '../storage/authStorage';
import {getUser} from '../api/user';

export default function useAuthLoadEffect() {
  const [, setUser] = useUserState();

  useEffect(() => {
    //백엔드에서 웹 쿠키에 저장하는 것은 보안상의 이유로 전달하지 않기 때문에
    //토큰만 저장하고 다시 토큰으로 유저 정보를 확인하는 과정이 들어갔다.
    //그런데 모바일이면 굳이 안그러고 바로 유저 정보를 스토리지에 저장해도 될까?
    //이 부분은 백엔드가 어떻게 주느냐에 따라 바뀔 듯
    const fn = async () => {
      const auth = await authStorage.get();
      if (!auth) {
        return;
      }
      applyToken(auth.token);
      const user = await getUser();
      setUser(user);
    };
    fn();
  }, [setUser]);
}
