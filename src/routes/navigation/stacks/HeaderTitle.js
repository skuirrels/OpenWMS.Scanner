import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from 'theme'

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
  text: {
    color: colors.white,
  },
})

const HeaderTitle = () => <Text style={styles.text}>Demo App</Text>

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
