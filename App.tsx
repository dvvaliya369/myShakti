/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StyleSheet } from 'react-native';

import React from 'react';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://myshakti.ai'}}
        originWhitelist={['*']}
        overScrollMode="never"
        useWebKit={false}
        onMessage={() => {}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});

export default App;
