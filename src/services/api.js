import axios from 'axios';
import StorageUtils from '../helpers/StorageUtils';

const defaultURL = "http://demo9824724.mockable.io/";

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  "Access-Control-Allow-Origin": "my-authorized-proxy-or-domain",
  "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
}

const create = (baseUrl = null) => {
  const api = axios.create({
    baseURL: (baseUrl === null ? defaultURL : baseUrl),
    timeout: 60000,
  });

  const sendGet = (path, options = {headers: headers}) => (
    api.get(path, options)
      .then((response) => {
        const { code } = response.data || {};
        if (code === 503) {
          throw response;
        } else {
          return response;
        }
      })
  );

  const generateGet = (path, params = null) => {
    const options = {
      headers: {
        ...headers,
        Authorization: `Bearer ${StorageUtils.getToken()}`,
        params,
      },
    };
    return sendGet(path, options);
  };

    const questions = () => generateGet('/imgs_answers')

  return {
    questions,
  };
};

export default {
  create,
};

