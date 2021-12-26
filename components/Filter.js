// import React,{useState} from 'react'
// import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

// const Filter = () => {
//     return (
//         <View style={styles.filter}>
//             <View style={styles.menu}>
//                 <TouchableOpacity style={styles.menuItem}><Text style={styles.itemText}>Recent</Text></TouchableOpacity>
//                 <TouchableOpacity style={styles.menuItem}><Text style={styles.itemText}>Created</Text></TouchableOpacity>
//                 <TouchableOpacity style={styles.menuItem}><Text style={styles.itemText}>Joined</Text></TouchableOpacity>
//             </View>
//             <TouchableOpacity ><Image source={require("../assets/filter.png")} style={ styles.icon}/></TouchableOpacity>

//         </View>
//     )
// }

// export default Filter

const styles = ScaledSheet.create({
    filter: {
        backgroundColor: 'green',
        width: '18@s',
        height: '12@s',
        position:'relative'
    },
    icon: {
        width: '18@s',
        height:'12@s'
    },
    menu: {
        backgroundColor: 'red',
        height: '104@s',
        // position: 'absolute',
        // left: '-130@s',
        // width:'128@s'
    },
    menuItem: {},
    itemText: {
        color:'#fff'
    }
})




import * as React from 'react';
import { View,Image,TouchableOpacity } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={styles.filter}>
              <Menu
                  statusBarHeight={0}
          visible={visible}
          onDismiss={closeMenu}
          anchor={<TouchableOpacity onPress={openMenu}><Image source={require("../assets/filter.png")} style={ styles.icon}/></TouchableOpacity>}>
          <Menu.Item onPress={() => {}} title="Recent" />
          <Menu.Item onPress={() => {}} title="Created" />
          <Menu.Item onPress={() => {}} title="Joined" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MyComponent;