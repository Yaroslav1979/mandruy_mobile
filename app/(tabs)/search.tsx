import ParallaxScrollView from "@/components/parallax-scroll-view";
import { Picker } from "@react-native-picker/picker";
import { Image } from "expo-image";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BurgerMenu } from "../../components/burger-menu";

export default function LoginScreen() {
  const [category, setCategory] = useState("Без категорії");
  const [region, setRegion] = useState("Вся Україна");
  const [sortedby, setSortedby] = useState("Вся Україна");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#fff", dark: "#303638" }}
      headerHeight={50}
      headerImage={<View />}
    >
      <View style={styles.header}>
        <BurgerMenu />
        <Image
          source={require("../../assets/svg/logo.svg")}
          style={styles.logo}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>ПОШУК МІСЦЬ</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.formBlock}>
          <TextInput
            style={styles.input}
            textAlign="center"
            placeholder="Введіть назву"
          />
          <Image
            source={require("../../assets/images/iconSearch.png")}
            style={styles.searchBtn}
          />
          {/* <TouchableOpacity style={styles.btn}> */}
          {/* <View> */}

          {/* </View> */}

          {/* <Text style={styles.btnTxt}> Шукати </Text> */}
          {/* </TouchableOpacity> */}
        </View>
        <Text style={[styles.label, styles.bold]}>Розширений пошук:</Text>
        <View>
          <Text style={styles.label}>Категорія:</Text>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Без категорії" value="Без категорії" />
            <Picker.Item label="Табір" value="Табір" />
            <Picker.Item label="Мандрівка" value="Мандрівка" />
            <Picker.Item label="Питна вода" value="Питна вода" />
            <Picker.Item label="Пам'ятка" value="Пам'ятка" />
            <Picker.Item label="Музей" value="Музей" />
            <Picker.Item label="Водойма" value="Водойма" />
            <Picker.Item label="Автомобіль" value="Автомобіль" />
          </Picker>
        </View>

        <View>
          <Text style={styles.label}>Область:</Text>
          <Picker
            selectedValue={region}
            onValueChange={(itemValue) => setRegion(itemValue)}
          >
            <Picker.Item label="Вся Україна" value="Вся Україна" />
            <Picker.Item label="Вінницька область" value="Вінницька область" />
            <Picker.Item label="Волинська область" value="Волинська область" />
            <Picker.Item
              label="Дніпропетровська область"
              value="Дніпропетровська область"
            />
            <Picker.Item label="Донецька область" value="Донецька область" />
            <Picker.Item
              label="Житомирська область"
              value="Житомирська область"
            />
            <Picker.Item
              label="Закарпатська область"
              value="Закарпатська область"
            />
            <Picker.Item
              label="Запорізька область"
              value="Запорізька область"
            />
            <Picker.Item
              label="Івано-Франківська область"
              value="Івано-Франківська область"
            />
            <Picker.Item label="Київська область" value="Київська область" />
            <Picker.Item
              label="Кіровоградська область"
              value="Кіровоградська область"
            />
            <Picker.Item label="Луганська область" value="Луганська область" />
            <Picker.Item label="Львівська область" value="Львівська область" />
            <Picker.Item
              label="Миколаївська область"
              value="Миколаївська область"
            />
            <Picker.Item label="Одеська область" value="Одеська область" />
            <Picker.Item
              label="Полтавська область"
              value="Полтавська область"
            />
            <Picker.Item
              label="Рівненська область"
              value="Рівненська область"
            />
            <Picker.Item label="Сумська область" value="Сумська область" />
            <Picker.Item
              label="Тернопільська область"
              value="Тернопільська область"
            />
            <Picker.Item
              label="Івано-Франківська область"
              value="Івано-Франківська область"
            />
            <Picker.Item
              label="Харківська область"
              value="Харківська область"
            />
            <Picker.Item
              label="Херсонська область"
              value="Херсонська область"
            />
            <Picker.Item
              label="Хмельницька область"
              value="Хмельницька область"
            />
            <Picker.Item label="Черкаська область" value="Черкаська область" />
            <Picker.Item
              label="Чернівецька область"
              value="Чернівецька область"
            />
            <Picker.Item
              label="Чернігівська область"
              value="Чернігівська область"
            />
            <Picker.Item
              label="Крим автономна республіка"
              value="Крим автономна республіка"
            />
          </Picker>
        </View>

        <View>
          <Text style={styles.label}>Сортувати за:</Text>
          <Picker
            selectedValue={sortedby}
            onValueChange={(itemValue) => setSortedby(itemValue)}
          >
            <Picker.Item label="за замовчуванням" value="за замовчуванням" />
            <Picker.Item label="за назвою" value="за назвою" />
            <Picker.Item label="за датою" value="за датою" />
          </Picker>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#111",
    padding: 10,
    alignItems: "center",
  },
  titleWrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontFamily: "Ukrainian-Bold",
    color: "#111",
    fontSize: 20,
  },

  form: {
    fontFamily: "Ukrainian-Bold",
    display: "flex",
    gap: 20,
    marginTop: 30,
    marginHorizontal: 30,
  },
  formBlock: {
    // display: "contents",
    flex: 1,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  label: {
    fontFamily: "Ukrainian-Regular",
    color: "#111",
    fontSize: 20,
  },
  bold: {
    fontFamily: "Ukrainian-Bold",
  },
  input: {
    borderWidth: 2,
    borderColor: "#111",
    height: 50,
    borderRadius: 25,
    fontSize: 20,
    fontFamily: "Ukrainian-Regular",
    color: "#222",
    width: 270,
  },
  picker: {},
  // btnTxt: {
  //   fontFamily: "Ukrainian-Regular",
  //   color: "#eee",
  //   fontSize: 20,
  // },
  logo: {
    width: 150,
  },
  searchBtn: {
    width: 50,
    height: 50,
  },
});
