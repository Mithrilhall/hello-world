var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var appEnvironmentConfigs = {
    getIndexConfig: function ( env ) {
        var config = {};
        config.emberName = 'changeset-scope';
        if ( env === 'development' ) {
            config.emberBaseUrl = "http://epe.azurewebsites.net/";
            config.emberConfig = "%7B%22modulePrefix%22%3A%22changeset-scope%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22/%22%2C%22locationType%22%3A%22auto%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%7D%2C%22APP%22%3A%7B%22name%22%3A%22changeset-scope%22%2C%22version%22%3A%220.0.0+1a24f994%22%7D%2C%22contentSecurityPolicy%22%3A%7B%22default-src%22%3A%22%27none%27%22%2C%22script-src%22%3A%22%27self%27%20%27unsafe-inline%27%20%27unsafe-eval%27%22%2C%22font-src%22%3A%22%27self%27%20http%3A//fonts.gstatic.com%20https%3A//fonts.gstatic.com%22%2C%22connect-src%22%3A%22%27self%27%22%2C%22img-src%22%3A%22data%3A%20%27self%27%20https%3A//maps.googleapis.com%20https%3A//aspenapps.blob.core.windows.net%22%2C%22style-src%22%3A%22%27self%27%20%27unsafe-inline%27%20http%3A//fonts.googleapis.com%20https%3A//fonts.googleapis.com%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D"
        } else {
            config.emberBaseUrl = "http://epe.azurewebsites.net/";
            config.emberConfig = "%7B%22modulePrefix%22%3A%22changeset-scope%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22/%22%2C%22locationType%22%3A%22auto%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%7D%2C%22APP%22%3A%7B%22name%22%3A%22changeset-scope%22%2C%22version%22%3A%220.0.0+1a24f994%22%7D%2C%22contentSecurityPolicy%22%3A%7B%22default-src%22%3A%22%27none%27%22%2C%22script-src%22%3A%22%27self%27%20%27unsafe-inline%27%20%27unsafe-eval%27%22%2C%22font-src%22%3A%22%27self%27%20http%3A//fonts.gstatic.com%20https%3A//fonts.gstatic.com%22%2C%22connect-src%22%3A%22%27self%27%22%2C%22img-src%22%3A%22data%3A%20%27self%27%20https%3A//maps.googleapis.com%20https%3A//aspenapps.blob.core.windows.net%22%2C%22style-src%22%3A%22%27self%27%20%27unsafe-inline%27%20http%3A//fonts.googleapis.com%20https%3A//fonts.googleapis.com%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D";
        }
        return config;
    },
}


router.get( '/', function ( req, res ) {
    res.render( 'index', {
        config: appEnvironmentConfigs.getIndexConfig( req.app.get( 'env' ) ),
        user: req.user
    } );
} );

module.exports = router;
