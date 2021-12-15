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
      <View style={styles.View_7_371} />
      <View style={styles.View_7_372} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_7_373}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_7_375}
      />
      <View style={styles.View_7_377}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_7_378}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_7_380}
      />
      <View style={styles.View_7_384}>
        <View style={styles.View_7_385}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c68f/cb65/3263b1065eecc7957423cf291b5cb388"
            }}
            style={styles.ImageBackground_7_386}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_7_387}
          />
        </View>
      </View>
      <View style={styles.View_7_390}>
        <View style={styles.View_7_391} />
        <View style={styles.View_7_392} />
        <View style={styles.View_7_393} />
      </View>
      <View style={styles.View_7_395}>
        <Text style={styles.Text_7_395}>Scenario Comparision</Text>
      </View>
      <View style={styles.View_7_666} />
      <View style={styles.View_29_73} />
      <View style={styles.View_7_667} />
      <View style={styles.View_7_668} />
      <View style={styles.View_7_669}>
        <Text style={styles.Text_7_669}>10k</Text>
      </View>
      <View style={styles.View_7_670}>
        <Text style={styles.Text_7_670}>2019</Text>
      </View>
      <View style={styles.View_7_671}>
        <Text style={styles.Text_7_671}>2020</Text>
      </View>
      <View style={styles.View_7_672}>
        <Text style={styles.Text_7_672}>2021</Text>
      </View>
      <View style={styles.View_7_673}>
        <Text style={styles.Text_7_673}>20k</Text>
      </View>
      <View style={styles.View_7_674}>
        <Text style={styles.Text_7_674}>30k</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e23/fb8b/cb574d26e970d6a8c6c88bb5b49e255a"
        }}
        style={styles.ImageBackground_7_675}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e23/fb8b/cb574d26e970d6a8c6c88bb5b49e255a"
        }}
        style={styles.ImageBackground_7_676}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e23/fb8b/cb574d26e970d6a8c6c88bb5b49e255a"
        }}
        style={styles.ImageBackground_7_677}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e23/fb8b/cb574d26e970d6a8c6c88bb5b49e255a"
        }}
        style={styles.ImageBackground_7_678}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8df/6869/bcaaa02e96e75a3ca2c94e8137f734c2"
        }}
        style={styles.ImageBackground_7_679}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9f4/8154/f56d339caa64d07c068dde34df44523e"
        }}
        style={styles.ImageBackground_7_680}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9f4/8154/f56d339caa64d07c068dde34df44523e"
        }}
        style={styles.ImageBackground_7_681}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9f4/8154/f56d339caa64d07c068dde34df44523e"
        }}
        style={styles.ImageBackground_7_682}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ca8/9fca/dc40b1ab35916b3e38864b5b2f5a3757"
        }}
        style={styles.ImageBackground_7_683}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e712/3d9f/c20424b464bfa05be103aaf000afd689"
        }}
        style={styles.ImageBackground_7_684}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4bb/2d4c/7b051a148a37908bd678d6777462a642"
        }}
        style={styles.ImageBackground_7_685}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/640d/fe17/d1564ab3ed8caf2bff09f34b1006ae95"
        }}
        style={styles.ImageBackground_7_686}
      />
      <View style={styles.View_37_297}>
        <Text style={styles.Text_37_297}>Lender 1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bc2/c397/67d00e9bc49de858096be549255036c2"
        }}
        style={styles.ImageBackground_37_298}
      />
      <View style={styles.View_37_312}>
        <View style={styles.View_29_83}>
          <View style={styles.View_29_74} />
          <View style={styles.View_29_80} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0dd/ffbd/9fff849a4cebf184ed5ae4ef342724db"
            }}
            style={styles.ImageBackground_29_75}
          />
        </View>
        <View style={styles.View_37_307}>
          <Text style={styles.Text_37_307}>Origination Points</Text>
        </View>
      </View>
      <View style={styles.View_37_311}>
        <View style={styles.View_29_84}>
          <View style={styles.View_29_76} />
          <View style={styles.View_29_81} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0dd/ffbd/9fff849a4cebf184ed5ae4ef342724db"
            }}
            style={styles.ImageBackground_29_77}
          />
        </View>
        <View style={styles.View_37_309}>
          <Text style={styles.Text_37_309}>Mortgage Tenure</Text>
        </View>
      </View>
      <View style={styles.View_37_313}>
        <View style={styles.View_29_85}>
          <View style={styles.View_29_78} />
          <View style={styles.View_29_82} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0dd/ffbd/9fff849a4cebf184ed5ae4ef342724db"
            }}
            style={styles.ImageBackground_29_79}
          />
        </View>
        <View style={styles.View_37_310}>
          <Text style={styles.Text_37_310}>Down Payment</Text>
        </View>
      </View>
      <View style={styles.View_37_299}>
        <Text style={styles.Text_37_299}>Lender 2</Text>
      </View>
      <View style={styles.View_37_316}>
        <Text style={styles.Text_37_316}>Interest over Mortgage Tenure</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14d6/aca5/627225e7c150cbb0f8fb70ab96397959"
        }}
        style={styles.ImageBackground_37_300}
      />
      <View style={styles.View_37_301}>
        <Text style={styles.Text_37_301}>Lender 3</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52eb/0b7b/2841c7e7ceb714632ed8a7aef86f7ad8"
        }}
        style={styles.ImageBackground_37_302}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50e8/96ef/f4923cbf607843a5f391d9488d98a638"
        }}
        style={styles.ImageBackground_37_315}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c5e/15a2/cf7539db727328fc55a8285f8201289c"
        }}
        style={styles.ImageBackground_37_314}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_7_371: {
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
  View_7_372: {
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
  ImageBackground_7_373: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_7_375: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_7_377: {
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
  ImageBackground_7_378: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_380: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_7_384: {
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
  View_7_385: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_386: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_387: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_7_390: {
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
  View_7_391: {
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
  View_7_392: {
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
  View_7_393: {
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
  View_7_395: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_7_395: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_666: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_29_73: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("84%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_7_667: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("18%")
  },
  View_7_668: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("18%")
  },
  View_7_669: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("58%"),
    justifyContent: "center"
  },
  Text_7_669: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_670: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("74%"),
    justifyContent: "center"
  },
  Text_7_670: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_671: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("74%"),
    justifyContent: "center"
  },
  Text_7_671: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_672: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("74%"),
    justifyContent: "center"
  },
  Text_7_672: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_673: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_7_673: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_674: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_7_674: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_675: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("18%")
  },
  ImageBackground_7_676: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("18%")
  },
  ImageBackground_7_677: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("18%")
  },
  ImageBackground_7_678: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("18%")
  },
  ImageBackground_7_679: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("73%")
  },
  ImageBackground_7_680: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("58%")
  },
  ImageBackground_7_681: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("44%")
  },
  ImageBackground_7_682: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("30%")
  },
  ImageBackground_7_683: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("34%")
  },
  ImageBackground_7_684: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("34%")
  },
  ImageBackground_7_685: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("21%")
  },
  ImageBackground_7_686: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("21%")
  },
  View_37_297: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("79%"),
    justifyContent: "center"
  },
  Text_37_297: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_37_298: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("79%")
  },
  View_37_312: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("86%")
  },
  View_29_83: {
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
  View_29_74: {
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
  View_29_80: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(60, 79, 253, 1)"
  },
  ImageBackground_29_75: {
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
  View_37_307: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_37_307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_311: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("95%")
  },
  View_29_84: {
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
  View_29_76: {
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
  View_29_81: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(60, 79, 253, 1)"
  },
  ImageBackground_29_77: {
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
  View_37_309: {
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
  Text_37_309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_313: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("103%")
  },
  View_29_85: {
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
  View_29_78: {
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
  View_29_82: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(60, 79, 253, 1)"
  },
  ImageBackground_29_79: {
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
  View_37_310: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_37_310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_299: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("79%"),
    justifyContent: "center"
  },
  Text_37_299: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_316: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_37_316: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_37_300: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("79%")
  },
  View_37_301: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("79%"),
    justifyContent: "center"
  },
  Text_37_301: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_37_302: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("79%")
  },
  ImageBackground_37_315: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("28%")
  },
  ImageBackground_37_314: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("28%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
