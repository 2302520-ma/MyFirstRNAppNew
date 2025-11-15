import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Import all your component examples
import ActivityIndicatorExample from './ActivityIndicator';
import ButtonExample from './Button';
import { default as FlatListExample, default as ImageExample } from './Image'; // Note: I used Image just to have a component since I don't have FlatList code. You should use './FlatList'
import ImageBackgroundExample from './ImageBackground';
import KeyboardAvoidingViewExample from './KeyboardAvoidingView';
import ModalExample from './Modal';

// List of all component examples to be displayed
const ComponentList = { 
  ActivityIndicator: ActivityIndicatorExample,
  Button: ButtonExample,
  // Note: If FlatListExample truly renders a FlatList, it may need special handling (like fixed height)
  // when placed inside a parent ScrollView. For this example, I'll assume it works okay.
  FlatList: FlatListExample,
  Image: ImageExample,
  ImageBackground: ImageBackgroundExample,
  KeyboardAvoidingView: KeyboardAvoidingViewExample,
  Modal: ModalExample,
};

// Component to render a title and the component example itself
const ComponentSection = ({ title, Component }) => (
  <View style={sectionStyles.section}>
    <Text style={sectionStyles.title}>--- {title} ---</Text>
    <View style={sectionStyles.componentContainer}>
      <Component />
    </View>
  </View>
);

const App = () => {
  // The state (activeComponent and setActiveComponent) and button logic are no longer needed
  // since all components will be displayed at once.

  return (
    <SafeAreaView style={styles.container}>
      {/* The main ScrollView allows scrolling through all content */}
      <ScrollView style={styles.scrollViewContent}>
        <Text style={styles.header}>React Native Component Showcase</Text>
        
        {/* Iterate over the ComponentList and render each section */}
        {Object.entries(ComponentList).map(([name, Component]) => (
          <ComponentSection 
            key={name}
            title={name}
            Component={Component}
          />
        ))}

        <View style={styles.footerSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Styles ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  footerSpacer: {
    // Adds a bit of space at the bottom for better scrolling visibility
    height: 50, 
  }
});

const sectionStyles = StyleSheet.create({
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
    textAlign: 'center',
  },
  componentContainer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});

export default App;