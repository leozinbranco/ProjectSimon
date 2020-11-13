const axios = require('axios');
const js2xmlparser = require("js2xmlparser");
//import axios from 'axios';



module.exports = {


    async connect(request, response) {
        try {
            /*axios.create({
                                baseURL: '',
                    });
                    var obj = {
                            
                            "preApproval":{
                                "name":"MATHEUS",
                                "reference":"TESTEREF",
                                "charge": "AUTO",
                                "period": "MONTHLY",
                                "expiration": {
                                    "value": 2000,
                                    "unit": "1 YEAR", 
                                },
                            },
                        
                    };

                    var options = {
                        "declaration":{
                            "encoding" :"ISO-8859-1",
                            "standalone" : "yes",
                        },
                        
                        
                    }*/
            /*const response = await  axios({
                    
                    

                
                });*/
            //const body = js2xmlparser.parse("preApprovalRequest", obj, options);
            console.log(request.body);



            const post = await axios.post(`https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/request/`, request.body, {
                params: {
                    email: "cc19377@g.unicamp.br",
                    token: "NAO",
                },
                headers: {
                    'Content-Type': 'application/json;charset=ISO-8859-1',
                    'Accept': 'application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1'

                },
            });




            const ret = {
                status: post.status,
                statusText: post.statusText,
                code: post.data.code,
                date: post.data.date,
            }


            return response.json(ret);
        }
        catch (err) {
            console.error(err);
            //console.error(JSON.stringify(err.response.data.errors));

        }

    },

}

