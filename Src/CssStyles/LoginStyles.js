import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#005bbb', // Azul UDG
  secondary: '#ff0000', // Rojo UDG
  background: '#ffffff', // Blanco
  textPrimary: '#414745', // Texto principal
  textSecondary: '#666666', // Texto secundario
};

export const LoginStyles = StyleSheet.create({
  CUCEIlogo: {
    width: 300,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
  },
  headerText: {
    position: 'relative',
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.textPrimary,
    marginTop: 40,
  },
  GoogleImage: {
    width: 60,
    height: 60,
    marginTop:30,
    alignSelf: 'center'
  },
  footerText: {
    color: colors.textSecondary,
    fontSize: 18,
    alignSelf:'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonSecondaryText: {
    color: colors.background,
  },
  input: {
    height: 40,
    borderColor: colors.textSecondary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: colors.textPrimary,
    marginVertical: 5,
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  footer: {
    backgroundColor: colors.primary,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
    alignItems: 'center',
  },
  
});
