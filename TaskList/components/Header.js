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
        height: 70,
        backgroundColor: '#20C3D9',
        marginVertical: 30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#022529',
      },
    
});

export default Header;