import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import ButtonComp from '../../../../components/common/ButtonComp';
import BackWard from '../../../../assets/icons/BackWard';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define type for navigation
type RootStackParamList = {
    AccountDeleteVerification: undefined;
};

export default function DeleteAccount() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackWard width={15} height={15} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Delete Account</Text>
            </View>

            {/* Title */}
            <Text style={styles.confirmTitle}>
                Are you sure you want to delete your account?
            </Text>

            {/* Info Text */}
            <Text style={styles.paragraph}>
                We respect your decision. Please note that deleting your account is
                permanent, and all your data will be securely removed.
            </Text>

            <Text style={styles.paragraph}>
                Note: This includes your account history, preferences, and any saved
                information. Once deleted, your account cannot be restored.
            </Text>

            {/* Delete Button */}
            <ButtonComp
                title="Delete Account"
                onPress={() => navigation.navigate('AccountDeleteVerification')}
                style={{
                    backgroundColor: "#223F61",
                    marginTop: 380,
                    marginBottom: 20,
                    marginHorizontal: 30,
                }}
                textStyle={{
                    color: "#FAF8F5",
                }}
            />

            {/* Cancel Button */}
            <ButtonComp
                title="Cancel"
                onPress={() => navigation.goBack()}
                style={{
                    backgroundColor: "#E3E9F1",
                    marginHorizontal: 30,
                }}
                textStyle={{
                    color: "#223F61",
                }}
            />
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 80,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        letterSpacing: 4,
        marginLeft: 30,
    },
    confirmTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#2e446c',
        marginBottom: 20,
        letterSpacing: 3,
    },
    paragraph: {
        fontSize: 11,
        marginBottom: 15,
        lineHeight: 20,
        fontWeight: '400',
        letterSpacing: 1,
    },
});
