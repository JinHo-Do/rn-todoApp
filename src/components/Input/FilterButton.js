import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilterButton = ({ children, onPress, filter }) => {
  const filterTextStyle = (() => {
    if (children === 'All' && filter.all) {
      return [styles.flilterText, styles.onFilter];
    } else if (children === 'Complete' && filter.complete) {
      return [styles.flilterText, styles.onFilter];
    } else if (children === 'Active' && !filter.all && !filter.complete) {
      return [styles.flilterText, styles.onFilter];
    }

    return styles.flilterText;
  })();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={filterTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  flilterText: {
    color: 'black'
  },
  onFilter: {
    fontWeight: 'bold'
  }
});

export default FilterButton;
