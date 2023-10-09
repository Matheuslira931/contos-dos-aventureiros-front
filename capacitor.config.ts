import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'contos_dos_avententureiros',
  webDir: 'dist/contos_dos_avententureiros',
  server: {
    androidScheme: 'https'
  }
};

export default config;
