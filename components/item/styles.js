import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const IMAGE_SIZE = width * 0.3;

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    imageContainer: {
        width: width * 0.3 - 20,
        justifyContent: 'center',
    },
    image: {
        width: width * 0.3 - 20,
        height: width * 0.3 - 20,
        resizeMode: 'cover',
    },
    detailsContainer: {
        width: width * 0.7,
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 12,
        textAlign: 'justify',
    },
});