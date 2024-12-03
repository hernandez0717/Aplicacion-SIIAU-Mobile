import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Keyboard,
  Alert,
  ImageBackground,
  Animated,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../Api/supabase';
import { DEFAULT_X_LABELS_HEIGHT_PERCENTAGE } from 'react-native-chart-kit/dist/AbstractChart';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        Animated.timing(translateY, {
          toValue: -100,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    validateFields();
  }, [email, password]);

  const validateFields = () => {
    const isEmailValid = email.length == 9;
    const isPasswordValid = password.length >= 6;
    setIsButtonEnabled(isEmailValid && isPasswordValid);
    //setIsButtonEnabled(true);
  };

  const handleLogin = async () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(xhttp.responseText); // Asegúrate de parsear la respuesta JSON
        //console.log(datos.tipoUsuario);
        if (datos.tipoUsuario) {
          navigation.navigate('Menu', { codigo: email, password: password });
        } else {
          Alert.alert('Error', 'Código o contraseña incorrectos. Verifique los datos e intentelo de nuevo.');
        }
      }
    }

    xhttp.open("GET", "http://148.202.152.33/cucei/credenciales.php?codigo=" + email + "&nip=" + password);
    xhttp.send();
  };

  return (
    <ImageBackground
      source={require('../Src/Imgs/Imgs/9211402.png')}
      style={styles.backgroundImage}
    >
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY }] }
        ]}
      >
        <View style={styles.card}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../Src/Imgs/Imgs/log_udg.png')}
              style={styles.logo}
            />
          </View>

          <Text style={styles.title}>Iniciar Sesión</Text>

          <View style={styles.inputContainer}>
            <FontAwesomeIcon icon={faUser} size={20} color="#1E88E5" />
            <TextInput
              style={styles.input}
              placeholder="Código"
              keyboardType="numeric"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesomeIcon icon={faLock} size={20} color="#1E88E5" />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size={20} color="#1E88E5" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.button, isButtonEnabled ? styles.buttonEnabled : styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={!isButtonEnabled}
          >
            <LinearGradient
              colors={isButtonEnabled ? ['#1E88E5', '#1565C0'] : ['#90CAF9', '#64B5F6']}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoContainer: {
    width: 140,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1E88E5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    borderColor: '#1E88E5',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    color: '#333',
  },
  button: {
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonEnabled: {
    opacity: 1,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
    color: '#1E88E5',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
