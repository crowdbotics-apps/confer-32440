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
      <View style={styles.View_218_2865}>
        <View style={styles.View_218_2866} />
        <View style={styles.View_218_2867} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
          }}
          style={styles.ImageBackground_218_2868}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
          }}
          style={styles.ImageBackground_218_2870}
        />
        <View style={styles.View_218_2872}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
            }}
            style={styles.ImageBackground_218_2873}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
          }}
          style={styles.ImageBackground_218_2875}
        />
        <View style={styles.View_218_2879}>
          <View style={styles.View_218_2880}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/2848/6676c2c1dfe97b5897e7f0723cbed8d3"
              }}
              style={styles.ImageBackground_218_2881}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
              }}
              style={styles.ImageBackground_218_2882}
            />
          </View>
        </View>
        <View style={styles.View_218_2885}>
          <View style={styles.View_218_2886} />
          <View style={styles.View_218_2887} />
          <View style={styles.View_218_2888} />
        </View>
        <View style={styles.View_218_2889} />
        <View style={styles.View_218_2890}>
          <Text style={styles.Text_218_2890}>Upload a document</Text>
        </View>
        <View style={styles.View_218_2891}>
          <Text style={styles.Text_218_2891}>
            Upload Loan Estimate document or take a Picture and Upload.
          </Text>
        </View>
        <View style={styles.View_218_2892} />
        <View style={styles.View_218_2893}>
          <View style={styles.View_218_2894} />
          <View style={styles.View_218_2895}>
            <View style={styles.View_218_2896}>
              <Text style={styles.Text_218_2896}>Upload</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b3/3da0/5961b8b0f7e20b552e12b4bb4fbc677d"
              }}
              style={styles.ImageBackground_218_2897}
            />
          </View>
        </View>
        <View style={styles.View_218_2900} />
        <View style={styles.View_218_2901}>
          <View style={styles.View_218_2902}>
            <View style={styles.View_218_2903}>
              <View style={styles.View_218_2904}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08c4/c2a3/89c29e0670e99be11e1a99bb5374fed0"
                  }}
                  style={styles.ImageBackground_218_2905}
                />
                <View style={styles.View_218_2907}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7661/1406/5f832b28eb0835a4dca28fb0e5d95905"
                    }}
                    style={styles.ImageBackground_218_2908}
                  />
                </View>
                <View style={styles.View_218_2910}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c9/d3aa/1c69031ae06f28066f7a8eafcd52eb0f"
                    }}
                    style={styles.ImageBackground_218_2911}
                  />
                </View>
              </View>
              <View style={styles.View_218_2913}>
                <View style={styles.View_218_2914}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90e7/b549/53a542017856f38dd569c3debe51f270"
                    }}
                    style={styles.ImageBackground_218_2915}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4dc/ddb3/aa4ac2e785ac77d3c48a77d2dd0c8b4f"
                    }}
                    style={styles.ImageBackground_218_2917}
                  />
                  <View style={styles.View_218_2919}>
                    <View style={styles.View_218_2920}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b25/29fe/e2b12772540850d87fe8c921f5fbc1a0"
                        }}
                        style={styles.ImageBackground_218_2921}
                      />
                    </View>
                    <View style={styles.View_218_2923}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6873/c815/ca652d178bd548c6fd4e6e68fbe7c646"
                        }}
                        style={styles.ImageBackground_218_2924}
                      />
                    </View>
                    <View style={styles.View_218_2926}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ec4/e326/263044f8a0eaa66bee629a76901d71aa"
                        }}
                        style={styles.ImageBackground_218_2927}
                      />
                    </View>
                    <View style={styles.View_218_2929}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0897/298b/c40c35556dda868db4e03a59d5fc3f61"
                        }}
                        style={styles.ImageBackground_218_2930}
                      />
                    </View>
                    <View style={styles.View_218_2932}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/331c/ea77/8da7f682f7d17448870909e79aac820d"
                        }}
                        style={styles.ImageBackground_218_2933}
                      />
                    </View>
                    <View style={styles.View_218_2935}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b690/2e60/375d47f0a7a46834bee99f274c542cbf"
                        }}
                        style={styles.ImageBackground_218_2936}
                      />
                    </View>
                    <View style={styles.View_218_2938}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/355b/0516/18695348aedf573c3845de9c66923d83"
                        }}
                        style={styles.ImageBackground_218_2939}
                      />
                    </View>
                    <View style={styles.View_218_2941}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc96/6dbe/6c1b5a0974f2f493a70ad80cbdb71bc3"
                        }}
                        style={styles.ImageBackground_218_2942}
                      />
                    </View>
                    <View style={styles.View_218_2944}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22a0/5c17/b23268a288f697c1ba9fa63124ba968b"
                        }}
                        style={styles.ImageBackground_218_2945}
                      />
                    </View>
                    <View style={styles.View_218_2947}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4130/68d6/e4202216921629ad6a1f487fe0e08705"
                        }}
                        style={styles.ImageBackground_218_2948}
                      />
                    </View>
                    <View style={styles.View_218_2950}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbca/a7bf/78fe0853332a3fb829c8a5ee82464e8f"
                        }}
                        style={styles.ImageBackground_218_2951}
                      />
                    </View>
                    <View style={styles.View_218_2953}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f22/f938/e07d6efbff346dda82d03c734e0877a6"
                        }}
                        style={styles.ImageBackground_218_2954}
                      />
                    </View>
                    <View style={styles.View_218_2956}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e358/fa99/bc008a934e0624aeaeb393ca2f0f0849"
                        }}
                        style={styles.ImageBackground_218_2957}
                      />
                    </View>
                    <View style={styles.View_218_2959}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4957/3a1a/30749930a620378a0af6e206be9f4a85"
                        }}
                        style={styles.ImageBackground_218_2960}
                      />
                    </View>
                    <View style={styles.View_218_2962}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6dd/907e/919d893de999fe27035569a54b94337e"
                        }}
                        style={styles.ImageBackground_218_2963}
                      />
                    </View>
                    <View style={styles.View_218_2965}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967c/1bc8/cb1ac7237e9d9e3851fa425fbd3f8a89"
                        }}
                        style={styles.ImageBackground_218_2966}
                      />
                    </View>
                    <View style={styles.View_218_2968}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/437a/bec9/99aaee21a73a55d9fc63940e2322af07"
                        }}
                        style={styles.ImageBackground_218_2969}
                      />
                    </View>
                    <View style={styles.View_218_2971}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beae/429e/14686e3928c851debf853bd8f4cc55d0"
                        }}
                        style={styles.ImageBackground_218_2972}
                      />
                    </View>
                    <View style={styles.View_218_2974}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7883/ed58/b62f630ef59aae5435c2875c69ea189b"
                        }}
                        style={styles.ImageBackground_218_2975}
                      />
                    </View>
                    <View style={styles.View_218_2977}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/66a9/62cd20346aca762320aca561246122e2"
                        }}
                        style={styles.ImageBackground_218_2978}
                      />
                    </View>
                    <View style={styles.View_218_2980}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bba/294a/b1853f025cb0ef80074032e1dd43e670"
                        }}
                        style={styles.ImageBackground_218_2981}
                      />
                    </View>
                    <View style={styles.View_218_2983}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d09/389f/6836c9f309b8d904c5862abc70b30675"
                        }}
                        style={styles.ImageBackground_218_2984}
                      />
                    </View>
                    <View style={styles.View_218_2986}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e695/f1dd/11c75c02dd41b66ae60f87e63f38e6eb"
                        }}
                        style={styles.ImageBackground_218_2987}
                      />
                    </View>
                    <View style={styles.View_218_2989}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c57b/e988/11363ed7c849a36441df83a12b3ee5a3"
                        }}
                        style={styles.ImageBackground_218_2990}
                      />
                    </View>
                    <View style={styles.View_218_2992}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1f5/3e71/13d4a1ba421ca69288ec0d44cc6d2bb8"
                        }}
                        style={styles.ImageBackground_218_2993}
                      />
                    </View>
                    <View style={styles.View_218_2995}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d96f/16ce/584e6af3a2075a6744438047a0b18dfe"
                        }}
                        style={styles.ImageBackground_218_2996}
                      />
                    </View>
                    <View style={styles.View_218_2998}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bba/883a/f0db56bda828115242c0ff03b96153df"
                        }}
                        style={styles.ImageBackground_218_2999}
                      />
                    </View>
                    <View style={styles.View_218_3001}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f66b/ec2a/fa68a2770fb6c3e717942360cc251c7e"
                        }}
                        style={styles.ImageBackground_218_3002}
                      />
                    </View>
                    <View style={styles.View_218_3004}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f13b/1468/2c55eee0d869287a682e00583a26334a"
                        }}
                        style={styles.ImageBackground_218_3005}
                      />
                    </View>
                    <View style={styles.View_218_3007}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0707/20f8/517fee391d398b5bcf0674d8760862ed"
                        }}
                        style={styles.ImageBackground_218_3008}
                      />
                    </View>
                    <View style={styles.View_218_3010}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1b8/2f00/796500949235cd4ab63f0c9924a0f84e"
                        }}
                        style={styles.ImageBackground_218_3011}
                      />
                    </View>
                    <View style={styles.View_218_3013}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6e7/bbe3/32092235ac0d73ac9448506cf9dfbdf4"
                        }}
                        style={styles.ImageBackground_218_3014}
                      />
                    </View>
                    <View style={styles.View_218_3016}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b776/1734/6b7070741c1fb89f5b76e5362286cf3e"
                        }}
                        style={styles.ImageBackground_218_3017}
                      />
                    </View>
                    <View style={styles.View_218_3019}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7d0/0531/7080d7f61455f2fe6ce515a4dbbc30b8"
                        }}
                        style={styles.ImageBackground_218_3020}
                      />
                    </View>
                    <View style={styles.View_218_3022}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0de3/e379/0327d9160c4c40e3d57b25f7bf0185a7"
                        }}
                        style={styles.ImageBackground_218_3023}
                      />
                    </View>
                    <View style={styles.View_218_3025}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf69/d9a1/1a1b98684d85ce494afc917cb3ceacfe"
                        }}
                        style={styles.ImageBackground_218_3026}
                      />
                    </View>
                    <View style={styles.View_218_3028}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b809/7be4/b49d9f69692b8ad93a97ff35c313a99d"
                        }}
                        style={styles.ImageBackground_218_3029}
                      />
                    </View>
                    <View style={styles.View_218_3031}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d0/574e/4591469fd062e48b583bb5bfccc781c6"
                        }}
                        style={styles.ImageBackground_218_3032}
                      />
                    </View>
                    <View style={styles.View_218_3034}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a86f/fb50/2ff7ada90850cadec3ea9f34f7ce148f"
                        }}
                        style={styles.ImageBackground_218_3035}
                      />
                    </View>
                    <View style={styles.View_218_3037}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88dc/93a8/5f54c9e2e0cc71da17040584f5a5c33b"
                        }}
                        style={styles.ImageBackground_218_3038}
                      />
                    </View>
                    <View style={styles.View_218_3040}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8048/a036/5e4ad38684b6ef4faceb8b72834c7e62"
                        }}
                        style={styles.ImageBackground_218_3041}
                      />
                    </View>
                    <View style={styles.View_218_3043}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d36d/9081/8cdd2e16692270e8413dea5f3d7fcd23"
                        }}
                        style={styles.ImageBackground_218_3044}
                      />
                    </View>
                    <View style={styles.View_218_3046}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3000/d095/56d2251918c69301fe8b777266be1313"
                        }}
                        style={styles.ImageBackground_218_3047}
                      />
                    </View>
                    <View style={styles.View_218_3049}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6a/f6b5/ee4c64fa0f3dfc2173d0be352fc10e40"
                        }}
                        style={styles.ImageBackground_218_3050}
                      />
                    </View>
                    <View style={styles.View_218_3052}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec46/417f/96d1fc34c4fff24ee4c7afa25da4fc1a"
                        }}
                        style={styles.ImageBackground_218_3053}
                      />
                    </View>
                    <View style={styles.View_218_3055}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0f4/2ec3/801b0ac4b3d9fbd65eda179c0ba36e5a"
                        }}
                        style={styles.ImageBackground_218_3056}
                      />
                    </View>
                    <View style={styles.View_218_3058}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2077/5c20/6b745a2812c70f1e901a27befe3c1259"
                        }}
                        style={styles.ImageBackground_218_3059}
                      />
                    </View>
                    <View style={styles.View_218_3061}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d0c/ca17/2e84da628e504befc2f29a0771850a22"
                        }}
                        style={styles.ImageBackground_218_3062}
                      />
                    </View>
                    <View style={styles.View_218_3064}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f72/e2f4/458e7e859a2d5b6a6786e8e969518180"
                        }}
                        style={styles.ImageBackground_218_3065}
                      />
                    </View>
                    <View style={styles.View_218_3067}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c279/baf5/ab1957c2653b2ba923dc9be57bed7cc9"
                        }}
                        style={styles.ImageBackground_218_3068}
                      />
                    </View>
                    <View style={styles.View_218_3070}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f6f/9cd8/d12a4db0b1bbdcce874fd0fd9cb03387"
                        }}
                        style={styles.ImageBackground_218_3071}
                      />
                    </View>
                    <View style={styles.View_218_3073}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad10/c39f/aa9093e8241008f311c6349555b8a052"
                        }}
                        style={styles.ImageBackground_218_3074}
                      />
                    </View>
                    <View style={styles.View_218_3076}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b776/1734/6b7070741c1fb89f5b76e5362286cf3e"
                        }}
                        style={styles.ImageBackground_218_3077}
                      />
                    </View>
                    <View style={styles.View_218_3079}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa23/bd0e/ac510b2506799a464de64433b3138205"
                        }}
                        style={styles.ImageBackground_218_3080}
                      />
                    </View>
                    <View style={styles.View_218_3082}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4521/3809/1ec48c3d95d1572961ded7991cf8e93b"
                        }}
                        style={styles.ImageBackground_218_3083}
                      />
                    </View>
                    <View style={styles.View_218_3085}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dbd/d376/f342957ac51e210406a3450879645d01"
                        }}
                        style={styles.ImageBackground_218_3086}
                      />
                    </View>
                    <View style={styles.View_218_3088}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c71a/d92d/1d73db15562fa65e64891fc218bc84fe"
                        }}
                        style={styles.ImageBackground_218_3089}
                      />
                    </View>
                    <View style={styles.View_218_3091}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b01d/e7ec/5d55b4054bf5dd42520b5c0ab189ac49"
                        }}
                        style={styles.ImageBackground_218_3092}
                      />
                    </View>
                    <View style={styles.View_218_3094}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57b6/ee1c/a082fc9854287ceaff07d04db96928ad"
                        }}
                        style={styles.ImageBackground_218_3095}
                      />
                    </View>
                    <View style={styles.View_218_3097}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62c6/a057/e29ac279a1d6dc2575796ae5a9938351"
                        }}
                        style={styles.ImageBackground_218_3098}
                      />
                    </View>
                    <View style={styles.View_218_3100}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e72c/5801/ff6ed4ed352bd4bb466173fcf99b23ea"
                        }}
                        style={styles.ImageBackground_218_3101}
                      />
                    </View>
                    <View style={styles.View_218_3103}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c279/baf5/ab1957c2653b2ba923dc9be57bed7cc9"
                        }}
                        style={styles.ImageBackground_218_3104}
                      />
                    </View>
                    <View style={styles.View_218_3106}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6c4/1c81/a6609762481941dc2c820fee2e984fc6"
                        }}
                        style={styles.ImageBackground_218_3107}
                      />
                    </View>
                    <View style={styles.View_218_3109}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f029/4241/5f50fc9d235ee678c2ec57d6a3c3c286"
                        }}
                        style={styles.ImageBackground_218_3110}
                      />
                    </View>
                    <View style={styles.View_218_3112}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876d/5cae/8a5b231202d8542d85b9d28930a440a2"
                        }}
                        style={styles.ImageBackground_218_3113}
                      />
                    </View>
                    <View style={styles.View_218_3115}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c5/97ee/18c452eed0a0e7318a0e3e60439e48a3"
                        }}
                        style={styles.ImageBackground_218_3116}
                      />
                    </View>
                    <View style={styles.View_218_3118}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6873/c815/ca652d178bd548c6fd4e6e68fbe7c646"
                        }}
                        style={styles.ImageBackground_218_3119}
                      />
                    </View>
                    <View style={styles.View_218_3121}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5d4/ef6c/133925df53047e659ecf5e3cd15ce78b"
                        }}
                        style={styles.ImageBackground_218_3122}
                      />
                    </View>
                    <View style={styles.View_218_3124}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/964f/f6678177180890c76115632ed27bc65c"
                        }}
                        style={styles.ImageBackground_218_3125}
                      />
                    </View>
                    <View style={styles.View_218_3127}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a063/f5d8/6355eaaa64c6c6ea1d1015c626cc48c4"
                        }}
                        style={styles.ImageBackground_218_3128}
                      />
                    </View>
                    <View style={styles.View_218_3130}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b690/2e60/375d47f0a7a46834bee99f274c542cbf"
                        }}
                        style={styles.ImageBackground_218_3131}
                      />
                    </View>
                    <View style={styles.View_218_3133}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ef9/1c33/c08e0aabeb9f2bca84ce114ea4c6543a"
                        }}
                        style={styles.ImageBackground_218_3134}
                      />
                    </View>
                    <View style={styles.View_218_3136}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1863/6c99/3f03a466c223fe826a9a2578c4840b45"
                        }}
                        style={styles.ImageBackground_218_3137}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_218_3139}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5ab/f4db/5df9951a2f9fccd6922809e56248b2a2"
                    }}
                    style={styles.ImageBackground_218_3140}
                  />
                </View>
              </View>
              <View style={styles.View_218_3142}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58a3/0817/7d69c5fa816089323a47b5948853506b"
                  }}
                  style={styles.ImageBackground_218_3143}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f30b/ce0f/1c19b105e3dcca7009ed5fcfa3872d9b"
                  }}
                  style={styles.ImageBackground_218_3145}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edf6/64dc/bcf1734d87ed8bfadf8c13fd889938e5"
            }}
            style={styles.ImageBackground_218_3147}
          />
        </View>
        <View style={styles.View_218_3153}>
          <Text style={styles.Text_218_3153}>+ Choose files here</Text>
        </View>
        <View style={styles.View_218_3154}>
          <Text style={styles.Text_218_3154}>OR</Text>
        </View>
        <View style={styles.View_218_3155}>
          <View style={styles.View_218_3156}>
            <Text style={styles.Text_218_3156}>Take a Picture</Text>
          </View>
          <View style={styles.View_218_3157}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/272b/1ccb/62a26edb1d2d8685dbb53ff8fac3741c"
              }}
              style={styles.ImageBackground_218_3158}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_218_3161} />
      <View style={styles.View_218_3162}>
        <View style={styles.View_218_3163} />
        <View style={styles.View_218_3164}>
          <Text style={styles.Text_218_3164}>Cancel</Text>
        </View>
      </View>
      <View style={styles.View_218_3165}>
        <View style={styles.View_218_3166} />
        <View style={styles.View_218_3167}>
          <Text style={styles.Text_218_3167}>
            Photo Library Documents Browse
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c595/250c/078aa65c57b719b049e4852f6e10ec13"
          }}
          style={styles.ImageBackground_218_3168}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c595/250c/078aa65c57b719b049e4852f6e10ec13"
          }}
          style={styles.ImageBackground_218_3169}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_218_2865: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_218_2866: {
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
  View_218_2867: {
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
  ImageBackground_218_2868: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2870: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_218_2872: {
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
  ImageBackground_218_2873: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2875: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_218_2879: {
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
  View_218_2880: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2881: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2882: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_218_2885: {
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
  View_218_2886: {
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
  View_218_2887: {
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
  View_218_2888: {
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
  View_218_2889: {
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
  View_218_2890: {
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
  Text_218_2890: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_2891: {
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
  Text_218_2891: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_2892: {
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
  View_218_2893: {
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
  View_218_2894: {
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
  View_218_2895: {
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
  View_218_2896: {
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
  Text_218_2896: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_2897: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_218_2900: {
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
  View_218_2901: {
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
  View_218_2902: {
    width: wp("49%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2903: {
    width: wp("49%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2904: {
    width: wp("49%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2905: {
    width: wp("48%"),
    height: hp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2907: {
    width: wp("47%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2908: {
    width: wp("47%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2910: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2911: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2913: {
    width: wp("37%"),
    height: hp("14%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_218_2914: {
    width: wp("37%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2915: {
    width: wp("37%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2917: {
    width: wp("29%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_218_2919: {
    width: wp("37%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2920: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_218_2921: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2923: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_218_2924: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2926: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_218_2927: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2929: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_218_2930: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2932: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_218_2933: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2935: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_218_2936: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2938: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_218_2939: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2941: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2942: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2944: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_218_2945: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2947: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2948: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2950: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2951: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2953: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2954: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2956: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_218_2957: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2959: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2960: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2962: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2963: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2965: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2966: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2968: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2969: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2971: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2972: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2974: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2975: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2977: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2978: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2980: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2981: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2983: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2984: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2986: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_218_2987: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2989: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2990: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2992: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2993: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2995: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2996: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2998: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2999: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3001: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_3002: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3004: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_3005: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3007: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_3008: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3010: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_3011: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3013: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_3014: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3016: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_3017: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3019: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_3020: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3022: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_3023: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3025: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_3026: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3028: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_3029: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3031: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_3032: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3034: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_3035: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3037: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_3038: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3040: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_3041: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3043: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_3044: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3046: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_3047: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3049: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_218_3050: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3052: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_218_3053: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3055: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_3056: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3058: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_3059: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3061: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_218_3062: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3064: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_3065: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3067: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_218_3068: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3070: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_218_3071: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3073: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_218_3074: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3076: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_218_3077: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3079: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_218_3080: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3082: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_218_3083: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3085: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_218_3086: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3088: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_218_3089: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3091: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_218_3092: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3094: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_218_3095: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3097: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_218_3098: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3100: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_218_3101: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3103: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_218_3104: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3106: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_218_3107: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3109: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_218_3110: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3112: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_218_3113: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3115: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_218_3116: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3118: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_218_3119: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3121: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_218_3122: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3124: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_218_3125: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3127: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_218_3128: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3130: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_218_3131: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3133: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_218_3134: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3136: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_218_3137: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3139: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_218_3140: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3142: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_218_3143: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_3145: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_3147: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_218_3153: {
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
  Text_218_3153: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3154: {
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
  Text_218_3154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3155: {
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
  View_218_3156: {
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
  Text_218_3156: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3157: {
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
  ImageBackground_218_3158: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_3161: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.699999988079071
  },
  View_218_3162: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("114%")
  },
  View_218_3163: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_218_3164: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_218_3164: {
    color: "rgba(3, 123, 233, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3165: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("90%")
  },
  View_218_3166: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_218_3167: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_218_3167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_3168: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  ImageBackground_218_3169: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
