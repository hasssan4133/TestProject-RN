import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    marginTop: 20,

    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
  },
  backButtonText: {
    fontSize: 18,
  },
  basketContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  basketText: {
    fontSize: 18,
  },
  headerTextstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: 30,
  },
});

export default styles;
