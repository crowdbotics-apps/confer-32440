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
      <View style={styles.View_145_795} />
      <View style={styles.View_145_796} />
      <View style={styles.View_145_797} />
      <View style={styles.View_145_798} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_145_799}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_145_801}
      />
      <View style={styles.View_145_803}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_145_804}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_145_806}
      />
      <View style={styles.View_145_810}>
        <View style={styles.View_145_811}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/2848/6676c2c1dfe97b5897e7f0723cbed8d3"
            }}
            style={styles.ImageBackground_145_812}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_145_813}
          />
        </View>
      </View>
      <View style={styles.View_145_816}>
        <View style={styles.View_145_817} />
        <View style={styles.View_145_818} />
        <View style={styles.View_145_819} />
      </View>
      <View style={styles.View_145_820}>
        <Text style={styles.Text_145_820}>Fees Details</Text>
      </View>
      <View style={styles.View_145_821}>
        <Text style={styles.Text_145_821}>$600</Text>
      </View>
      <View style={styles.View_145_822}>
        <Text style={styles.Text_145_822}>Estimated Total Savings</Text>
      </View>
      <View style={styles.View_145_823}>
        <Text style={styles.Text_145_823}>Loan Costs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3722/af07/2ed8b2a0012ec4b850709169778c16fd"
        }}
        style={styles.ImageBackground_145_824}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eeb/44c9/73edb7227c46a11bb001d2109ad4a6ba"
        }}
        style={styles.ImageBackground_145_825}
      />
      <View style={styles.View_145_826}>
        <View style={styles.View_145_828} />
      </View>
      <View style={styles.View_145_829} />
      <View style={styles.View_145_830}>
        <Text style={styles.Text_145_830}>Services you cannot shop</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70bf/4cde/58c91b12aca35e21e7525a27e11242af"
        }}
        style={styles.ImageBackground_145_831}
      />
      <View style={styles.View_145_832}>
        <View style={styles.View_145_833} />
        <View style={styles.View_145_834} />
      </View>
      <View style={styles.View_145_835} />
      <View style={styles.View_145_836}>
        <Text style={styles.Text_145_836}>Service</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70bf/4cde/58c91b12aca35e21e7525a27e11242af"
        }}
        style={styles.ImageBackground_145_837}
      />
      <View style={styles.View_145_838}>
        <View style={styles.View_145_839} />
        <View style={styles.View_145_840} />
      </View>
      <View style={styles.View_145_842}>
        <Text style={styles.Text_145_842}>Application Fee</Text>
      </View>
      <View style={styles.View_145_843}>
        <Text style={styles.Text_145_843}>Application Fee</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6d8/2aa3/8e5916902367adab1648746f4896e05e"
        }}
        style={styles.ImageBackground_145_846}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9773/1ea6/aae08556dd80a9586c6bf7e13413043b"
        }}
        style={styles.ImageBackground_145_864}
      />
      <View style={styles.View_145_848} />
      <View style={styles.View_145_861} />
      <View style={styles.View_145_850}>
        <Text style={styles.Text_145_850}>$100</Text>
      </View>
      <View style={styles.View_145_851}>
        <Text style={styles.Text_145_851}>$50</Text>
      </View>
      <View style={styles.View_145_862}>
        <Text style={styles.Text_145_862}>$200</Text>
      </View>
      <View style={styles.View_145_863}>
        <Text style={styles.Text_145_863}>$75</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9df4/e8f7/7022b9b9a3ba8fdb7aadb2d2b6ab3f03"
        }}
        style={styles.ImageBackground_145_854}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3555/faba/47a93e9c1c3c0e8248b100fe1a64010b"
        }}
        style={styles.ImageBackground_145_860}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f55d/b89a/2f1c153d4e27da6a75c8d11749d8fc5c"
        }}
        style={styles.ImageBackground_145_866}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99b6/8d98/15d8b3d3f39a0a1413e4df69635f97dd"
        }}
        style={styles.ImageBackground_145_865}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e455/c0ad/9cd3896461ceb7df91c5bf7a1515e443"
        }}
        style={styles.ImageBackground_145_856}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5f9/d340/0359309fcc721d949f308013be4730a2"
        }}
        style={styles.ImageBackground_145_867}
      />
      <View style={styles.View_145_868} />
      <View style={styles.View_145_869}>
        <Text style={styles.Text_145_869}>Our recommendations</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89d7/4823/f7dd33631107fb98f8659865d43c4746"
        }}
        style={styles.ImageBackground_145_871}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_145_795: {
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
  View_145_796: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("30%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(60, 79, 253, 1)",
    borderWidth: 1
  },
  View_145_797: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(231, 237, 244, 1)"
  },
  View_145_798: {
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
  ImageBackground_145_799: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_145_801: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_145_803: {
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
  ImageBackground_145_804: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_145_806: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_145_810: {
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
  View_145_811: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_145_812: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_145_813: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_145_816: {
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
  View_145_817: {
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
  View_145_818: {
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
  View_145_819: {
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
  View_145_820: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_145_820: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_821: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_145_821: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_822: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_145_822: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_823: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_145_823: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_145_824: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("17%"),
    resizeMode: "cover"
  },
  ImageBackground_145_825: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("33%")
  },
  View_145_826: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("35%")
  },
  View_145_828: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_145_829: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("83%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(60, 79, 253, 1)",
    borderWidth: 1
  },
  View_145_830: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("86%"),
    justifyContent: "center"
  },
  Text_145_830: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_145_831: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("85%")
  },
  View_145_832: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("86%")
  },
  View_145_833: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(60, 79, 253, 1)"
  },
  View_145_834: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(60, 79, 253, 1)"
  },
  View_145_835: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("94%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(60, 79, 253, 1)",
    borderWidth: 1
  },
  View_145_836: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_145_836: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_145_837: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("97%")
  },
  View_145_838: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("98%")
  },
  View_145_839: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(60, 79, 253, 1)"
  },
  View_145_840: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(60, 79, 253, 1)"
  },
  View_145_842: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_145_842: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_843: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_145_843: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_145_846: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("61%")
  },
  ImageBackground_145_864: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("40%")
  },
  View_145_848: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("43%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(224, 224, 224, 1)",
    borderWidth: 1
  },
  View_145_861: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("43%"),
    backgroundColor: "rgba(250, 251, 255, 1)",
    borderColor: "rgba(214, 219, 240, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_145_850: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_145_850: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_851: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_145_851: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_862: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_145_862: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_863: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_145_863: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_145_854: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("61%")
  },
  ImageBackground_145_860: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("52%")
  },
  ImageBackground_145_866: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("43%")
  },
  ImageBackground_145_865: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("52%")
  },
  ImageBackground_145_856: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  ImageBackground_145_867: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  View_145_868: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("73%"),
    backgroundColor: "rgba(235, 241, 255, 1)"
  },
  View_145_869: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("75%"),
    justifyContent: "center"
  },
  Text_145_869: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_145_871: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
