export default styles;
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#ddd',
    padding: 20,
  },
  displayText: {
    fontSize: 40,
    color: '#000',
  },
  resultText: {
    fontSize: 24,
    color: '#666',
  },
  buttonsContainer: {
    flex: 2,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    flex: 1,
    margin: 5,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },

});

export default styles;
