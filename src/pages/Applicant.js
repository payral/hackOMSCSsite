import { React } from 'react';
import { redirect, useLocation } from 'react-router-dom';
import { fetchUserQuery } from '../data/data';

const Applicant = () => {
  const { data: accessToken, isError } = useQuery({
    queryKey: ['access_token'],
    keepPreviousData: true,
    queryFn: () => {
      const location = useLocation();
      const hashParam = location.hash.substring(1);
      const accessTokenKV = hashParam.split('=');
      return async () => {
        if (accessTokenKV[0] !== 'access_token') {
          throw new Error('No access_token found in location object');
        }
        return accessTokenKV[1];
      }
    },
  });
  // Check for access token in persisted query state or in location object. Redirect to home if no access token
  if (isError && !accessToken) {
    return redirect('/');
  }
  const { data: user, isLoading } = useQuery({
    queryKey: ['user', accessToken],
    queryFn: () => fetchUserQuery(accessToken),
    enabled: !!accessToken,
  });
  if (isLoading) {
    <div>
      <h1>LOADING SPINNER</h1>
    </div>
  }
  return (
    <div id='home' className='col-md-5 p-lg-5 mx-auto my-5'>
      <h1 className='display-4 font-weight-normal'>Applicant</h1>
    </div>
  );
}

export default Applicant;