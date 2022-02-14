import { Dimensions, Platform, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { field } from './field';

// @ts-ignore
import * as PANOLENS from 'panolens';

const html = `
  <body style="height: 300px">
    <script src="https://pchen66.github.io/js/three/three.min.js"></script>
    <script src="https://pchen66.github.io/js/panolens/panolens.min.js"></script>
    
    <script>
      let infospot = new PANOLENS.Infospot();
      infospot.position.set( 5000.00, -665.23, -3996.49 );
      infospot.addHoverText( 'The Where Is Bar' )
    
      const panorama = new PANOLENS.ImagePanorama("${field}");
      panorama.add(infospot);
      
      const viewer = new PANOLENS.Viewer( { output: 'overlay' } );
      viewer.add( panorama );
    </script>
  </body>
`;


export const HotSpot = () => {
  return (
    Platform.OS === 'web'
      ? <iframe
        width={Dimensions.get('screen').width}
        height={Dimensions.get('screen').height}
        srcDoc={html}
      />
      : <WebView
        style={styles.viewer}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        source={{ html }}
      />
  );
}

const styles = StyleSheet.create({
  viewer: {
    width: Dimensions.get('screen').width,
  },
});
