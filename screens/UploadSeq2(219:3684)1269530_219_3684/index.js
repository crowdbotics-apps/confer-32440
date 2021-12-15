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
      <View style={styles.View_219_3685} />
      <View style={styles.View_219_3686} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_219_3687}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_219_3689}
      />
      <View style={styles.View_219_3691}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_219_3692}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_219_3694}
      />
      <View style={styles.View_219_3698}>
        <View style={styles.View_219_3699}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3baf/a94c/9e131cb5ad7d6f50ca5689d48dfa7ab5"
            }}
            style={styles.ImageBackground_219_3700}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_219_3701}
          />
        </View>
      </View>
      <View style={styles.View_219_3704}>
        <View style={styles.View_219_3705} />
        <View style={styles.View_219_3706} />
        <View style={styles.View_219_3707} />
      </View>
      <View style={styles.View_219_3708} />
      <View style={styles.View_219_3709}>
        <Text style={styles.Text_219_3709}>Uploaded Documents/Pictures</Text>
      </View>
      <View style={styles.View_219_3710}>
        <Text style={styles.Text_219_3710}>
          Upload Loan Estimate document or take a Picture and Upload.
        </Text>
      </View>
      <View style={styles.View_219_3711} />
      <View style={styles.View_219_3712} />
      <View style={styles.View_219_3713}>
        <View style={styles.View_219_3714} />
        <View style={styles.View_219_3715}>
          <Text style={styles.Text_219_3715}>Upload another document</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1118/05c6/f53c0f7ee4d54d1434d5dcb410fffdda"
        }}
        style={styles.ImageBackground_219_3716}
      />
      <View style={styles.View_219_3718}>
        <Text style={styles.Text_219_3718}>Loan Estimate-1.pdf</Text>
      </View>
      <View style={styles.View_219_3719}>
        <View style={styles.View_219_3720} />
        <View style={styles.View_219_3721} />
      </View>
      <View style={styles.View_219_3729}>
        <Text style={styles.Text_219_3729}>Documents</Text>
      </View>
      <View style={styles.View_219_3730} />
      <View style={styles.View_219_3731} />
      <View style={styles.View_219_3732}>
        <View style={styles.View_219_3733} />
        <View style={styles.View_219_3734}>
          <Text style={styles.Text_219_3734}>Take another picture</Text>
        </View>
      </View>
      <View style={styles.View_219_3735}>
        <Text style={styles.Text_219_3735}>image-1.jpg</Text>
      </View>
      <View style={styles.View_219_3736}>
        <View style={styles.View_219_3737} />
        <View style={styles.View_219_3738} />
      </View>
      <View style={styles.View_219_3739} />
      <View style={styles.View_219_3740}>
        <Text style={styles.Text_219_3740}>image-2jpg</Text>
      </View>
      <View style={styles.View_219_3741}>
        <View style={styles.View_219_3742} />
        <View style={styles.View_219_3743} />
      </View>
      <View style={styles.View_219_3744}>
        <Text style={styles.Text_219_3744}>Pictures</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2987/5925/bb0f8a9971f53402ecd0fd6ee66f1f98"
        }}
        style={styles.ImageBackground_219_3745}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2987/5925/bb0f8a9971f53402ecd0fd6ee66f1f98"
        }}
        style={styles.ImageBackground_219_3747}
      />
      <View style={styles.View_219_3749} />
      <View style={styles.View_219_3750}>
        <Text style={styles.Text_219_3750}>image-3jpg</Text>
      </View>
      <View style={styles.View_219_3751}>
        <View style={styles.View_219_3752} />
        <View style={styles.View_219_3753} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2987/5925/bb0f8a9971f53402ecd0fd6ee66f1f98"
        }}
        style={styles.ImageBackground_219_3754}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_219_3685: {
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
  View_219_3686: {
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
  ImageBackground_219_3687: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_219_3689: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_219_3691: {
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
  ImageBackground_219_3692: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3694: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_219_3698: {
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
  View_219_3699: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3700: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3701: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_219_3704: {
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
  View_219_3705: {
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
  View_219_3706: {
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
  View_219_3707: {
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
  View_219_3708: {
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
  View_219_3709: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_219_3709: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3710: {
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
  Text_219_3710: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3711: {
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
  View_219_3712: {
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
  View_219_3713: {
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
  View_219_3714: {
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
  View_219_3715: {
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
  Text_219_3715: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_3716: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_219_3718: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("39%"),
    justifyContent: "center"
  },
  Text_219_3718: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3719: {
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
  View_219_3720: {
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
  View_219_3721: {
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
  View_219_3729: {
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
  Text_219_3729: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3730: {
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
  View_219_3731: {
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
  View_219_3732: {
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
  View_219_3733: {
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
  View_219_3734: {
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
  Text_219_3734: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3735: {
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
  Text_219_3735: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3736: {
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
  View_219_3737: {
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
  View_219_3738: {
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
  View_219_3739: {
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
  View_219_3740: {
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
  Text_219_3740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3741: {
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
  View_219_3742: {
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
  View_219_3743: {
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
  View_219_3744: {
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
  Text_219_3744: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_3745: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_219_3747: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_219_3749: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("92%"),
    backgroundColor: "rgba(240, 244, 249, 1)"
  },
  View_219_3750: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("94%"),
    justifyContent: "center"
  },
  Text_219_3750: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3751: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("95%")
  },
  View_219_3752: {
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
  View_219_3753: {
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
  ImageBackground_219_3754: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("94%"),
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
