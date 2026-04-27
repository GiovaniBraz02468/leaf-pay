import "i18next";
import enCommon from "@/shared/locales/en/common.json";
import enAuth from "@/shared/locales/en/auth.json";
import enInitial from "@/shared/locales/en/initial.json";
import enPasswordReset from "@/shared/locales/en/passwordReset.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof enCommon;
      auth: typeof enAuth;
      initial: typeof enInitial;
      passwordReset: typeof enPasswordReset;
    };
  }
}
