import React from 'react';
import { 
  TextInput, 
  View, 
  TextInputProps, 
  StyleSheet, 
  Platform,
  Text 
} from 'react-native';

interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
  error?: string;
  containerStyle?: object;
}

export function Input({ 
  icon, 
  error, 
  containerStyle,
  ...props 
}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[
        styles.inputContainer, 
        error ? styles.inputContainerError : null,
        props.editable === false ? styles.inputContainerDisabled : null
      ]}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          style={[
            styles.input,
            props.editable === false ? styles.inputDisabled : null
          ]}
          placeholderTextColor="#9CA3AF"
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB', // gray-200
    borderRadius: 5, // rounded-full
    paddingHorizontal: 16, // px-4
    paddingVertical: 12, // py-3
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  inputContainerError: {
    borderColor: '#EF4444', // red-500
  },
  inputContainerDisabled: {
    backgroundColor: '#F3F4F6', // gray-100
    borderColor: '#E5E7EB', // gray-200
  },
  iconContainer: {
    marginRight: 8, // mr-2
  },
  input: {
    flex: 1, // flex-1
    fontSize: 16, // text-base
    color: '#1F2937', // text-gray-800
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    paddingVertical: 0, // Fix for Android
  },
  inputDisabled: {
    color: '#9CA3AF', // gray-400
  },
  errorText: {
    color: '#EF4444', // red-500
    fontSize: 12,
    marginTop: 4,
    marginLeft: 8,
  },
});