import * as SecureStore from 'expo-secure-store'
import axios from 'axios'
const URL = "https://powerful-reaches-89086.herokuapp.com/api/";
const getAuthToken = async () => {
  try {
    const result = await SecureStore.getItemAsync('userToken')
    if (result !== null) {
      return result
    }
    return ''
  } catch (e) {
    return ''
  }
}
const setAuthToken = async (key, save) => {
  await SecureStore.setItemAsync(key, save);
  return true;
}
const getUserAuthToken = async (path, params, method) => {
  try {
    var form_data = new FormData();

    for ( var key in params ) {
        form_data.append(key, params[key]);
    }
    const options = {
      url: URL+path,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      method,
      data: form_data,
    }

    return axios(options)
      .then((resp) => resp.data)
      .then((data) => data)
      .catch((error) => {
        return error;
      })
  } catch (error) {
    return error
  }
}
const api = async(path, params, method) => {
  try {
    token = await getAuthToken()
    console.log(token)
    var options = {};
    if(params !== null ){
       options = {
        url: URL+path,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+token,
        },
        method,
        body: JSON.stringify(params),
      }
    }else{
       options = {
        url: URL+path,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+token,
        },
        method
      }
    }
    
    return axios(options)
      .then((resp) => resp.data)
      .then((data) => data)
      .catch((error) => {
        console.log('error', error)
      })
  } catch (error) {
    return error
  }
}
export {getUserAuthToken};
export {setAuthToken};
export {api};