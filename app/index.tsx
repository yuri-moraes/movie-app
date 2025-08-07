import "./global.css"
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-primary text-5xl font-bold">Welcome!</Text>
    </View>
  );
}
