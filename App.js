import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native"
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';



const data = [
  { id: 1, name: "Peter", imageName: require("./assets/Peter.jpg") },
  { id: 2, name: "Bukky", imageName: require("./assets/Bukky.jpg") },
  { id: 3, name: "Ubani", imageName: require("./assets/Ubani.jpg") },
  { id: 4, name: "Malush", imageName: require("./assets/Malush.jpg") },
  { id: 5, name: "Big Sam", imageName: require("./assets/sam.jpg") },
  { id: 6, name: "Osas", imageName: require("./assets/osas.jpg") },
  { id: 7, name: "Ola", imageName: require("./assets/Ola.png") },
  { id: 8, name: "Gideon", imageName: require("./assets/Gideon.png") },
  { id: 9, name: "Small Sam", imageName: require("./assets/Olorunda.jpg") },
  { id: 10, name: "Josh", imageName: require("./assets/Josh.jpg") },
  { id: 11, name: "Timo", imageName: require("./assets/Timo.jpg") },
  { id: 12, name: "Emma", imageName: require("./assets/Emma.jpg") },

]

export default function App() {


  return (
    <SafeAreaView >
      <ScrollView >
        <View style={styles.container1}>
          <Text style={styles.container5}>
            CODELAB FELLOWS
          </Text>

          <View style={{ marginTop: 3 }}>

            <FlatList
              data={data}
              keyExtractor={(data) => data.id.toString()}
              renderItem={({ item }) => (

                <View style={styles.container2}>

                  <Text style={styles.container3}>{item.id}</Text>
                  <Image resizeMode="cover" source={item.imageName} style={styles.container4} />
                  <Text style={styles.container6}>{item.name}</Text>

                </View>

              )}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'rgb(42,169,224)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },

  container2: {
    height: 150,
    width: 180,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',

    // shadowColor: "black",
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'space-around',
    // elevation: 5,
  },

  container4: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: 'red',
    textAlign: 'center'
  },

  container5: {
    display: 'flex',
    fontWeight: 'bold',
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 50,
    fontSize: 20,
    // marginTop: 70
  },

  container6: {
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },


});
