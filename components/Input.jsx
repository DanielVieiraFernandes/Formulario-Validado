import React from "react";
import { TextInput, View, Text } from "react-native";
import { Controller } from "react-hook-form";
import { styles } from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
export const ControllerTextInput = ({
  control,
  name,
  rules,
  nameIcon,
  ...textInputProps
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={[styles.TextInput, { width: "80%", flexDirection: "row", alignItems: "center", gap: 8 }]}>
          {nameIcon === 'person' && (
              <Ionicons name="person" size={24} color="white" />
            )}
            {nameIcon === 'email' && (
              <MaterialIcons name="email" size={24} color="white" />
            )}{nameIcon === 'password' && (
              <Entypo name="lock" size={24} color="white" />
            )}
          <TextInput
            style={{color:"white"}}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...textInputProps}
            placeholderTextColor="white"
          />
          {error && (
            <View style={{ width: "80%", alignItems: 'flex-start'}}>
              <Text style={{ color: "red"}}>{error.message}</Text>
            </View>
          )}
        </View>
      )}
    />
  );
};
