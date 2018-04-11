import React from 'react';
import { Button, Text, View } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import HistoryScreen from '../Containers/HistoryScreen'
import AddMoneyScreen from '../Containers/AddMoneyScreen'
import MoreMenuScreen from '../Containers/MoreMenuScreen'
import NotificationScreen from '../Containers/NotificationScreen'


// const LaunchStack = StackNavigator({
//   Launch: { screen: LaunchScreen },
// }, {
//   // Default config for all screens
//   headerMode: 'none',
// });

// const LaunchStask2 = StackNavigator({
//   Launch2: { screen: LaunchScreen2 },
// }, {
//   // Default config for all screens
//   headerMode: 'none',
// });

const TabBar = TabNavigator(
  {
    Home: { screen: HomeScreen },
    History: { screen: HistoryScreen },
    AddMoney: { screen: AddMoneyScreen },
    Notification: { screen: NotificationScreen },
    MoreMenu: { screen: MoreMenuScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'History') {
          iconName = `ios-refresh-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'AddMoney') {
          iconName = `ios-pricetags${focused ? '' : '-outline'}`;
        } else if (routeName === 'Notification') {
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
        } else if (routeName === 'MoreMenu') {
          iconName = `ios-apps${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default TabBar 