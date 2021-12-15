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
      <View style={styles.View_5_11481} />
      <View style={styles.View_5_11650} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_5_11654}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_5_11680}
      />
      <View style={styles.View_5_11666}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_5_11658}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_5_11668}
      />
      <View style={styles.View_5_11681}>
        <View style={styles.View_5_11675}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/2848/6676c2c1dfe97b5897e7f0723cbed8d3"
            }}
            style={styles.ImageBackground_5_11676}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_5_11679}
          />
        </View>
      </View>
      <View style={styles.View_5_11695}>
        <View style={styles.View_5_11692} />
        <View style={styles.View_5_11693} />
        <View style={styles.View_5_11694} />
      </View>
      <View style={styles.View_6_2}>
        <Text style={styles.Text_6_2}>Mortgage Comparison</Text>
      </View>
      <View style={styles.View_27_4}>
        <Text style={styles.Text_27_4}>Lender</Text>
      </View>
      <View style={styles.View_27_5}>
        <Text style={styles.Text_27_5}>Origination Charge</Text>
      </View>
      <View style={styles.View_27_6}>
        <Text style={styles.Text_27_6}>Service You Cannot shop for</Text>
      </View>
      <View style={styles.View_27_7}>
        <Text style={styles.Text_27_7}>Service You Can shop for</Text>
      </View>
      <View style={styles.View_27_8}>
        <Text style={styles.Text_27_8}>Taxes and other Governments fees</Text>
      </View>
      <View style={styles.View_28_9}>
        <Text style={styles.Text_28_9}>Prepaids</Text>
      </View>
      <View style={styles.View_28_10}>
        <Text style={styles.Text_28_10}>Escrows</Text>
      </View>
      <View style={styles.View_28_11}>
        <Text style={styles.Text_28_11}>Cash to Close</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_28_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_28_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_28_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_28_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_28_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_28_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_28_18}
      />
      <View style={styles.View_27_3} />
      <View style={styles.View_28_30}>
        <Text style={styles.Text_28_30}>$1,100</Text>
      </View>
      <View style={styles.View_28_31}>
        <Text style={styles.Text_28_31}>$350</Text>
      </View>
      <View style={styles.View_28_32}>
        <Text style={styles.Text_28_32}>$1,350</Text>
      </View>
      <View style={styles.View_28_33}>
        <Text style={styles.Text_28_33}>$110</Text>
      </View>
      <View style={styles.View_28_34}>
        <Text style={styles.Text_28_34}>$324.3</Text>
      </View>
      <View style={styles.View_28_35}>
        <Text style={styles.Text_28_35}>$2,400</Text>
      </View>
      <View style={styles.View_28_36}>
        <Text style={styles.Text_28_36}>$18,972</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_28_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_28_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_28_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_28_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_28_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_28_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_28_27}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d253/1754/3d190251bd079fc0e4095451329b808e"
        }}
        style={styles.ImageBackground_28_28}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b626/2ccc/c6a1ea8c51eb8f7e04750f5e7e5dbee6"
        }}
        style={styles.ImageBackground_28_71}
      />
      <View style={styles.View_39_330}>
        <Text style={styles.Text_39_330}>BEST</Text>
      </View>
      <View style={styles.View_44_6} />
      <View style={styles.View_44_7}>
        <Text style={styles.Text_44_7}>$700</Text>
      </View>
      <View style={styles.View_44_8}>
        <Text style={styles.Text_44_8}>$75</Text>
      </View>
      <View style={styles.View_44_9}>
        <Text style={styles.Text_44_9}>$1,525</Text>
      </View>
      <View style={styles.View_44_10}>
        <Text style={styles.Text_44_10}>$111</Text>
      </View>
      <View style={styles.View_44_103}>
        <Text style={styles.Text_44_103}>Variable Rate</Text>
      </View>
      <View style={styles.View_44_11}>
        <Text style={styles.Text_44_11}>$314.1</Text>
      </View>
      <View style={styles.View_44_12}>
        <Text style={styles.Text_44_12}>$2,400</Text>
      </View>
      <View style={styles.View_44_13}>
        <Text style={styles.Text_44_13}>$16,692</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f58/b47f/6a8a5edf78f4522d65596ff5541c41a4"
        }}
        style={styles.ImageBackground_39_328}
      />
      <View style={styles.View_39_333}>
        <Text style={styles.Text_39_333}>BETTER</Text>
      </View>
      <View style={styles.View_44_48} />
      <View style={styles.View_44_74}>
        <Text style={styles.Text_44_74}>$750</Text>
      </View>
      <View style={styles.View_44_75}>
        <Text style={styles.Text_44_75}>$95</Text>
      </View>
      <View style={styles.View_44_76}>
        <Text style={styles.Text_44_76}>$1,675</Text>
      </View>
      <View style={styles.View_44_77}>
        <Text style={styles.Text_44_77}>$110</Text>
      </View>
      <View style={styles.View_44_78}>
        <Text style={styles.Text_44_78}>$28.24</Text>
      </View>
      <View style={styles.View_44_79}>
        <Text style={styles.Text_44_79}>$2,400</Text>
      </View>
      <View style={styles.View_44_80}>
        <Text style={styles.Text_44_80}>$19,982</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_56}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_57}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_58}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_59}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_60}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_62}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce7/98b8/efe13dd488686bcb4025c53b5731dfae"
        }}
        style={styles.ImageBackground_39_329}
      />
      <View style={styles.View_39_338}>
        <Text style={styles.Text_39_338}>GOOD</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e455/c0ad/9cd3896461ceb7df91c5bf7a1515e443"
        }}
        style={styles.ImageBackground_44_72}
      />
      <View style={styles.View_44_102}>
        <View style={styles.View_44_81} />
        <View style={styles.View_44_82}>
          <Text style={styles.Text_44_82}>$750</Text>
        </View>
        <View style={styles.View_44_83}>
          <Text style={styles.Text_44_83}>$95</Text>
        </View>
        <View style={styles.View_44_84}>
          <Text style={styles.Text_44_84}>$1,675</Text>
        </View>
        <View style={styles.View_44_85}>
          <Text style={styles.Text_44_85}>$110</Text>
        </View>
        <View style={styles.View_44_86}>
          <Text style={styles.Text_44_86}>$28.24</Text>
        </View>
        <View style={styles.View_44_87}>
          <Text style={styles.Text_44_87}>$2,400</Text>
        </View>
        <View style={styles.View_44_88}>
          <Text style={styles.Text_44_88}>$19,982</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
          }}
          style={styles.ImageBackground_44_89}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
          }}
          style={styles.ImageBackground_44_90}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
          }}
          style={styles.ImageBackground_44_91}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
          }}
          style={styles.ImageBackground_44_92}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
          }}
          style={styles.ImageBackground_44_93}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
          }}
          style={styles.ImageBackground_44_94}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
          }}
          style={styles.ImageBackground_44_95}
        />
        <View style={styles.View_44_96}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce7/98b8/efe13dd488686bcb4025c53b5731dfae"
            }}
            style={styles.ImageBackground_44_97}
          />
          <View style={styles.View_44_100}>
            <Text style={styles.Text_44_100}>GOOD</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e455/c0ad/9cd3896461ceb7df91c5bf7a1515e443"
          }}
          style={styles.ImageBackground_44_101}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e4/9edc/0a13d56d82ce90dd1d6bc6e0fa3ac3b8"
        }}
        style={styles.ImageBackground_44_73}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b217/1eea/c88a0b5c4f514e1e93786ced0945be5e"
        }}
        style={styles.ImageBackground_39_327}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_5_11481: {
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
  View_5_11650: {
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
  ImageBackground_5_11654: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_5_11680: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_5_11666: {
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
  ImageBackground_5_11658: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_11668: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_5_11681: {
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
  View_5_11675: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_11676: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_11679: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_5_11695: {
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
  View_5_11692: {
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
  View_5_11693: {
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
  View_5_11694: {
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
  View_6_2: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_6_2: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_4: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("23%"),
    justifyContent: "center"
  },
  Text_27_4: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_5: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("39%"),
    justifyContent: "center"
  },
  Text_27_5: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_6: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_27_6: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_7: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("58%"),
    justifyContent: "center"
  },
  Text_27_7: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_8: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("68%"),
    justifyContent: "center"
  },
  Text_27_8: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_9: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("79%"),
    justifyContent: "center"
  },
  Text_28_9: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_10: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_28_10: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_11: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_28_11: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_12: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("36%")
  },
  ImageBackground_28_13: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("46%")
  },
  ImageBackground_28_14: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("55%")
  },
  ImageBackground_28_15: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("65%")
  },
  ImageBackground_28_16: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("75%")
  },
  ImageBackground_28_17: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("84%")
  },
  ImageBackground_28_18: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("94%")
  },
  View_27_3: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(224, 224, 224, 1)",
    borderWidth: 1
  },
  View_28_30: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("40%"),
    justifyContent: "center"
  },
  Text_28_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_31: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_28_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_32: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_28_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_33: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("69%"),
    justifyContent: "center"
  },
  Text_28_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_34: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_28_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_35: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_28_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_36: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_28_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_21: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("36%")
  },
  ImageBackground_28_22: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("46%")
  },
  ImageBackground_28_23: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("55%")
  },
  ImageBackground_28_24: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("65%")
  },
  ImageBackground_28_25: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("75%")
  },
  ImageBackground_28_26: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("84%")
  },
  ImageBackground_28_27: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("94%")
  },
  ImageBackground_28_28: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("22%"),
    resizeMode: "cover"
  },
  ImageBackground_28_71: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("108%")
  },
  View_39_330: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("33%"),
    justifyContent: "center"
  },
  Text_39_330: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_6: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(224, 224, 224, 1)",
    borderWidth: 1
  },
  View_44_7: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("40%"),
    justifyContent: "center"
  },
  Text_44_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_8: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_44_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_9: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_44_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_10: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("69%"),
    justifyContent: "center"
  },
  Text_44_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_103: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_44_103: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_11: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_44_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_12: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_44_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_13: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_44_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_14: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("36%")
  },
  ImageBackground_44_15: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("46%")
  },
  ImageBackground_44_16: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("55%")
  },
  ImageBackground_44_17: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("65%")
  },
  ImageBackground_44_18: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("75%")
  },
  ImageBackground_44_19: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("84%")
  },
  ImageBackground_44_20: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("94%")
  },
  ImageBackground_39_328: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  View_39_333: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("33%"),
    justifyContent: "center"
  },
  Text_39_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_48: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(224, 224, 224, 1)",
    borderWidth: 1
  },
  View_44_74: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("40%"),
    justifyContent: "center"
  },
  Text_44_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_75: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_44_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_76: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_44_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_77: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("69%"),
    justifyContent: "center"
  },
  Text_44_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_78: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_44_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_79: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_44_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_80: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_44_80: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_56: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("36%")
  },
  ImageBackground_44_57: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("46%")
  },
  ImageBackground_44_58: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("55%")
  },
  ImageBackground_44_59: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("65%")
  },
  ImageBackground_44_60: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("75%")
  },
  ImageBackground_44_61: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("84%")
  },
  ImageBackground_44_62: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("94%")
  },
  ImageBackground_39_329: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_39_338: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("33%"),
    justifyContent: "center"
  },
  Text_39_338: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_72: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("22%"),
    resizeMode: "cover"
  },
  View_44_102: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("19%")
  },
  View_44_81: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(224, 224, 224, 1)",
    borderWidth: 1
  },
  View_44_82: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_44_82: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_83: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("31%"),
    justifyContent: "center"
  },
  Text_44_83: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_84: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("40%"),
    justifyContent: "center"
  },
  Text_44_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_85: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_44_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_86: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("60%"),
    justifyContent: "center"
  },
  Text_44_86: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_87: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("69%"),
    justifyContent: "center"
  },
  Text_44_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_88: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("79%"),
    justifyContent: "center"
  },
  Text_44_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_89: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("17%")
  },
  ImageBackground_44_90: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("27%")
  },
  ImageBackground_44_91: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("37%")
  },
  ImageBackground_44_92: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("46%")
  },
  ImageBackground_44_93: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("56%")
  },
  ImageBackground_44_94: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("65%")
  },
  ImageBackground_44_95: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("75%")
  },
  View_44_96: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%")
  },
  ImageBackground_44_97: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_44_100: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_44_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_101: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  ImageBackground_44_73: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("21%"),
    resizeMode: "cover"
  },
  ImageBackground_39_327: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
