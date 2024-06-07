import axios from 'axios';

const commonHeaders = {
  'Content-Type': 'application/json',
};

const getRequest = async (url: string, accessToken?: string) => {
  try {
    const headers = accessToken
      ? { ...commonHeaders, Authorization: 'Bearer ' + accessToken }
      : commonHeaders;
    const response = await axios.get(url, { headers: headers });

    return response;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export default getRequest;
