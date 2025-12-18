import { View, StyleSheet, Text, Pressable } from "react-native";

function TaskItem({ item, deleteHandler, id }) {
  return (
    <Pressable
      onPress={deleteHandler.bind(this, id)}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
    >
      <View style={style.individualTask}>
        <Text style={style.taskText}>{item.text}</Text>
      </View>
    </Pressable>
  );
}

export default TaskItem;

const style = StyleSheet.create({
  individualTask: {
    backgroundColor: "#aa538cff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
    color: "#fff",
  },
});
