import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            title:"",
            author:"",
            story:""
        }
    }
    
    submitStory=async()=>{
        await db.collection("Story").add({
            title:this.state.title,
            author:this.state.author,
            mainstory:this.state.story
        })
         ToastAndroid.show("Your story has been saved successfully", ToastAndroid.SHORT)
    }
    
    render(){
        return(
            <KeyboardAvoidingView>
                <Header
          backgroundColor='orange'
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'white', fontSize: 20 },
          }}
        />
        
        <TextInput style={styles.textInput}
            placeholder='Story Title'
            onChangeText={(text)=>
                this.setState({
                    title:text
                })
            }
        />

        

        <TextInput style={styles.textInput}
            placeholder='Author'
            onChangeText={(text)=>
                this.setState({
                    author:text
                })
            }
        />
        
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
            onChangeText={(text)=>
                this.setState({
                    story:text
                })
            }
        />
        <TouchableOpacity style={styles.sbButton} onPress={()=>{
            this.submitStory() 
            
        }}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
            </KeyboardAvoidingView>
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
          backgroundColor:"orange",
          textAlign:"center",
          justifyContent:"center",
          borderWidth:1.5
      },
      buttonText:{
          textAlign:"center",
          alignSelf:"center",
          fontSize:15
      }
})
