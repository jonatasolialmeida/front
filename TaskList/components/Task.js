import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.trash}>
                <Text style={styles.textTrash}>X</Text>
            </View>
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
trash: {
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderColor: '#EF4646',
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
},
textTrash: {
    color: '#EF4646'

}

});

export default Task;