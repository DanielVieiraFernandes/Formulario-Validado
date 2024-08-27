import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerTextInput } from "../../components/Input";
import { useNavigation } from "@react-navigation/native";

const schema = z.object({
  email: z.string().email(`Email inválido!`),
  senha: z.string().min(6, `A senha deve conter no mínimo seis caracteres`),
});

export const Login = () => {
  const Navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  const onSubmit = () => {
    Navigation.navigate("home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textLogin}>Faça o login com a sua conta</Text>
      <View style={styles.containerInput}>
        <ControllerTextInput
          control={control}
          name="email"
          placeholder="Digite seu email"
          nameIcon="email"
        />
        <ControllerTextInput
          control={control}
          name="senha"
          placeholder="Digite sua senha"
          nameIcon="password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.bttLogin}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={{ fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate("cadastro")}>
          <Text style={{ color: "#fff" }}>
            Não tem uma conta?
            <Text style={{ color: "#c6d400" }}>
              {" "}
              se cadastre clicando aqui
            </Text>{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
