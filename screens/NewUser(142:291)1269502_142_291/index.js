import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_142_292} />
      <View style={styles.View_142_293} />
      <View style={styles.View_142_294}>
        <Text style={styles.Text_142_294}>Name</Text>
      </View>
      <View style={styles.View_142_295} />
      <View style={styles.View_142_296}>
        <Text style={styles.Text_142_296}>Register</Text>
      </View>
      <View style={styles.View_142_298}>
        <Text style={styles.Text_142_298}>Already have an account? Login</Text>
      </View>
      <View style={styles.View_142_299}>
        <Text style={styles.Text_142_299}>Create an account</Text>
      </View>
      <View style={styles.View_142_300} />
      <View style={styles.View_142_336}>
        <Text style={styles.Text_142_336}>Email address</Text>
      </View>
      <View style={styles.View_142_340} />
      <View style={styles.View_142_341}>
        <Text style={styles.Text_142_341}>Password</Text>
      </View>
      <View style={styles.View_142_342}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d542/07b0/15566490815c30a74f9c66cf95935fcb"
          }}
          style={styles.ImageBackground_142_343}
        />
      </View>
      <View style={styles.View_142_349} />
      <View style={styles.View_142_350}>
        <Text style={styles.Text_142_350}>Confirm Password</Text>
      </View>
      <View style={styles.View_142_351}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d542/07b0/15566490815c30a74f9c66cf95935fcb"
          }}
          style={styles.ImageBackground_142_352}
        />
      </View>
      <View style={styles.View_142_358} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fca8/b60a/08af0e00a578b6fe20cc11ed424f1e1b"
        }}
        style={styles.ImageBackground_142_361}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_142_292: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_142_293: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("40%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_142_294: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_142_294: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_295: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("90%")
  },
  View_142_296: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("92%"),
    justifyContent: "center"
  },
  Text_142_296: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_298: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("113%"),
    justifyContent: "center"
  },
  Text_142_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_299: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("22%"),
    justifyContent: "center"
  },
  Text_142_299: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_300: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_142_336: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_142_336: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_340: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("64%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_142_341: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("66%"),
    justifyContent: "center"
  },
  Text_142_341: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_342: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_142_343: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_142_349: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("75%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_142_350: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_142_350: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_351: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_142_352: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_142_358: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224
  },
  ImageBackground_142_361: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
