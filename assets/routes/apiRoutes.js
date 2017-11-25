var path = require('path');

const {OperationHelper} = require('apac');

module.exports = function(app) {
    var amazonKeys =require('../keys.js');
    
    const opHelper= new OperationHelper({
        awsId:amazonKeys.AccessId,
        awsSecret:amazonKeys.Secret,
        assocId:amazonKeys.Tag,
        locale:'US'
    });
    
    app.get('/', function(req,res,next){
           opHelper.execute('ItemSearch', {
          'SearchIndex': 'Electronics',
          'Keywords': 'Lenovo',
          'ResponseGroup': 'ItemAttributes,Offers'
        }).then((response) => {
           console.log("Results object: ", response.result);
           res.send(response.result);
           console.log("Raw response body: ", response.responseBody);
        }).catch((err) => {
            console.error("Something went wrong! ", err);
        });
//          res.render('index' { title: 'Express'});
        });
    };


