import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DeleteButton = ({ id, handleDelete }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleDelete(id)}>
      <Text style={styles.btnText}>삭제</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    margin: 10,
    borderRadius: 3
  },
  btnText: {
    color: 'white'
  }
});

export default DeleteButton;
