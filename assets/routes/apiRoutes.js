var path = require('path');



module.exports = function(app) {
    var amazonKeys =require('../keys.js');
    const {OperationHelper} = require('apac');
     console.log(amazonKeys);
    
    const opHelper= new OperationHelper({
        awsId:'AKIAJXVDU57RIXD43QDA',
        awsSecret:'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',
        assocId:'mmacdonald1-20',
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


