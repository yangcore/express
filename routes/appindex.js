
module.exports = function (app) {
    var index = require('../routes/index'),
        myaccount = require('./myaccount'),
        routes = require('./routes'),
        strateryCtrl = require('./strateryCtrl'),
        bidLogCtrl = require('./bidLogCtrl'),
        zts = require('./ztCtr'),
        register=require('./register'),
        login=require('./login');
        app.use('/', index);
        app.use('/myaccount', myaccount);
        app.use('/homeData', routes);
        app.use('/strateryCtrl', strateryCtrl);
        app.use('/routes', routes);
        app.use('/bidLogCtrl', bidLogCtrl);
        app.use('/zts', zts);
        app.use('/register', register);
        app.use('/login', login);
}