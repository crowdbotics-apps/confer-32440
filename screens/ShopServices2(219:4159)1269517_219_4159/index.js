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
      <View style={styles.View_219_4160} />
      <View style={styles.View_219_4161} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_219_4162}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_219_4164}
      />
      <View style={styles.View_219_4166}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_219_4167}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_219_4169}
      />
      <View style={styles.View_219_4173}>
        <View style={styles.View_219_4174}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c68f/cb65/3263b1065eecc7957423cf291b5cb388"
            }}
            style={styles.ImageBackground_219_4175}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_219_4176}
          />
        </View>
      </View>
      <View style={styles.View_219_4179}>
        <View style={styles.View_219_4180} />
        <View style={styles.View_219_4181} />
        <View style={styles.View_219_4182} />
      </View>
      <View style={styles.View_219_4183}>
        <Text style={styles.Text_219_4183}>Shop for Services</Text>
      </View>
      <View style={styles.View_219_4184}>
        <Text style={styles.Text_219_4184}>
          You need to have at least 1 LE ???
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_219_4160: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 249, 1)"
  },
  View_219_4161: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114%"),
    backgroundColor: "rgba(60, 79, 253, 1)"
  },
  ImageBackground_219_4162: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_219_4164: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_219_4166: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("117%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_219_4167: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_4169: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_219_4173: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("117%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_219_4174: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_4175: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_4176: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_219_4179: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%")
  },
  View_219_4180: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(7, 38, 123, 1)"
  },
  View_219_4181: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(7, 38, 123, 1)"
  },
  View_219_4182: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(7, 38, 123, 1)"
  },
  View_219_4183: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_219_4183: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_4184: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_219_4184: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
