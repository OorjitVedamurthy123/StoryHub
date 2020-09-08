import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <Header
          backgroundColor={'orange'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        
        <TextInput style={styles.textInput}
            placeholder='Story Title'
        />
        <br></br>
        <br></br>
        <TextInput style={styles.textInput}
            placeholder='Author'
        />
        <br></br>
        <br></br>

        <TextInput style={{width:1200,
        height:250,
        borderWidth:1.5,
        fontSize:20,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        alignSelf:"center"}}
            placeholder='Write your story here'
            multiline={true}
        />
        <br></br>
        <TouchableOpacity style={styles.sbButton}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    textInput:{
        width:1200,
        height:90,
        borderWidth:1.5,
        fontSize:20,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        alignSelf:"center"
      },
      sbButton:{
          height:40,
          width:120,
          alignSelf:"center",
          backgroundColor:'orange',
          textAlign:"center",
          justifyContent:'center',
          border:10,
          borderWidth:1.5
      },
      buttonText:{
          textAlign:"center",
          alignSelf:"center",
          fontSize:15,
          fontVariant:'bold'
      }
})