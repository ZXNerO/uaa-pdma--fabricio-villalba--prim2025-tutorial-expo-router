import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.emoji}>🏠</Text>
                <Text style={styles.title}>¡Bienvenido!</Text>
                <Text style={styles.subtitle}>Esta es tu página de inicio</Text>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>24</Text>
                    <Text style={styles.statLabel}>Proyectos</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>152</Text>
                    <Text style={styles.statLabel}>Tareas</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>8</Text>
                    <Text style={styles.statLabel}>Equipos</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#1a1a1a',
        borderRadius: 20,
        padding: 40,
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
        maxWidth: 400,
    },
    emoji: {
        fontSize: 60,
        marginBottom: 15,
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#aaa',
        textAlign: 'center',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        maxWidth: 400,
    },
    statBox: {
        backgroundColor: '#1a1a1a',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    statNumber: {
        fontSize: 28,
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
});