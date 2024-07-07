import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
	const [fontsLoaded, error] = useFonts({
		"Outfit-Black": require("../assets/fonts/Outfit-Black.ttf"),
		"Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
		"Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
		"Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
		"Outfit-SemiBold": require("../assets/fonts/Outfit-SemiBold.ttf"),
		"Outfit-Thin": require("../assets/fonts/Outfit-Thin.ttf"),
	});

	useEffect(() => {
		if (error) throw error;
	}, [fontsLoaded, error]);

	if (!fontsLoaded) {
		return null;
	}

	if (!fontsLoaded && !error) {
		return null;
	}
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
		</Stack>
	);
}
