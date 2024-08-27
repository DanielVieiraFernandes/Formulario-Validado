import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Controller } from "react-hook-form";
import { styles } from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';


export function ControlledDate({ control, name, rules, nameIcon }) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(null);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View
          style={{
            width: "100%",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={[styles.TextInput, { flexDirection: 'row', alignItems: 'center', width: '80%' }]}
            onPress={() => setShow(true)}
          >
            <Ionicons name="calendar" size={24} color="white" />
            <Text style={{marginLeft: 8,color: "#fff" }}>
              {value ? new Date(value).toDateString() : "Selecione uma data"}
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={value || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShow(false);
                if (selectedDate) {
                  setDate(selectedDate);
                  onChange(selectedDate);
                }
              }}
            />
          )}
          {error && (
            <View style={{ width: "80%", alignItems: "flex-start", flexDirection: "row" }}>
              <Text style={{ color: "red" }}>{error.message}</Text>
            </View>
          )}
        </View>
      )}
    />
  );
}
