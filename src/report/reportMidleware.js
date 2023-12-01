/* eslint-disable linebreak-style */
// dependency multer
// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require('multer');

const { diskStorage, filesFilter } = require('./reportService');

const uploadFile = multer({ storage: diskStorage, fileFilter: filesFilter, limits: 1024 * 1024 }).single('file');

module.exports = uploadFile;
