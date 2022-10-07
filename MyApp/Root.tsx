import React from 'react';
import {GeneraslScreen} from './src/features/screen1/container';
import {theme} from './theme';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaView} from 'react-native';
const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <GeneraslScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default Root;
