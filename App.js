import { useState } from 'react';
import { Button, StyleSheet, ScrollView, Text, TextInput, View, FlatList, Image,Modal } from 'react-native';
import GoalItem from './components/GoalItem';
import InputView from './components/InputView';

export default function App() {
  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  function onChangeText(text) {
    setText(text);
  }
  function onPressButton(e) {
    if (text === '' || text === ' ' || text === null) return;
    setGoals(prev => [...prev, {
      id: Math.random(),
      text: text
    }]);
    setText('');
    setIsModalVisible(false);
  }

  function deleteGoal(id) {
    console.log(id);
    setGoals(prev => {
      return goals.filter((e) => e.id !== id)
    })
  }
  return (
    <View style={styles.appContainer}>
      <View style={{marginBottom: 12} }>
        <Button color="black" title="+" onPress={() => setIsModalVisible(prev => !prev)} />
      </View>
      <Modal visible={isModalVisible} animationType='slide'>
        <InputView
          setIsModalVisible={setIsModalVisible}
          onChangeText={onChangeText}
          text={text}
          onPressButton={onPressButton}
        />
      </Modal>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem deleteGoal={deleteGoal} itemData={itemData} />
            )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1

  },
  goalsContainer: {
    flex: 5
  },
  h1: {
    fontSize: 50,

  }
});
