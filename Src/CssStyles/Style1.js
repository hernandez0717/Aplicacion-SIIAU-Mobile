import { StyleSheet } from 'react-native';

export const Style1 = StyleSheet.create({
    mainLogoImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
        width: 180,
        height: 180,
        alignSelf: 'center',
        borderColor: 'black',
        overflow: 'hidden',
        resizeMode: 'contain',
    },
    titleSpace: {

    },
    body: {
        backgroundColor: '#3498db',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: '0 auto',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    titleWindow: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        paddingVertical: 240,
        borderRadius: 10,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#2ecc71',
        padding: 10,
        color: 'white',
        textAlign: 'center',
        borderRadius: 5,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        fontWeight: 'bold',
    },
    buttonHover: {
        backgroundColor: '#27ae60',
    },
    fadeIn: {
        opacity: 0,
        animation: 'fadeIn 2s forwards',
    },
    '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },

    TextInputter: {
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',  // Cambiado a un color gris claro
        borderRadius: 5,
        backgroundColor: '#f9f9f9'
    },

    VisibleButton: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
        width: 20,
        height: 20,
        alignSelf: 'center',
        borderColor: 'black',
        overflow: 'hidden',
        resizeMode: 'contain',
        opacity: .75,
    },

    userImage: {
        alignSelf: 'center',
        borderWidth: 1.5,
        width: 90,
        height: 90,
        borderRadius: 100,
    },
});



