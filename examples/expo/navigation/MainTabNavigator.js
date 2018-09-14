import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Icon } from 'expo';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import TabBarIcon from '../components/TabBarIcon';
import MenuIcon from '../components/MenuIcon';
import DrawerContent from '../components/DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const MainTabNavigator = () => (
  <Stack key="root" titleStyle={{ alignSelf: 'center' }}>
    <Drawer
      hideNavBar
      key="drawer"
      onExit={() => {
        console.log('Drawer closed');
      }}
      onEnter={() => {
        console.log('Drawer opened');
      }}
      contentComponent={DrawerContent}
      drawerImage={MenuIcon}
      drawerWidth={300}>
      <Scene hideNavBar panHandlers={null}>
        <Tabs
          key="tabbar"
          routeName="tabbar"
          backToInitial
          onTabOnPress={() => {
            console.log('Back to initial and also print this');
          }}
          swipeEnabled
          showLabel={false}
          tabBarStyle={styles.tabBarStyle}
          activeBackgroundColor="white"
          inactiveBackgroundColor="rgba(255, 0, 0, 0.5)">
          <Scene
            key="main_home"
            component={HomeScreen}
            title="Links"
            hideNavBar
            icon={TabBarIcon}
          />
          <Scene
            key="main_links"
            component={LinksScreen}
            title="Links"
            hideNavBar
            icon={TabBarIcon}
          />
          <Scene
            key="main_settings"
            component={SettingsScreen}
            title="Links"
            hideNavBar
            icon={TabBarIcon}
          />
        </Tabs>
      </Scene>
    </Drawer>
  </Stack>
);

export default MainTabNavigator;
