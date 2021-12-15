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
      <View style={styles.View_219_3336} />
      <View style={styles.View_219_3337} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_219_3338}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_219_3340}
      />
      <View style={styles.View_219_3342}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_219_3343}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_219_3345}
      />
      <View style={styles.View_219_3349}>
        <View style={styles.View_219_3350}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/2848/6676c2c1dfe97b5897e7f0723cbed8d3"
            }}
            style={styles.ImageBackground_219_3351}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_219_3352}
          />
        </View>
      </View>
      <View style={styles.View_219_3355}>
        <View style={styles.View_219_3356} />
        <View style={styles.View_219_3357} />
        <View style={styles.View_219_3358} />
      </View>
      <View style={styles.View_219_3359} />
      <View style={styles.View_219_3360}>
        <Text style={styles.Text_219_3360}>Upload SINGLE loan Estimate</Text>
      </View>
      <View style={styles.View_219_3361}>
        <Text style={styles.Text_219_3361}>
          Upload Loan Estimate document or take a Picture and Upload.
        </Text>
      </View>
      <View style={styles.View_219_3362} />
      <View style={styles.View_219_3363}>
        <View style={styles.View_219_3364} />
        <View style={styles.View_219_3365}>
          <View style={styles.View_219_3366}>
            <Text style={styles.Text_219_3366}>Upload</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b3/3da0/5961b8b0f7e20b552e12b4bb4fbc677d"
            }}
            style={styles.ImageBackground_219_3367}
          />
        </View>
      </View>
      <View style={styles.View_219_3370} />
      <View style={styles.View_219_3371}>
        <View style={styles.View_219_3372}>
          <View style={styles.View_219_3373}>
            <View style={styles.View_219_3374}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eb9/5a6f/2b08e03f0501f56a4527eebec735a0f8"
                }}
                style={styles.ImageBackground_219_3375}
              />
              <View style={styles.View_219_3377}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7661/1406/5f832b28eb0835a4dca28fb0e5d95905"
                  }}
                  style={styles.ImageBackground_219_3378}
                />
              </View>
              <View style={styles.View_219_3380}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c9/d3aa/1c69031ae06f28066f7a8eafcd52eb0f"
                  }}
                  style={styles.ImageBackground_219_3381}
                />
              </View>
            </View>
            <View style={styles.View_219_3383}>
              <View style={styles.View_219_3384}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90e7/b549/53a542017856f38dd569c3debe51f270"
                  }}
                  style={styles.ImageBackground_219_3385}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4109/a118/cd6dd6d1e9cfa5c7a4052353e21aa23c"
                  }}
                  style={styles.ImageBackground_219_3387}
                />
                <View style={styles.View_219_3389}>
                  <View style={styles.View_219_3390}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b25/29fe/e2b12772540850d87fe8c921f5fbc1a0"
                      }}
                      style={styles.ImageBackground_219_3391}
                    />
                  </View>
                  <View style={styles.View_219_3393}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6873/c815/ca652d178bd548c6fd4e6e68fbe7c646"
                      }}
                      style={styles.ImageBackground_219_3394}
                    />
                  </View>
                  <View style={styles.View_219_3396}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ec4/e326/263044f8a0eaa66bee629a76901d71aa"
                      }}
                      style={styles.ImageBackground_219_3397}
                    />
                  </View>
                  <View style={styles.View_219_3399}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0897/298b/c40c35556dda868db4e03a59d5fc3f61"
                      }}
                      style={styles.ImageBackground_219_3400}
                    />
                  </View>
                  <View style={styles.View_219_3402}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/331c/ea77/8da7f682f7d17448870909e79aac820d"
                      }}
                      style={styles.ImageBackground_219_3403}
                    />
                  </View>
                  <View style={styles.View_219_3405}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b690/2e60/375d47f0a7a46834bee99f274c542cbf"
                      }}
                      style={styles.ImageBackground_219_3406}
                    />
                  </View>
                  <View style={styles.View_219_3408}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/355b/0516/18695348aedf573c3845de9c66923d83"
                      }}
                      style={styles.ImageBackground_219_3409}
                    />
                  </View>
                  <View style={styles.View_219_3411}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc96/6dbe/6c1b5a0974f2f493a70ad80cbdb71bc3"
                      }}
                      style={styles.ImageBackground_219_3412}
                    />
                  </View>
                  <View style={styles.View_219_3414}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22a0/5c17/b23268a288f697c1ba9fa63124ba968b"
                      }}
                      style={styles.ImageBackground_219_3415}
                    />
                  </View>
                  <View style={styles.View_219_3417}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4130/68d6/e4202216921629ad6a1f487fe0e08705"
                      }}
                      style={styles.ImageBackground_219_3418}
                    />
                  </View>
                  <View style={styles.View_219_3420}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbca/a7bf/78fe0853332a3fb829c8a5ee82464e8f"
                      }}
                      style={styles.ImageBackground_219_3421}
                    />
                  </View>
                  <View style={styles.View_219_3423}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f22/f938/e07d6efbff346dda82d03c734e0877a6"
                      }}
                      style={styles.ImageBackground_219_3424}
                    />
                  </View>
                  <View style={styles.View_219_3426}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e358/fa99/bc008a934e0624aeaeb393ca2f0f0849"
                      }}
                      style={styles.ImageBackground_219_3427}
                    />
                  </View>
                  <View style={styles.View_219_3429}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4957/3a1a/30749930a620378a0af6e206be9f4a85"
                      }}
                      style={styles.ImageBackground_219_3430}
                    />
                  </View>
                  <View style={styles.View_219_3432}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6dd/907e/919d893de999fe27035569a54b94337e"
                      }}
                      style={styles.ImageBackground_219_3433}
                    />
                  </View>
                  <View style={styles.View_219_3435}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967c/1bc8/cb1ac7237e9d9e3851fa425fbd3f8a89"
                      }}
                      style={styles.ImageBackground_219_3436}
                    />
                  </View>
                  <View style={styles.View_219_3438}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/437a/bec9/99aaee21a73a55d9fc63940e2322af07"
                      }}
                      style={styles.ImageBackground_219_3439}
                    />
                  </View>
                  <View style={styles.View_219_3441}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beae/429e/14686e3928c851debf853bd8f4cc55d0"
                      }}
                      style={styles.ImageBackground_219_3442}
                    />
                  </View>
                  <View style={styles.View_219_3444}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7883/ed58/b62f630ef59aae5435c2875c69ea189b"
                      }}
                      style={styles.ImageBackground_219_3445}
                    />
                  </View>
                  <View style={styles.View_219_3447}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/66a9/62cd20346aca762320aca561246122e2"
                      }}
                      style={styles.ImageBackground_219_3448}
                    />
                  </View>
                  <View style={styles.View_219_3450}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bba/294a/b1853f025cb0ef80074032e1dd43e670"
                      }}
                      style={styles.ImageBackground_219_3451}
                    />
                  </View>
                  <View style={styles.View_219_3453}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d09/389f/6836c9f309b8d904c5862abc70b30675"
                      }}
                      style={styles.ImageBackground_219_3454}
                    />
                  </View>
                  <View style={styles.View_219_3456}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e695/f1dd/11c75c02dd41b66ae60f87e63f38e6eb"
                      }}
                      style={styles.ImageBackground_219_3457}
                    />
                  </View>
                  <View style={styles.View_219_3459}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c57b/e988/11363ed7c849a36441df83a12b3ee5a3"
                      }}
                      style={styles.ImageBackground_219_3460}
                    />
                  </View>
                  <View style={styles.View_219_3462}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1f5/3e71/13d4a1ba421ca69288ec0d44cc6d2bb8"
                      }}
                      style={styles.ImageBackground_219_3463}
                    />
                  </View>
                  <View style={styles.View_219_3465}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d96f/16ce/584e6af3a2075a6744438047a0b18dfe"
                      }}
                      style={styles.ImageBackground_219_3466}
                    />
                  </View>
                  <View style={styles.View_219_3468}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bba/883a/f0db56bda828115242c0ff03b96153df"
                      }}
                      style={styles.ImageBackground_219_3469}
                    />
                  </View>
                  <View style={styles.View_219_3471}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f66b/ec2a/fa68a2770fb6c3e717942360cc251c7e"
                      }}
                      style={styles.ImageBackground_219_3472}
                    />
                  </View>
                  <View style={styles.View_219_3474}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f13b/1468/2c55eee0d869287a682e00583a26334a"
                      }}
                      style={styles.ImageBackground_219_3475}
                    />
                  </View>
                  <View style={styles.View_219_3477}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0707/20f8/517fee391d398b5bcf0674d8760862ed"
                      }}
                      style={styles.ImageBackground_219_3478}
                    />
                  </View>
                  <View style={styles.View_219_3480}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1b8/2f00/796500949235cd4ab63f0c9924a0f84e"
                      }}
                      style={styles.ImageBackground_219_3481}
                    />
                  </View>
                  <View style={styles.View_219_3483}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6e7/bbe3/32092235ac0d73ac9448506cf9dfbdf4"
                      }}
                      style={styles.ImageBackground_219_3484}
                    />
                  </View>
                  <View style={styles.View_219_3486}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b776/1734/6b7070741c1fb89f5b76e5362286cf3e"
                      }}
                      style={styles.ImageBackground_219_3487}
                    />
                  </View>
                  <View style={styles.View_219_3489}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7d0/0531/7080d7f61455f2fe6ce515a4dbbc30b8"
                      }}
                      style={styles.ImageBackground_219_3490}
                    />
                  </View>
                  <View style={styles.View_219_3492}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0de3/e379/0327d9160c4c40e3d57b25f7bf0185a7"
                      }}
                      style={styles.ImageBackground_219_3493}
                    />
                  </View>
                  <View style={styles.View_219_3495}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf69/d9a1/1a1b98684d85ce494afc917cb3ceacfe"
                      }}
                      style={styles.ImageBackground_219_3496}
                    />
                  </View>
                  <View style={styles.View_219_3498}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b809/7be4/b49d9f69692b8ad93a97ff35c313a99d"
                      }}
                      style={styles.ImageBackground_219_3499}
                    />
                  </View>
                  <View style={styles.View_219_3501}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53d0/574e/4591469fd062e48b583bb5bfccc781c6"
                      }}
                      style={styles.ImageBackground_219_3502}
                    />
                  </View>
                  <View style={styles.View_219_3504}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a86f/fb50/2ff7ada90850cadec3ea9f34f7ce148f"
                      }}
                      style={styles.ImageBackground_219_3505}
                    />
                  </View>
                  <View style={styles.View_219_3507}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88dc/93a8/5f54c9e2e0cc71da17040584f5a5c33b"
                      }}
                      style={styles.ImageBackground_219_3508}
                    />
                  </View>
                  <View style={styles.View_219_3510}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8048/a036/5e4ad38684b6ef4faceb8b72834c7e62"
                      }}
                      style={styles.ImageBackground_219_3511}
                    />
                  </View>
                  <View style={styles.View_219_3513}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d36d/9081/8cdd2e16692270e8413dea5f3d7fcd23"
                      }}
                      style={styles.ImageBackground_219_3514}
                    />
                  </View>
                  <View style={styles.View_219_3516}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3000/d095/56d2251918c69301fe8b777266be1313"
                      }}
                      style={styles.ImageBackground_219_3517}
                    />
                  </View>
                  <View style={styles.View_219_3519}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6a/f6b5/ee4c64fa0f3dfc2173d0be352fc10e40"
                      }}
                      style={styles.ImageBackground_219_3520}
                    />
                  </View>
                  <View style={styles.View_219_3522}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec46/417f/96d1fc34c4fff24ee4c7afa25da4fc1a"
                      }}
                      style={styles.ImageBackground_219_3523}
                    />
                  </View>
                  <View style={styles.View_219_3525}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0f4/2ec3/801b0ac4b3d9fbd65eda179c0ba36e5a"
                      }}
                      style={styles.ImageBackground_219_3526}
                    />
                  </View>
                  <View style={styles.View_219_3528}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2077/5c20/6b745a2812c70f1e901a27befe3c1259"
                      }}
                      style={styles.ImageBackground_219_3529}
                    />
                  </View>
                  <View style={styles.View_219_3531}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d0c/ca17/2e84da628e504befc2f29a0771850a22"
                      }}
                      style={styles.ImageBackground_219_3532}
                    />
                  </View>
                  <View style={styles.View_219_3534}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f72/e2f4/458e7e859a2d5b6a6786e8e969518180"
                      }}
                      style={styles.ImageBackground_219_3535}
                    />
                  </View>
                  <View style={styles.View_219_3537}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c279/baf5/ab1957c2653b2ba923dc9be57bed7cc9"
                      }}
                      style={styles.ImageBackground_219_3538}
                    />
                  </View>
                  <View style={styles.View_219_3540}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f6f/9cd8/d12a4db0b1bbdcce874fd0fd9cb03387"
                      }}
                      style={styles.ImageBackground_219_3541}
                    />
                  </View>
                  <View style={styles.View_219_3543}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad10/c39f/aa9093e8241008f311c6349555b8a052"
                      }}
                      style={styles.ImageBackground_219_3544}
                    />
                  </View>
                  <View style={styles.View_219_3546}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b776/1734/6b7070741c1fb89f5b76e5362286cf3e"
                      }}
                      style={styles.ImageBackground_219_3547}
                    />
                  </View>
                  <View style={styles.View_219_3549}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa23/bd0e/ac510b2506799a464de64433b3138205"
                      }}
                      style={styles.ImageBackground_219_3550}
                    />
                  </View>
                  <View style={styles.View_219_3552}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4521/3809/1ec48c3d95d1572961ded7991cf8e93b"
                      }}
                      style={styles.ImageBackground_219_3553}
                    />
                  </View>
                  <View style={styles.View_219_3555}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dbd/d376/f342957ac51e210406a3450879645d01"
                      }}
                      style={styles.ImageBackground_219_3556}
                    />
                  </View>
                  <View style={styles.View_219_3558}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c71a/d92d/1d73db15562fa65e64891fc218bc84fe"
                      }}
                      style={styles.ImageBackground_219_3559}
                    />
                  </View>
                  <View style={styles.View_219_3561}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b01d/e7ec/5d55b4054bf5dd42520b5c0ab189ac49"
                      }}
                      style={styles.ImageBackground_219_3562}
                    />
                  </View>
                  <View style={styles.View_219_3564}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57b6/ee1c/a082fc9854287ceaff07d04db96928ad"
                      }}
                      style={styles.ImageBackground_219_3565}
                    />
                  </View>
                  <View style={styles.View_219_3567}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62c6/a057/e29ac279a1d6dc2575796ae5a9938351"
                      }}
                      style={styles.ImageBackground_219_3568}
                    />
                  </View>
                  <View style={styles.View_219_3570}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e72c/5801/ff6ed4ed352bd4bb466173fcf99b23ea"
                      }}
                      style={styles.ImageBackground_219_3571}
                    />
                  </View>
                  <View style={styles.View_219_3573}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c279/baf5/ab1957c2653b2ba923dc9be57bed7cc9"
                      }}
                      style={styles.ImageBackground_219_3574}
                    />
                  </View>
                  <View style={styles.View_219_3576}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6c4/1c81/a6609762481941dc2c820fee2e984fc6"
                      }}
                      style={styles.ImageBackground_219_3577}
                    />
                  </View>
                  <View style={styles.View_219_3579}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f029/4241/5f50fc9d235ee678c2ec57d6a3c3c286"
                      }}
                      style={styles.ImageBackground_219_3580}
                    />
                  </View>
                  <View style={styles.View_219_3582}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876d/5cae/8a5b231202d8542d85b9d28930a440a2"
                      }}
                      style={styles.ImageBackground_219_3583}
                    />
                  </View>
                  <View style={styles.View_219_3585}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c5/97ee/18c452eed0a0e7318a0e3e60439e48a3"
                      }}
                      style={styles.ImageBackground_219_3586}
                    />
                  </View>
                  <View style={styles.View_219_3588}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6873/c815/ca652d178bd548c6fd4e6e68fbe7c646"
                      }}
                      style={styles.ImageBackground_219_3589}
                    />
                  </View>
                  <View style={styles.View_219_3591}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5d4/ef6c/133925df53047e659ecf5e3cd15ce78b"
                      }}
                      style={styles.ImageBackground_219_3592}
                    />
                  </View>
                  <View style={styles.View_219_3594}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fc/964f/f6678177180890c76115632ed27bc65c"
                      }}
                      style={styles.ImageBackground_219_3595}
                    />
                  </View>
                  <View style={styles.View_219_3597}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a063/f5d8/6355eaaa64c6c6ea1d1015c626cc48c4"
                      }}
                      style={styles.ImageBackground_219_3598}
                    />
                  </View>
                  <View style={styles.View_219_3600}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b690/2e60/375d47f0a7a46834bee99f274c542cbf"
                      }}
                      style={styles.ImageBackground_219_3601}
                    />
                  </View>
                  <View style={styles.View_219_3603}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ef9/1c33/c08e0aabeb9f2bca84ce114ea4c6543a"
                      }}
                      style={styles.ImageBackground_219_3604}
                    />
                  </View>
                  <View style={styles.View_219_3606}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1863/6c99/3f03a466c223fe826a9a2578c4840b45"
                      }}
                      style={styles.ImageBackground_219_3607}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_219_3609}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5ab/f4db/5df9951a2f9fccd6922809e56248b2a2"
                  }}
                  style={styles.ImageBackground_219_3610}
                />
              </View>
            </View>
            <View style={styles.View_219_3612}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58a3/0817/7d69c5fa816089323a47b5948853506b"
                }}
                style={styles.ImageBackground_219_3613}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f30b/ce0f/1c19b105e3dcca7009ed5fcfa3872d9b"
                }}
                style={styles.ImageBackground_219_3615}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edf6/64dc/bcf1734d87ed8bfadf8c13fd889938e5"
          }}
          style={styles.ImageBackground_219_3617}
        />
      </View>
      <View style={styles.View_219_3623}>
        <Text style={styles.Text_219_3623}>+ Choose files here</Text>
      </View>
      <View style={styles.View_219_3624}>
        <Text style={styles.Text_219_3624}>OR</Text>
      </View>
      <View style={styles.View_219_3625}>
        <View style={styles.View_219_3626}>
          <Text style={styles.Text_219_3626}>Take a Picture</Text>
        </View>
        <View style={styles.View_219_3627}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/272b/1ccb/62a26edb1d2d8685dbb53ff8fac3741c"
            }}
            style={styles.ImageBackground_219_3628}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_219_3336: {
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
  View_219_3337: {
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
  ImageBackground_219_3338: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_219_3340: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_219_3342: {
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
  ImageBackground_219_3343: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3345: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_219_3349: {
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
  View_219_3350: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3351: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3352: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_219_3355: {
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
  View_219_3356: {
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
  View_219_3357: {
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
  View_219_3358: {
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
  View_219_3359: {
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
  View_219_3360: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_219_3360: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3361: {
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
  Text_219_3361: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3362: {
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
  View_219_3363: {
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
  View_219_3364: {
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
  View_219_3365: {
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
  View_219_3366: {
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
  Text_219_3366: {
    color: "rgba(60, 79, 253, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_3367: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_219_3370: {
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
  View_219_3371: {
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
  View_219_3372: {
    width: wp("49%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3373: {
    width: wp("49%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3374: {
    width: wp("49%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3375: {
    width: wp("48%"),
    height: hp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3377: {
    width: wp("47%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_219_3378: {
    width: wp("47%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3380: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_219_3381: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3383: {
    width: wp("37%"),
    height: hp("14%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_219_3384: {
    width: wp("37%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3385: {
    width: wp("37%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3387: {
    width: wp("29%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_219_3389: {
    width: wp("37%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3390: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_219_3391: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3393: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_219_3394: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3396: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_219_3397: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3399: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_219_3400: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3402: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_219_3403: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3405: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_219_3406: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3408: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_219_3409: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3411: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_219_3412: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3414: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_219_3415: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3417: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_219_3418: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3420: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_219_3421: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3423: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_219_3424: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3426: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_219_3427: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3429: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_219_3430: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3432: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_219_3433: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3435: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_219_3436: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3438: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_219_3439: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3441: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_219_3442: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3444: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_219_3445: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3447: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_219_3448: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3450: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_219_3451: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3453: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_219_3454: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3456: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_219_3457: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3459: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_219_3460: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3462: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_219_3463: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3465: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_219_3466: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3468: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_219_3469: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3471: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3472: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3474: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3475: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3477: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3478: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3480: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_219_3481: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3483: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_219_3484: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3486: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_219_3487: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3489: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_219_3490: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3492: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_219_3493: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3495: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_219_3496: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3498: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_219_3499: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3501: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_219_3502: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3504: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_219_3505: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3507: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_219_3508: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3510: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_219_3511: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3513: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_219_3514: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3516: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_219_3517: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3519: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_219_3520: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3522: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_219_3523: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3525: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_219_3526: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3528: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_219_3529: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3531: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_219_3532: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3534: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_219_3535: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3537: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_219_3538: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3540: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_219_3541: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3543: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_219_3544: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3546: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_219_3547: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3549: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_219_3550: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3552: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_219_3553: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3555: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_219_3556: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3558: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_219_3559: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3561: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_219_3562: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3564: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_219_3565: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3567: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_219_3568: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3570: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_219_3571: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3573: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_219_3574: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3576: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_219_3577: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3579: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_219_3580: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3582: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_219_3583: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3585: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_219_3586: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3588: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_219_3589: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3591: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_219_3592: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3594: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_219_3595: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3597: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_219_3598: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3600: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_219_3601: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3603: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_219_3604: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3606: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_219_3607: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3609: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_219_3610: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_219_3612: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_219_3613: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_219_3615: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_219_3617: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_219_3623: {
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
  Text_219_3623: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3624: {
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
  Text_219_3624: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3625: {
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
  View_219_3626: {
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
  Text_219_3626: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_3627: {
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
  ImageBackground_219_3628: {
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
