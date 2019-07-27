import Constants from "expo-constants";
import React, { useContext } from "react";
import {
  SectionList,
  Image,
  StyleSheet,
  View,
  AsyncStorage,
  Button,
  Text
} from "react-native";
import AuthContext from "../../context/auth/AuthContext";
const Settings = ({ navigation: { navigate } }) => {
  const authContext = useContext(AuthContext);
  const signOutUser = async () => {
    authContext.logout();
  };
  const _renderSectionHeader = () => {
    return <View />;
  };

  const _renderItem = ({ item }) => {
    return <SectionContent>{item.value}</SectionContent>;
  };
  if (!authContext.isAuthenticated) navigate("Auth");
  const sections = [
    {
      data: [
        {
          value: <Button title='Sign Out' onPress={() => signOutUser()} />
        }
      ]
    }
  ];

  return (
    <SectionList
      style={styles.container}
      renderItem={_renderItem}
      renderSectionHeader={_renderSectionHeader}
      stickySectionHeadersEnabled={true}
      keyExtractor={(item, index) => index}
      sections={sections}
    />
  );
};

export default Settings;

const SectionContent = props => {
  return <View style={styles.sectionContentContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15
  },
  sectionContentText: {
    color: "#808080",
    fontSize: 14
  }
});
