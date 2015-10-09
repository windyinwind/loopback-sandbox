var assert = require('assert');
var server = require('../server/server.js');
var Contact = server.models.contact;
describe('/contact',function(){
    
    describe('#findById',function(){
        it('should fetch opportunities without error',function(done){
            //set id to contact id to be test in db
            var id = 'id to be test';
            Contact.findById(id,{
                fields: {id: true},
                include:{
                    relation:'opportunities',
                    scope:{
                         fields: ['id','name']
                    }
                }
            },function(err, result){
                if(err) throw err;
                done();
            });

        });
    });
});


