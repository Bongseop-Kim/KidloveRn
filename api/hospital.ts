import client from './client';

export async function getHospitals(hospitalname: string) {
  const response = await client.get(
    `hospital?dutyName=${hospitalname}&size=10&page=1`,
  );

  return response.data;
}

export async function getHospitalById(hpId: string) {
  const response = await client.get(`hospital/${hpId}`);

  return response.data.data;
}
