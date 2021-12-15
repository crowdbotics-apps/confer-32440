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
      <View style={styles.View_219_3881} />
      <View style={styles.View_219_3882} />
      <View style={styles.View_219_3883} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_219_3884}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_219_3886}
      />
      <View style={styles.View_219_3888}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_219_3889}
        />
      </View>
      <View style={styles.View_219_3891}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
          }}
          style={styles.ImageBackground_219_3892}
        />
      </View>
      <View style={styles.View_219_3896}>
        <View style={styles.View_219_3897}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/2848/6676c2c1dfe97b5897e7f0723cbed8d3"
            }}
            style={styles.ImageBackground_219_3898}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_219_3899}
          />
        </View>
      </View>
      <View style={styles.View_219_3902}>
        <View style={styles.View_219_3903} />
        <View style={styles.View_219_3904} />
        <View style={styles.View_219_3905} />
      </View>
      <View style={styles.View_219_3906}>
        <Text style={styles.Text_219_3906}>Loan Calculator</Text>
      </View>
      <View style={styles.View_219_3907}>
        <Text style={styles.Text_219_3907}>
          Use Loan calculator for home improvements
        </Text>
      </View>
      <View style={styles.View_219_3908} />
      <View style={styles.View_219_3909}>
        <View style={styles.View_219_3910}>
          <View style={styles.View_219_3911} />
          <View style={styles.View_219_3912} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d562/6f78/01db1cc15398f4c708552884c7e07ae4"
            }}
            style={styles.ImageBackground_219_3913}
          />
        </View>
        <View style={styles.View_219_3914}>
          <Text style={styles.Text_219_3914}>Loan Amount</Text>
        </View>
      </View>
      <View style={styles.View_219_3915}>
        <View style={styles.View_219_3916}>
          <View style={styles.View_219_3917} />
          <View style={styles.View_219_3918} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8662/fcc2/be4c4ef702317d0bb7346155b74c7c3f"
            }}
            style={styles.ImageBackground_219_3919}
          />
        </View>
        <View style={styles.View_219_3920}>
          <Text style={styles.Text_219_3920}>Interest Rate</Text>
        </View>
      </View>
      <View style={styles.View_219_3921}>
        <View style={styles.View_219_3922}>
          <View style={styles.View_219_3923} />
          <View style={styles.View_219_3924} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8916/2a99/15c95754db3b856dcfd342317765cc7c"
            }}
            style={styles.ImageBackground_219_3925}
          />
        </View>
        <View style={styles.View_219_3926}>
          <Text style={styles.Text_219_3926}>Product</Text>
        </View>
      </View>
      <View style={styles.View_219_3927}>
        <View style={styles.View_219_3928}>
          <View style={styles.View_219_3929} />
          <View style={styles.View_219_3930} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a500/6d5c/5baf2f5bafacf9e031e9f45296ae5b5a"
            }}
            style={styles.ImageBackground_219_3931}
          />
        </View>
        <View style={styles.View_219_3932}>
          <Text style={styles.Text_219_3932}>Mortgage Tenure</Text>
        </View>
      </View>
      <View style={styles.View_219_3933} />
      <View style={styles.View_219_3934}>
        <Text style={styles.Text_219_3934}>Calculate</Text>
      </View>
      <View style={styles.View_219_3935} />
      <View style={styles.View_219_3936}>
        <Text style={styles.Text_219_3936}>50k</Text>
      </View>
      <View style={styles.View_219_3937}>
        <Text style={styles.Text_219_3937}>100k</Text>
      </View>
      <View style={styles.View_219_3938}>
        <Text style={styles.Text_219_3938}>200k</Text>
      </View>
      <View style={styles.View_219_3939}>
        <Text style={styles.Text_219_3939}>500k</Text>
      </View>
      <View style={styles.View_219_3940}>
        <Text style={styles.Text_219_3940}>1000k</Text>
      </View>
      <View style={styles.View_219_3941}>
        <Text style={styles.Text_219_3941}>10 y</Text>
      </View>
      <View style={styles.View_219_3942}>
        <Text style={styles.Text_219_3942}>15 y</Text>
      </View>
      <View style={styles.View_219_3943}>
        <Text style={styles.Text_219_3943}>20 y</Text>
      </View>
      <View style={styles.View_219_3944}>
        <Text style={styles.Text_219_3944}>25 y</Text>
      </View>
      <View style={styles.View_219_3945}>
        <Text style={styles.Text_219_3945}>30 y</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/5d28/2a3a8239def1c2dea54e6d3f18d07cb4"
        }}
        style={styles.ImageBackground_219_3946}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8471/1d8d/d23a0b2ff7f6519c1c6431b8d45d0b0c"
        }}
        style={styles.ImageBackground_219_3947}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/5d28/2a3a8239def1c2dea54e6d3f18d07cb4"
        }}
        style={styles.ImageBackground_219_3948}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/5d28/2a3a8239def1c2dea54e6d3f18d07cb4"
        }}
        style={styles.ImageBackground_219_3949}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/5d28/2a3a8239def1c2dea54e6d3f18d07cb4"
        }}
        style={styles.ImageBackground_219_3950}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3321/5d28/2a3a8239def1c2dea54e6d3f18d07cb4"
        }}
        style={styles.ImageBackground_219_3951}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8df/6869/bcaaa02e96e75a3ca2c94e8137f734c2"
        }}
        style={styles.ImageBackground_219_3952}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/316e/56f7/28d1067af5098ec176b67e58685a98c3"
        }}
        style={styles.ImageBackground_219_3953}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/316e/56f7/28d1067af5098ec176b67e58685a98c3"
        }}
        style={styles.ImageBackground_219_3954}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/316e/56f7/28d1067af5098ec176b67e58685a98c3"
        }}
        style={styles.ImageBackground_219_3955}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/316e/56f7/28d1067af5098ec176b67e58685a98c3"
        }}
        style={styles.ImageBackground_219_3956}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/316e/56f7/28d1067af5098ec176b67e58685a98c3"
        }}
        style={styles.ImageBackground_219_3957}
      />
      <View style={styles.View_219_3958}>
        <Text style={styles.Text_219_3958}>Principal</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bc2/c397/67d00e9bc49de858096be549255036c2"
        }}
        style={styles.ImageBackground_219_3959}
      />
      <View style={styles.View_219_3960}>
        <Text style={styles.Text_219_3960}>Interest</Text>
      </View>
      <View style={styles.View_219_3961}>
        <Text style={styles.Text_219_3961}>Amount</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14d6/aca5/627225e7c150cbb0f8fb70ab96397959"
        }}
        style={styles.ImageBackground_219_3962}
      />
      <View style={styles.View_219_3963}>
        <Text style={styles.Text_219_3963}>Remaining</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52eb/0b7b/2841c7e7ceb714632ed8a7aef86f7ad8"
        }}
        style={styles.ImageBackground_219_3964}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4359/5a1f/3bef91057be52465fb0f229f6cd1df6c"
        }}
        style={styles.ImageBackground_219_3965}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c0e/7037/61b8f8ac46bb810f0eae0ad2c45ed780"
        }}
        style={styles.ImageBackground_219_3966}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc61/687f/604c5ed2e22fbdf870e64aeeece00d1e"
        }}
        style={styles.ImageBackground_219_3967}
      />
      <View style={styles.View_219_3968} />
      <View style={styles.View_219_3969}>
        <Text style={styles.Text_219_3969}>$</Text>
      </View>
      <View style={styles.View_219_3970}>
        <Text style={styles.Text_219_3970}>Home Value</Text>
      </View>
      <View style={styles.View_219_3971} />
      <View style={styles.View_219_3972} />
      <View style={styles.View_219_3973} />
      <View style={styles.View_219_3974}>
        <Text style={styles.Text_219_3974}>Loan Amount</Text>
      </View>
      <View style={styles.View_219_3975}>
        <Text style={styles.Text_219_3975}>$</Text>
      </View>
      <View style={styles.View_219_3976}>
        <Text style={styles.Text_219_3976}>Interest Rate</Text>
      </View>
      <View style={styles.View_219_3977}>
        <Text style={styles.Text_219_3977}>%</Text>
      </View>
      <View style={styles.View_219_3978}>
        <Text style={styles.Text_219_3978}>Product</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e95/32ea/2c5c57d8e70ffc72b6e55dddba7f9f93"
        }}
        style={styles.ImageBackground_219_3979}
      />
      <View style={styles.View_219_3981}>
        <Text style={styles.Text_219_3981}>30 Years</Text>
      </View>
      <View style={styles.View_219_3982}>
        <Text style={styles.Text_219_3982}>500,000</Text>
      </View>
      <View style={styles.View_219_3983}>
        <Text style={styles.Text_219_3983}>400,000</Text>
      </View>
      <View style={styles.View_219_3984}>
        <Text style={styles.Text_219_3984}>3.25</Text>
      </View>
      <View style={styles.View_219_3985}>
        <Text style={styles.Text_219_3985}>$207,134</Text>
      </View>
      <View style={styles.View_219_3986}>
        <Text style={styles.Text_219_3986}>$32,866</Text>
      </View>
      <View style={styles.View_219_3987}>
        <Text style={styles.Text_219_3987}>$64,839</Text>
      </View>
      <View style={styles.View_219_3988}>
        <Text style={styles.Text_219_3988}>Mortgage Tenure</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("185%") },
  View_219_3881: {
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
  View_219_3882: {
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
  View_219_3883: {
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
  ImageBackground_219_3884: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_219_3886: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_219_3888: {
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
  ImageBackground_219_3889: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3891: {
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
  ImageBackground_219_3892: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3896: {
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
  View_219_3897: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3898: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3899: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_219_3902: {
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
  View_219_3903: {
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
  View_219_3904: {
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
  View_219_3905: {
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
  View_219_3906: {
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
  Text_219_3906: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3907: {
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
  Text_219_3907: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3908: {
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
  View_219_3909: {
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
  View_219_3910: {
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
  View_219_3911: {
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
  View_219_3912: {
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
  ImageBackground_219_3913: {
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
  View_219_3914: {
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
  Text_219_3914: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3915: {
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
  View_219_3916: {
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
  View_219_3917: {
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
  View_219_3918: {
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
  ImageBackground_219_3919: {
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
  View_219_3920: {
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
  Text_219_3920: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3921: {
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
  View_219_3922: {
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
  View_219_3923: {
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
  View_219_3924: {
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
  ImageBackground_219_3925: {
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
  View_219_3926: {
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
  Text_219_3926: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3927: {
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
  View_219_3928: {
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
  View_219_3929: {
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
  View_219_3930: {
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
  ImageBackground_219_3931: {
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
  View_219_3932: {
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
  Text_219_3932: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3933: {
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
  View_219_3934: {
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
  Text_219_3934: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3935: {
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
  View_219_3936: {
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
  Text_219_3936: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3937: {
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
  Text_219_3937: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3938: {
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
  Text_219_3938: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3939: {
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
  Text_219_3939: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3940: {
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
  Text_219_3940: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3941: {
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
  Text_219_3941: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3942: {
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
  Text_219_3942: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3943: {
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
  Text_219_3943: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3944: {
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
  Text_219_3944: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3945: {
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
  Text_219_3945: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_3946: {
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
  ImageBackground_219_3947: {
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
  ImageBackground_219_3948: {
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
  ImageBackground_219_3949: {
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
  ImageBackground_219_3950: {
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
  ImageBackground_219_3951: {
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
  ImageBackground_219_3952: {
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
  ImageBackground_219_3953: {
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
  ImageBackground_219_3954: {
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
  ImageBackground_219_3955: {
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
  ImageBackground_219_3956: {
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
  ImageBackground_219_3957: {
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
  View_219_3958: {
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
  Text_219_3958: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_3959: {
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
  View_219_3960: {
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
  Text_219_3960: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3961: {
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
  Text_219_3961: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_3962: {
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
  View_219_3963: {
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
  Text_219_3963: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_3964: {
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
  ImageBackground_219_3965: {
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
  ImageBackground_219_3966: {
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
  ImageBackground_219_3967: {
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
  View_219_3968: {
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
  View_219_3969: {
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
  Text_219_3969: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3970: {
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
  Text_219_3970: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3971: {
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
  View_219_3972: {
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
  View_219_3973: {
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
  View_219_3974: {
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
  Text_219_3974: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3975: {
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
  Text_219_3975: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3976: {
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
  Text_219_3976: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3977: {
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
  Text_219_3977: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3978: {
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
  Text_219_3978: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_3979: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_219_3981: {
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
  Text_219_3981: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3982: {
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
  Text_219_3982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3983: {
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
  Text_219_3983: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3984: {
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
  Text_219_3984: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3985: {
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
  Text_219_3985: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3986: {
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
  Text_219_3986: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3987: {
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
  Text_219_3987: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3988: {
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
  Text_219_3988: {
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
