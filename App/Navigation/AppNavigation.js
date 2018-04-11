import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import HistoryScreen from '../Containers/HistoryScreen'
import AddMoneyScreen from '../Containers/AddMoneyScreen'
import MoreMenuScreen from '../Containers/MoreMenuScreen'
import NotificationScreen from '../Containers/NotificationScreen'
import LoginScreen from '../Containers/LoginScreen'
import TabarScreen from '../Containers/TabarScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  HistoryScreen: { screen: HistoryScreen },
  HistoryScreen: { screen: HistoryScreen },
  AddMoneyScreen: { screen: AddMoneyScreen },
  MoreMenuScreen: { screen: MoreMenuScreen },
  NotificationScreen: { screen: NotificationScreen },
  LoginScreen: { screen: LoginScreen },
  TabarScreen: { screen: TabarScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
