import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.contos.app',
  appName: 'contos-do-aventureiro',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
