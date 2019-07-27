import React from "react";
import Settings from "./Settings";

export default function SettingsScreen({ navigation }) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <Settings navigation={navigation} />;
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};
