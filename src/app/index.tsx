import { View, Text } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-black px-6">
      <Text className="text-center text-3xl font-extrabold leading-tight text-white">
        We are going all out with{" "}
        <Text className="text-red-500">REACT NATIVE</Text>
      </Text>

      <Text className="text-sm font-bold uppercase tracking-widest text-purple-500">
        React Native Rocks
      </Text>

      <Text className="mt-4 text-5xl font-black text-white">
        P-Watch
      </Text>
    </View>
  );
}