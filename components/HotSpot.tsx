import { Dimensions, StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { WebView } from 'react-native-webview';

export default function HotSpot() {
  return (
    <View>
      <WebView
        style={styles.viewer}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        source={{ html: `hello`}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewer: {
    width: Dimensions.get('screen').width,
  },
});
