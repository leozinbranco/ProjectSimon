const axios = require('axios');
//import axios from 'axios';


module.exports = {

    //0f3941fc-c8f0-4d10-a1e9-79dc161e84bf0c5f08964c89a69286c9d71e1c31ba56c211-fcce-4256-bd18-b35343c8788d  <- token
    async connect(request, response){
        try{
               /* axios.create({
                                    baseURL: '',
                        });*/

                        const get = await axios.post('https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/request/?', {
                            email: 'cc19377@g.unicamp.br',
                            token: '0f3941fc-c8f0-4d10-a1e9-79dc161e84bf0c5f08964c89a69286c9d71e1c31ba56c211-fcce-4256-bd18-b35343c8788d',
                            data: {
                                reference:'TESTEREF',
                                preApproval:{
                                    name:'MATHEUS',
                                    charge: 'AUTO',
                                    period: 'MONTHLY',
                                },
                                expiration: {
                                    value: 2000,
                                    unit: '1 YEAR', 
                                },
                            },
                        });
                                
                        return response.json(get);
        }
        catch(err)
        {
            console.error(err);
            
        }
        
    },
    
}

