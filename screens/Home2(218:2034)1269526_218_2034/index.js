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
      <View style={styles.View_218_2035} />
      <View style={styles.View_218_2036} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/9bd3/e6edeaa23c4ad04da0a0bca9c833a8d9"
        }}
        style={styles.ImageBackground_218_2037}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d6/c9e2/ffbfbdeee35881acde2eea924e83d5de"
        }}
        style={styles.ImageBackground_218_2039}
      />
      <View style={styles.View_218_2041}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e99f/aec3/54af6f9fc9352271ebd63af64b9fc78d"
          }}
          style={styles.ImageBackground_218_2042}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6357/1d1a/3ea417982c5edb0706750298502cdbc8"
        }}
        style={styles.ImageBackground_218_2044}
      />
      <View style={styles.View_218_2048}>
        <View style={styles.View_218_2049}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad5/2848/6676c2c1dfe97b5897e7f0723cbed8d3"
            }}
            style={styles.ImageBackground_218_2050}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/8af3/8dd8ee8bf31670fa8f3985bcbbda0901"
            }}
            style={styles.ImageBackground_218_2051}
          />
        </View>
      </View>
      <View style={styles.View_218_2054}>
        <View style={styles.View_218_2055} />
        <View style={styles.View_218_2056} />
        <View style={styles.View_218_2057} />
      </View>
      <View style={styles.View_218_2058}>
        <Text style={styles.Text_218_2058}>Dashboard</Text>
      </View>
      <View style={styles.View_218_2077} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeff/769e/2f9e67df89b899206d1c7bb47457e63e"
        }}
        style={styles.ImageBackground_218_2078}
      />
      <View style={styles.View_218_2318}>
        <Text style={styles.Text_218_2318}>Compare Loan Estimates</Text>
      </View>
      <View style={styles.View_218_2319} />
      <View style={styles.View_218_2320}>
        <Text style={styles.Text_218_2320}>Customize Mortgage</Text>
      </View>
      <View style={styles.View_218_2321} />
      <View style={styles.View_218_2322}>
        <Text style={styles.Text_218_2322}>Shop for Services</Text>
      </View>
      <View style={styles.View_218_2323} />
      <View style={styles.View_218_2324}>
        <Text style={styles.Text_218_2324}>Scenario Builder</Text>
      </View>
      <View style={styles.View_218_2325}>
        <View style={styles.View_218_2326}>
          <View style={styles.View_218_2327}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d12c/e960/a1015b318af6af030b86cc4143235100"
              }}
              style={styles.ImageBackground_218_2328}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e84a/8635/1b16855beffac13288e6de690f61ab0d"
              }}
              style={styles.ImageBackground_218_2329}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2d6/00bc/abd492571867bb9449d30ea20597da58"
              }}
              style={styles.ImageBackground_218_2330}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/298b/2686/414a395d9e28f163a12813d1b5fa4475"
              }}
              style={styles.ImageBackground_218_2331}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/162e/1bf4/29991abdd0eb78808fe6b851474e26b6"
              }}
              style={styles.ImageBackground_218_2332}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32d3/74f4/003d76db3e170e35f704de45e4a00472"
              }}
              style={styles.ImageBackground_218_2333}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4be/d351/8bbbc830da8d5b4b249f52bc8b5923d8"
              }}
              style={styles.ImageBackground_218_2334}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/714f/9be1/287e59ba8e0dd871d12bd25b5ed49597"
              }}
              style={styles.ImageBackground_218_2335}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
              }}
              style={styles.ImageBackground_218_2336}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
              }}
              style={styles.ImageBackground_218_2337}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
              }}
              style={styles.ImageBackground_218_2338}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1732/22b0/17cc281a3bb9627cad1ae832564e4490"
              }}
              style={styles.ImageBackground_218_2339}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/979e/6ef5/a0b2c42d7c271fc5569d9da9abc1e95c"
              }}
              style={styles.ImageBackground_218_2340}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237b/d4f6/f992e19bb3201339ecdfc0dd99782829"
              }}
              style={styles.ImageBackground_218_2341}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d63/2e65/bc4ea59a0251f4a411d1102e54c915ea"
              }}
              style={styles.ImageBackground_218_2342}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ada/cee2/336b1899022a939e54124120bf4199ec"
              }}
              style={styles.ImageBackground_218_2343}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f346/4630/bc82679fa33f2adcf63edca9b1b68b46"
              }}
              style={styles.ImageBackground_218_2344}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0bb/1288/68f3c4235ffd690df1416b110a910a4d"
              }}
              style={styles.ImageBackground_218_2350}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e8a/3961/2190810f46930c6dfbd16b9fdcb10379"
              }}
              style={styles.ImageBackground_218_2351}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e8a/3961/2190810f46930c6dfbd16b9fdcb10379"
              }}
              style={styles.ImageBackground_218_2352}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03ef/09ec/3b19f95e891a269309d662db84423b01"
              }}
              style={styles.ImageBackground_218_2353}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31d7/be9f/247a2e6188848e8694afb4dc772b9d79"
              }}
              style={styles.ImageBackground_218_2354}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d220/f1fc/d18081f9a680fb7df93f7587c9ca70ef"
              }}
              style={styles.ImageBackground_218_2355}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a56/a64c/c9dcda5eb310cc68cfa71f81c5e13bdc"
              }}
              style={styles.ImageBackground_218_2356}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21fc/b2ca/c28798ba7944a6342334ea4a57a47cb8"
              }}
              style={styles.ImageBackground_218_2357}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9586/beb8/27fc0ad76387085cec459ecf9837a8c3"
              }}
              style={styles.ImageBackground_218_2358}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41c2/d9a9/bdf317c0b0f1727b2212000e846dc306"
              }}
              style={styles.ImageBackground_218_2359}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4fa/2741/da614d3f0788af3725ac4d706ef52f70"
              }}
              style={styles.ImageBackground_218_2360}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c56e/3390/950b3a336615827b8fc1d4cd39ada7e5"
              }}
              style={styles.ImageBackground_218_2361}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c56e/3390/950b3a336615827b8fc1d4cd39ada7e5"
              }}
              style={styles.ImageBackground_218_2362}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c56e/3390/950b3a336615827b8fc1d4cd39ada7e5"
              }}
              style={styles.ImageBackground_218_2363}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b899/6f8d/15cc657c954437bc488f6e2353f1caaf"
              }}
              style={styles.ImageBackground_218_2364}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5e0/65fc/ee7f2c616eaabd5fc953dc9da957d6bf"
              }}
              style={styles.ImageBackground_218_2365}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33e8/38fa/2f1576d851120ebaaced81b9aa5809d0"
              }}
              style={styles.ImageBackground_218_2366}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb5/270b/146ecd2becf851d42a8f87b60f1edd59"
              }}
              style={styles.ImageBackground_218_2367}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05aa/f4bd/ba5d884c3cfa1227ccdfa975d837139d"
              }}
              style={styles.ImageBackground_218_2368}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd1/4486/8e34dd1a449e87dc1c067caee4f17289"
              }}
              style={styles.ImageBackground_218_2369}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/896b/6333/d49bf07095b2ad52e52527869662b6e1"
              }}
              style={styles.ImageBackground_218_2370}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ad6/ec3d/833d9160f6784fc5d1bb3f7e05c4cdc7"
              }}
              style={styles.ImageBackground_218_2371}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f019/3cda/8d147f012b0e734dfec03af4392551a6"
              }}
              style={styles.ImageBackground_218_2372}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/177c/44dc/8c007531449aaaeb00e6e66a1af8e656"
              }}
              style={styles.ImageBackground_218_2373}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/491a/fbfd/2d3b96311cd071dc5bfe740d6064804d"
              }}
              style={styles.ImageBackground_218_2374}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc91/5e7f/a08661e2a53e3db02b667a136019a741"
              }}
              style={styles.ImageBackground_218_2375}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/207d/05ee/09e32dd57ec2ec4dc25d1698a2373e75"
              }}
              style={styles.ImageBackground_218_2376}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e90/00c5/fea99ed11656cfac1e2bcce286072f79"
              }}
              style={styles.ImageBackground_218_2377}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3079/5fca/2192cfa6a55c40787b377fc3ff0e4ea2"
              }}
              style={styles.ImageBackground_218_2378}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87cf/d94d/99c852fec0678d0155b6e3b119c0476d"
              }}
              style={styles.ImageBackground_218_2379}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/693f/13c8/6631277411b366d0364e32645974c99d"
              }}
              style={styles.ImageBackground_218_2380}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ccf/1274/9daf157490803772ce4d352f9c3c2be3"
              }}
              style={styles.ImageBackground_218_2381}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a052/0d4c/50c8e75716bcd45afdc7454e98ae81e5"
              }}
              style={styles.ImageBackground_218_2382}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f2f/3ec7/ac596e1595ae5de2de22a4a1230c13a4"
              }}
              style={styles.ImageBackground_218_2383}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4880/6698/c5d98a9db6d3d1b8c95b0a69eb451455"
              }}
              style={styles.ImageBackground_218_2384}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0342/047f/dbdcd0becf5cbbb30d02e319404969f0"
              }}
              style={styles.ImageBackground_218_2385}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7d1/8728/024cd8a8f15c7d4232cf75a644343985"
              }}
              style={styles.ImageBackground_218_2386}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b97/809c/4227c7c336c92e0c44c52f52ea390a6c"
              }}
              style={styles.ImageBackground_218_2387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d957/725b/5fd1d4222bac92b77755c5af03856068"
              }}
              style={styles.ImageBackground_218_2388}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cad5/0c84/0047844d4c5fef558f71077fa07c2a52"
              }}
              style={styles.ImageBackground_218_2389}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0c5/4c2f/bec42caf4d2f17e891bf0302eaa49ff5"
              }}
              style={styles.ImageBackground_218_2390}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f201/0a2e/8a25366fbfc0dfaa4228e39d1d4b3dfd"
              }}
              style={styles.ImageBackground_218_2391}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa0e/f0f4/7cca7b5bf0797719fa7b100665ad02a5"
              }}
              style={styles.ImageBackground_218_2392}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeef/431e/3131e24a9177113e8de7b2404df0d8ea"
              }}
              style={styles.ImageBackground_218_2393}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a38/3adf/24ca018f3d4c1b129873ff299517ac84"
              }}
              style={styles.ImageBackground_218_2394}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ddf/8b6e/5a2d3379660d6d0c2b4d075a44d0d1ab"
              }}
              style={styles.ImageBackground_218_2395}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb06/643e/0948a18eb7f32427a93117513cb0a5eb"
              }}
              style={styles.ImageBackground_218_2408}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3621/8956/60a1864ed2869246e992512b8af9a19c"
              }}
              style={styles.ImageBackground_218_2409}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7802/e85e/1cb5673d5bd06eea6df341893018ee53"
              }}
              style={styles.ImageBackground_218_2410}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13d3/9437/729ee57f68b8213edc0f3820d6902f7f"
              }}
              style={styles.ImageBackground_218_2411}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/127b/b5d0/18d49336938aa1c4f9daaf49c3ea6e28"
              }}
              style={styles.ImageBackground_218_2412}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc75/4d08/68a40cafee60eed2111d1a63aeba8507"
              }}
              style={styles.ImageBackground_218_2413}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2a1/3b4d/6b3d9f9785cff97f955952f05d44ed4f"
              }}
              style={styles.ImageBackground_218_2414}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65e7/433c/5508867de70cad01b46c1dc553cf1cee"
              }}
              style={styles.ImageBackground_218_2415}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/788a/15f5/63e0a07c6317f819e429dafb19bacf3c"
              }}
              style={styles.ImageBackground_218_2416}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b940/79d6/41e694c4bbd0b617d96bbe9235687c02"
              }}
              style={styles.ImageBackground_218_2417}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3c/fe79/bd6037cff6b69198685b86eefb4092a9"
              }}
              style={styles.ImageBackground_218_2418}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c145/e729/9c6df1eaac84cffc20526ab340c2deeb"
              }}
              style={styles.ImageBackground_218_2419}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e79/4395/6429e62ad43e397aeb443a13ea3e5a49"
              }}
              style={styles.ImageBackground_218_2420}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f0e/062d/8878e5481831788ef1e974ae31e0e585"
              }}
              style={styles.ImageBackground_218_2421}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13d3/9437/729ee57f68b8213edc0f3820d6902f7f"
              }}
              style={styles.ImageBackground_218_2422}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/127b/b5d0/18d49336938aa1c4f9daaf49c3ea6e28"
              }}
              style={styles.ImageBackground_218_2423}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6937/6356/fea51636b32c4b770b315dab5be752c4"
              }}
              style={styles.ImageBackground_218_2424}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef62/59e5/0e9d57aca11688d603bcd84f9f0f1c9f"
              }}
              style={styles.ImageBackground_218_2425}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65e7/433c/5508867de70cad01b46c1dc553cf1cee"
              }}
              style={styles.ImageBackground_218_2426}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/788a/15f5/63e0a07c6317f819e429dafb19bacf3c"
              }}
              style={styles.ImageBackground_218_2427}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5964/940c/7d42fdb6226009cc17204b0cf9fb9e7e"
              }}
              style={styles.ImageBackground_218_2428}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7498/c83f/e56ce5f093630913a17bf3e29b309cdf"
              }}
              style={styles.ImageBackground_218_2429}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c9/c8e9/999f81b44da51bec747c29c30bac793a"
              }}
              style={styles.ImageBackground_218_2430}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a678/5815/16a0de00eab3c3afb073d63b5502f402"
              }}
              style={styles.ImageBackground_218_2431}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecf5/a948/8692fd0db89b86f057745671d157722f"
              }}
              style={styles.ImageBackground_218_2432}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b1/2483/a5a302baab964ee75519f88a5690fc46"
              }}
              style={styles.ImageBackground_218_2433}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0fc/abd4/8b78fe93d644018e18147a0890ba88c8"
              }}
              style={styles.ImageBackground_218_2434}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6140/0f5d/8c359f6cbb2df2ef0fcc02474c0884d5"
              }}
              style={styles.ImageBackground_218_2435}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7d/823e/19e4a69224ebf519053ea2b7a2f7d318"
              }}
              style={styles.ImageBackground_218_2436}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c682/3386/aa339f80b21c7e8da27fcb26a175db09"
              }}
              style={styles.ImageBackground_218_2437}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3c/fe79/bd6037cff6b69198685b86eefb4092a9"
              }}
              style={styles.ImageBackground_218_2438}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c4b/4943/777bf1021cd2d1e5c4be7fe248836cd8"
              }}
              style={styles.ImageBackground_218_2439}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c145/e729/9c6df1eaac84cffc20526ab340c2deeb"
              }}
              style={styles.ImageBackground_218_2440}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e735/f20a/713fc8b92e8d30072522d500e250b1e4"
              }}
              style={styles.ImageBackground_218_2441}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/127b/b5d0/18d49336938aa1c4f9daaf49c3ea6e28"
              }}
              style={styles.ImageBackground_218_2442}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65e7/433c/5508867de70cad01b46c1dc553cf1cee"
              }}
              style={styles.ImageBackground_218_2443}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/788a/15f5/63e0a07c6317f819e429dafb19bacf3c"
              }}
              style={styles.ImageBackground_218_2444}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7498/c83f/e56ce5f093630913a17bf3e29b309cdf"
              }}
              style={styles.ImageBackground_218_2445}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3c/fe79/bd6037cff6b69198685b86eefb4092a9"
              }}
              style={styles.ImageBackground_218_2446}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c4b/4943/777bf1021cd2d1e5c4be7fe248836cd8"
              }}
              style={styles.ImageBackground_218_2447}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e79/4395/6429e62ad43e397aeb443a13ea3e5a49"
              }}
              style={styles.ImageBackground_218_2448}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1479/495b/a7464371990a6a2be58f480379986e03"
              }}
              style={styles.ImageBackground_218_2449}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1c7/3c96/640f4f2f48bd59982ab65860e55dcce6"
              }}
              style={styles.ImageBackground_218_2450}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aabd/a7d9/1bc8b0f1fc410a749fc822297d9dd058"
              }}
              style={styles.ImageBackground_218_2451}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93f2/0957/757680f89d1c8a9fba6e029f1e97f806"
              }}
              style={styles.ImageBackground_218_2452}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ed0/be51/9a9b5174d606b460a712c84a8daa99c4"
              }}
              style={styles.ImageBackground_218_2453}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbf9/0e5d/a49a7ce4a2954d71eddd466dcff15004"
              }}
              style={styles.ImageBackground_218_2454}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/255d/8cde/abb104fe88e10d38a4b33d3ab33d7fb6"
              }}
              style={styles.ImageBackground_218_2455}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ae5/8653/954a6f5eeeee29a99d70cf09867a72de"
              }}
              style={styles.ImageBackground_218_2456}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b4/27d5/6ae086e393d786ed051a2f7030427ee0"
              }}
              style={styles.ImageBackground_218_2457}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c145/e729/9c6df1eaac84cffc20526ab340c2deeb"
              }}
              style={styles.ImageBackground_218_2458}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fb/510d/d5945209152e552695b71d5ee13db157"
              }}
              style={styles.ImageBackground_218_2459}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd73/c28d/c978db722f26211b31ec3e902ad53444"
              }}
              style={styles.ImageBackground_218_2460}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baf1/9e7a/74770ba59347860b5b4c6f0b5c0d1557"
              }}
              style={styles.ImageBackground_218_2461}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5903/8e11/adc472f368b5f6c47a02421ed5e878e8"
              }}
              style={styles.ImageBackground_218_2462}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c8a/22c4/6c4c3937b313aada5c713127f2f96681"
              }}
              style={styles.ImageBackground_218_2463}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8209/0798/2115705ccbfd6480d67a80e0e23841a5"
              }}
              style={styles.ImageBackground_218_2464}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d9a/7107/44f59460d3a6d1a3ca69094a31ac32d7"
              }}
              style={styles.ImageBackground_218_2465}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad1e/1612/f45cddcd09b30d2ff5f4745bbeffbd8d"
              }}
              style={styles.ImageBackground_218_2466}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/580e/b627/b81b1ae5b056332470c98b8993e18176"
              }}
              style={styles.ImageBackground_218_2467}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbce/49d4/0ec272925f9c0a9b09d4516c06ffb876"
              }}
              style={styles.ImageBackground_218_2468}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b46b/157f/847c406bee0245960873ca7e61e4bbc4"
              }}
              style={styles.ImageBackground_218_2469}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38cf/23a1/f4322e8ba31fba2dc9bd8826a9511b3d"
              }}
              style={styles.ImageBackground_218_2470}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5291/d714/2c488b5d8ffb23b1cd0ed95babc48b8b"
              }}
              style={styles.ImageBackground_218_2471}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0212/a5b5/e1f5cb158ce620be14452bde2bce8e54"
              }}
              style={styles.ImageBackground_218_2472}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ae1/6774/afb48139517493b4d926ac9aabc921cd"
              }}
              style={styles.ImageBackground_218_2473}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/405d/2bb6/5474b61caa82cab7cca6e68289189fb4"
              }}
              style={styles.ImageBackground_218_2474}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07aa/a0f7/0c5695f6c76df0f86f421e73edb1acdc"
              }}
              style={styles.ImageBackground_218_2475}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_218_2476}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7672/6bea/0151a0f86d53a76787158ee0b72b810f"
          }}
          style={styles.ImageBackground_218_2477}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c4/51e2/8d6ead86bea63e0dda74bf6b29f5182a"
          }}
          style={styles.ImageBackground_218_2490}
        />
        <View style={styles.View_218_2497}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c02b/4f71/3458d819326aaac3466dbbba09668c58"
            }}
            style={styles.ImageBackground_218_2498}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/415d/ed21/9169fc3ae255653520093cccf98c2960"
            }}
            style={styles.ImageBackground_218_2499}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fe4/88c9/ee0a96d129edae07fa3c4a5d0ddee3a1"
            }}
            style={styles.ImageBackground_218_2500}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a5/076a/2e69391fe015f7a10e31a30bad94fab3"
            }}
            style={styles.ImageBackground_218_2501}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df66/2f91/70478424a87bf080b665511f9ad6bad4"
            }}
            style={styles.ImageBackground_218_2502}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a5/076a/2e69391fe015f7a10e31a30bad94fab3"
            }}
            style={styles.ImageBackground_218_2503}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ac/a12c/ddfa0db991eae2614f60861b72ccac92"
            }}
            style={styles.ImageBackground_218_2504}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/908b/e9e7/fcb5ae3565b4874e01a129ca44f2cf66"
            }}
            style={styles.ImageBackground_218_2505}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83f2/42d9/0da6f206e522f834c6b7bc16d5ccf523"
            }}
            style={styles.ImageBackground_218_2506}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b63d/149c/50e41ec06aa2bf27ddb14f6f6e9657bd"
            }}
            style={styles.ImageBackground_218_2507}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b4e/1634/22fe0d6919673b67f3ee8f8efe19a8a0"
            }}
            style={styles.ImageBackground_218_2508}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8500/047e/9fa0186422ebaa2652e17e76e5976c4e"
            }}
            style={styles.ImageBackground_218_2509}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d6d/fc18/d7ddbb73a29b270b0ac187d16a1383e7"
            }}
            style={styles.ImageBackground_218_2510}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9dc/4892/78e155f6df44ba4018943d0d3b1cfc99"
            }}
            style={styles.ImageBackground_218_2511}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0f3/6b65/741306b85c3595b0e4b5856f6bc5f34d"
            }}
            style={styles.ImageBackground_218_2512}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51c9/bc71/93aef63eff706265a17d8cd4fa2e3f2b"
            }}
            style={styles.ImageBackground_218_2513}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d685/e031/e679b02e114d4225a2dede92a3a2e06d"
            }}
            style={styles.ImageBackground_218_2514}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3e/7bc6/c24379a85925f5438208398e17da8edc"
            }}
            style={styles.ImageBackground_218_2515}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c53/c6cd/e8d63c56d925d8a7fa71ae3a58a31223"
            }}
            style={styles.ImageBackground_218_2516}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc69/8ce9/7e6188da2c205709e3a810db80936ea3"
            }}
            style={styles.ImageBackground_218_2517}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2e2/f74f/04c6ca2d32291d772c0c835fa8d42417"
            }}
            style={styles.ImageBackground_218_2518}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5893/0248/c467aada43a404b91c04aac23030fb52"
            }}
            style={styles.ImageBackground_218_2519}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/502a/9120/9df1952360dfbd853f165b531eaf174b"
            }}
            style={styles.ImageBackground_218_2520}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55ed/f5c2/caf42b1a1a5bcd349f949adc03dff7c0"
            }}
            style={styles.ImageBackground_218_2521}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ce/a4da/4855b537f137bcb8793ce953025b9e13"
            }}
            style={styles.ImageBackground_218_2522}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2065/79c2/6df3d587d970851d602ec5ae54dca252"
            }}
            style={styles.ImageBackground_218_2524}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4674/52fe/03761b76fa21bdf6251a7eee6b829fdd"
            }}
            style={styles.ImageBackground_218_2526}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2b/1d31/28b27388950c3fc6b7efeee17e5c31a1"
            }}
            style={styles.ImageBackground_218_2527}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8a5/0db5/05e1afc3d8b87e89df434095e5eda29d"
            }}
            style={styles.ImageBackground_218_2528}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7590/b934/62a23d7eb3fd21a883ca3aa1a3cf76e8"
            }}
            style={styles.ImageBackground_218_2529}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d60/c4df/ec265c56a75362e689ae33b3fd43af01"
            }}
            style={styles.ImageBackground_218_2530}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ce/a4da/4855b537f137bcb8793ce953025b9e13"
            }}
            style={styles.ImageBackground_218_2531}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fce0/8137/f0c5ea8fd82351598b97205139d08a8b"
            }}
            style={styles.ImageBackground_218_2533}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
            }}
            style={styles.ImageBackground_218_2535}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_218_2536}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/638e/ae74/7efe6f1e5352e1b84ef5927b5fc4d9f6"
            }}
            style={styles.ImageBackground_218_2537}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d37/f2b5/102a3bd6ab853116c9c239d3890f2085"
            }}
            style={styles.ImageBackground_218_2538}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5152/9d8f/66a0f8e54b5b97015e69d8c1c278d99e"
            }}
            style={styles.ImageBackground_218_2539}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43eb/a9eb/5b290d95633abb0108c5fee904f93dc8"
            }}
            style={styles.ImageBackground_218_2540}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5159/5b64/ca4a3219f93ddd1f4a2c9372fcb4b4f8"
            }}
            style={styles.ImageBackground_218_2541}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76fc/1237/0260bfbb5d57baaeb74faacbc0b27f51"
            }}
            style={styles.ImageBackground_218_2542}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85ab/9182/fad8f4971cef98fb614de335f52ae4f7"
            }}
            style={styles.ImageBackground_218_2543}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dae/2118/651d2b7e644f18b347f607e549dae4ca"
            }}
            style={styles.ImageBackground_218_2544}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7b5/b381/345bd05cf608649da227941c5afa267a"
            }}
            style={styles.ImageBackground_218_2545}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ef6/38c5/3a5efee6856308b7f94d1971fa7e7cc6"
            }}
            style={styles.ImageBackground_218_2546}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3497/13fc/78a701c3effe9b1bc71b5c15b18e1e6a"
            }}
            style={styles.ImageBackground_218_2547}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/4cb1/f10f694520a3be1c3c1567fb8ec12082"
            }}
            style={styles.ImageBackground_218_2548}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0bb/5f59/3e00bfbddc923e11d9e9e76095d8dd38"
            }}
            style={styles.ImageBackground_218_2549}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/844a/1a3c/1ee8b031aee14f5fd3b4accba56cc2c9"
            }}
            style={styles.ImageBackground_218_2550}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bc3/0d89/e16534d1c88ca4ec74741f4c0b464b5b"
            }}
            style={styles.ImageBackground_218_2551}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faf5/4265/be44c1f34936e3a33372d77eb24265a5"
            }}
            style={styles.ImageBackground_218_2552}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/641d/c17c/cef2593a1b9eeace97c9ed40cce584b4"
            }}
            style={styles.ImageBackground_218_2553}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48c2/ace1/5b81a8094f7470522447effa95e8c6e3"
            }}
            style={styles.ImageBackground_218_2554}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/767a/8f03/59e0c6cbe8d3f73e1c518f5f56b689a7"
            }}
            style={styles.ImageBackground_218_2555}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f911/2f87/1b3a57a780a5d9d46f7f0c0ae3518400"
            }}
            style={styles.ImageBackground_218_2556}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/561d/0967a6ae7fcd7c3a834c5dd18cc5b01b"
            }}
            style={styles.ImageBackground_218_2557}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f911/2f87/1b3a57a780a5d9d46f7f0c0ae3518400"
            }}
            style={styles.ImageBackground_218_2558}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2b/1d31/28b27388950c3fc6b7efeee17e5c31a1"
            }}
            style={styles.ImageBackground_218_2559}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f911/2f87/1b3a57a780a5d9d46f7f0c0ae3518400"
            }}
            style={styles.ImageBackground_218_2560}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2b/1d31/28b27388950c3fc6b7efeee17e5c31a1"
            }}
            style={styles.ImageBackground_218_2561}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f3b/1c5e/ed4045772aea4ee608eedd7a1ec72bfc"
            }}
            style={styles.ImageBackground_218_2562}
          />
        </View>
        <View style={styles.View_218_2563}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a90d/36f2/c19ba1f6ea45e5aeef3b70950eb3ed53"
            }}
            style={styles.ImageBackground_218_2564}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbb0/7eb4/32c80fa9f7c0e90eea12f490ee5d7cda"
            }}
            style={styles.ImageBackground_218_2565}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4204/125c/529795b13b9cf9bfc59926709957469e"
            }}
            style={styles.ImageBackground_218_2567}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/364f/9094/49d93e35e699e76c46bd3b7971ca52d2"
            }}
            style={styles.ImageBackground_218_2568}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b792/07d5/e563fc6965e9ffab4b6429b6089f9da6"
            }}
            style={styles.ImageBackground_218_2569}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac9/75b5/ab30f7f56379d341dfcb7e210ddea78a"
            }}
            style={styles.ImageBackground_218_2570}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebd0/e231/c21aef5db60ff531ba84b2da9900d0fd"
            }}
            style={styles.ImageBackground_218_2571}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a40c/b054/11e54b4f4de1a06ef415a01c7b8d3c4d"
            }}
            style={styles.ImageBackground_218_2572}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff6a/b21c/085cf88bc115cf49210dff4d51c72551"
            }}
            style={styles.ImageBackground_218_2573}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f888/1e03/74dcb585e7692c4a8aa0f1ea77c7f1d7"
            }}
            style={styles.ImageBackground_218_2574}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a1/ac98/02df19e7082d65dbb341be14162a6972"
            }}
            style={styles.ImageBackground_218_2575}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7909/5844/3b79ad841ae5486b0889719965a64420"
            }}
            style={styles.ImageBackground_218_2576}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a723/ed0e/82c761bdc2d14fa6ff18151cecd4fd30"
            }}
            style={styles.ImageBackground_218_2577}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff6a/b21c/085cf88bc115cf49210dff4d51c72551"
            }}
            style={styles.ImageBackground_218_2578}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f888/1e03/74dcb585e7692c4a8aa0f1ea77c7f1d7"
            }}
            style={styles.ImageBackground_218_2579}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8633/458c/6ef8d776b3ba68e7f55ac6822fbfe929"
            }}
            style={styles.ImageBackground_218_2580}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7909/5844/3b79ad841ae5486b0889719965a64420"
            }}
            style={styles.ImageBackground_218_2581}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a723/ed0e/82c761bdc2d14fa6ff18151cecd4fd30"
            }}
            style={styles.ImageBackground_218_2582}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93d7/6e56/dbf19e960d6ce27500fe4171aec0a827"
            }}
            style={styles.ImageBackground_218_2583}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95a8/5bcb/cb4ef000f6e33a10e532fb010b4a4d9b"
            }}
            style={styles.ImageBackground_218_2584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b16/7cd7/6a866d440106f50af74584143f361411"
            }}
            style={styles.ImageBackground_218_2585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bbd/1cbc/0cc74c0656799ab500a9e9e496ab9aad"
            }}
            style={styles.ImageBackground_218_2586}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b679/b6f6/3e56faeca7c8df29f948926692db499b"
            }}
            style={styles.ImageBackground_218_2587}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1532/0574/39d4a0afffc4091eec29cf74a71d7552"
            }}
            style={styles.ImageBackground_218_2588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/966c/cdf2/0585defb161880f80c14c590dd269998"
            }}
            style={styles.ImageBackground_218_2589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e212/9dfb/1753357063bde9bfa783fe9bfeba78de"
            }}
            style={styles.ImageBackground_218_2590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab97/2a14/30654b25b9139441609a8799718f9f08"
            }}
            style={styles.ImageBackground_218_2591}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0ee/ff78/9bdef330fcc639e29fed8b97081a5910"
            }}
            style={styles.ImageBackground_218_2592}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/795f/7734/6f3bbc9a82b321021afa478099bdf6a2"
            }}
            style={styles.ImageBackground_218_2593}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9af/2a60/3d28d6e0e9a0a78969a06e3708a5e679"
            }}
            style={styles.ImageBackground_218_2594}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/693d/85c1/55d9902f47cadeb7fc8ed2ec9c416283"
            }}
            style={styles.ImageBackground_218_2595}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d120/0245/f452f687482180cbfcb02a770e4ed509"
            }}
            style={styles.ImageBackground_218_2596}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97f8/0524/f9c983b9b06bac2b26a4ab9036975006"
            }}
            style={styles.ImageBackground_218_2597}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3104/5421/636becdec733f20b9bcef9b08cc15f27"
            }}
            style={styles.ImageBackground_218_2598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0162/ddbe/f913bc49953e1dfae338cca232ac51bf"
            }}
            style={styles.ImageBackground_218_2599}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f47b/fbe6/ae977769a842af0e8093c2e5dd4bea07"
            }}
            style={styles.ImageBackground_218_2600}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cacd/2aee/21528562e6a0c432b793917a42d30f03"
            }}
            style={styles.ImageBackground_218_2601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/435a/b5e2/18342be4be66c7dfdf9c7ca9e552937a"
            }}
            style={styles.ImageBackground_218_2602}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c5e/7d25/1b3fd13ee882476ed283af6220f2e6a8"
          }}
          style={styles.ImageBackground_218_2603}
        />
        <View style={styles.View_218_2605}>
          <Text style={styles.Text_218_2605}>Services</Text>
        </View>
      </View>
      <View style={styles.View_218_2606}>
        <View style={styles.View_218_2607}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7edf/f46d/6fc2dd47e4bccbb2e54c8e5365be3a0f"
            }}
            style={styles.ImageBackground_218_2608}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a2/6d49/83ae677061eba975569908638c5f8e65"
            }}
            style={styles.ImageBackground_218_2610}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77e0/f692/700908f1a9113fb438ed5ac6eedcf79a"
            }}
            style={styles.ImageBackground_218_2612}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e97d/a486/5078358fe8ca49d1f35bd82c7c19b7ec"
            }}
            style={styles.ImageBackground_218_2613}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/423b/7e19/531b99af2bc28b624275038137c29f34"
            }}
            style={styles.ImageBackground_218_2614}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa2c/048f/df121785121f6c6ed33f3edf5e6a0e44"
            }}
            style={styles.ImageBackground_218_2615}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9981/c93e/f89acd982d2ee86c30a4ff91761fa2b3"
            }}
            style={styles.ImageBackground_218_2616}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4a/0562/e98b900e104cf43b92433f0b82899ba9"
            }}
            style={styles.ImageBackground_218_2617}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a88/6a61/b179020068493c00d30ebd51c6a5ad79"
            }}
            style={styles.ImageBackground_218_2618}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/390c/f6af/decaf8b7caa522e3253beb1ea4d8baf5"
            }}
            style={styles.ImageBackground_218_2619}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f1/f445/3ab87f4d7524d30eb579309cbd073d56"
            }}
            style={styles.ImageBackground_218_2620}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7906/6f79/cf4d2ac856b1f950f15d5ccdb0a75137"
            }}
            style={styles.ImageBackground_218_2621}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/185f/1c9f/7d2097ef0c32524458c390f32b85556f"
            }}
            style={styles.ImageBackground_218_2622}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4098/c928/19b6e865b41a2a810975321f022c4704"
            }}
            style={styles.ImageBackground_218_2623}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d530/cdab/eee0e7c938ec61e3150450962a1621ba"
            }}
            style={styles.ImageBackground_218_2624}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb9/0e51/b30d89fe3b5ab9edad8fdaa62c193633"
            }}
            style={styles.ImageBackground_218_2625}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2626}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2627}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2628}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2629}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2630}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2631}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2632}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2633}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2634}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2635}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2636}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2637}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2638}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2639}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2640}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2641}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2642}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2643}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2644}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2645}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2646}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2647}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2648}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb9/0e51/b30d89fe3b5ab9edad8fdaa62c193633"
            }}
            style={styles.ImageBackground_218_2649}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2650}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2651}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2652}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2653}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2654}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2655}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2656}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2657}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2658}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2659}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2660}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2661}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2662}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2663}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2664}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2665}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2666}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2667}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2668}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2669}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2670}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2671}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2672}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33b5/14be/4c6f4c188dae82bd06dcb211bcdd7e71"
            }}
            style={styles.ImageBackground_218_2673}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c3/f501/1121b8a111c819ecf4682a084a63549a"
            }}
            style={styles.ImageBackground_218_2674}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22b4/27d5/6ae086e393d786ed051a2f7030427ee0"
            }}
            style={styles.ImageBackground_218_2675}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9098/488c/d70c42491def3d1668dc5b08de84bb41"
            }}
            style={styles.ImageBackground_218_2676}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f91/a86f/493329c5accc62358fcb50cdbd13d290"
            }}
            style={styles.ImageBackground_218_2677}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e01/2be6/b3d108a023f6d98920a2c0294e7736dc"
            }}
            style={styles.ImageBackground_218_2678}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22c8/da1d/98754e212ccdef9a4b3e5ea7d81ad5fd"
            }}
            style={styles.ImageBackground_218_2679}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5eb/9bdf/ad691ecdf9ec02e49414ac1fb7d34f24"
            }}
            style={styles.ImageBackground_218_2680}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb9/0e51/b30d89fe3b5ab9edad8fdaa62c193633"
            }}
            style={styles.ImageBackground_218_2681}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2682}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2683}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2684}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2685}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2686}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2687}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2688}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2689}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2690}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2691}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2692}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2693}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2694}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2695}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2696}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2697}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2698}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2699}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2700}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2701}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2702}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2703}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2704}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb9/0e51/b30d89fe3b5ab9edad8fdaa62c193633"
            }}
            style={styles.ImageBackground_218_2705}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2706}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2707}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2708}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2709}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2710}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2711}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2712}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2713}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2714}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2715}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2716}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2717}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2718}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2719}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2720}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2721}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2722}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2723}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2724}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2725}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2726}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2727}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2728}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb9/0e51/b30d89fe3b5ab9edad8fdaa62c193633"
            }}
            style={styles.ImageBackground_218_2729}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2730}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2731}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2732}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2733}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2734}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2735}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2736}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2737}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2738}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2739}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2740}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2741}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2742}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2743}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2744}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2745}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2746}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2747}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2748}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2749}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2750}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2751}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2752}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb9/0e51/b30d89fe3b5ab9edad8fdaa62c193633"
            }}
            style={styles.ImageBackground_218_2753}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2754}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2755}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2756}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2757}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2758}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2759}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2760}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2761}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2762}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2763}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2764}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2765}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2766}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2767}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2768}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2769}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2770}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2771}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2772}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2773}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2774}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2775}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2776}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb9/0e51/b30d89fe3b5ab9edad8fdaa62c193633"
            }}
            style={styles.ImageBackground_218_2777}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2778}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2779}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2780}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2781}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2782}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2783}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2784}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2785}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2786}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2787}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2788}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2789}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2790}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2791}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2792}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2793}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2794}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2795}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2796}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2797}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2798}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2799}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2800}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb9/0e51/b30d89fe3b5ab9edad8fdaa62c193633"
            }}
            style={styles.ImageBackground_218_2801}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2803}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2804}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2805}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2806}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2807}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2808}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2809}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2810}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2811}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2812}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2813}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2814}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2815}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2816}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2817}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2818}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2819}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2820}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2821}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d53/9476/97b126d5a7723351ce59d00daa2d6bdb"
            }}
            style={styles.ImageBackground_218_2822}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2823}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b5f/14d7/8329b0fc2aa2032b7b958ddec07799bd"
            }}
            style={styles.ImageBackground_218_2824}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37ae/9554/c693c3d469b468c3cc103602764573c8"
            }}
            style={styles.ImageBackground_218_2825}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9a6/bff3/17c5127315ff25e790d85ef75c4d2d17"
            }}
            style={styles.ImageBackground_218_2826}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71e4/d500/2e408dd8f6afc765e668bca06c82d04e"
            }}
            style={styles.ImageBackground_218_2827}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4c8/898f/0d31302acc5e700418e4a10cccc9df88"
            }}
            style={styles.ImageBackground_218_2828}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a68/bec4/5eb06e0561403d8d00af03da183df542"
            }}
            style={styles.ImageBackground_218_2829}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eaa/6cd9/46554eaeb3549f83d3a984f6833cd313"
            }}
            style={styles.ImageBackground_218_2830}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b43/69b3/edb2720b16e9bcaf714f12861a0d25c0"
            }}
            style={styles.ImageBackground_218_2831}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fabe/4874/92a5f79a4ec7ce9ea6958fe74b0c644b"
            }}
            style={styles.ImageBackground_218_2832}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe19/a170/e13b34731f499787a0958a2f07a713d7"
            }}
            style={styles.ImageBackground_218_2833}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0703/dfa5/b2416df5c009c9049a06fcce24881a7b"
            }}
            style={styles.ImageBackground_218_2834}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bfa/6e13/2466b2fb4195b71197022a61972166bb"
            }}
            style={styles.ImageBackground_218_2835}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdee/fcfc/f81caa3a8949122fdead888d90072730"
            }}
            style={styles.ImageBackground_218_2836}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9734/4653/abdf787a94b4dd6bc70b9404b7671d92"
            }}
            style={styles.ImageBackground_218_2837}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c41e/c1fe/3eabff69fe879a7daaadbc43e1bd02f6"
            }}
            style={styles.ImageBackground_218_2838}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4c2/5141/c72cf994d24944141fc255f3e3b91231"
            }}
            style={styles.ImageBackground_218_2839}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ca6/e988/0bfbe69d13c3b2a4357700789a1f33fa"
            }}
            style={styles.ImageBackground_218_2840}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4c/8114/19076dc5057f14aa34e1b520996d68d8"
            }}
            style={styles.ImageBackground_218_2841}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ad/aa64/3cec5bad3b80c289f0d7c56caafb134d"
            }}
            style={styles.ImageBackground_218_2842}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e11/b4f4/f2e1494205d4456b18c2fc1404ca2a89"
            }}
            style={styles.ImageBackground_218_2843}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15a6/a0a4/82d8bc659d10c52f75e435efaf23b9b8"
            }}
            style={styles.ImageBackground_218_2844}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6099/ad28/a23e49a166c3aba845fb97992f931a7c"
            }}
            style={styles.ImageBackground_218_2845}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fabe/4874/92a5f79a4ec7ce9ea6958fe74b0c644b"
            }}
            style={styles.ImageBackground_218_2846}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9859/b1bc/8f75b9df4d066bf0baf19f01acf14b01"
            }}
            style={styles.ImageBackground_218_2847}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acbc/fd57/e05613ee5f6bcec6a84bff417a51740b"
            }}
            style={styles.ImageBackground_218_2848}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb93/b3cd/f4b73e4e551310b2832d27c8492441cf"
            }}
            style={styles.ImageBackground_218_2849}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e3e/4316/9e5a99a360935b5fe251314d3d6d37e8"
            }}
            style={styles.ImageBackground_218_2850}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdf/8505/40b08e260a4c23755b333597fedfdd9b"
            }}
            style={styles.ImageBackground_218_2851}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cbd/1153/def0585f3e99a51f395cbd9011f97109"
            }}
            style={styles.ImageBackground_218_2852}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8d4/f18a/e811b0e034c14eba4105bd65e5a0d86a"
            }}
            style={styles.ImageBackground_218_2853}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c14/d595/bdf06e0ae2f632ab62234f7f2ab07e6f"
            }}
            style={styles.ImageBackground_218_2854}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/412a/8b57/bfcefbbb6c57d13ed8f462cac2183c24"
            }}
            style={styles.ImageBackground_218_2855}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e28d/3b69/dab87a8af4010c36bfed0ff84324f0ee"
            }}
            style={styles.ImageBackground_218_2856}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/2d5d/a8adf1380e6a33b3cc021d8d6d962988"
            }}
            style={styles.ImageBackground_218_2857}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04ed/eb85/da0360a46f457c3c83af0d1e665344c3"
            }}
            style={styles.ImageBackground_218_2858}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1a3/ebaf/aceae43deddd71f5c65f2294b93b1576"
            }}
            style={styles.ImageBackground_218_2859}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6014/e902/534a9eb9c66ccecb00c00a7d594b25a4"
            }}
            style={styles.ImageBackground_218_2860}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a64/9dd0/990067bd99a161bb6ed655b5fa6e709e"
            }}
            style={styles.ImageBackground_218_2861}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1af1/84bc/2f6cfbcd0be188b5ee628f776e0b22b6"
            }}
            style={styles.ImageBackground_218_2862}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c30c/66c7/c0eb297fc73bc551c3c98077dd374556"
            }}
            style={styles.ImageBackground_218_2863}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_218_2035: {
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
  View_218_2036: {
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
  ImageBackground_218_2037: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2039: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_218_2041: {
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
  ImageBackground_218_2042: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2044: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_218_2048: {
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
  View_218_2049: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2050: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2051: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_218_2054: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11%"),
    top: hp("840%")
  },
  View_218_2055: {
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
  View_218_2056: {
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
  View_218_2057: {
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
  View_218_2058: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("840%"),
    justifyContent: "center"
  },
  Text_218_2058: {
    color: "rgba(7, 38, 123, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_2077: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_218_2078: {
    width: wp("26%"),
    height: hp("10%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_218_2318: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_218_2318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_2319: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_218_2320: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_218_2320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_2321: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("53%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_218_2322: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("73%"),
    justifyContent: "center"
  },
  Text_218_2322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_2323: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("53%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_218_2324: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("73%"),
    justifyContent: "center"
  },
  Text_218_2324: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_2325: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_218_2326: {
    width: wp("25%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2327: {
    width: wp("25%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2328: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2329: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2330: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2331: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2332: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2333: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_218_2334: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2335: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2336: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_218_2337: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_218_2338: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_218_2339: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_218_2340: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2341: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2342: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2343: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2344: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2350: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2351: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2352: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2353: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_218_2354: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_218_2355: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_218_2356: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_218_2357: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_218_2358: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_218_2359: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_218_2360: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2361: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_218_2362: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_218_2363: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_218_2364: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2365: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2366: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2367: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2368: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2369: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2370: {
    width: wp("15%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2371: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2372: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2373: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2374: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2375: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2376: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2377: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2378: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2379: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2380: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2381: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2382: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2383: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2384: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2385: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_218_2386: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2387: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2388: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2389: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_218_2390: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2391: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_218_2392: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2393: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2394: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2395: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2408: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2409: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2410: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2411: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2412: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2413: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2414: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_218_2415: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2416: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2417: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2418: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2419: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2420: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2421: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2422: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2423: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2424: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2425: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2426: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2427: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2428: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2429: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2430: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2431: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2432: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2433: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2434: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2435: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2436: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2437: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2438: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2439: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2440: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2441: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2442: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2443: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2444: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2445: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2446: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2447: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2448: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2449: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2450: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2451: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2452: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_218_2453: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_218_2454: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_218_2455: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2456: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2457: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2458: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2459: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2460: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2461: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2462: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_218_2463: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2464: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2465: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2466: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2467: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2468: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2469: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2470: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_218_2471: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_218_2472: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2473: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2474: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2475: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_218_2476: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_218_2477: {
    width: wp("21%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2490: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_218_2497: {
    width: wp("9%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2498: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_218_2499: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2500: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2501: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2502: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2503: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2504: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2505: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2506: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2507: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2508: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2509: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2510: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2511: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2512: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2513: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2514: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2515: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2516: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2517: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2518: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2519: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2520: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2521: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2522: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2524: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2526: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2527: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2528: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2529: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2530: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2531: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2533: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2535: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2536: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2537: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2538: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2539: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2540: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_218_2541: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2542: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2543: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2544: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2545: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2546: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2547: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2548: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2549: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2550: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2551: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2552: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_218_2553: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2554: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2555: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_218_2556: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2557: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2558: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2559: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2560: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2561: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2562: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_218_2563: {
    width: wp("14%"),
    height: hp("12%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2564: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2565: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2567: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2568: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2569: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2570: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_218_2571: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2572: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_218_2573: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2574: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2575: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2576: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2577: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2578: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2579: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2580: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2581: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2582: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2583: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2584: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2585: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2586: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2587: {
    width: wp("8%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2588: {
    width: wp("8%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2589: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2590: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2591: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2592: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2593: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2594: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2595: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2596: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2597: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2598: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2599: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2600: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2601: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2602: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2603: {
    width: wp("21%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_218_2605: {
    width: wp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "center"
  },
  Text_218_2605: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_2606: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_218_2607: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_218_2608: {
    width: wp("25%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2610: {
    width: wp("25%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2612: {
    width: wp("25%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2613: {
    width: wp("20%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2614: {
    width: wp("20%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2615: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_218_2616: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_218_2617: {
    width: wp("19%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2618: {
    width: wp("19%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2619: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2620: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_218_2621: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_218_2622: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_218_2623: {
    width: wp("16%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_218_2624: {
    width: wp("16%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_218_2625: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2626: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2627: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2628: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2629: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2630: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2631: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2632: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2633: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2634: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2635: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2636: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2637: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2638: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2639: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2640: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2641: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2642: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2643: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2644: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2645: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2646: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2647: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2648: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2649: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2650: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2651: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2652: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2653: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2654: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2655: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2656: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2657: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2658: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2659: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2660: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2661: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2662: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2663: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2664: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2665: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2666: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2667: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2668: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2669: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2670: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2671: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2672: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2673: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2674: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2675: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2676: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2677: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_218_2678: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2679: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2680: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_218_2681: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2682: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2683: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2684: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2685: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2686: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2687: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2688: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2689: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2690: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2691: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2692: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2693: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2694: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2695: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2696: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2697: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2698: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2699: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2700: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2701: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2702: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2703: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2704: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2705: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2706: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2707: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2708: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2709: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2710: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2711: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2712: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2713: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2714: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2715: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2716: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2717: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2718: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2719: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2720: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2721: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2722: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2723: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2724: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2725: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2726: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2727: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2728: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2729: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2730: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2731: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2732: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2733: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2734: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2735: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2736: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2737: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2738: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2739: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2740: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2741: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2742: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2743: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2744: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2745: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2746: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2747: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2748: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2749: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2750: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_218_2751: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2752: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2753: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2754: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2755: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2756: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2757: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2758: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2759: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2760: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2761: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2762: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2763: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2764: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2765: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2766: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2767: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2768: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2769: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2770: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2771: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2772: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2773: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2774: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_218_2775: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2776: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_218_2777: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2778: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2779: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2780: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2781: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2782: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2783: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2784: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2785: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2786: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2787: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2788: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2789: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2790: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2791: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2792: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2793: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2794: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2795: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2796: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2797: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2798: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2799: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2800: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_218_2801: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2802: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2803: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2804: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2805: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2806: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2807: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2808: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2809: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2810: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2811: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2812: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_218_2813: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2814: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2815: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2816: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2817: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2818: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2819: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2820: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2821: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2822: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2823: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2824: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2825: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2826: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2827: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2828: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2829: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2830: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2831: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2832: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2833: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2834: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2835: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2836: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2837: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_218_2838: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2839: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2840: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2841: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2842: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2843: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2844: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_218_2845: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_218_2846: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_218_2847: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2848: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_218_2849: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2850: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_218_2851: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2852: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_218_2853: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2854: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2855: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2856: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2857: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_218_2858: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_218_2859: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2860: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2861: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2862: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_218_2863: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
