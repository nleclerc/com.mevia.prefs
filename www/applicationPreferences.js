var exec = require('cordova/exec');
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
var applicationPreferences = new ApplicationPreferences();
module.exports = applicationPreferences;
