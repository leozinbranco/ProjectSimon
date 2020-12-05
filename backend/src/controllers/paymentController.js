const MercadoPago = require('mercadopago');

const getFullUrl = (req) => {
    const url = req.protocol + '://' + req.get('host');
    console.log(url)
    return url;
}


module.exports = {
    async checkout(req, res) {

        console.log(process.env)
        MercadoPago.configure({
            sandbox: process.env.SANDBOX == 'true' ? true : false,
            access_token: process.env.MP_ACCESS_TOKEN
        });

        const { id, email, description, amount } = req.params;

        //Create purchase item object template
        const purchaseOrder = {
            items: [
                item = {
                    id: id,
                    title: description,
                    description: description,
                    quantity: 1,
                    currency_id: 'BRL',
                    unit_price: parseFloat(amount)
                }
            ],
            payer: {
                email: email
            },
            auto_return: "all",
            external_reference: id,
            back_urls: {
                success: getFullUrl(req) + "/payments/success",
                pending: getFullUrl(req) + "/payments/pending",
                failure: getFullUrl(req) + "/payments/failure",
            }
        }

        //Generate init_point to checkout
        try {
            const preference = await MercadoPago.preferences.create(purchaseOrder);
            console.log(preference.body)
            return res.redirect(`${preference.body.init_point}`);
        } catch (err) {
            return res.send(err.message);
        }
    },
    async preApproval(req, res) {
        MercadoPago.configure({
            sandbox: process.env.SANDBOX == 'true' ? true : false,
            access_token: process.env.MP_ACCESS_TOKEN
        });
        
        var preapprovalPayment = {
            payer_email: 'test_user_3931694@testuser.com',
            back_url: 'http://www.google.com',
            reason: 'Monthly subscription to premium package',
            external_reference: 'OP-1234',
            auto_recurring: {
              frequency: 1,
              frequency_type: 'months',
              transaction_amount: 60,
              currency_id: 'BRL',
              start_date: MercadoPago.utils.date.now().add(1).toString(),
              end_date: MercadoPago.utils.date.now().add(3).toString()
            }
          };
        

          MercadoPago.preapproval.create(preapprovalPayment).then((data) => {
              console.log(data)
              res.json(data)
           
          }).catch(function (error) {
            console.log(error)

          });

    },
    

}