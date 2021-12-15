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
      <View style={styles.View_44_105} />
      <View style={styles.View_44_224} />
      <View style={styles.View_44_225}>
        <Text style={styles.Text_44_225}>$870</Text>
      </View>
      <View style={styles.View_44_226}>
        <Text style={styles.Text_44_226}>$75</Text>
      </View>
      <View style={styles.View_44_227}>
        <Text style={styles.Text_44_227}>$1,392</Text>
      </View>
      <View style={styles.View_44_228}>
        <Text style={styles.Text_44_228}>$110</Text>
      </View>
      <View style={styles.View_44_229}>
        <Text style={styles.Text_44_229}>$25.36</Text>
      </View>
      <View style={styles.View_44_230}>
        <Text style={styles.Text_44_230}>$2,400</Text>
      </View>
      <View style={styles.View_44_231}>
        <Text style={styles.Text_44_231}>$17,742</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_232}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_233}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_234}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_235}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_236}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_237}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
        }}
        style={styles.ImageBackground_44_238}
      />
      <View style={styles.View_44_239}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce7/98b8/efe13dd488686bcb4025c53b5731dfae"
          }}
          style={styles.ImageBackground_44_240}
        />
        <View style={styles.View_44_243}>
          <Text style={styles.Text_44_243}>CUSTOM</Text>
        </View>
      </View>
      <View style={styles.View_44_254}>
        <View style={styles.View_44_251}>
          <View style={styles.View_44_144} />
          <View style={styles.View_44_145}>
            <Text style={styles.Text_44_145}>$1,100</Text>
          </View>
          <View style={styles.View_44_146}>
            <Text style={styles.Text_44_146}>$350</Text>
          </View>
          <View style={styles.View_44_147}>
            <Text style={styles.Text_44_147}>$1,350</Text>
          </View>
          <View style={styles.View_44_148}>
            <Text style={styles.Text_44_148}>$110</Text>
          </View>
          <View style={styles.View_44_149}>
            <Text style={styles.Text_44_149}>$324.3</Text>
          </View>
          <View style={styles.View_44_150}>
            <Text style={styles.Text_44_150}>$2,400</Text>
          </View>
          <View style={styles.View_44_151}>
            <Text style={styles.Text_44_151}>$18,972</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_153}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_154}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_155}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_156}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_157}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_158}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d253/1754/3d190251bd079fc0e4095451329b808e"
            }}
            style={styles.ImageBackground_44_159}
          />
          <View style={styles.View_44_181}>
            <Text style={styles.Text_44_181}>BEST</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce7/98b8/efe13dd488686bcb4025c53b5731dfae"
            }}
            style={styles.ImageBackground_44_218}
          />
        </View>
        <View style={styles.View_44_252}>
          <View style={styles.View_44_182} />
          <View style={styles.View_44_183}>
            <Text style={styles.Text_44_183}>$700</Text>
          </View>
          <View style={styles.View_44_184}>
            <Text style={styles.Text_44_184}>$75</Text>
          </View>
          <View style={styles.View_44_185}>
            <Text style={styles.Text_44_185}>$1,525</Text>
          </View>
          <View style={styles.View_44_186}>
            <Text style={styles.Text_44_186}>$111</Text>
          </View>
          <View style={styles.View_44_187}>
            <Text style={styles.Text_44_187}>Variable Rate</Text>
          </View>
          <View style={styles.View_44_188}>
            <Text style={styles.Text_44_188}>$314.1</Text>
          </View>
          <View style={styles.View_44_189}>
            <Text style={styles.Text_44_189}>$2,400</Text>
          </View>
          <View style={styles.View_44_190}>
            <Text style={styles.Text_44_190}>$16,692</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_191}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_192}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_193}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_194}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_195}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_196}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_197}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f58/b47f/6a8a5edf78f4522d65596ff5541c41a4"
            }}
            style={styles.ImageBackground_44_198}
          />
          <View style={styles.View_44_202}>
            <Text style={styles.Text_44_202}>BETTER</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e4/9edc/0a13d56d82ce90dd1d6bc6e0fa3ac3b8"
            }}
            style={styles.ImageBackground_44_245}
          />
        </View>
        <View style={styles.View_44_253}>
          <View style={styles.View_44_203} />
          <View style={styles.View_44_204}>
            <Text style={styles.Text_44_204}>$750</Text>
          </View>
          <View style={styles.View_44_205}>
            <Text style={styles.Text_44_205}>$95</Text>
          </View>
          <View style={styles.View_44_206}>
            <Text style={styles.Text_44_206}>$1,675</Text>
          </View>
          <View style={styles.View_44_207}>
            <Text style={styles.Text_44_207}>$110</Text>
          </View>
          <View style={styles.View_44_208}>
            <Text style={styles.Text_44_208}>$28.24</Text>
          </View>
          <View style={styles.View_44_209}>
            <Text style={styles.Text_44_209}>$2,400</Text>
          </View>
          <View style={styles.View_44_210}>
            <Text style={styles.Text_44_210}>$19,982</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_211}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_212}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_213}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_214}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_215}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_216}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b8/9ace/14ea97e6488697754d51f97faf9fd0d1"
            }}
            style={styles.ImageBackground_44_217}
          />
          <View style={styles.View_44_221}>
            <Text style={styles.Text_44_221}>GOOD</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e455/c0ad/9cd3896461ceb7df91c5bf7a1515e443"
            }}
            style={styles.ImageBackground_44_222}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b217/1eea/c88a0b5c4f514e1e93786ced0945be5e"
            }}
            style={styles.ImageBackground_44_246}
          />
        </View>
      </View>
      <View style={styles.View_44_250} />
      <View style={styles.View_44_106} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_44_107}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_44_109}
      />
      <View style={styles.View_44_111}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_44_112}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_44_114}
      />
      <View style={styles.View_44_118}>
        <View style={styles.View_44_119}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/2848/6676c2c1dfe97b5897e7f0723cbed8d3"
            }}
            style={styles.ImageBackground_44_120}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_44_121}
          />
        </View>
      </View>
      <View style={styles.View_44_124}>
        <View style={styles.View_44_125} />
        <View style={styles.View_44_126} />
        <View style={styles.View_44_127} />
      </View>
      <View style={styles.View_44_128}>
        <Text style={styles.Text_44_128}>Mortgage Comparison</Text>
      </View>
      <View style={styles.View_44_129}>
        <Text style={styles.Text_44_129}>Lender</Text>
      </View>
      <View style={styles.View_44_130}>
        <Text style={styles.Text_44_130}>Origination Charge</Text>
      </View>
      <View style={styles.View_44_131}>
        <Text style={styles.Text_44_131}>Service You Cannot shop for</Text>
      </View>
      <View style={styles.View_44_132}>
        <Text style={styles.Text_44_132}>Service You Can shop for</Text>
      </View>
      <View style={styles.View_44_133}>
        <Text style={styles.Text_44_133}>Taxes and other Governments fees</Text>
      </View>
      <View style={styles.View_44_134}>
        <Text style={styles.Text_44_134}>Prepaids</Text>
      </View>
      <View style={styles.View_44_135}>
        <Text style={styles.Text_44_135}>Escrows</Text>
      </View>
      <View style={styles.View_44_136}>
        <Text style={styles.Text_44_136}>Cash to Close</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_44_137}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_44_138}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_44_139}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_44_140}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_44_141}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_44_142}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a067/ec93/1fdb33e6fb309c5e3bc57afdf7eca248"
        }}
        style={styles.ImageBackground_44_143}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7db/5590/adaa37c6c66cfbad1171626576d9aa33"
        }}
        style={styles.ImageBackground_44_160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d237/cd03/071269826261b922bbcef60b96d74c7f"
        }}
        style={styles.ImageBackground_44_255}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_44_105: {
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
  View_44_224: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(224, 224, 224, 1)",
    borderWidth: 1
  },
  View_44_225: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("40%"),
    justifyContent: "center"
  },
  Text_44_225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_226: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_44_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_227: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_44_227: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_228: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("69%"),
    justifyContent: "center"
  },
  Text_44_228: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_229: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_44_229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_230: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_44_230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_231: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_44_231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_232: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("36%")
  },
  ImageBackground_44_233: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("46%")
  },
  ImageBackground_44_234: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("55%")
  },
  ImageBackground_44_235: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("65%")
  },
  ImageBackground_44_236: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("75%")
  },
  ImageBackground_44_237: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("84%")
  },
  ImageBackground_44_238: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("94%")
  },
  View_44_239: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("30%")
  },
  ImageBackground_44_240: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_44_243: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_44_243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_254: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("19%")
  },
  View_44_251: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_144: {
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
  View_44_145: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_44_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_146: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("31%"),
    justifyContent: "center"
  },
  Text_44_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_147: {
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
  Text_44_147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_148: {
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
  Text_44_148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_149: {
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
  Text_44_149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_150: {
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
  Text_44_150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_151: {
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
  Text_44_151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_152: {
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
  ImageBackground_44_153: {
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
  ImageBackground_44_154: {
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
  ImageBackground_44_155: {
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
  ImageBackground_44_156: {
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
  ImageBackground_44_157: {
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
  ImageBackground_44_158: {
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
  ImageBackground_44_159: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_44_181: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_44_181: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_218: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_44_252: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  View_44_182: {
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
  View_44_183: {
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
  Text_44_183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_184: {
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
  Text_44_184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_185: {
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
  Text_44_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_186: {
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
  Text_44_186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_187: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("24%"),
    justifyContent: "center"
  },
  Text_44_187: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_188: {
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
  Text_44_188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_189: {
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
  Text_44_189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_190: {
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
  Text_44_190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_191: {
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
  ImageBackground_44_192: {
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
  ImageBackground_44_193: {
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
  ImageBackground_44_194: {
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
  ImageBackground_44_195: {
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
  ImageBackground_44_196: {
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
  ImageBackground_44_197: {
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
  ImageBackground_44_198: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_44_202: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_44_202: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_245: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_44_253: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%")
  },
  View_44_203: {
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
  View_44_204: {
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
  Text_44_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_205: {
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
  Text_44_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_206: {
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
  Text_44_206: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_207: {
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
  Text_44_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_208: {
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
  Text_44_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_209: {
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
  Text_44_209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_210: {
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
  Text_44_210: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_211: {
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
  ImageBackground_44_212: {
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
  ImageBackground_44_213: {
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
  ImageBackground_44_214: {
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
  ImageBackground_44_215: {
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
  ImageBackground_44_216: {
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
  ImageBackground_44_217: {
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
  View_44_221: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_44_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_222: {
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
  ImageBackground_44_246: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_44_250: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 249, 1)"
  },
  View_44_106: {
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
  ImageBackground_44_107: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_44_109: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_44_111: {
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
  ImageBackground_44_112: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_44_114: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_44_118: {
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
  View_44_119: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_44_120: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_44_121: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_44_124: {
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
  View_44_125: {
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
  View_44_126: {
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
  View_44_127: {
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
  View_44_128: {
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
  Text_44_128: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_129: {
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
  Text_44_129: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_130: {
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
  Text_44_130: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_131: {
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
  Text_44_131: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_132: {
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
  Text_44_132: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_133: {
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
  Text_44_133: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_134: {
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
  Text_44_134: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_135: {
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
  Text_44_135: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_136: {
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
  Text_44_136: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_44_137: {
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
  ImageBackground_44_138: {
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
  ImageBackground_44_139: {
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
  ImageBackground_44_140: {
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
  ImageBackground_44_141: {
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
  ImageBackground_44_142: {
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
  ImageBackground_44_143: {
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
  ImageBackground_44_160: {
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
  ImageBackground_44_255: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("23%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
