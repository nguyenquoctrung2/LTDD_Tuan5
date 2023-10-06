import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Image,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.styles1}>
        <Text style={styles.text1}>LOGIN</Text>
      </View>
      <View style={styles.styles2}>
        <View style={{flex: 1,
              borderRadius:'2px',
              borderWidth:'1px',
              borderColor:'white',
              width:'90%',
              padding:'10px',
              flexDirection:'row',
              gap:'10px'}}>
          <Image 
          source={require('./assets/avataruser.png')}
          style={{width:'25px',height:'35px'}}></Image>
        <TextInput placeholder='Name' style={{
                height:'100%',width:'80%'
          }}></TextInput>
        </View>
        <View style={{flex: 1,
              borderRadius:'2px',
              borderWidth:'1px',
              borderColor:'white',
              width:'90%',
              padding:'10px',
              flexDirection:'row',
              gap:'10px'}}>
              <Image 
              source={require('./assets/lock.png')}
              style={{width:'25px',height:'30px'}}>
              </Image>
              <TextInput placeholder='Password' style={{
                height:'100%',width:'75%'
              }}>
              </TextInput>
              <Image 
              source={require('./assets/eye.png')}
              style={{width:'35px',height:'35px'}}>
              </Image>
          </View>
      </View>
      <View style={styles.styles3}>
              <Button 
              title='LOGIN'
              color="black"
              ></Button>
      </View>
      <View style={styles.styles4}>
              <Text style={styles.text2}>Forgot your password?</Text>
      </View>
      <View style={styles.styles5}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundImage:'linear-gradient(to bottom,#FBCB00,#BF9A00)',
    gap:'2px'
  },
  text1:{
    textAlign:'left',
    fontSize:28,
    fontWeight:'bold',
  },
  styles1:{
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
  },
  styles2:{
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'15px'//khoang cach giua 2 text
  },
  styles3:{
    flex: 1,
    alignContent:'center',
    justifyContent:'center',
    margin:'20px',
    flexDirection:'column',
  },
  styles4:{
    flex: 1,
    alignContent:'center',
    alignItems:'center'
  },
  styles5:{
    flex: 1,
  },
  text2:{
    fontSize:20,
    fontWeight:'bold',
  }
});
