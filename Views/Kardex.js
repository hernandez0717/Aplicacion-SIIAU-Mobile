import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBook,
  faGraduationCap,
  faKey,
  faHashtag,
  faCalendarAlt,
  faLayerGroup,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";

const Kardex = ({ route }) => {
  const [materias, setMaterias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMaterias();
  }, []);

  const fetchMaterias = async () => {
    const formdata = new FormData();
    formdata.append("codigo", route.params.codigo); // Use route.params to get passed parameters
    formdata.append("nip", route.params.password); // Use route.params to get passed parameters

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch("http://148.202.152.33/cucei/alumnoH.php", requestOptions);
      const data = await response.json();
      setMaterias(data.horario);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const MateriaItem = ({ materia }) => (
    <View style={styles.materiaContainer}>
      <Text style={styles.materiaTitle}>{materia.nombre_materia}</Text>
      <View style={styles.infoContainer}>
        <InfoItem icon={faStar} label="Profesor" value={materia.profesor} />
        <InfoItem icon={faKey} label="Clave" value={materia.clave_materia} />
        <InfoItem icon={faHashtag} label="CRN" value={materia.crn} />
        <InfoItem icon={faCalendarAlt} label="Inicio" value={materia.fecha_inicio} />
        <InfoItem icon={faCalendarAlt} label="Fin" value={materia.fecha_fin} />
        <InfoItem icon={faLayerGroup} label="Sección" value={materia.seccion} />
        <InfoItem icon={faClock} label="Horario" value={materia.horario} />
        <InfoItem icon={faStar} label="Créditos" value={materia.creditos} />
        <InfoItem icon={faStar} label="Edificio" value={materia.edificio} />
        <InfoItem icon={faStar} label="Aula" value={materia.aula} />
      </View>
    </View>
  );

  const InfoItem = ({ icon, label, value }) => (
    <View style={styles.infoItem}>
      <FontAwesomeIcon icon={icon} size={16} color="#1e88e5" />
      <Text style={styles.infoText}>
        <Text style={styles.infoLabel}>{label}:</Text> {value}
      </Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#1e88e5" />
        <Text style={styles.loadingText}>Cargando datos...</Text>
      </View>
    );
  }

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
        <Text style={styles.title}>Horario</Text>
      </LinearGradient>
      {materias.map((materia, index) => (
        <MateriaItem key={index} materia={materia} />
      ))}
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
  materiaContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  materiaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e88e5",
    marginBottom: 10,
  },
  infoContainer: {
    marginTop: 5,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
  },
  infoLabel: {
    fontWeight: "bold",
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
