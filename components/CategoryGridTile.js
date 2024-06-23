import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: "grey" }}
        style={styles.pressableContainer}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.textContainer}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  rootContainer: {
    
    borderColor: "black",
    borderWidth: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "yellow",
    borderWidth: 1,
    borderRadius:6,
  },
  pressableContainer: {
    height: 100,
    width: 100,
    margin: 8,
    borderColor: "black",
    borderWidth: 1,
  },
  textContainer: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
