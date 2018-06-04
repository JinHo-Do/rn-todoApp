import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FilterButton from './FilterButton';

class Filter extends Component {
  shouldComponentUpdate(nextProps) {
    const { filter } = this.props;
    return filter.all !== nextProps.filter.all || filter.complete !== nextProps.filter.complete;
  }

  render() {
    const { filter, onListAll, onListComplete, onListActive } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.dummy} />
        <View style={styles.buttons}>
          <FilterButton filter={filter} onPress={onListAll}>
            All
          </FilterButton>
          <FilterButton filter={filter} onPress={onListComplete}>
            Complete
          </FilterButton>
          <FilterButton filter={filter} onPress={onListActive}>
            Active
          </FilterButton>
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  dummy: {
    flex: 1
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default Filter;
