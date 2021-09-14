import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
  View, StatusBar, TextInput, StyleSheet,
} from 'react-native'
import { colors } from 'theme'
import { Button, Header, Text } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { authenticate, saveMe } from 'slices/app.slice'
import InputText from '../../components/Input'
import {getUserAuthToken, setAuthToken} from 'services/Api';
const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.background};
  padding: 15px;
`

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { checked, loggedIn } = useSelector((state) => state.app)
  const [isRequired, setIsRequired] = useState(false)
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  async function isLogin(){
    if(email.length > 0 && password.length > 0){
      setLoading(true);
      const data = await getUserAuthToken('login',{email,password}, 'post')
      if(data.hasOwnProperty('error') ){
        alert(data.error)
      }else if(data.hasOwnProperty("success") && data.success.success){
        console.log(data)
        let userToken = await setAuthToken('userToken',data.success.token);
        if(userToken){
          dispatch(saveMe({ me: data.success.userdata}))
          dispatch(authenticate({ loggedIn: true, checked: true }))
        }
      }
    }else{
      setIsRequired(true)
    }
    
   
  }
  return (
    <SafeAreaProvider>
      <Container background={colors.blackPearl}>
        <View style={{ paddingBottom: 20, marginTop: 20 }}>
          <Text h1 h1Style={{ color: colors.white }}>Welcome!</Text>
        </View>
        <View style={{ marginBottom: 40 }}>
          <Text h4 h4Style={{ color: colors.white }}>Sign in to your account:</Text>
        </View>
        <View>
          <InputText name={'Email'} required={isRequired} onChangeText={(val)=> setEmail(val)} type="email" label="Email:" />
          <InputText name={'Password'}  required={isRequired} onChangeText={(val)=> setPassword(val)}  type="password" label="Password:" />
        </View>
        <View style={{ paddingBottom: 20, marginTop: 20 }}>
          <Text h4 h4Style={{ textAlign: 'right', color: colors.white }}>Forgot Password?</Text>
        </View>
        <View>
          {
            (loading?<Button loading  buttonStyle={{ backgroundColor: colors.green, borderRadius: 8 }} />
:<Button onPress={() => isLogin()} title="Login" buttonStyle={{ backgroundColor: colors.green, borderRadius: 8 }} />
)
          }
        </View>
      </Container>
    </SafeAreaProvider>
  )
}
Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Login.defaultProps = {
  navigation: { navigate: () => null },
}

export default Login
