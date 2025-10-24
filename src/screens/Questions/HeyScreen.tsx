import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../../components/common/ButtonComp';

type RootStackParamList = {
    HeyScreen: undefined;
    LoginSuccess: undefined;
    DemoGraphicQues: undefined;
};

type HeyScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HeyScreen'>;

const HeyScreen = () => {
    const navigation = useNavigation<HeyScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/QuestionSection/Hey.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.title}>
                Hey there! I’m{"\n"}your AI buddy
            </Text>

            <Text style={styles.subtitle}>
                Just a few quick questions and we’ll unlock your personalized world {"\n"}inside the app
            </Text>

            <View style={styles.buttonContainer}>
                <ButtonComp
                    title="Ready to Start ?"
                    onPress={() => navigation.navigate('DemoGraphicQues')}
                    style={styles.button}
                    textStyle={{ color: '#FAF8F5' }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: scale(40),
        paddingTop: verticalScale(100),
    },
    image: {
        width: scale(242),
        height: verticalScale(233),
        marginBottom: verticalScale(40),
        marginRight:scale(30)
    },
    title: {
        fontSize: moderateScale(32),
        fontFamily: "OpenSans-ExtraBold",
        fontWeight: '800',
        lineHeight: scale(43),
        color: '#000000',
        textAlign: 'left',
        marginBottom: verticalScale(20),
    },
    subtitle: {
        fontSize: moderateScale(16),
        fontFamily: "OpenSans-Regular",
        color: '#8e8e93',
        textAlign: 'left',
        lineHeight: verticalScale(27),
        marginBottom: verticalScale(30),
    },
    buttonContainer: {
        marginVertical: 20,
        alignItems: "center",
    },
    button: {
        backgroundColor: '#223F61',
        marginHorizontal: 30,
        
    },
});

export default HeyScreen;
