import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

function TaskInput({
  handleChangeText,
  handleAddTask,
  handleCancel,
  task,
  modalVisible,
}) {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={{ width: 100, height: 100, marginBottom: 20 }}
          source={require("../assets/images/output-onlinepngtools (1).png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your Task"
          onChangeText={handleChangeText}
          value={task}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Task" onPress={handleAddTask} />
          <Button title="Cancel" onPress={handleCancel} />
        </View>
      </View>
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "80%",
    borderRadius: 8,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    flex: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    marginTop: 20,
  },
});
