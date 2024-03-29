import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, StatusBar, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Task from './components/Task';
import Header from './components/Header';

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
      <Header />
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {
          taskItems.map((item, index) => {
            return (
              <View style={styles.taskWrapper}>
                <View style={styles.items}>
                  <Task text={item} />
                </View>
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <View style={styles.trash}>
                    <MaterialCommunityIcons name="trash-can-outline" size={20} color="#FFF" />
                  </View>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Escreva sua Tarefa'} value={task} onChangeText={text => setTask(text)} />
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
    backgroundColor: '#171717',
  },
  taskWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  items: {
    width: '90%',
    marginTop: 20,
  },
  writeTaskWrapper: {
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    backgroundColor: '#20C3D9',
    borderRadius: 15,
    borderColor: '#2F2F2F',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#3B3B3B',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2F2F2F',
    borderWidth: 1,
  },
  addText: {
    fontSize: 22,
    color: '#20C3D9'
  },
  scroll: {
    flex: 1
  },
  trash: {
    width: '100%',
    backgroundColor: '#EF4646',
    padding: 15,
    marginTop: 20,
    borderColor: '#EF4646',
    borderWidth: 1.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
