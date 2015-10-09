var assert = require('assert');
var server = require('../server/server.js');
var Contact = server.models.contact;
describe('/contact',function(){
    
    describe('#findById',function(){
        it('should fetch opportunities without error',function(done){
            //var id = 'b735b6a1-7d23-5472-56f7-5063eec7e4a0';
            var id = 'id to test';
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


