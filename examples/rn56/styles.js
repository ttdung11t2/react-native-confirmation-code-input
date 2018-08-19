import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'red',
    fontSize: 16,
    fontWeight: '800',
    paddingVertical: 30,
  },
  wrapper: {},
  inputWrapper1: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#009C92',
  },
  inputWrapper2: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#E0F8F1',
  },
  inputWrapper3: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#2F0B3A',
  },
  inputLabel1: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
  },
  inputLabel2: {
    color: '#31B404',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },
  inputLabel3: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },

  //4 Example
  linearGradient4: {
    minHeight: 800,
  },
  inputWrapper4: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLabel4: {
    paddingTop: 100,
    paddingBottom: 10,
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
  },
  inputSubLabel4: {
    color: '#fff',
  },
  inputWrapStyle4: {
    height: 50,
    marginTop: 30,
  },
  input4: {
    height: 50,
    width: 40,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  input4NotEmpty: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  nextButton4: {
    marginTop: 100,
    width: 70,
    height: 70,
    borderRadius: 80,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonArrow4: {
    transform: [{ translateX: -3 }, { rotate: '45deg' }],
    borderColor: '#ff595f',
    width: 20,
    height: 20,
    borderWidth: 4,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  /////////////////////////////////////////////
  // Example 5
  linearGradient5: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    minHeight: 800,
  },

  inputLabel5: {
    paddingTop: 100,
    paddingBottom: 10,
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  inputSubLabel5: {
    color: 'rgba(255,255,255,.7)',
  },
  inputWrapStyle5: {
    height: 60,
    marginTop: 30,
  },
  input5: {
    height: 60,
    width: 60,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#030c31',
    fontSize: 30,
    fontWeight: '700',
  },
  input5NotEmpty: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  resetCode5: {
    marginTop: 25,
    color: '#4b5ba4',
  },
  nextButton5: {
    marginTop: 80,
    height: 70,
    borderRadius: 2,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText5: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
