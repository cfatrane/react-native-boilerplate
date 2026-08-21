import React from "react";
import type { AppStateStatus } from "react-native";
import { Platform } from "react-native";

import {
  focusManager,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Stack } from "expo-router/stack";

import { useAppState } from "@/src/hooks/useAppState";
import { useOnlineManager } from "@/src/hooks/useOnlineManager";

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

const queryClient = new QueryClient();

const RootLayout = () => {
  useOnlineManager();
  useAppState(onAppStateChange);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
};

export default RootLayout;
