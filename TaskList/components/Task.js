import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({

item: {
    backgroundColor: '#3B3B3B',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 10,
},
itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
},
square: {
    width: 24,
    height: 24,
    backgroundColor: '#20C3D9',
    borderRadius: 5,
    marginRight: 15,
},
itemText: {
    maxWidth: '80%',
    color: '#FFF'
},
circular: {
    width: 12,
    height: 12,
    borderColor: '#20C3D9',
    borderWidth: 2,
    borderRadius: 5,
},

});

export default Task;