import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'
import ListItem from './src/components/ListItem'
import { bindActionCreators } from 'redux';
import addPlace from './src/actions/places';

class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.addPlace(this.state.placeName);
  }


  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });
  }


  placesOutput = () => {
    return (
      <FlatList style={styles.listContainer}
        data={this.props.places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => (
          <ListItem
            placeName={info.item.value}
          />
        )}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Seach Places"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler} />

          <Button title='Add'
            style={styles.placeButton}
            onPress={this.placeSubmitHandler} />
        </View>
        <View style={styles.listContainer}>
          {this.placesOutput()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(addPlace, dispatch)
  // return {
  //   add: (name) => { dispatch(addPlace(name)) }
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor:'white'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});
