import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Rave from 'react-native-rave-sdk';

export default function App() {
  const amount = 200
  const getReference = () => {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';
    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  
  return (
    <View style={styles.container}>
      <Text>React Native Rave SDK</Text>

      <Rave 
        FLW_PUBLIC_KEY="FLWPUBK_TEST-c4f018d0"
        FLW_SECRET_KEY="FLWSECK_TEST-e611eba1"
        tx_ref={"react-native-rave-sdk-test-"+getReference()}
        amount={amount}
        currency="NGN"
        country= "NG"
        payment_options="card"
        email= "abduljeleelng@gmail.com"
        phone_number= "08037358707"
        name= "Rave SDK"
        title= "Rave SDK"
        description= "React native Rave SDK"
        logo= "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg"
        onCancel={res => {
          console.log({res})
        }}
        onFailed={res => {
          console.log({res})
        }}
        onSuccess={res => {
          console.log({res})
        }}
        onVerifyingError={res => {
          console.log({res})
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
