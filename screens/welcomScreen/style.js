import {StatusBar, Dimensions} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'

const {height} = Dimensions.get('window')
const topPadding = StatusBar.currentHeight + 18
export default ScaledSheet.create({
  container: {
    height: height,
    flex: 1,
    backgroundColor: '#121212',
    padding: '18@s',
    flexDirection: 'row',
    paddingTop: topPadding,
    // alignItems: 'center',
    // justifyContent:'center'
  },
  second: {
    marginLeft: '21@s',
  },
  icon: {
    height: '24@s',
    width: '24@s',
  },
  title: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20@s',
    lineHeight: '24@s',
    letterSpacing: '0.15@s',
    color: '#fff',
    opacity: 0.8,
  },
  messageContainer: {
    width: '276@s',
    height: '168@s',
    justifyContent: 'space-between',
    marginBottom: '36@s',
    marginTop: '21@s',
  },
  message: {
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: '16@s',
    lineHeight: '24@s',
    letterSpacing: '0.15@s',
    color: '#ffffff61', // colors.LABEL
    // opacity: 0.5,
  },
  plusIcon: {
    width: '20@s',
    height: '20@s',
    marginRight: '7@s',
  },
  btn: {
    width: '241@s',
    height: '48@s',
    borderColor: '#64B5F6',
    borderWidth: '1@s',
    borderRadius: '24@s',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '26@s',
  },
  btnOne: {
    backgroundColor: '#64B5F6',
    flexDirection: 'row',
  },
  btnText: {
    fontSize: '16@s',
    lineHeight: '24@s',
    letterSpacing: '0.15@s',
    opacity: 0.8,
    color: '#000',
  },
  btnTwoText: {
    color: '#fff',
  },
})
