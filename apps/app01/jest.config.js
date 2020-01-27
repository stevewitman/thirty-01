module.exports = {
  name: 'app01',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app01',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
