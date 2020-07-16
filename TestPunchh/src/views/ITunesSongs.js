import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  ActivityIndicator,
} from 'react-native';

export default class ITunesSongs extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      serverData: [],
      fetching_from_server: false,
    };
    this.offset = 1;
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/search?term=demo&offset=' + this.offset)
      .then(response => response.json())
      .then(responseJson => {
        this.offset = this.offset + 1;
        this.setState({
          serverData: [...this.state.serverData, ...responseJson.results],
          loading: false,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  loadMoreData = () => {
    this.setState({ fetching_from_server: true }, () => {
      fetch('https://itunes.apple.com/search?term=demo&offset=' + this.offset)
          .then(response => response.json())
          .then(responseJson => {
            this.offset = this.offset + 1;
            this.setState({
              serverData: [...this.state.serverData, ...responseJson.results],
              fetching_from_server: false,
            });
          })
          .catch(error => {
            console.error(error);
          });
    });
  };
  
  renderFooter() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={this.loadMoreData}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {this.state.fetching_from_server ? (
            <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={{ width: '100%' }}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.serverData}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Text style={styles.text}>
                  {item.kind}
                </Text>
                <Text style={styles.text}>
                {item.collectionCensoredName}
                </Text>
                <Text style={styles.text}>
                {item.trackName}
                </Text>
                <Text style={styles.text}>
                {item.artistName}
                </Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={this.renderFooter.bind(this)}
            //Adding Load More button as footer component
            numColumns={2}   
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  item: {
    padding: 3,
    backgroundColor: '#eee',justifyContent:'center',alignContent: 'center',alignItems: 'center',width:'40%',
    margin: 20,flexDirection: 'column'
  },
  separator: {
    height: 0.5,
    backgroundColor: '#333',
  },
  text: {
    fontSize: 15,
    color: '#333',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#c0a',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});