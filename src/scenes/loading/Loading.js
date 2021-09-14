import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,FlatList,
} from 'react-native'
import { colors } from 'theme'
import Barcode from '../../components/Barcode'
import Package from '../../components/Package'

import styled from 'styled-components/native'
import { Image, LinearProgress } from 'react-native-elements';
import { images } from 'theme'
import {api} from '../../services/Api'

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${props => props.background };
  padding: 15px;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const Body = styled.View`
  flex: 2;
`;
const TextHeader = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
` 
const Loading = () => {
  const [showBarcode, setShowBarcode] = useState(false)
  const [packages, setPackages] = useState([]);
  const [loadingData, setLoadingData] = useState(false)
  async function  processCodeBar(barcode){
    setShowBarcode(false);
    setLoadingData(true);
    const data = await api("barcode/"+barcode.data,null,'GET');
    if(data.length > 0){
      var items = packages;
      if(data.length  == 1){
        items.push(data[0])
      }else{
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          items.push(element)

        }
      }
     
      setPackages(items);
      setLoadingData(false);
    }else{
      alert(`${barcode.data} NOT FOUND`)
      setLoadingData(false);

    }
    //alert(`Bar code with type ${barcode.type} and data ${barcode.data} has been scanned!`);

  }
  return (
    (showBarcode?<Barcode processCodeBar={processCodeBar}/>:
    <Container background={colors.blackPearl}>
      <Header>
        <View>
          <View>
            <TextHeader>Select or Scan a package</TextHeader>
            <TextHeader>Available Package</TextHeader>
          </View>
        </View>
        <View>
          <Image onPress={() => {setShowBarcode(true)}}source={images.barcode} style={{ width: 60, height: 60 }}/>
        </View>
      </Header>
      <Body>
      {
        (loadingData?<LinearProgress color="primary" />:null)
      }

        <FlatList
        data={packages}
        renderItem={({item,index})=> <Package key={index} data={item}  />}
        keyExtractor={item => item.id}
      />
      </Body>
    </Container>)
    
  )
}


Loading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Loading.defaultProps = {
  navigation: { navigate: () => null },
}

export default Loading
