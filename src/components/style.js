import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  row: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
  },

  imageAlign: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },

  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 30,
    textTransform: 'capitalize',
  },

  textSubtitle: {
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  text: {
    fontSize: 20,
    textTransform: 'capitalize',
  },

  textBold: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  textButton: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    textTransform: 'capitalize',
  },

  textAlign: {
    fontSize: 15,
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingVertical: 40,
  },

  buttonStyle: {
    height: 50,
    backgroundColor: '#F1B140',
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 35,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },

  buttonAlign: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#F1B140',
    borderRadius: 25,
    lineHeight: 50,
    minWidth: 150,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
});

export default styles;
