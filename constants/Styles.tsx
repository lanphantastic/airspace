import Colors from '@/constants/Colors'
import { StyleSheet } from 'react-native'

export const defaultStyles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: Colors.light.primary,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
  },
  btnIcon: {
    left: 16,
    position: 'absolute',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'mon-b',
  },
  container: {
    flex: 1,
    backgroundColor: '#FDFFFF',
  },
  footer: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.light.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  inputField: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
})
