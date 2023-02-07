const Razorpay = require('razorpay')
module.exports = {
    CreateOrder: (req, res) => {
        var OrderID;
        var instance = new Razorpay({
            key_id: 'rzp_test_o43dd4hB1vwPD5',
            key_secret: 'rZX0i790Bi1mv0RffkamMW1g'
        })
        var options = {
            amount: req.body.amount,
            receipt: req.body.receipt,
            currency: "INR",
            payment_capture: '0'
        }
        instance.orders.create(options, function (err, order) {
            res.send(order)
        })
    }
}