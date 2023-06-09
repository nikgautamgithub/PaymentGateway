const express = require('express');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());

let instance = new Razorpay({
    key_id: 'rzp_test_DNmKMyeVTLZyts',
    key_secret: '0KBRvhwCIA35BUE33gydblqO'
});

app.post('/', (req, res) => {
    console.log("Create orderID request", JSON.stringify(req.body),"liuytr");
    instance.orders.create(
        {
            amount: Number(req.body.amount),
            currency: "INR",
            receipt: "receipt#1",
            notes: {
                key1: "value3",
                key2: "value2"
            }
        },
        (err, order) => {
            console.log(order,"ordrehv");
            res.send(order);
            console.log(err,"error");
        }
    );
    console.log(JSON.stringify(res.body),"res.body");
});

app.listen(process.env.port || 9000, () => {
    console.log('Listening for requests from port 9000...');
});