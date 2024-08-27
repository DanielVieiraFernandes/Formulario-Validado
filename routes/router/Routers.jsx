import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../login/Login";
import { Cadastro } from "../cadastro/Cadastro";
import { Home } from "../home/Home";
const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="cadastro" component={Cadastro} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}
