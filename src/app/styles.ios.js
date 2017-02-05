import { StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 20,
    top: -10,
    left : 130
  },
  box: {
    backgroundColor: 'steelblue',
    width: 30,
    height: 30,
    position: 'absolute',
    top: 20,
    left: 30,
    borderRadius: 30
  },
  buttonText: {
    color: 'steelblue',
    fontSize: 34,
  },
  button: {
    borderWidth: 1,
    borderColor: 'steelblue',
    padding: 5,
    borderRadius: 7
  }
})
