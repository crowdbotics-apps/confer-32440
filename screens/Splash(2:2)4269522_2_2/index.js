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
      <View style={styles.View_3_3} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d82/772e/4b7623b2bf4a8ebf212bbfc7ee42a868"
        }}
        style={styles.ImageBackground_5_10934}
      />
      <View style={styles.View_5_11476}>
        <View style={styles.View_5_11474} />
        <View style={styles.View_5_11475}>
          <Text style={styles.Text_5_11475}>Let’s Get Started</Text>
        </View>
      </View>
      <View style={styles.View_36_87}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5965/db0c/5279e6142ddf0d24a1f27efacf12739c"
          }}
          style={styles.ImageBackground_7_994}
        />
        <View style={styles.View_5_10937}>
          <View style={styles.View_5_10939}>
            <View style={styles.View_5_10940}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b7a/8aa4/127c7d728d8f7e8ee2e61a8d2096ee9b"
                }}
                style={styles.ImageBackground_5_10941}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0c4/5ec4/2d4de1b0eefcf1d2b93860dd0c1c3db3"
                }}
                style={styles.ImageBackground_5_10942}
              />
              <View style={styles.View_5_10943}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66dd/2edd/9250846b45a44c64b8e846281dcb2f9a"
                  }}
                  style={styles.ImageBackground_5_10944}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46cb/3e9c/12ce925f2b3a340c571b47a42b4254f4"
                  }}
                  style={styles.ImageBackground_5_10945}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ef/a15a/a692685f0e16703ed83b63659c464466"
                  }}
                  style={styles.ImageBackground_5_10952}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70d1/3c39/6358c9a4e4ef055a92f5f173dc7e8e48"
                  }}
                  style={styles.ImageBackground_5_10953}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8b0/c930/1c538044306da24e4080a25b9cee3809"
                  }}
                  style={styles.ImageBackground_5_10954}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/518e/22bb/8908e6759ffede7395e2280d720aa097"
                  }}
                  style={styles.ImageBackground_5_10955}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1155/0f8f/0a8db5d586d388f2f1cc73e50d1b5026"
                }}
                style={styles.ImageBackground_5_10956}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4c0/b524/80a1642c2654810f4607409a561b6a18"
              }}
              style={styles.ImageBackground_5_10963}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6309/1490/94fe9dd426fb4188982fc01b95c0c318"
              }}
              style={styles.ImageBackground_5_10979}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8257/2aa5/668336c24f86875aa5d73fd1528a8573"
              }}
              style={styles.ImageBackground_5_10986}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c98b/ecf4/1ee47155b51450ea4f6bf742c0ae6a5a"
              }}
              style={styles.ImageBackground_5_10993}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c98b/ecf4/1ee47155b51450ea4f6bf742c0ae6a5a"
              }}
              style={styles.ImageBackground_5_11000}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5e9/3788/563a992d2eb11a43aa4566e261e1a6be"
              }}
              style={styles.ImageBackground_5_11007}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b69/f7f5/44a6ce2f432740d6ea2c55d8ce64f3c7"
              }}
              style={styles.ImageBackground_5_11011}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7434/fd63/14634eadf5701a3674fff26940a4ac97"
              }}
              style={styles.ImageBackground_5_11016}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c25/d53d/c98b2aa525b39987adff6f25dbfc546c"
              }}
              style={styles.ImageBackground_5_11017}
            />
            <View style={styles.View_5_11018}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ae0/4956/36ec1f63f02411e6693588cca6dbf56a"
                }}
                style={styles.ImageBackground_5_11019}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6250/30dd/f011b7fa6419772781f1a1996fdd9e05"
                }}
                style={styles.ImageBackground_5_11022}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6250/30dd/f011b7fa6419772781f1a1996fdd9e05"
                }}
                style={styles.ImageBackground_5_11025}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6250/30dd/f011b7fa6419772781f1a1996fdd9e05"
                }}
                style={styles.ImageBackground_5_11028}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6d8/d843/b9ff8539f498316fa574f1a7f95b3d5b"
                }}
                style={styles.ImageBackground_5_11031}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea0b/45cd/b13fc81252acb8dcd181a701325690a6"
                }}
                style={styles.ImageBackground_5_11034}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ae0/4956/36ec1f63f02411e6693588cca6dbf56a"
                }}
                style={styles.ImageBackground_5_11035}
              />
            </View>
          </View>
          <View style={styles.View_5_11038}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/156b/ea20/5aab32ae27740f64ce1d5b9de60088b3"
              }}
              style={styles.ImageBackground_5_11039}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c291/78d5/0f8847fa0fec9f77d0cff4c5d4531e2b"
              }}
              style={styles.ImageBackground_5_11040}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3282/f017/820c233eae9a23d25ebc9f00f0fb2732"
              }}
              style={styles.ImageBackground_5_11041}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7205/2eec/1ad4d74ef33c337d293e23f4d06406e5"
              }}
              style={styles.ImageBackground_5_11042}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b39e/9744/440e5beaeecc7be30090b1ef3c3f71f1"
              }}
              style={styles.ImageBackground_5_11043}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/198d/e0ab/6d2ac8c38e7c95f341f8f33012188cee"
              }}
              style={styles.ImageBackground_5_11044}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa37/4c9a/11eb08c13fcf33f1c1793df2c940caa2"
              }}
              style={styles.ImageBackground_5_11045}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c633/ed7b/7069e50979098f52792dd13312170aaf"
              }}
              style={styles.ImageBackground_5_11046}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0cb/f943/56e25aa11c8fa3fe1f6079322aedd31d"
              }}
              style={styles.ImageBackground_5_11047}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9056/3b19/c71d4075c3fc1897979f09a0a38c029d"
              }}
              style={styles.ImageBackground_5_11048}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27e4/6840/c1b9d48374ac1e1d36e81a31a802eda6"
              }}
              style={styles.ImageBackground_5_11049}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e418/ad6e/5de26ce5222a528152bb4391ed7f075f"
              }}
              style={styles.ImageBackground_5_11050}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2362/6ed6/c12cc406d6c09b35baaff721ccd93ce1"
              }}
              style={styles.ImageBackground_5_11051}
            />
            <View style={styles.View_5_11052}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/091a/86d0/6ea649a00880abf0558ffce9eb6a3afc"
                }}
                style={styles.ImageBackground_5_11053}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cad7/1f7d/ebe63c10885b58644fa37723a3dad554"
                }}
                style={styles.ImageBackground_5_11056}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e8/9c2d/164ff0acdc6a83064c0f8d6dd36fdf9c"
                }}
                style={styles.ImageBackground_5_11057}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cad7/1f7d/ebe63c10885b58644fa37723a3dad554"
                }}
                style={styles.ImageBackground_5_11058}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef0/aec6/6a659bc84fae5a09ded2b9ea91bac900"
                }}
                style={styles.ImageBackground_5_11059}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e5d/78d2/491297849c016102f4adf204edfe9f34"
              }}
              style={styles.ImageBackground_5_11060}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cce4/2407/f20310f8cd158a8b97cab389aad72ecc"
              }}
              style={styles.ImageBackground_5_11061}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b77/0fcb/4836a7f63da17de677ddd6cb7fe78111"
              }}
              style={styles.ImageBackground_5_11062}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a85/1973/5deab0b3f647f4533f9dedbc0d51386d"
              }}
              style={styles.ImageBackground_5_11063}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfa6/ba8e/d461aa40c83ed3692fe866d1f04a8b2a"
              }}
              style={styles.ImageBackground_5_11064}
            />
            <View style={styles.View_5_11065}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7140/e11c/2bbd98a43dcf22afdf8a55c84884075a"
                }}
                style={styles.ImageBackground_5_11066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8686/dd48/d7dd929d284d4441edac3460788c0681"
                }}
                style={styles.ImageBackground_5_11069}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c153/1abb/2e0b39056b7e908028074b0876bcfa56"
                }}
                style={styles.ImageBackground_5_11070}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0b4/6508/1c3227781650fc5b77489c55e3b08ee0"
                }}
                style={styles.ImageBackground_5_11073}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7ac/610a/bfbc8c5cef6c1cbf1590a04b182984ab"
              }}
              style={styles.ImageBackground_5_11074}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b635/c743/dd7b5f0a2757c9a5c268e1938bb1a05a"
              }}
              style={styles.ImageBackground_5_11075}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2460/02e7/30cd3ba9a2d396aaad6e384cc1822e85"
              }}
              style={styles.ImageBackground_5_11076}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a60/6409/79d10620378fa4b73ef113fb01a7d715"
              }}
              style={styles.ImageBackground_5_11077}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/196c/a753/8ff6154e2a9d3afb130a2f6100b11b01"
              }}
              style={styles.ImageBackground_5_11078}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52f3/b6e8/ce0aca9ff33d29894cc80811f8c39c98"
              }}
              style={styles.ImageBackground_5_11079}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0945/648a/fe43e9f6ce32d14a0640cc223ebd9031"
              }}
              style={styles.ImageBackground_5_11080}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3119/c58b/0b31d0375b3bf3cdb68fab2a7b4c129e"
              }}
              style={styles.ImageBackground_5_11081}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f57/f0ee/f0996f86ae2cee0a284e24143da6d0d1"
              }}
              style={styles.ImageBackground_5_11084}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7969/5520/a46eda0c790547ce433c0e5617218ae9"
              }}
              style={styles.ImageBackground_5_11088}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab97/bae0/5d5af536a9f7fd2f9947e24d923ee846"
              }}
              style={styles.ImageBackground_5_11092}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9c/3182/b4f12ee37e50d07dcdf97499e7967740"
              }}
              style={styles.ImageBackground_5_11093}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9466/2be7/5f9f2c20cf192030552e83d5e9191a52"
              }}
              style={styles.ImageBackground_5_11094}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87b5/21a3/f88391df667dfa27ab99212f21e432df"
              }}
              style={styles.ImageBackground_5_11095}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5a3/da68/f47b8975cc13d881ab2503f269968bf5"
              }}
              style={styles.ImageBackground_5_11096}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/787b/7e59/bcc4538e8374ce28fd87d36a3a40c23a"
        }}
        style={styles.ImageBackground_5_11477}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5487/31c6/0fb9afef058b45e8c426a26f1b845454"
        }}
        style={styles.ImageBackground_36_86}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_3_3: {
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
  ImageBackground_5_10934: {
    width: wp("313%"),
    minWidth: wp("313%"),
    height: hp("106%"),
    minHeight: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-98%"),
    top: hp("-7%"),
    resizeMode: "cover"
  },
  View_5_11476: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("108%")
  },
  View_5_11474: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  View_5_11475: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_5_11475: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_87: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("66%")
  },
  ImageBackground_7_994: {
    width: wp("86%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_10937: {
    width: wp("64%"),
    height: hp("25%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_5_10939: {
    width: wp("62%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_10940: {
    width: wp("62%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_10941: {
    width: wp("25%"),
    height: hp("20%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_5_10942: {
    width: wp("26%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_5_10943: {
    width: wp("38%"),
    height: hp("16%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_10944: {
    width: wp("25%"),
    height: hp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_5_10945: {
    width: wp("34%"),
    height: hp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_5_10952: {
    width: wp("37%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_10953: {
    width: wp("27%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_10954: {
    width: wp("22%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_10955: {
    width: wp("16%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_5_10956: {
    width: wp("54%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_5_10963: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_5_10979: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_5_10986: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_5_10993: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_5_11000: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_5_11007: {
    width: wp("21%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_5_11011: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_5_11016: {
    width: wp("16%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_5_11017: {
    width: wp("16%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_5_11018: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_5_11019: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_11022: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_5_11025: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_5_11028: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_5_11031: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_5_11034: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_11035: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_11038: {
    width: wp("26%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_5_11039: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_5_11040: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_5_11041: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_5_11042: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_5_11043: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_5_11044: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_5_11045: {
    width: wp("3%"),
    height: hp("11%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_5_11046: {
    width: wp("7%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_5_11047: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_5_11048: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_5_11049: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_5_11050: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_5_11051: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_5_11052: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_5_11053: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_5_11056: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_11057: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_11058: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_11059: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_5_11060: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_5_11061: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_5_11062: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_5_11063: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_5_11064: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_5_11065: {
    width: wp("7%"),
    height: hp("11%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_11066: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_5_11069: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_5_11070: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_11073: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_5_11074: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_5_11075: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_5_11076: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_5_11077: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_5_11078: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_5_11079: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_5_11080: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_5_11081: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_5_11084: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_5_11088: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_5_11092: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_5_11093: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_5_11094: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_5_11095: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_5_11096: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_5_11477: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_36_86: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("8%"),
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
