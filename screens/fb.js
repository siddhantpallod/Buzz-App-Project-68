import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FbScreen extends React.Component{
    render(){
        return(
            <View style = {{
                alignSelf : 'center'
            }}>
               <Text style = {{
                   alignSelf : 'center',
                   fontSize : 20
               }}> Facebook </Text>     
            </View>
        )
    }
}