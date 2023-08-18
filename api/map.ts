import axios from 'axios';

export async function kakaoGeoApi(lat: string, lon: string) {
  const res = await axios.get(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lat}&y=${lon}`,
    {
      headers: {
        Authorization: 'KakaoAK f7cc50913311482333ba2ec5f2755da0',
      },
    },
  );
  return res.data;
}

// export async function revertApi(lat: string, lon: string) {
//   const res = await axios.get(
//     `https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${lat}&y=${lon}&input_coord=WTM&output_coord=WGS84`,
//     {
//       headers: {
//         Authorization: 'KakaoAK f7cc50913311482333ba2ec5f2755da0',
//       },
//     },
//   );
//   return res.data;
// }
