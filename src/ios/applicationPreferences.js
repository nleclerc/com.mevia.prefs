function ApplicationPreferences() { };
ApplicationPreferences.prototype.get = function(key, successFn, errorFn) {
	exec(successFn, errorFn, 'applicationPreferences', 'getSetting', [key]);
};
ApplicationPreferences.prototype.set = function(key,value, successFn, errorFn) {
	exec(successFn, errorFn, 'applicationPreferences', 'setSetting', [key,value]);
};
ApplicationPreferences.prototype.clear = function(key, successFn, errorFn) {
    exec(successFn, errorFn, 'applicationPreferences', 'clearSetting', [key]);
};
ApplicationPreferences.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.applicationPreferences = new ApplicationPreferences();
  return window.plugins.applicationPreferences;
};

cordova.addConstructor(ApplicationPreferences.install);