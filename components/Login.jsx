import { View, Text, Image } from "react-native";
import React from "react";

const Login = () => {
	return (
		<View>
			<Image
				source={require("../assets/images/login.jpg")}
				className="w-full h-[30%]"
			/>
			<View className="bg-white mt-[-20px] h-full rounded-t-3xl p-4">
				<Text className="text-2xl font-obold text-center">
					AI Travel Planner
				</Text>
			</View>
		</View>
	);
};

export default Login;
