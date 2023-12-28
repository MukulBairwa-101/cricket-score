import { useState } from "react";

import axios from "axios";

const useHelper = () => {
  const { REACT_APP_API_BASE_URL, REACT_APP_API_KEY } = process.env;
  const [response, setResponse] = useState(null);

  const request = (method, path, apiParams, data, head) => {
    let url = `${REACT_APP_API_BASE_URL}${path}?apikey=${REACT_APP_API_KEY}`;
    let headers = { ...head };

    if (apiParams?.status) {
      url += `&${apiParams.key}=${apiParams?.value}`;
    }

    const config = {
      method,
      headers,
      url,
      data,
    };
    axios(config)
      .then(async (res) => {
        setResponse(res.data);
      })
      .catch((err) => {});
  };

  return { request, response };
};

export default useHelper;
