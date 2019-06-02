/* eslint-disable no-console */
var fs = require('fs');
var ghpages = require('gh-pages');

const folder = '.docz/dist';

fs.writeFile(folder + '/CNAME', 'unity.clarityhub.io', function (err) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	ghpages.publish(folder, function (err) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
        
		console.log('Success');
	});
});