import { View, Text, StyleSheet, ScrollView } from 'react-native';
export default function Profile() {
    const achievements = [
        { id: 1, icon: '🏆', title: 'Primera meta', desc: 'Completaste tu primerproyecto' },
        { id: 2, icon: '⭐', title: 'Estrella ascendente', desc: 'Alcanzaste 10 proyectos' },
        { id: 3, icon: '🎯', title: 'Enfocado', desc: 'Completaste 50 tareas' },
    ];
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>👤</Text>
                </View>
                <Text style={styles.name}>Juan Pérez</Text>
                <Text style={styles.email}>juan@ejemplo.com</Text>
                <Text style={styles.role}>Desarrollador</Text>
            </View>
            <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Estadísticas</Text>
                <View style={styles.statsRow}>
                    <View style={styles.stat}>
                        <Text style={styles.statValue}>142</Text>
                        <Text style={styles.statLabel}>Seguidores</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statValue}>89</Text>
                        <Text style={styles.statLabel}>Siguiendo</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statValue}>24</Text>
                        <Text style={styles.statLabel}>Posts</Text>
                    </View>
                </View>
            </View>
            <View style={styles.achievementsSection}>
                <Text style={styles.sectionTitle}>Logros</Text>
                {achievements.map((achievement) => (
                    <View key={achievement.id} style={styles.achievementCard}>
                        <Text style={styles.achievementIcon}>{achievement.icon}</Text>
                        <View style={styles.achievementInfo}>
                            <Text style={styles.achievementTitle}>{achievement.title}</Text>
                            <Text style={styles.achievementDesc}>{achievement.desc}</Text>
                        </View>
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
    profileHeader: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#1a1a1a',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    avatarText: {
        fontSize: 50,
    },
    name: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    role: {
        fontSize: 16,
        color: '#4CAF50',
        marginTop: 10,
        fontWeight: '600',
    },
    infoSection: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1a1a1a',
        borderRadius: 15,
        padding: 20,
    },
    stat: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 24,
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
    },
    achievementsSection: {
        padding: 20,
        paddingTop: 0,
    },
    achievementCard: {
        flexDirection: 'row',
        backgroundColor: '#1a1a1a',
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
    },
    achievementIcon: {
        fontSize: 40,
        marginRight: 15,
    },
    achievementInfo: {
        flex: 1,
    },
    achievementTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    achievementDesc: {
        fontSize: 14,
        color: '#888',
        marginTop: 3,
    },
});