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
      <View style={styles.View_202_748} />
      <View style={styles.View_202_749} />
      <View style={styles.View_202_750} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_202_751}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_202_753}
      />
      <View style={styles.View_202_755}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_202_756}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_202_758}
      />
      <View style={styles.View_202_762}>
        <View style={styles.View_202_763}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c68f/cb65/3263b1065eecc7957423cf291b5cb388"
            }}
            style={styles.ImageBackground_202_764}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_202_765}
          />
        </View>
      </View>
      <View style={styles.View_202_768}>
        <View style={styles.View_202_769} />
        <View style={styles.View_202_770} />
        <View style={styles.View_202_771} />
      </View>
      <View style={styles.View_202_772}>
        <Text style={styles.Text_202_772}>Enter more Information</Text>
      </View>
      <View style={styles.View_202_773}>
        <Text style={styles.Text_202_773}>
          We need mortgage tenure.... what else??
        </Text>
      </View>
      <View style={styles.View_202_774}>
        <Text style={styles.Text_202_774}>Loan Amount</Text>
      </View>
      <View style={styles.View_202_775} />
      <View style={styles.View_202_776}>
        <Text style={styles.Text_202_776}>$</Text>
      </View>
      <View style={styles.View_202_777}>
        <Text style={styles.Text_202_777}>Interest Rate</Text>
      </View>
      <View style={styles.View_202_778} />
      <View style={styles.View_202_779}>
        <Text style={styles.Text_202_779}>%</Text>
      </View>
      <View style={styles.View_202_780}>
        <Text style={styles.Text_202_780}>Number of Years</Text>
      </View>
      <View style={styles.View_202_781} />
      <View style={styles.View_202_782}>
        <Text style={styles.Text_202_782}>Your Credit Score</Text>
      </View>
      <View style={styles.View_202_783} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e95/32ea/2c5c57d8e70ffc72b6e55dddba7f9f93"
        }}
        style={styles.ImageBackground_202_784}
      />
      <View style={styles.View_202_786} />
      <View style={styles.View_202_787}>
        <Text style={styles.Text_202_787}>Calculate</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_202_748: {
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
  View_202_749: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_202_750: {
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
  ImageBackground_202_751: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_202_753: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_202_755: {
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
  ImageBackground_202_756: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_202_758: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_202_762: {
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
  View_202_763: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_202_764: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_202_765: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_202_768: {
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
  View_202_769: {
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
  View_202_770: {
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
  View_202_771: {
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
  View_202_772: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_202_772: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_202_773: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_202_773: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_202_774: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("25%"),
    justifyContent: "center"
  },
  Text_202_774: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_202_775: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("23%"),
    backgroundColor: "rgba(250, 252, 255, 1)",
    borderColor: "rgba(161, 189, 255, 1)",
    borderWidth: 1
  },
  View_202_776: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("25%"),
    justifyContent: "center"
  },
  Text_202_776: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_202_777: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_202_777: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_202_778: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("32%"),
    backgroundColor: "rgba(250, 252, 255, 1)",
    borderColor: "rgba(161, 189, 255, 1)",
    borderWidth: 1
  },
  View_202_779: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_202_779: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_202_780: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_202_780: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_202_781: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("41%"),
    backgroundColor: "rgba(250, 252, 255, 1)",
    borderColor: "rgba(161, 189, 255, 1)",
    borderWidth: 1
  },
  View_202_782: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("52%"),
    justifyContent: "center"
  },
  Text_202_782: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_202_783: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("50%"),
    backgroundColor: "rgba(250, 252, 255, 1)",
    borderColor: "rgba(161, 189, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_202_784: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_202_786: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("61%"),
    backgroundColor: "rgba(7, 38, 123, 1)"
  },
  View_202_787: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("63%"),
    justifyContent: "center"
  },
  Text_202_787: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
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
