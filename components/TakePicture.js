import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  StatusBar,
} from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

export default function TakePicture({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [permissionCamera, setPermissionCamera] = useState(false);
  const [permissionLibrary, setPermissionLibrary] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const camRef = useRef(null);

  useEffect(() => {
    const givePermissionAcessCamera = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermissionCamera(status === "granted");
    };

    const givePermissionAcessLibrary = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setPermissionLibrary(status === "granted");
    };
    givePermissionAcessCamera();
    givePermissionAcessLibrary();
  }, []);

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
    }
  }

  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
      .then(() => {
        alert("foto salva");
      })
      .catch((error) => {
        alert("error", error);
      });
  }

  if (permissionCamera === false && permissionLibrary === false) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.text}>Permissao nao concedida</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000000" />
        <View style={styles.optionsCamera}>
          <TouchableOpacity
            style={styles.buttonFlash}
            onPress={() => {
              setFlash(flash === FlashMode.off ? FlashMode.on : FlashMode.off);
            }}
          >
            <FontAwesome name="flash" size={50} color="#ffffff" />
            <Text>Flash</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonFlip}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <MaterialIcons
              name="flip-camera-android"
              size={50}
              color="#ffffff"
            />
            <Text>Inverter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={camRef}
        ></Camera>

        <TouchableOpacity
          style={styles.buttonCamera}
          onPress={() => takePicture()}
        >
          <FontAwesome name="camera" size={23} color="#FFF" />
        </TouchableOpacity>

        {capturedPhoto && (
          <Modal animationType="slide" visible={open} transparent={false}>
            <View style={styles.modal}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{ margin: 20 }}
                  onPress={() => setOpen(false)}
                >
                  <FontAwesome name="window-close" size={50} color="#ff0000" />
                </TouchableOpacity>

                <TouchableOpacity style={{ margin: 20 }} onPress={savePicture}>
                  <FontAwesome name="upload" size={50} color="#ff0000" />
                </TouchableOpacity>
              </View>

              <Image
                style={styles.imageModal}
                source={{ uri: capturedPhoto }}
                resizeMode="contain"
              />
            </View>
          </Modal>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  optionsCamera: {
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    flex: 0.3,
  },

  containerImage: {
    border: 1,
    borderColor: "red",
    backgroundColor: "red",
    height: 400,
  },

  imageModal: {
    width: "100%",
    height: "60%",
  },

  camera: {
    flex: 1,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    margin: 20,
  },

  buttonFlip: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderWidth: 2,
    borderColor: "black",
  },

  buttonFlash: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderWidth: 2,
    borderColor: "black",
  },

  buttonCamera: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AB4A04",
    margin: 20,
    borderRadius: 10,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
  },

  text: {
    fontSize: 18,
    color: "black",
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
