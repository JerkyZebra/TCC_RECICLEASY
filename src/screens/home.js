import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}> Bem vindo ao Recicleasy, seu aplicativo de sustentabilidade </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6fff7',
    },
    text: {
        color: '#006644',
        fontWeight: 'Bold',
    },
    Image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
})