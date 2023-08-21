import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from './pages/Products';
import Detail from "./pages/Detail";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ProductsPage" component={Products}
                    options={{
                        title: "Dükkan",
                        headerStyle: { backgroundColor: '#bdb76b' },
                        headerTitleStyle: { color: 'black' },

                    }} />
                <Stack.Screen name="DetailPage" component={Detail} options={{
                    title: "Dükkan",
                    headerStyle: { backgroundColor: '#bdb76b' },
                    headerTitleStyle: { color: 'black' },
                    headerTintColor: 'black',
                }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Router; 
