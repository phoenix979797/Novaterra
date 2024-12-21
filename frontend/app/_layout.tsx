import {
  useFonts,
  InterTight_100Thin,
  InterTight_200ExtraLight,
  InterTight_300Light,
  InterTight_400Regular,
  InterTight_500Medium,
  InterTight_600SemiBold,
  InterTight_700Bold,
  InterTight_800ExtraBold,
  InterTight_900Black,
  InterTight_100Thin_Italic,
  InterTight_200ExtraLight_Italic,
  InterTight_300Light_Italic,
  InterTight_400Regular_Italic,
  InterTight_500Medium_Italic,
  InterTight_600SemiBold_Italic,
  InterTight_700Bold_Italic,
  InterTight_800ExtraBold_Italic,
  InterTight_900Black_Italic,
} from "@expo-google-fonts/inter-tight";
import { SplashScreen, Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React from "react";
import { ImageBackground, Platform } from "react-native";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

import { Setting, StackHeader } from "@/lib";

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from "expo-router";

// Ensure that reloading on `/modal` keeps a back button present.
export const unstable_settings = { initialRouteName: "(tabs)" };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    InterTight_100Thin,
    InterTight_200ExtraLight,
    InterTight_300Light,
    InterTight_400Regular,
    InterTight_500Medium,
    InterTight_600SemiBold,
    InterTight_700Bold,
    InterTight_800ExtraBold,
    InterTight_900Black,
    InterTight_100Thin_Italic,
    InterTight_200ExtraLight_Italic,
    InterTight_300Light_Italic,
    InterTight_400Regular_Italic,
    InterTight_500Medium_Italic,
    InterTight_600SemiBold_Italic,
    InterTight_700Bold_Italic,
    InterTight_800ExtraBold_Italic,
    InterTight_900Black_Italic,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  React.useEffect(() => {
    if (error) throw error;
  }, [error]);

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
};

const RootLayoutNav = () => {
  const [settings, setSettings] = React.useState<Setting>({});

  // Load settings from the device
  React.useEffect(() => {
    if (Platform.OS !== "web") {
      SecureStore.getItemAsync("settings").then((result) => {
        if (result === null) {
          SecureStore.setItemAsync("settings", JSON.stringify(settings)).then(
            (res) => console.log(res)
          );
        }

        setSettings(JSON.parse(result ?? JSON.stringify(settings)));
      });
    } else {
      setSettings({ ...settings });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider
      value={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "transparent",
        },
      }}
    >
      <ImageBackground
        source={require("@/assets/images/background.png")}
        resizeMode="stretch"
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Stack
          screenOptions={{
            animation: "slide_from_bottom",
            header: (props) => (
              <StackHeader navProps={props} children={undefined} />
            ),
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, animation: "slide_from_bottom" }}
          />
        </Stack>
      </ImageBackground>
    </ThemeProvider>
  );
};

export default RootLayout;
