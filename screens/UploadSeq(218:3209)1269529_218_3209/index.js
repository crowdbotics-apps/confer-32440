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
      <View style={styles.View_218_3210} />
      <View style={styles.View_218_3211} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_218_3212}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_218_3214}
      />
      <View style={styles.View_218_3216}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_218_3217}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_218_3219}
      />
      <View style={styles.View_218_3223}>
        <View style={styles.View_218_3224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/2848/6676c2c1dfe97b5897e7f0723cbed8d3"
            }}
            style={styles.ImageBackground_218_3225}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_218_3226}
          />
        </View>
      </View>
      <View style={styles.View_218_3229}>
        <View style={styles.View_218_3230} />
        <View style={styles.View_218_3231} />
        <View style={styles.View_218_3232} />
      </View>
      <View style={styles.View_218_3233} />
      <View style={styles.View_218_3234}>
        <Text style={styles.Text_218_3234}>Upload a document</Text>
      </View>
      <View style={styles.View_218_3235}>
        <Text style={styles.Text_218_3235}>
          Upload Loan Estimate document or take a Picture and Upload.
        </Text>
      </View>
      <View style={styles.View_218_3236} />
      <View style={styles.View_218_3237} />
      <View style={styles.View_218_3238}>
        <View style={styles.View_218_3239} />
        <View style={styles.View_218_3240}>
          <Text style={styles.Text_218_3240}>Upload another document</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6f7/ded6/401f5a645cd13c13e92f2dc9ad2513e1"
        }}
        style={styles.ImageBackground_218_3241}
      />
      <View style={styles.View_218_3243}>
        <Text style={styles.Text_218_3243}>Document-1.pdf</Text>
      </View>
      <View style={styles.View_218_3244}>
        <View style={styles.View_218_3245} />
        <View style={styles.View_218_3246} />
      </View>
      <View style={styles.View_218_3247} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6f7/ded6/401f5a645cd13c13e92f2dc9ad2513e1"
        }}
        style={styles.ImageBackground_218_3248}
      />
      <View style={styles.View_218_3250}>
        <Text style={styles.Text_218_3250}>Document-2.pdf</Text>
      </View>
      <View style={styles.View_218_3251}>
        <View style={styles.View_218_3252} />
        <View style={styles.View_218_3253} />
      </View>
      <View style={styles.View_218_3254}>
        <Text style={styles.Text_218_3254}>Documents</Text>
      </View>
      <View style={styles.View_218_3255} />
      <View style={styles.View_218_3256} />
      <View style={styles.View_218_3257}>
        <View style={styles.View_218_3258} />
        <View style={styles.View_218_3259}>
          <Text style={styles.Text_218_3259}>Take another picture</Text>
        </View>
      </View>
      <View style={styles.View_218_3260}>
        <Text style={styles.Text_218_3260}>image-1.jpg</Text>
      </View>
      <View style={styles.View_218_3261}>
        <View style={styles.View_218_3262} />
        <View style={styles.View_218_3263} />
      </View>
      <View style={styles.View_218_3264} />
      <View style={styles.View_218_3265}>
        <Text style={styles.Text_218_3265}>image-2jpg</Text>
      </View>
      <View style={styles.View_218_3266}>
        <View style={styles.View_218_3267} />
        <View style={styles.View_218_3268} />
      </View>
      <View style={styles.View_218_3269}>
        <Text style={styles.Text_218_3269}>Pictures</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2987/5925/bb0f8a9971f53402ecd0fd6ee66f1f98"
        }}
        style={styles.ImageBackground_218_3270}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2987/5925/bb0f8a9971f53402ecd0fd6ee66f1f98"
        }}
        style={styles.ImageBackground_218_3272}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_218_3210: {
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
  View_218_3211: {
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
  ImageBackground_218_3212: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_3214: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_218_3216: {
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
  ImageBackground_218_3217: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_3219: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_218_3223: {
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
  View_218_3224: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_3225: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_3226: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_218_3229: {
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
  View_218_3230: {
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
  View_218_3231: {
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
  View_218_3232: {
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
  View_218_3233: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_218_3234: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_218_3234: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3235: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_218_3235: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3236: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("30%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(161, 171, 255, 1)",
    borderWidth: 1
  },
  View_218_3237: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("37%"),
    backgroundColor: "rgba(240, 244, 249, 1)"
  },
  View_218_3238: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("61%")
  },
  View_218_3239: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(60, 79, 253, 1)",
    borderWidth: 2
  },
  View_218_3240: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_218_3240: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_3241: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_218_3243: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("39%"),
    justifyContent: "center"
  },
  Text_218_3243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3244: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("40%")
  },
  View_218_3245: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 55, 55, 1)"
  },
  View_218_3246: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 55, 55, 1)"
  },
  View_218_3247: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("45%"),
    backgroundColor: "rgba(240, 244, 249, 1)"
  },
  ImageBackground_218_3248: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_218_3250: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("47%"),
    justifyContent: "center"
  },
  Text_218_3250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3251: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("47%")
  },
  View_218_3252: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 55, 55, 1)"
  },
  View_218_3253: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 55, 55, 1)"
  },
  View_218_3254: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("33%"),
    justifyContent: "center"
  },
  Text_218_3254: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3255: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("70%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(161, 171, 255, 1)",
    borderWidth: 1
  },
  View_218_3256: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("77%"),
    backgroundColor: "rgba(240, 244, 249, 1)"
  },
  View_218_3257: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("101%")
  },
  View_218_3258: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(60, 79, 253, 1)",
    borderWidth: 2
  },
  View_218_3259: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_218_3259: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3260: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("79%"),
    justifyContent: "center"
  },
  Text_218_3260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3261: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("80%")
  },
  View_218_3262: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 55, 55, 1)"
  },
  View_218_3263: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 55, 55, 1)"
  },
  View_218_3264: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("85%"),
    backgroundColor: "rgba(240, 244, 249, 1)"
  },
  View_218_3265: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_218_3265: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3266: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("87%")
  },
  View_218_3267: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 55, 55, 1)"
  },
  View_218_3268: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 55, 55, 1)"
  },
  View_218_3269: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("73%"),
    justifyContent: "center"
  },
  Text_218_3269: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_3270: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_218_3272: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
