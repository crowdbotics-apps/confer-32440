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
      <View style={styles.View_218_1080} />
      <View style={styles.View_218_1081} />
      <View style={styles.View_218_1082}>
        <Text style={styles.Text_218_1082}>Username or Email</Text>
      </View>
      <View style={styles.View_218_1083} />
      <View style={styles.View_218_1084}>
        <Text style={styles.Text_218_1084}>LOGIN</Text>
      </View>
      <View style={styles.View_218_1085}>
        <Text style={styles.Text_218_1085}>Forgot your Password?</Text>
      </View>
      <View style={styles.View_218_1086}>
        <Text style={styles.Text_218_1086}>OR</Text>
      </View>
      <View style={styles.View_218_1087}>
        <Text style={styles.Text_218_1087}>
          Don’t have an account? Register Now
        </Text>
      </View>
      <View style={styles.View_218_1088}>
        <Text style={styles.Text_218_1088}>Sign in</Text>
      </View>
      <View style={styles.View_218_1089} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ccd/e4b6/bf20c04d44ff8f138caaada155a0540a"
        }}
        style={styles.ImageBackground_218_1090}
      />
      <View style={styles.View_218_1099}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d542/07b0/15566490815c30a74f9c66cf95935fcb"
          }}
          style={styles.ImageBackground_218_1100}
        />
      </View>
      <View style={styles.View_218_1106}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ffc/a31c/dc10b8aaf0ad5dcfb3ac9f7d1c9a93a9"
          }}
          style={styles.ImageBackground_218_1107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ffc/a31c/dc10b8aaf0ad5dcfb3ac9f7d1c9a93a9"
          }}
          style={styles.ImageBackground_218_1108}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ffc/a31c/dc10b8aaf0ad5dcfb3ac9f7d1c9a93a9"
          }}
          style={styles.ImageBackground_218_1109}
        />
        <View style={styles.View_218_1110}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/026a/8f03/efe1d26b8321814da6e63eac23108f4b"
            }}
            style={styles.ImageBackground_218_1111}
          />
        </View>
        <View style={styles.View_218_1123}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d0/d6a2/642cb4527f6ab6b92a9efd128a56ea1a"
            }}
            style={styles.ImageBackground_218_1124}
          />
        </View>
        <View style={styles.View_218_1127}>
          <View style={styles.View_218_1128}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2671/8c32/4cc655195b31821fae6258a86a5611e4"
              }}
              style={styles.ImageBackground_218_1129}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a26/d0a9/7db8dd82476d2069a7346b449facf808"
              }}
              style={styles.ImageBackground_218_1131}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_218_1080: {
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
  View_218_1081: {
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
  View_218_1082: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_218_1082: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_1083: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("72%")
  },
  View_218_1084: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("74%"),
    justifyContent: "center"
  },
  Text_218_1084: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_1085: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("62%"),
    justifyContent: "center"
  },
  Text_218_1085: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_1086: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("83%"),
    justifyContent: "center"
  },
  Text_218_1086: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_1087: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("113%"),
    justifyContent: "center"
  },
  Text_218_1087: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_1088: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("22%"),
    justifyContent: "center"
  },
  Text_218_1088: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_1089: {
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
  ImageBackground_218_1090: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("55%")
  },
  View_218_1099: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_218_1100: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_1106: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("90%")
  },
  ImageBackground_218_1107: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_218_1108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  ImageBackground_218_1109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%")
  },
  View_218_1110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_218_1111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_1123: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_218_1124: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_1127: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_218_1128: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_1129: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_1131: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
