const express = require('express');
const path = require('path'); //importing path package
const csrf = require('csurf');
const expressSession = require('express-session');


const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const createSessionConfig = require('./config/session');
const checkAuthStatusMiddleware = require('./middlewares/check-auth');
const protectRoutesMiddleware = require('./middlewares/protect-routes');
const cartMiddleware = require('./middlewares/cart');
const notFoundMiddleware = require('./middlewares/not-found');


const authRoutes = require('./routes/auth.routes'); //importing functions of auth.routes.js functions 
const productsRoutes = require('./routes/products.routes');
const baseRoutes = require('./routes/base.routes');
const adminRoutes = require('./routes/admin.routes');
const cartRoutes = require('./routes/cart.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

app.set('view engine','ejs'); // we are using ejs files or set up views
app.set('views',path.join(__dirname,'views')); // where to find views folder

app.use(express.static('public')); // serving public folder statically which contain css files. now all content in public folder can be requested by visitors
app.use('/products/assets', express.static('product-data'));
app.use(express.urlencoded({extended: false }));
app.use(express.json());

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());

app.use(cartMiddleware);
app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

app.use(baseRoutes); // its a middleware that will be triggered for any incoming request
app.use(authRoutes);
app.use(productsRoutes);
app.use('/cart',cartRoutes);
//app.use(protectRoutesMiddleware);
app.use('/orders',protectRoutesMiddleware,ordersRoutes);
app.use('/admin', protectRoutesMiddleware ,adminRoutes);

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);

db.connectTodatabase()
.then(function() {
    app.listen(3000);
}).catch(function(error) {
    console.log('Failed to connect to database');
    console.log(error);
}); // this yield a promise bcoz its a async function in database.js
