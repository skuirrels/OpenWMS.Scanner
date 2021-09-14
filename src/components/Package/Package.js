import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
  View,Text
} from 'react-native'
import styled from 'styled-components/native'

const ContainerPackage = styled.View`
  background-color: #2E3539;
  flex-direction: row;
  margin-bottom: 10px;
  border-radius: 8px;
  padding:0px;
`;
const Border = styled.View`
  width: 15px;
  background-color: ${props => props.color };
  border-radius:8px;
`;
const ContainerInfo = styled.View`
  flex-direction: row;
  padding-top: 2px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 0px;
`;
const TextContent = styled.Text`
  font-size: 14px;
  margin-bottom: 0px;
  color: white;
` 
const TextStatus = styled.Text`
  font-size: 16px;
  margin-bottom: 0px;
  color: white;
  color: ${props => props.color}
` 
const Item = styled.View`
  width: 50%;
`;
const Package = ({data}) => {
  const [colorPackage, setColorPackage] = useState({
    border: '#777777',
    text: '#fff'
  })
  useEffect(() => {
    switch (data.status) {
      case 'Pending':
        setColorPackage({
          border: '#777777',
          text: '#fff'
        })
      break;
      case 'In Progress':
        setColorPackage({
          border: '#CC5F38',
          text: '#C2603D'
        })
      break;
      case 'In Storage':
        setColorPackage({
          border: '#35A565',
          text: '#21AC16'
        })
      break;
      default:
        break;
    }
  }, [data])
return (
  <ContainerPackage >
    <Border color={colorPackage.border} />
    <View style={{paddingTop: 5, paddingBottom: 5}} >
      <ContainerInfo>
        <Item>
            <TextContent>Package Number:</TextContent>
        </Item>
        <Item>
            <TextContent>{data.number }</TextContent>
        </Item>
      </ContainerInfo>
      <ContainerInfo>
        <Item> 
            <TextContent>Package Type:</TextContent>
        </Item>
        <Item>
            <TextContent>{data.type }</TextContent>
        </Item>
      </ContainerInfo>
      <ContainerInfo>
        <Item>
            <TextContent>Weight:</TextContent>
        </Item>
        <Item>
            <TextContent>{data.weight }</TextContent>
        </Item>
      </ContainerInfo>
      <ContainerInfo>
        <Item>
            <TextContent>Volume:</TextContent>
        </Item>
        <Item>
            <TextContent>{data.volumen }</TextContent>
        </Item>
      </ContainerInfo>
      <ContainerInfo>
        <Item>
            <TextContent>Status:</TextContent>
        </Item>
        <Item>
            <TextStatus color={colorPackage.text} >{data.status }</TextStatus>
        </Item>
      </ContainerInfo>
    </View>
    
  </ContainerPackage>
)
}
export default Package
