import { useState } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function handleChangeText(text) {
    setTask(text);
  }
  function handleAddTask() {
    setTaskItems((prevTasks) => [
      ...prevTasks,
      { text: task, id: Math.random().toString() },
    ]);
    setTask("");
    setModalVisible(false);
  }

  function deleteHandler(id) {
    setTaskItems((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  }

  function handleCancel() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Task" onPress={() => setModalVisible(true)} />
      {modalVisible && (
        <TaskInput
          handleChangeText={handleChangeText}
          handleAddTask={handleAddTask}
          handleCancel={handleCancel}
          modalVisible={modalVisible}
          task={task}
        />
      )}

      <View style={styles.taskList}>
        <FlatList
          data={taskItems}
          contentContainerStyle={{ padding: 20 }}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <TaskItem
                item={itemData.item}
                deleteHandler={deleteHandler}
                id={itemData.item.id}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  taskList: {
    flex: 4,
    width: "100%",
  },
});
