import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "white",
  },
  resultText: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right",
  },
  historyText: {
    color: 'black',
    fontSize: 35,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: 'white'
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
    minHeight: 80,
    flex: 10,
    borderColor: 'white'
  },
  textButton: {
    color: "#E34243",
    fontSize: 20,
  },
});