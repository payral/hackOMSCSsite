import axios from 'axios';

export const fetchUserQuery = async access_token => {
  const { data } = await axios.get(
    'https://my.mlh.io/api/v3/user.json',
    { params: { access_token } }
  );
  return data;
};
