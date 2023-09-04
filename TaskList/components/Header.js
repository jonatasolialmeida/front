import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <>
        <View style={styles.header}>
        <Text style={styles.sectionTitle}>Tarefas de Hoje</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#20C3D9',
        marginTop: 30,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#022529',
      },
    
});

export default Header;