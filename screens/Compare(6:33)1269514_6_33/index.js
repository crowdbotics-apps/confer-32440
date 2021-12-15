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
      <View style={styles.View_6_34} />
      <View style={styles.View_6_35} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_6_36}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_6_38}
      />
      <View style={styles.View_6_40}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_6_41}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_6_43}
      />
      <View style={styles.View_6_47}>
        <View style={styles.View_6_48}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/2848/6676c2c1dfe97b5897e7f0723cbed8d3"
            }}
            style={styles.ImageBackground_6_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_6_50}
          />
        </View>
      </View>
      <View style={styles.View_6_53}>
        <View style={styles.View_6_54} />
        <View style={styles.View_6_55} />
        <View style={styles.View_6_56} />
      </View>
      <View style={styles.View_6_57} />
      <View style={styles.View_6_60}>
        <Text style={styles.Text_6_60}>Upload Loan Estimate</Text>
      </View>
      <View style={styles.View_6_61}>
        <Text style={styles.Text_6_61}>
          Upload Loan Estimate document or take a Picture and Upload.
        </Text>
      </View>
      <View style={styles.View_6_88} />
      <View style={styles.View_7_355}>
        <View style={styles.View_6_90} />
        <View style={styles.View_7_354}>
          <View style={styles.View_6_91}>
            <Text style={styles.Text_6_91}>Upload</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b3/3da0/5961b8b0f7e20b552e12b4bb4fbc677d"
            }}
            style={styles.ImageBackground_6_92}
          />
        </View>
      </View>
      <View style={styles.View_7_357} />
      <View style={styles.View_7_346}>
        <View style={styles.View_6_96}>
          <View style={styles.View_6_97}>
            <View style={styles.View_6_98}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08c4/c2a3/89c29e0670e99be11e1a99bb5374fed0"
                }}
                style={styles.ImageBackground_6_99}
              />
              <View style={styles.View_6_101}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7661/1406/5f832b28eb0835a4dca28fb0e5d95905"
                  }}
                  style={styles.ImageBackground_6_102}
                />
              </View>
              <View style={styles.View_6_104}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c9/d3aa/1c69031ae06f28066f7a8eafcd52eb0f"
                  }}
                  style={styles.ImageBackground_6_105}
                />
              </View>
            </View>
            <View style={styles.View_6_107}>
              <View style={styles.View_6_108}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90e7/b549/53a542017856f38dd569c3debe51f270"
                  }}
                  style={styles.ImageBackground_6_109}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3680/434c/2b03753ec1d387649937600fb89a7411"
                  }}
                  style={styles.ImageBackground_6_111}
                />
                <View style={styles.View_6_113}>
                  <View style={styles.View_6_114}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b25/29fe/e2b12772540850d87fe8c921f5fbc1a0"
                      }}
                      style={styles.ImageBackground_6_115}
                    />
                  </View>
                  <View style={styles.View_6_117}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6873/c815/ca652d178bd548c6fd4e6e68fbe7c646"
                      }}
                      style={styles.ImageBackground_6_118}
                    />
                  </View>
                  <View style={styles.View_6_120}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ec4/e326/263044f8a0eaa66bee629a76901d71aa"
                      }}
                      style={styles.ImageBackground_6_121}
                    />
                  </View>
                  <View style={styles.View_6_123}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0897/298b/c40c35556dda868db4e03a59d5fc3f61"
                      }}
                      style={styles.ImageBackground_6_124}
                    />
                  </View>
                  <View style={styles.View_6_126}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/331c/ea77/8da7f682f7d17448870909e79aac820d"
                      }}
                      style={styles.ImageBackground_6_127}
                    />
                  </View>
                  <View style={styles.View_6_129}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b690/2e60/375d47f0a7a46834bee99f274c542cbf"
                      }}
                      style={styles.ImageBackground_6_130}
                    />
                  </View>
                  <View style={styles.View_6_132}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/355b/0516/18695348aedf573c3845de9c66923d83"
                      }}
                      style={styles.ImageBackground_6_133}
                    />
                  </View>
                  <View style={styles.View_6_135}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc96/6dbe/6c1b5a0974f2f493a70ad80cbdb71bc3"
                      }}
                      style={styles.ImageBackground_6_136}
                    />
                  </View>
                  <View style={styles.View_6_138}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22a0/5c17/b23268a288f697c1ba9fa63124ba968b"
                      }}
                      style={styles.ImageBackground_6_139}
                    />
                  </View>
                  <View style={styles.View_6_141}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4130/68d6/e4202216921629ad6a1f487fe0e08705"
                      }}
                      style={styles.ImageBackground_6_142}
                    />
                  </View>
                  <View style={styles.View_6_144}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbca/a7bf/78fe0853332a3fb829c8a5ee82464e8f"
                      }}
                      style={styles.ImageBackground_6_145}
                    />
                  </View>
                  <View style={styles.View_6_147}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f22/f938/e07d6efbff346dda82d03c734e0877a6"
                      }}
                      style={styles.ImageBackground_6_148}
                    />
                  </View>
                  <View style={styles.View_6_150}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e358/fa99/bc008a934e0624aeaeb393ca2f0f0849"
                      }}
                      style={styles.ImageBackground_6_151}
                    />
                  </View>
                  <View style={styles.View_6_153}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4957/3a1a/30749930a620378a0af6e206be9f4a85"
                      }}
                      style={styles.ImageBackground_6_154}
                    />
                  </View>
                  <View style={styles.View_6_156}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6dd/907e/919d893de999fe27035569a54b94337e"
                      }}
                      style={styles.ImageBackground_6_157}
                    />
                  </View>
                  <View style={styles.View_6_159}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967c/1bc8/cb1ac7237e9d9e3851fa425fbd3f8a89"
                      }}
                      style={styles.ImageBackground_6_160}
                    />
                  </View>
                  <View style={styles.View_6_162}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/437a/bec9/99aaee21a73a55d9fc63940e2322af07"
                      }}
                      style={styles.ImageBackground_6_163}
                    />
                  </View>
                  <View style={styles.View_6_165}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beae/429e/14686e3928c851debf853bd8f4cc55d0"
                      }}
                      style={styles.ImageBackground_6_166}
                    />
                  </View>
                  <View style={styles.View_6_168}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7883/ed58/b62f630ef59aae5435c2875c69ea189b"
                      }}
                      style={styles.ImageBackground_6_169}
                    />
                  </View>
                  <View style={styles.View_6_171}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/66a9/62cd20346aca762320aca561246122e2"
                      }}
                      style={styles.ImageBackground_6_172}
                    />
                  </View>
                  <View style={styles.View_6_174}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bba/294a/b1853f025cb0ef80074032e1dd43e670"
                      }}
                      style={styles.ImageBackground_6_175}
                    />
                  </View>
                  <View style={styles.View_6_177}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d09/389f/6836c9f309b8d904c5862abc70b30675"
                      }}
                      style={styles.ImageBackground_6_178}
                    />
                  </View>
                  <View style={styles.View_6_180}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e695/f1dd/11c75c02dd41b66ae60f87e63f38e6eb"
                      }}
                      style={styles.ImageBackground_6_181}
                    />
                  </View>
                  <View style={styles.View_6_183}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c57b/e988/11363ed7c849a36441df83a12b3ee5a3"
                      }}
                      style={styles.ImageBackground_6_184}
                    />
                  </View>
                  <View style={styles.View_6_186}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1f5/3e71/13d4a1ba421ca69288ec0d44cc6d2bb8"
                      }}
                      style={styles.ImageBackground_6_187}
                    />
                  </View>
                  <View style={styles.View_6_189}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d96f/16ce/584e6af3a2075a6744438047a0b18dfe"
                      }}
                      style={styles.ImageBackground_6_190}
                    />
                  </View>
                  <View style={styles.View_6_192}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bba/883a/f0db56bda828115242c0ff03b96153df"
                      }}
                      style={styles.ImageBackground_6_193}
                    />
                  </View>
                  <View style={styles.View_6_195}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f66b/ec2a/fa68a2770fb6c3e717942360cc251c7e"
                      }}
                      style={styles.ImageBackground_6_196}
                    />
                  </View>
                  <View style={styles.View_6_198}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f13b/1468/2c55eee0d869287a682e00583a26334a"
                      }}
                      style={styles.ImageBackground_6_199}
                    />
                  </View>
                  <View style={styles.View_6_201}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0707/20f8/517fee391d398b5bcf0674d8760862ed"
                      }}
                      style={styles.ImageBackground_6_202}
                    />
                  </View>
                  <View style={styles.View_6_204}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1b8/2f00/796500949235cd4ab63f0c9924a0f84e"
                      }}
                      style={styles.ImageBackground_6_205}
                    />
                  </View>
                  <View style={styles.View_6_207}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6e7/bbe3/32092235ac0d73ac9448506cf9dfbdf4"
                      }}
                      style={styles.ImageBackground_6_208}
                    />
                  </View>
                  <View style={styles.View_6_210}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b776/1734/6b7070741c1fb89f5b76e5362286cf3e"
                      }}
                      style={styles.ImageBackground_6_211}
                    />
                  </View>
                  <View style={styles.View_6_213}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7d0/0531/7080d7f61455f2fe6ce515a4dbbc30b8"
                      }}
                      style={styles.ImageBackground_6_214}
                    />
                  </View>
                  <View style={styles.View_6_216}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0de3/e379/0327d9160c4c40e3d57b25f7bf0185a7"
                      }}
                      style={styles.ImageBackground_6_217}
                    />
                  </View>
                  <View style={styles.View_6_219}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf69/d9a1/1a1b98684d85ce494afc917cb3ceacfe"
                      }}
                      style={styles.ImageBackground_6_220}
                    />
                  </View>
                  <View style={styles.View_6_222}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b809/7be4/b49d9f69692b8ad93a97ff35c313a99d"
                      }}
                      style={styles.ImageBackground_6_223}
                    />
                  </View>
                  <View style={styles.View_6_225}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d0/574e/4591469fd062e48b583bb5bfccc781c6"
                      }}
                      style={styles.ImageBackground_6_226}
                    />
                  </View>
                  <View style={styles.View_6_228}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a86f/fb50/2ff7ada90850cadec3ea9f34f7ce148f"
                      }}
                      style={styles.ImageBackground_6_229}
                    />
                  </View>
                  <View style={styles.View_6_231}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88dc/93a8/5f54c9e2e0cc71da17040584f5a5c33b"
                      }}
                      style={styles.ImageBackground_6_232}
                    />
                  </View>
                  <View style={styles.View_6_234}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8048/a036/5e4ad38684b6ef4faceb8b72834c7e62"
                      }}
                      style={styles.ImageBackground_6_235}
                    />
                  </View>
                  <View style={styles.View_6_237}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d36d/9081/8cdd2e16692270e8413dea5f3d7fcd23"
                      }}
                      style={styles.ImageBackground_6_238}
                    />
                  </View>
                  <View style={styles.View_6_240}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3000/d095/56d2251918c69301fe8b777266be1313"
                      }}
                      style={styles.ImageBackground_6_241}
                    />
                  </View>
                  <View style={styles.View_6_243}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6a/f6b5/ee4c64fa0f3dfc2173d0be352fc10e40"
                      }}
                      style={styles.ImageBackground_6_244}
                    />
                  </View>
                  <View style={styles.View_6_246}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec46/417f/96d1fc34c4fff24ee4c7afa25da4fc1a"
                      }}
                      style={styles.ImageBackground_6_247}
                    />
                  </View>
                  <View style={styles.View_6_249}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0f4/2ec3/801b0ac4b3d9fbd65eda179c0ba36e5a"
                      }}
                      style={styles.ImageBackground_6_250}
                    />
                  </View>
                  <View style={styles.View_6_252}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2077/5c20/6b745a2812c70f1e901a27befe3c1259"
                      }}
                      style={styles.ImageBackground_6_253}
                    />
                  </View>
                  <View style={styles.View_6_255}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d0c/ca17/2e84da628e504befc2f29a0771850a22"
                      }}
                      style={styles.ImageBackground_6_256}
                    />
                  </View>
                  <View style={styles.View_6_258}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f72/e2f4/458e7e859a2d5b6a6786e8e969518180"
                      }}
                      style={styles.ImageBackground_6_259}
                    />
                  </View>
                  <View style={styles.View_6_261}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c279/baf5/ab1957c2653b2ba923dc9be57bed7cc9"
                      }}
                      style={styles.ImageBackground_6_262}
                    />
                  </View>
                  <View style={styles.View_6_264}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f6f/9cd8/d12a4db0b1bbdcce874fd0fd9cb03387"
                      }}
                      style={styles.ImageBackground_6_265}
                    />
                  </View>
                  <View style={styles.View_6_267}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad10/c39f/aa9093e8241008f311c6349555b8a052"
                      }}
                      style={styles.ImageBackground_6_268}
                    />
                  </View>
                  <View style={styles.View_6_270}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b776/1734/6b7070741c1fb89f5b76e5362286cf3e"
                      }}
                      style={styles.ImageBackground_6_271}
                    />
                  </View>
                  <View style={styles.View_6_273}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa23/bd0e/ac510b2506799a464de64433b3138205"
                      }}
                      style={styles.ImageBackground_6_274}
                    />
                  </View>
                  <View style={styles.View_6_276}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4521/3809/1ec48c3d95d1572961ded7991cf8e93b"
                      }}
                      style={styles.ImageBackground_6_277}
                    />
                  </View>
                  <View style={styles.View_6_279}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dbd/d376/f342957ac51e210406a3450879645d01"
                      }}
                      style={styles.ImageBackground_6_280}
                    />
                  </View>
                  <View style={styles.View_6_282}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c71a/d92d/1d73db15562fa65e64891fc218bc84fe"
                      }}
                      style={styles.ImageBackground_6_283}
                    />
                  </View>
                  <View style={styles.View_6_285}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b01d/e7ec/5d55b4054bf5dd42520b5c0ab189ac49"
                      }}
                      style={styles.ImageBackground_6_286}
                    />
                  </View>
                  <View style={styles.View_6_288}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57b6/ee1c/a082fc9854287ceaff07d04db96928ad"
                      }}
                      style={styles.ImageBackground_6_289}
                    />
                  </View>
                  <View style={styles.View_6_291}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62c6/a057/e29ac279a1d6dc2575796ae5a9938351"
                      }}
                      style={styles.ImageBackground_6_292}
                    />
                  </View>
                  <View style={styles.View_6_294}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e72c/5801/ff6ed4ed352bd4bb466173fcf99b23ea"
                      }}
                      style={styles.ImageBackground_6_295}
                    />
                  </View>
                  <View style={styles.View_6_297}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c279/baf5/ab1957c2653b2ba923dc9be57bed7cc9"
                      }}
                      style={styles.ImageBackground_6_298}
                    />
                  </View>
                  <View style={styles.View_6_300}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6c4/1c81/a6609762481941dc2c820fee2e984fc6"
                      }}
                      style={styles.ImageBackground_6_301}
                    />
                  </View>
                  <View style={styles.View_6_303}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f029/4241/5f50fc9d235ee678c2ec57d6a3c3c286"
                      }}
                      style={styles.ImageBackground_6_304}
                    />
                  </View>
                  <View style={styles.View_6_306}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876d/5cae/8a5b231202d8542d85b9d28930a440a2"
                      }}
                      style={styles.ImageBackground_6_307}
                    />
                  </View>
                  <View style={styles.View_6_309}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c5/97ee/18c452eed0a0e7318a0e3e60439e48a3"
                      }}
                      style={styles.ImageBackground_6_310}
                    />
                  </View>
                  <View style={styles.View_6_312}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6873/c815/ca652d178bd548c6fd4e6e68fbe7c646"
                      }}
                      style={styles.ImageBackground_6_313}
                    />
                  </View>
                  <View style={styles.View_6_315}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5d4/ef6c/133925df53047e659ecf5e3cd15ce78b"
                      }}
                      style={styles.ImageBackground_6_316}
                    />
                  </View>
                  <View style={styles.View_6_318}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/964f/f6678177180890c76115632ed27bc65c"
                      }}
                      style={styles.ImageBackground_6_319}
                    />
                  </View>
                  <View style={styles.View_6_321}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a063/f5d8/6355eaaa64c6c6ea1d1015c626cc48c4"
                      }}
                      style={styles.ImageBackground_6_322}
                    />
                  </View>
                  <View style={styles.View_6_324}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b690/2e60/375d47f0a7a46834bee99f274c542cbf"
                      }}
                      style={styles.ImageBackground_6_325}
                    />
                  </View>
                  <View style={styles.View_6_327}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ef9/1c33/c08e0aabeb9f2bca84ce114ea4c6543a"
                      }}
                      style={styles.ImageBackground_6_328}
                    />
                  </View>
                  <View style={styles.View_6_330}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1863/6c99/3f03a466c223fe826a9a2578c4840b45"
                      }}
                      style={styles.ImageBackground_6_331}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_6_333}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5ab/f4db/5df9951a2f9fccd6922809e56248b2a2"
                  }}
                  style={styles.ImageBackground_6_334}
                />
              </View>
            </View>
            <View style={styles.View_6_336}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11b5/093f/c7d79f90bb8b888d7ec305c6c67e833a"
                }}
                style={styles.ImageBackground_6_337}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f30b/ce0f/1c19b105e3dcca7009ed5fcfa3872d9b"
                }}
                style={styles.ImageBackground_6_339}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edf6/64dc/bcf1734d87ed8bfadf8c13fd889938e5"
          }}
          style={styles.ImageBackground_7_347}
        />
      </View>
      <View style={styles.View_7_353}>
        <Text style={styles.Text_7_353}>+ Choose files here</Text>
      </View>
      <View style={styles.View_7_363}>
        <Text style={styles.Text_7_363}>OR</Text>
      </View>
      <View style={styles.View_7_369}>
        <View style={styles.View_7_359}>
          <Text style={styles.Text_7_359}>Take a Picture</Text>
        </View>
        <View style={styles.View_7_368}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/272b/1ccb/62a26edb1d2d8685dbb53ff8fac3741c"
            }}
            style={styles.ImageBackground_7_367}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_6_34: {
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
  View_6_35: {
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
  ImageBackground_6_36: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_6_38: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_6_40: {
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
  ImageBackground_6_41: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_43: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_6_47: {
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
  View_6_48: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_49: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_50: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_6_53: {
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
  View_6_54: {
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
  View_6_55: {
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
  View_6_56: {
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
  View_6_57: {
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
  View_6_60: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_6_60: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_61: {
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
  Text_6_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_88: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("30%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(161, 171, 255, 1)",
    borderWidth: 1
  },
  View_7_355: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("77%")
  },
  View_6_90: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(60, 79, 253, 1)",
    borderWidth: 2
  },
  View_7_354: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3%")
  },
  View_6_91: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_6_91: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_92: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_7_357: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("97%"),
    borderColor: "rgba(89, 89, 89, 1)",
    borderWidth: 2
  },
  View_7_346: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_96: {
    width: wp("49%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_97: {
    width: wp("49%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_98: {
    width: wp("49%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_99: {
    width: wp("48%"),
    height: hp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_101: {
    width: wp("47%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_6_102: {
    width: wp("47%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_104: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_6_105: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_107: {
    width: wp("37%"),
    height: hp("14%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_6_108: {
    width: wp("37%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_109: {
    width: wp("37%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_111: {
    width: wp("29%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_6_113: {
    width: wp("37%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_114: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_6_115: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_117: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_6_118: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_120: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_6_121: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_123: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_6_124: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_126: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_6_127: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_129: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_130: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_132: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_6_133: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_135: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_6_136: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_138: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_6_139: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_141: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_6_142: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_144: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_6_145: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_147: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_6_148: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_150: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_6_151: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_153: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_6_154: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_156: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_157: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_159: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_6_160: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_162: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_6_163: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_165: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_6_166: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_168: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_6_169: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_171: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_6_172: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_174: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_6_175: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_177: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_6_178: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_180: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_6_181: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_183: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_6_184: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_186: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_6_187: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_189: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_6_190: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_192: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_6_193: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_195: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_196: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_198: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_199: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_201: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_202: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_204: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_6_205: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_207: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_6_208: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_210: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_6_211: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_213: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_6_214: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_216: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_6_217: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_219: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_6_220: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_222: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_6_223: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_225: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_6_226: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_228: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_6_229: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_231: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_6_232: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_234: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_6_235: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_237: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_6_238: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_240: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_6_241: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_243: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_6_244: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_246: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_6_247: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_249: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_6_250: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_252: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_6_253: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_255: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_6_256: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_258: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_6_259: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_261: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_6_262: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_264: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_265: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_267: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_6_268: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_270: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_6_271: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_273: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_6_274: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_276: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_6_277: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_279: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_6_280: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_282: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_6_283: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_285: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_6_286: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_288: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_6_289: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_291: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_6_292: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_294: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_6_295: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_297: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_6_298: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_300: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_6_301: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_303: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_6_304: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_306: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_6_307: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_309: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_6_310: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_312: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_6_313: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_315: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_6_316: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_318: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_6_319: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_321: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_6_322: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_324: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_6_325: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_327: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_6_328: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_330: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_6_331: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_333: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_6_334: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_336: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_6_337: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_339: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_347: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_7_353: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("64%"),
    justifyContent: "center"
  },
  Text_7_353: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_363: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("90%"),
    justifyContent: "center"
  },
  Text_7_363: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_369: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("100%")
  },
  View_7_359: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_7_359: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_368: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_7_367: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
