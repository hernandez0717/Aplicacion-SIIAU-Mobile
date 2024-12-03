import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBook,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const Kardex = ({ route }) => {
  const [name, setName] = useState('');
  const [carrera, setCareer] = useState('');
  const [campus, setCampus] = useState('');
  const [ciclo, setCiclo] = useState('');
  const [userImage, setUserImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMaterias();
    getImage();
  }, []);

  const getImage = async () => {
    axios.get('http://148.202.152.33/cucei/fotoA.php?codigo=' + route.params.codigo)
      .then((response) => {
        setUserImage(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const fetchMaterias = async () => {
    const formdata = new FormData();
    formdata.append("codigo", route.params.codigo);
    formdata.append("nip", route.params.password);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch("http://148.202.152.33/cucei/alumnoH.php", requestOptions);
      const data = await response.json();
      setName(data.alumno);
      setCareer(data.carrera);
      setCiclo(data.ciclo);
      setCampus(data.campus);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <FontAwesomeIcon icon={faExclamationTriangle} size={50} color="#e53935" />
        <Text style={styles.errorText}>Error al cargar los datos: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#1E88E5", "#1565C0"]} style={styles.header}>
        <FontAwesomeIcon icon={faBook} size={40} color="#fff" />
        <Text style={styles.title}>Datos del Estudiante</Text>
      </LinearGradient>

      <View style={styles.imageContainer}>
        {userImage ? (
          <Image
            source={{ uri: userImage }}
            style={styles.userImage}
          />
        ) : (
          <Text style={styles.loadingText}>Cargando imagen...</Text>
        )}
      </View>

      <View style={styles.infoBox}>
        <View style={styles.infoPair}>
          <Text style={styles.infoText}>Nombre</Text>
          <Text style={styles.otherText}>{name}</Text>
        </View>
        <View style={styles.infoPair}>
          <Text style={styles.infoText}>Carrera</Text>
          <Text style={styles.otherText}>{carrera}</Text>
        </View>
        <View style={styles.infoPair}>
          <Text style={styles.infoText}>Ciclo</Text>
          <Text style={styles.otherText}>{ciclo}</Text>
        </View>
        <View style={styles.infoPair}>
          <Text style={styles.infoText}>Campus</Text>
          <Text style={styles.otherText}>{campus}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
  imageContainer: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginVertical: 20,
  },
  userImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  infoBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  infoPair: {
    alignItems: 'center',
    marginVertical: 10,
  },
  infoText: {
    fontSize: 20,
    color: "#1e88e5",
  },
  otherText: {
    fontSize: 15,
    color: "#333",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#1e88e5",
  },
  errorText: {
    marginTop: 10,
    fontSize: 16,
    color: "#e53935",
    textAlign: "center",
  },
});

export default Kardex;
