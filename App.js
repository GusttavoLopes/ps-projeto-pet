import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  AuthProvider,
  MedicineProvider,
  PaymentProvider,
  PetProvider
} from './contexts';
import Routes from './routes';

export default function App() {
  useEffect(() => {
    // fixa a orientação da tela em portrait, no IOS precisa ser PORTRAIT_UP
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <NavigationContainer>
        <AuthProvider>
          <PetProvider>
            <PaymentProvider>
              <MedicineProvider>
                {/*  tudo que fica dentro desse provider será repassado no children */}
                <Routes />
              </MedicineProvider>
            </PaymentProvider>
          </PetProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
