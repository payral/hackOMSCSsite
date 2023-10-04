import { React } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { fetchUserQuery } from '../data/data';

const Applicant = () => {
  const location = useLocation();

  const {
    data: accessToken,
    isError: isErrorAT,
    isLoading: isLoadingAT
  } = useQuery({
    queryKey: ['access_token'],
    keepPreviousData: true,
    queryFn: async () => {
      const hashParam = location.hash.substring(1);
      const accessTokenKV = hashParam.split('=');
      if (accessTokenKV[0] !== 'access_token') {
        throw new Error('No access_token found in location object');
      }
      return accessTokenKV[1];
    },
    retry: 1,
    retryDelay: 500, // ms
  });

  const { isLoading, isError, data: user } = useQuery({
    queryKey: ['user', accessToken],
    queryFn: ({ queryKey }) => {
    const [ , accessToken ] = queryKey;
    return fetchUserQuery(accessToken);
    },
    enabled: !!accessToken,
    retry: 2,
    retryDelay: 500, // ms
  });
  if ((isErrorAT && !isLoadingAT) || (!isLoading && isError)) {
    return <Navigate to='/' />;
  }
  if (isLoadingAT || isLoading) {
    return (
      <div>
      <h1>LOADING SPINNER</h1>
    </div>
    );
  }
  return (
    <div id='home' className='col-md-5 p-lg-5 mx-auto my-5'>
      <h1 className='display-4 font-weight-normal'>{JSON.stringify(user)}</h1>
    </div>
  );
}

export default Applicant;