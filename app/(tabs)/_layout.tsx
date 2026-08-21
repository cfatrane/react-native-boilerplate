import { Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";

import React from "react";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: "gearshape", android: "settings", web: "settings" }}
              size={28}
              tintColor={color}
            />
          ),
        }}
      />

      {/* Refer to index,tsx */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: "house", android: "home", web: "home" }}
              size={28}
              tintColor={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: "person", android: "person", web: "person" }}
              size={28}
              tintColor={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
