const express = require('express');
const apiRouter = express.Router();
const courselib = require('../lib/courselib');
const regislib = require('../lib/reglib');

apiRouter.get('/crud/get',courselib.getall);
apiRouter.post('/crud/post',courselib.addnew);
apiRouter.delete('/crud/del/:id',courselib.deleteit);
apiRouter.put('/crud/put/:id', courselib.update);
apiRouter.post('/reg/post',regislib.addnew);
apiRouter.post('/login/post',regislib.containornot);


module.exports = apiRouter;