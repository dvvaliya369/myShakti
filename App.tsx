/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StyleSheet } from 'react-native';

import WebView from 'react-native-webview';

const App = () => {
  const html = `<body style="margin:0; height: 100%;  width:100%;">
        <div style="display: flex; align-items: center; justify-content: center; position:relative; width:100%; height: 100%;">
         <meta name="viewport" content="width:100%,user-scalable=0" />
            ${"<iframe style='width: 50%; height:50%;  scale: 2; background-color: #fff;' src='https://myshakti.ai' seamless='seamless' scrolling='yes' frameborder='0' allowtransparency='true' allowfullscreen></iframe>"}
        </div>
    </body>`;

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{html: html}}
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

