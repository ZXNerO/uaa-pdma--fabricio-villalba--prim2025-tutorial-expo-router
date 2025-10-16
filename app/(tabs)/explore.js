import { View, Text, StyleSheet, ScrollView } from 'react-native';
export default function Explore() {
    const categories = [
        { id: 1, emoji: '🎨', title: 'Arte', color: '#e74c3c' },
        { id: 2, emoji: '🎵', title: 'Música', color: '#9b59b6' },
        { id: 3, emoji: '📚', title: 'Libros', color: '#3498db' },
        { id: 4, emoji: '🎮', title: 'Juegos', color: '#2ecc71' },
        { id: 5, emoji: '🍕', title: 'Comida', color: '#f39c12' },
        { id: 6, emoji: '✈', title: 'Viajes', color: '#1abc9c' },
    ];
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Explorar Categorías</Text>
                <Text style={styles.headerSubtitle}>Descubre nuevos contenidos</Text>
            </View>
            <View style={styles.grid}>
                {categories.map((category) => (
                    <View
                        key={category.id}
                        style={[styles.card, { backgroundColor: category.color }]}
                    >
                        <Text style={styles.emoji}>{category.emoji}</Text>
                        <Text style={styles.cardTitle}>{category.title}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
    },
    header: {
        padding: 20,
        paddingTop: 10,
    },
    headerTitle: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#aaa',
        marginTop: 5,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    card: {
        width: '48%',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        margin: '1%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    emoji: {
        fontSize: 50,
        marginBottom: 10,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});