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
      <View style={styles.View_144_457} />
      <View style={styles.View_144_458} />
      <View style={styles.View_144_459} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_144_460}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_144_462}
      />
      <View style={styles.View_144_464}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_144_465}
        />
      </View>
      <View style={styles.View_144_516}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
          }}
          style={styles.ImageBackground_144_467}
        />
      </View>
      <View style={styles.View_144_471}>
        <View style={styles.View_144_472}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/2848/6676c2c1dfe97b5897e7f0723cbed8d3"
            }}
            style={styles.ImageBackground_144_473}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_144_474}
          />
        </View>
      </View>
      <View style={styles.View_144_477}>
        <View style={styles.View_144_478} />
        <View style={styles.View_144_479} />
        <View style={styles.View_144_480} />
      </View>
      <View style={styles.View_144_481}>
        <Text style={styles.Text_144_481}>Loan Calculator</Text>
      </View>
      <View style={styles.View_144_482}>
        <Text style={styles.Text_144_482}>
          Use Loan calculator for home improvements
        </Text>
      </View>
      <View style={styles.View_144_484} />
      <View style={styles.View_144_485}>
        <View style={styles.View_144_486}>
          <View style={styles.View_144_487} />
          <View style={styles.View_144_488} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d562/6f78/01db1cc15398f4c708552884c7e07ae4"
            }}
            style={styles.ImageBackground_144_489}
          />
        </View>
        <View style={styles.View_144_490}>
          <Text style={styles.Text_144_490}>Loan Amount</Text>
        </View>
      </View>
      <View style={styles.View_144_491}>
        <View style={styles.View_144_492}>
          <View style={styles.View_144_493} />
          <View style={styles.View_144_494} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8662/fcc2/be4c4ef702317d0bb7346155b74c7c3f"
            }}
            style={styles.ImageBackground_144_495}
          />
        </View>
        <View style={styles.View_144_496}>
          <Text style={styles.Text_144_496}>Interest Rate</Text>
        </View>
      </View>
      <View style={styles.View_144_497}>
        <View style={styles.View_144_498}>
          <View style={styles.View_144_499} />
          <View style={styles.View_144_500} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8916/2a99/15c95754db3b856dcfd342317765cc7c"
            }}
            style={styles.ImageBackground_144_501}
          />
        </View>
        <View style={styles.View_144_502}>
          <Text style={styles.Text_144_502}>Product</Text>
        </View>
      </View>
      <View style={styles.View_144_562}>
        <View style={styles.View_144_563}>
          <View style={styles.View_144_564} />
          <View style={styles.View_144_565} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a500/6d5c/5baf2f5bafacf9e031e9f45296ae5b5a"
            }}
            style={styles.ImageBackground_144_566}
          />
        </View>
        <View style={styles.View_144_567}>
          <Text style={styles.Text_144_567}>Mortgage Tenure</Text>
        </View>
      </View>
      <View style={styles.View_144_514} />
      <View style={styles.View_144_515}>
        <Text style={styles.Text_144_515}>Calculate</Text>
      </View>
      <View style={styles.View_144_517} />
      <View style={styles.View_144_520}>
        <Text style={styles.Text_144_520}>50k</Text>
      </View>
      <View style={styles.View_144_549}>
        <Text style={styles.Text_144_549}>100k</Text>
      </View>
      <View style={styles.View_144_550}>
        <Text style={styles.Text_144_550}>200k</Text>
      </View>
      <View style={styles.View_144_551}>
        <Text style={styles.Text_144_551}>500k</Text>
      </View>
      <View style={styles.View_144_552}>
        <Text style={styles.Text_144_552}>1000k</Text>
      </View>
      <View style={styles.View_144_521}>
        <Text style={styles.Text_144_521}>10 y</Text>
      </View>
      <View style={styles.View_144_555}>
        <Text style={styles.Text_144_555}>15 y</Text>
      </View>
      <View style={styles.View_144_556}>
        <Text style={styles.Text_144_556}>20 y</Text>
      </View>
      <View style={styles.View_144_557}>
        <Text style={styles.Text_144_557}>25 y</Text>
      </View>
      <View style={styles.View_144_558}>
        <Text style={styles.Text_144_558}>30 y</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/5d28/2a3a8239def1c2dea54e6d3f18d07cb4"
        }}
        style={styles.ImageBackground_144_526}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8471/1d8d/d23a0b2ff7f6519c1c6431b8d45d0b0c"
        }}
        style={styles.ImageBackground_144_527}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/5d28/2a3a8239def1c2dea54e6d3f18d07cb4"
        }}
        style={styles.ImageBackground_144_528}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/5d28/2a3a8239def1c2dea54e6d3f18d07cb4"
        }}
        style={styles.ImageBackground_144_529}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/5d28/2a3a8239def1c2dea54e6d3f18d07cb4"
        }}
        style={styles.ImageBackground_144_553}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/5d28/2a3a8239def1c2dea54e6d3f18d07cb4"
        }}
        style={styles.ImageBackground_144_554}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8df/6869/bcaaa02e96e75a3ca2c94e8137f734c2"
        }}
        style={styles.ImageBackground_144_530}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/316e/56f7/28d1067af5098ec176b67e58685a98c3"
        }}
        style={styles.ImageBackground_144_531}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/316e/56f7/28d1067af5098ec176b67e58685a98c3"
        }}
        style={styles.ImageBackground_144_532}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/316e/56f7/28d1067af5098ec176b67e58685a98c3"
        }}
        style={styles.ImageBackground_144_533}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/316e/56f7/28d1067af5098ec176b67e58685a98c3"
        }}
        style={styles.ImageBackground_144_547}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/316e/56f7/28d1067af5098ec176b67e58685a98c3"
        }}
        style={styles.ImageBackground_144_548}
      />
      <View style={styles.View_144_538}>
        <Text style={styles.Text_144_538}>Principal</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bc2/c397/67d00e9bc49de858096be549255036c2"
        }}
        style={styles.ImageBackground_144_539}
      />
      <View style={styles.View_144_540}>
        <Text style={styles.Text_144_540}>Interest</Text>
      </View>
      <View style={styles.View_144_541}>
        <Text style={styles.Text_144_541}>Amount</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14d6/aca5/627225e7c150cbb0f8fb70ab96397959"
        }}
        style={styles.ImageBackground_144_542}
      />
      <View style={styles.View_144_543}>
        <Text style={styles.Text_144_543}>Remaining</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52eb/0b7b/2841c7e7ceb714632ed8a7aef86f7ad8"
        }}
        style={styles.ImageBackground_144_544}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7497/a6bf/54f9fcae8a455b6c509f33fc06ee0e07"
        }}
        style={styles.ImageBackground_144_559}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0102/2053/8d2258f92e0994e2d9ea73141a41f958"
        }}
        style={styles.ImageBackground_144_560}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc61/687f/604c5ed2e22fbdf870e64aeeece00d1e"
        }}
        style={styles.ImageBackground_144_561}
      />
      <View style={styles.View_216_1059} />
      <View style={styles.View_216_1060}>
        <Text style={styles.Text_216_1060}>$</Text>
      </View>
      <View style={styles.View_216_1061}>
        <Text style={styles.Text_216_1061}>Home Value</Text>
      </View>
      <View style={styles.View_216_1062} />
      <View style={styles.View_216_1063} />
      <View style={styles.View_216_1064} />
      <View style={styles.View_216_1065}>
        <Text style={styles.Text_216_1065}>Loan Amount</Text>
      </View>
      <View style={styles.View_216_1066}>
        <Text style={styles.Text_216_1066}>$</Text>
      </View>
      <View style={styles.View_216_1067}>
        <Text style={styles.Text_216_1067}>Interest Rate</Text>
      </View>
      <View style={styles.View_216_1068}>
        <Text style={styles.Text_216_1068}>%</Text>
      </View>
      <View style={styles.View_216_1069}>
        <Text style={styles.Text_216_1069}>Product</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e95/32ea/2c5c57d8e70ffc72b6e55dddba7f9f93"
        }}
        style={styles.ImageBackground_216_1070}
      />
      <View style={styles.View_216_1072}>
        <Text style={styles.Text_216_1072}>30 Years</Text>
      </View>
      <View style={styles.View_144_575}>
        <Text style={styles.Text_144_575}>500,000</Text>
      </View>
      <View style={styles.View_216_1073}>
        <Text style={styles.Text_216_1073}>400,000</Text>
      </View>
      <View style={styles.View_144_576}>
        <Text style={styles.Text_144_576}>3.25</Text>
      </View>
      <View style={styles.View_216_1074}>
        <Text style={styles.Text_216_1074}>$207,134</Text>
      </View>
      <View style={styles.View_216_1075}>
        <Text style={styles.Text_216_1075}>$32,866</Text>
      </View>
      <View style={styles.View_216_1076}>
        <Text style={styles.Text_216_1076}>$64,839</Text>
      </View>
      <View style={styles.View_216_1078}>
        <Text style={styles.Text_216_1078}>Mortgage Tenure</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("185%") },
  View_144_457: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("185%"),
    minHeight: hp("185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 249, 1)"
  },
  View_144_458: {
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
  View_144_459: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("172%"),
    backgroundColor: "rgba(60, 79, 253, 1)"
  },
  ImageBackground_144_460: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_144_462: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_144_464: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_144_465: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_516: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_144_467: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_471: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_472: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_473: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_474: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_144_477: {
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
  View_144_478: {
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
  View_144_479: {
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
  View_144_480: {
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
  View_144_481: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_144_481: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_482: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_144_482: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_484: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("126%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_144_485: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("128%")
  },
  View_144_486: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_144_487: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(237, 239, 255, 1)"
  },
  View_144_488: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(160, 170, 255, 1)"
  },
  ImageBackground_144_489: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%")
  },
  View_144_490: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_144_490: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_491: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("136%")
  },
  View_144_492: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_144_493: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(237, 239, 255, 1)"
  },
  View_144_494: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 195, 140, 1)"
  },
  ImageBackground_144_495: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%")
  },
  View_144_496: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_144_496: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_497: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("144%")
  },
  View_144_498: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_144_499: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(237, 239, 255, 1)"
  },
  View_144_500: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(254, 166, 116, 1)"
  },
  ImageBackground_144_501: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%")
  },
  View_144_502: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_144_502: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_562: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("153%")
  },
  View_144_563: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_144_564: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(237, 239, 255, 1)"
  },
  View_144_565: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 134, 243, 1)"
  },
  ImageBackground_144_566: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%")
  },
  View_144_567: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_144_567: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_514: {
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
  View_144_515: {
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
  Text_144_515: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_517: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("73%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_144_520: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("106%"),
    justifyContent: "center"
  },
  Text_144_520: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_549: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("99%"),
    justifyContent: "center"
  },
  Text_144_549: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_550: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("92%"),
    justifyContent: "center"
  },
  Text_144_550: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_551: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("85%"),
    justifyContent: "center"
  },
  Text_144_551: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_552: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("77%"),
    justifyContent: "center"
  },
  Text_144_552: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_521: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("116%"),
    justifyContent: "center"
  },
  Text_144_521: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_555: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("116%"),
    justifyContent: "center"
  },
  Text_144_555: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_556: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("116%"),
    justifyContent: "center"
  },
  Text_144_556: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_557: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("116%"),
    justifyContent: "center"
  },
  Text_144_557: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_558: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("116%"),
    justifyContent: "center"
  },
  Text_144_558: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_144_526: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("76%")
  },
  ImageBackground_144_527: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("76%")
  },
  ImageBackground_144_528: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("76%")
  },
  ImageBackground_144_529: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("76%")
  },
  ImageBackground_144_553: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("76%")
  },
  ImageBackground_144_554: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("76%")
  },
  ImageBackground_144_530: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("115%")
  },
  ImageBackground_144_531: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("108%")
  },
  ImageBackground_144_532: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("100%")
  },
  ImageBackground_144_533: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("93%")
  },
  ImageBackground_144_547: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("86%")
  },
  ImageBackground_144_548: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("79%")
  },
  View_144_538: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("120%"),
    justifyContent: "center"
  },
  Text_144_538: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_144_539: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("120%")
  },
  View_144_540: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("120%"),
    justifyContent: "center"
  },
  Text_144_540: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_541: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_144_541: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_144_542: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("120%")
  },
  View_144_543: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("120%"),
    justifyContent: "center"
  },
  Text_144_543: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_144_544: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("120%")
  },
  ImageBackground_144_559: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("86%")
  },
  ImageBackground_144_560: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("86%")
  },
  ImageBackground_144_561: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("90%")
  },
  View_216_1059: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("24%"),
    backgroundColor: "rgba(250, 252, 255, 1)",
    borderColor: "rgba(161, 189, 255, 1)",
    borderWidth: 1
  },
  View_216_1060: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_216_1060: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1061: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_216_1061: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1062: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("33%"),
    backgroundColor: "rgba(250, 252, 255, 1)",
    borderColor: "rgba(161, 189, 255, 1)",
    borderWidth: 1
  },
  View_216_1063: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("42%"),
    backgroundColor: "rgba(250, 252, 255, 1)",
    borderColor: "rgba(161, 189, 255, 1)",
    borderWidth: 1
  },
  View_216_1064: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("51%"),
    backgroundColor: "rgba(250, 252, 255, 1)",
    borderColor: "rgba(161, 189, 255, 1)",
    borderWidth: 1
  },
  View_216_1065: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_216_1065: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1066: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_216_1066: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1067: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("44%"),
    justifyContent: "center"
  },
  Text_216_1067: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1068: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("44%"),
    justifyContent: "center"
  },
  Text_216_1068: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1069: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("53%"),
    justifyContent: "center"
  },
  Text_216_1069: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_216_1070: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_216_1072: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("53%"),
    justifyContent: "center"
  },
  Text_216_1072: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_575: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_144_575: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1073: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("35%"),
    justifyContent: "center"
  },
  Text_216_1073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_576: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("44%"),
    justifyContent: "center"
  },
  Text_144_576: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1074: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_216_1074: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1075: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("111%"),
    justifyContent: "center"
  },
  Text_216_1075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1076: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("103%"),
    justifyContent: "center"
  },
  Text_216_1076: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_1078: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("75%"),
    justifyContent: "center"
  },
  Text_216_1078: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
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
