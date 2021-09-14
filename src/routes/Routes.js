import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from 'slices/app.slice'
import * as SecureStore from 'expo-secure-store'
import Main from './navigation'
import Login from './navigation/login'


const Routes = () => {
  const { checked, loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const validateToken = useCallback( async() =>{

    let token = await getAuthToken()
    if (token== '') {
      dispatch(authenticate({ loggedIn: false, checked: false }))
    } else {
     dispatch(authenticate({ loggedIn: true, checked: true }))
    }
  },[])
  async function getAuthToken() {
    try {
      let result = await SecureStore.getItemAsync('userToken')
      console.log(result)
      if (result) {
        return result
      }
      return ''
    } catch (e) {
      return ''
    }
  }
  useEffect( () => {
    validateToken();
  }, [])

  // rendering
  if (!checked) return <Login />
  return <Main />
}

export default Routes
