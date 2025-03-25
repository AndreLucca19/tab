import React from "react"; 
import { View, Text } from "react-native"; 

export default function TabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página</Text>
        </View>
    );
}


const styles = {
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "gradiant (0, 0, 0, 2, 0, 0, 0, 1)",
    },
    title: {
        fontSize: 30, 
    },
};