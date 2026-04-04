import 'i18next';
import enCommon from '@/shared/locales/en/common.json';
import enAuth from '@/shared/locales/en/auth.json';
import enMovimentation from '@/shared/locales/en/movimentations.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof enCommon;
      auth: typeof enAuth;
      movimentations: typeof enMovimentation;
    };
  }
}