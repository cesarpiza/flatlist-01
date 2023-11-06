import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import { styles } from './styles';

export default function Item(props) {

    const {
        name,
        image,
        description,
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={image}
                />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
        </View>
    );
}