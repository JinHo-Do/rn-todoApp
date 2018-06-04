import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Todo extends Component {
  shouldComponentUpdate(nextProps) {
    const { title, complete } = this.props;
    return title !== nextProps.title || complete !== nextProps.complete;
  }

  render() {
    const { id, title, complete, backgroundColor, handleComplete, handleDelete } = this.props;

    return (
      <View style={backgroundColor ? [styles.container, styles.backgroundColor] : styles.container}>
        <Text style={styles.checkMark}>{complete ? 'V' : null}</Text>
        <Text style={styles.title} onPress={() => handleComplete(id)}>
          {title}
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => handleDelete(id)}>
            <Text style={styles.btnText}>삭제</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#FFFFFF'
  },
  backgroundColor: {
    backgroundColor: '#DDDDDD'
  },
  checkMark: {
    width: '10%',
    color: 'red',
    textAlign: 'center'
  },
  title: {
    flex: 5,
    paddingVertical: 10
  },
  btnContainer: {
    flex: 1
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    margin: 10
  },
  btnText: {
    color: 'white'
  }
});

export default Todo;
