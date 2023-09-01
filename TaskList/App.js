import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, StatusBar } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Task de Hoje</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
             return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item}/>
              </TouchableOpacity>
             )
            })
          }
        </View>
      </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Escreva sua Task'} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  items: {
    marginTop: 30,
  },
writeTaskWrapper: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},
input: {
  padding: 15,
  backgroundColor: '#FFF',
  borderRadius: 15,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
addText: {
  fontSize: 22
},
});
