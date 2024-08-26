import React from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const AddTodo = () => {
  const [todoText, setTodoText] = React.useState("");

  const handleAddTodo = () => {
    // Logic to add the todo
    console.log("Todo added:", todoText);
    setTodoText("");
  };

  return (
    <View>
      <TextInput label="Todo" value={todoText} onChangeText={setTodoText} />
      <Button mode="contained" onPress={handleAddTodo}>
        Add Todo
      </Button>
    </View>
  );
};

export default AddTodo;
