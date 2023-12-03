#!/usr/bin/node

const express = require('express');
const AppController = require('../controllers/AppController');
const UsersController = require('../controllers/UsersController');
const AuthController = require('../controllers/AuthController'); 
const FilesController = require('../controllers/FilesController');

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew);
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);
router.get('/users/me', AuthController.getMe); 

router.post('/files', FilesController.postUpload);
router.get('/files/:id', xTokenAuthenticate, FilesController.getShow);
router.get('/files', xTokenAuthenticate, FilesController.getIndex);
router.put('/files/:id/publish', xTokenAuthenticate, FilesController.putPublish);
router.put('/files/:id/unpublish', xTokenAuthenticate, FilesController.putUnpublish);
router.get('/files/:id/data', FilesController.getFile);

module.exports = router;