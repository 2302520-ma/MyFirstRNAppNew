import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import ActivityIndicatorExample from './ActivityIndicator';
import ButtonExample from './Button';
import FlatListExample from './FlatList';
import ImageExample from './Image';
import ImageBackgroundExample from './ImageBackground';
import KeyboardAvoidingViewExample from './KeyboardAvoidingView';

const ComponentList = {
  ActivityIndicator: ActivityIndicatorExample,
  Button: ButtonExample,
  FlatList: FlatListExample,
  Image: ImageExample,
  ImageBackground: ImageBackgroundExample,
  KeyboardAvoidingView: KeyboardAvoidingViewExample,
};

const App = () => {
  const [activeComponent, setActiveComponent] = useState('ActivityIndicator');
  
  const ActiveComponent = ComponentList[activeComponent];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Object.keys(ComponentList).map(componentName => (
            <TouchableOpacity
              key={componentName}
              style={[
                styles.button,
                activeComponent === componentName && styles.activeButton,
              ]}
              onPress={() => setActiveComponent(componentName)}>
              <Text
                style={[
                  styles.buttonText,
                  activeComponent === componentName && styles.activeButtonText,
                ]}>
                {componentName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Area for the active component to render */}
      <View style={styles.componentView}>
        {/* Render the selected component */}
        {ActiveComponent ? <ActiveComponent /> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    minHeight: 60, 
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#007AFF', 
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  buttonText: {
    color: '#333',
    fontWeight: '500',
  },
  activeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  componentView: {
    flex: 1,
  },
});

export default App;