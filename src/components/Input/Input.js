import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
  View, StatusBar, Text, TextInput, StyleSheet,
} from 'react-native'
import { colors } from 'theme'
import { Input, Header } from 'react-native-elements'
import styled from 'styled-components/native'

const InitWindowStyles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  rowContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    backgroundColor: colors.ShadesGunMetal,
    borderRadius: 4,
    marginBottom: 10,
  },
  text: {
    flex: 0.4,
    color: '#cdcd',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 0.6,
    borderColor: 'black',
    color: colors.white,
    fontSize: 20,
  },
})
const LabelErrorMessage = styled.Text`
  color: red;
  font-size: 14px;
`;
const ContainerErrorMessage = styled.View`
  margin-bottom: 15px;
  margin-top: -5px;
`;
const InputText = (props) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const validateEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
}
  const Validate = (text) =>{
    if(props.required){
      if(text.length == 0){
        setErrorMessage(props.name+" must not be empty")

      }else {
        switch (props.type) {
          case 'email':
            if(validateEmail(text) == false){
              setErrorMessage("Please enter a valid email address")
            }else{
              setErrorMessage('');
            }
            break;
          
          default:
            if(props.required){
              if(text.length == 0){
                setErrorMessage(props.name+" must not be empty")
              }
            } 
            break;
        }
       
      }
    } 
    props.onChangeText(text);
  }
  useEffect(() => {
    if(props.required){
      Validate(value);

    }
  }, [props.required])
return (<>
  <View style={InitWindowStyles.rowContainer}>
    <Text style={InitWindowStyles.text}>{props.label}</Text>
    <TextInput
      autoCorrect={false}
      onChangeText={text=> Validate(text)}
      value={props.value}
      secureTextEntry={props.type!="password"?false:true}
      style={InitWindowStyles.textInput}
    />
    
  </View>
 
  {
      errorMessage.length>0? <ContainerErrorMessage><LabelErrorMessage>{ errorMessage }</LabelErrorMessage></ContainerErrorMessage>:null
    }
</>)
}
export default InputText
