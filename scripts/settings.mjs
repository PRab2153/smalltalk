import { MODULE } from "./const.mjs";

export class settings {

  static init() {
    settings._settings();
  };
  
  static _settings() {
    game.settings.register(MODULE, "blueChecks", {
      name: "SCENEMESSAGE.Settings.BlueChecksName",
      hint: "SCENEMESSAGE.Settings.BlueChecksHint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      requiresReload: true,
      onChange: false
    });

    game.settings.register(MODULE, "hidePortrait", {
      name: "SCENEMESSAGE.Settings.HidePortraitName",
      hint: "SCENEMESSAGE.Settings.HidePortraitHint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      requiresReload: true,
      onChange: false
    });
  };
};    