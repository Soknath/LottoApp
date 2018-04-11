//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';
import LoginForm from '../Components/LoginForm';

// create a component
class Login extends Component {
    constructor(props) {
        super(props)
    }

    // change these screen
    TabarScreen = () => {
        this.props.navigation.navigate('TabarScreen')
    }

    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../Images/logo-dark-bg.png')} />
                  
                   </View>
               <View style={styles.formContainer}>
                   <LoginForm onPress={this.TabarScreen}/>
               </View>
           </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

//make this component available to the app
export default Login;