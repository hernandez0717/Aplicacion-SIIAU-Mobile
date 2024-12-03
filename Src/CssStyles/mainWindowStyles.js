import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#005bbb', // Azul UDG
  secondary: '#ff0000', // Rojo UDG
  background: '#ffffff', // Blanco
  textPrimary: '#414745', // Texto principal
  textSecondary: '#666666', // Texto secundario
  viewColorRound: '#808080'
};

export const MainWindowStyles = StyleSheet.create({
  CUCEIlogo: {
    width: 250,
    height: 50,
    alignSelf: 'center',
    marginTop: -120,
  },
  headerText: {
    position: 'relative',
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.textPrimary,
    marginTop: 40,
  },
  PersonLogo: {
    width: 40,
    height: 40,
    marginTop: 140,
    marginLeft: 330,
  },

  WeaterView: {
    width: 80,
    height: 80,
    marginLeft: 40,
    marginTop: 20,
    borderWidth: 0,
    borderRadius: 20,
    borderColor: colors.viewColorRound,
  },

  WeaterIcon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginTop:7,
    borderWidth: 0,
  },
  WeaterText: {
    color: colors.textSecondary,
    fontSize: 19,
    alignSelf: 'center',
  },
  IconStyle: {
    alignSelf: 'center',
    height:70,
    width:70,
    marginTop:25,
  },
  TextBoxStyle: {
    alignSelf: 'center',
    marginTop: 3,
    fontSize: 13,
  },
  EstiloAscoXd: {
    marginTop:20,

  },  
});
