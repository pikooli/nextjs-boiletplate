import { printFormData } from 'utils/printFormData';

const request = async (url: string, options: any) => {
  console.log(url, options);
  return await fetch(url, options).then((res) => {
    if (res.status === 401) {
      console.log('CODE ERROR 401');
    }
    if (res.status !== 200) {
      console.log(res.status);
    }
    return res;
  });
};

const createFormData = (body: any) => {
  const formData = new FormData();
  for (let k in body) {
    if (k === 'files') {
      body[k].forEach((e: File) => {
        formData.append(`files`, e);
      });
      continue;
    }
    if (Array.isArray(body[k])) {
      body[k].forEach((e: string, i: number) => {
        if (typeof body[k][i] === 'object')
          formData.append(`${k}[]`, JSON.stringify(body[k][i]));
        else formData.append(`${k}[]`, body[k][i]);
      });
      continue;
    }
    formData.append(k, body[k]);
  }
  return formData;
};

//
const urlWithParams = (url: string, params: Obj) => {
  if (!params) {
    return url;
  }
  let i = 0;
  for (let key in params) {
    url += i ? `&${key}=${params[key]}` : `?${key}=${params[key]}`;
    i++;
  }
  return url;
};

type requestParams = {
  url: string;
  method?: string;
  body?: Obj;
  params?: Obj;
};

//
const customFetch = async ({
  url,
  method = 'GET',
  params,
  body
}: requestParams) => {
  url = params ? urlWithParams(url, params) : url;
  const sendFile = body?.files?.length;
  const formData = sendFile ? createFormData(body) : null;
  const headers = sendFile ? undefined : { 'Content-Type': 'application/json' };
  // formData && printFormData(formData);
  return await request(url, {
    credentials: 'include',
    method,
    headers: headers,
    body: sendFile ? formData : JSON.stringify(body)
  }).then((res) => {
    return res;
  });
};

export default customFetch;
