	var exec = require("cordova/exec");
	function applicationPreferences() {};
	
	var applicationPreferencesError = function(code, message) {
	    this.code = code || null;
	    this.message = message || '';
	};
	
	applicationPreferencesError.NO_PROPERTY = 0;
	applicationPreferencesError.NO_PREFERENCE_ACTIVITY = 1;
	
	applicationPreferences.prototype.get = function(key,success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","get",[key]);
	};
	
	applicationPreferences.prototype.set = function(key,value,success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","set",[key, value]);
	};
	
	applicationPreferences.prototype.load = function(success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","load",[]);    
	};
	
	applicationPreferences.prototype.show = function(activity,success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","show",[activity]);    
	};
	
	applicationPreferences.prototype.clear = function(success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","clear", []);    
	};
	
	applicationPreferences.prototype.remove = function(keyToRemove, success,fail) {
	    cordova.exec(success,fail,"applicationPreferences","remove", [keyToRemove]);    
	};

	var applicationPreferences = new applicationPreferences();
	module.exports = appPreferences;
