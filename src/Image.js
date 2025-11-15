import { Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

    const DisplayAnImage = () => (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://t4.ftcdn.net/jpg/05/27/02/73/360_F_527027324_6NfPWu1FrTgxkRB6zpw7NK9WnqhFK1cY.jpg',
                    }}
                />
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://images.fineartamerica.com/images-medium-large-5/blue-butterfly-square-carol-groenen.jpg',
                    }}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );

export default DisplayAnImage;