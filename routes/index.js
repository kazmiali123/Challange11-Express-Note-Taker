const router = require('express').Router();


const notesApiRouter = require('./notes');

router.use('/notes', notesApiRouter);



module.exports = router;

