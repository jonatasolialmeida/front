import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

item: {
    backgroundColor: '#3B3B3B',
    padding: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    maxWidth: '85%',
    color: '#FFF'
},
});

export default Task;