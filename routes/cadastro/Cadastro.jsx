import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { date, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerTextInput } from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import { ControlledDate } from "./../../components/DateTimePicker";
import Ionicons from '@expo/vector-icons/Ionicons';
const minDate = new Date("1920-01-01");
const maxDate = new Date("2007-01-01");

const schema = z.object({
    nome: z.string().min(3, `O nome deve possuir mais de 3 caracteres`),
    email: z.string().email(`Email inválido!`),
    data: z
      .date({message: 'Selecione uma data!'})
      .min(minDate, { message: `A data deve ser posterior a ${minDate.toDateString()}` })
      .max(maxDate, { message: `A data deve ser anterior a ${maxDate.toDateString()}` }),
    senha: z.string().min(6, `A senha deve conter no mínimo seis caracteres`),
  });

export const Cadastro = () => {
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
      nome: "",
      data: null
    },
  });

  const onSubmit = () => {
    Navigation.navigate("home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textLogin}>Faça seu cadastro</Text>
      <View style={styles.containerInput}>
      <ControllerTextInput
          control={control}
          name="nome"
          placeholder="Digite seu nome"
          nameIcon="person"
        />
        <ControllerTextInput
          control={control}
          name="email"
          placeholder="Digite seu email"
          nameIcon="email"
        />
        <ControlledDate control={control} name="data"
        nameIcon="calendar" />
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
          <Text style={{ fontSize: 18 }}>Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate("login")}>
          <Text style={{ color: "#fff" }}>
            Já tem uma conta?
            <Text style={{ color: "#c6d400" }}>
              {" "}
              faça o login clicando aqui
            </Text>{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
