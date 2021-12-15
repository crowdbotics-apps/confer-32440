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
      <View style={styles.View_201_441} />
      <View style={styles.View_201_442} />
      <View style={styles.View_201_443}>
        <Text style={styles.Text_201_443}>Username or Email</Text>
      </View>
      <View style={styles.View_201_444} />
      <View style={styles.View_201_445}>
        <Text style={styles.Text_201_445}>LOGIN</Text>
      </View>
      <View style={styles.View_201_446}>
        <Text style={styles.Text_201_446}>Forgot your Password?</Text>
      </View>
      <View style={styles.View_201_447}>
        <Text style={styles.Text_201_447}>
          Don’t have an account? Register Now
        </Text>
      </View>
      <View style={styles.View_201_448}>
        <Text style={styles.Text_201_448}>Google Sign in</Text>
      </View>
      <View style={styles.View_201_449} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ccd/e4b6/bf20c04d44ff8f138caaada155a0540a"
        }}
        style={styles.ImageBackground_201_450}
      />
      <View style={styles.View_201_459}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d542/07b0/15566490815c30a74f9c66cf95935fcb"
          }}
          style={styles.ImageBackground_201_460}
        />
      </View>
      <View style={styles.View_219_4119}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ffc/a31c/dc10b8aaf0ad5dcfb3ac9f7d1c9a93a9"
          }}
          style={styles.ImageBackground_219_4093}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ffc/a31c/dc10b8aaf0ad5dcfb3ac9f7d1c9a93a9"
          }}
          style={styles.ImageBackground_219_4094}
        />
        <View style={styles.View_219_4108}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d0/d6a2/642cb4527f6ab6b92a9efd128a56ea1a"
            }}
            style={styles.ImageBackground_219_4109}
          />
        </View>
        <View style={styles.View_219_4112}>
          <View style={styles.View_219_4113}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2671/8c32/4cc655195b31821fae6258a86a5611e4"
              }}
              style={styles.ImageBackground_219_4114}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a26/d0a9/7db8dd82476d2069a7346b449facf808"
              }}
              style={styles.ImageBackground_219_4116}
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
  View_201_441: {
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
  View_201_442: {
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
  View_201_443: {
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
  Text_201_443: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_444: {
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
  View_201_445: {
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
  Text_201_445: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_446: {
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
  Text_201_446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_447: {
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
  Text_201_447: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_448: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("22%"),
    justifyContent: "center"
  },
  Text_201_448: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_201_449: {
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
  ImageBackground_201_450: {
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
  View_201_459: {
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
  ImageBackground_201_460: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_4119: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("86%")
  },
  ImageBackground_219_4093: {
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
  ImageBackground_219_4094: {
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
  View_219_4108: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_219_4109: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_4112: {
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
  View_219_4113: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_4114: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_4116: {
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
