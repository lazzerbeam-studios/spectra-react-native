const path = require('path');
const minimist = require('minimist');
const { Storage } = require('@google-cloud/storage');

const args = minimist(process.argv.slice(2));
const env = args.env;

if (!env || (env !== 'prod' && env !== 'stag')) {
  throw new Error('Invalid environment. (prod or stag).');
}

const folderPath = 'www/browser';

const gcpConfig = {
  projectId: '[project]-gcp',
  keyFilename: path.join(__dirname, 'gcp.json'),
};

const bucketNames = {
  stag: '[project]-app-stag',
  prod: '[project]-app-prod',
};

const storage = new Storage(gcpConfig);
const bucket = storage.bucket(bucketNames[env]);

module.exports = {
  bucket,
  folderPath,
};
