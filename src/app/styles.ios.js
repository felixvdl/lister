import { StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  input: {
    height: 20,
    top: 40,
    left : 80,
    width: 130,
  },
  box: {
    backgroundColor: '#2b4163',
    width: 20,
    height: 20,
    position: 'absolute',
    top: 40,
    left: 30,
    borderRadius: 30
  },
  buttonText: {
    color: '#2b4163',
    fontSize: 12,
  },
  button: {
    borderWidth: 1,
    borderColor: '#2b4163',
    padding: 2,
    width: 50,
    borderRadius: 7,
    left: 240,
    top: 20
  },
  listItems: {
    top: 80,
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    left: 10

  },
  itemBox: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    padding: 10,
  },
  itemComplete: {
    width: 50,
    height: 10,
    left: 240
  },
  notDone: {
    fontSize: 11,
    fontWeight: 'bold'
  },
  done: {
    textDecorationLine: 'line-through',
    fontSize: 11,
    fontWeight: 'bold',
    color: 'lightgrey'
  },
  optionText: {
    fontSize: 10
  },
  itemDelete: {
    width: 50,
    height: 10,
    left: 290
  }
})
