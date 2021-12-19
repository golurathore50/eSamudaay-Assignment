const express=require("express");
const bodyparser=require("body-parser");
const mongoose=require("mongoose");
const app=express();
app.use(bodyparser.json());
mongoose.connect("mongodb://localhost:27017/orderDB");
const itemschema=mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number
},{_id:false})
const orderschema={
    order_items: [itemschema],
    distance: Number,
    offer: {
    offer_type: String,
    offer_val: Number
  }
}
const Order=mongoose.model("Order",orderschema);
app.post("/orders",function(req,res){
    const newOrder=new Order(req.body);
    newOrder.save(function(err){
        if(err){
            res.send(err);
        }
        else{
           var order_total=0;
            newOrder.order_items.forEach(element => {
               order_total+=element.price*element.quantity;
            });
          var del;
          if(newOrder.distance<=10000){
               del=5000;
                order_total+=5000;
            }
           else if(newOrder.distance>10000 && newOrder.distance<=20000){
                del=10000;
               order_total+=10000;
           }
           else if(newOrder.distance>20000 && newOrder.distance<=50000){
                del=50000;
               order_total+=50000;
           }
           else if(newOrder.distance>50000 && newOrder.distance<500000){
               del=100000;
               order_total+=100000;
           }
           else{
               res.send("Sorry Order is not deliverable at your location");
           }
           if(newOrder.offer.offer_type){
               if(newOrder.offer.offer_type === "FLAT"){
                   var discount=Math.min(order_total,newOrder.offer.offer_val);
                   order_total-=discount;
               }
              else if(newOrder.offer.offer_type === "DELIVERY"){
                   order_total-=del;
               }
           }
           res.send(JSON.stringify({'order_total':order_total}));     
        }
    });
 })
app.listen(3000,function(req,res){
    console.log("Server is running on port 3000");
})