'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "poolhost.com",
		api_url : 'https://api.poolhost.com',
		api_refresh_interval: 2000,
		app_update_interval: 30*60000
	};
});
