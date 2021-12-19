# eSamudaay-Assignment
The API will take as input items ordered, delivery distance, and offer applied. The response is the total order value.

Instructions to run the code: 

1.Using Terminal set up the application server by typing node app.js or nodemon app.s

2.Open Postman and add raw data(input of API) in json format and make a post request on the required url (As in this case it runs locally therefore, url is https://localhost:3000/orders)

3.As an API response total order value is printed on postman client in JSON.

Modules Used:

The Node Js Framwork used in buiding this is Express js, 

Data is stored in mongodb database(here named orderdb) as in this case connection is provided through mongoose.

Body Parser is also used here to recieve the data from postman into server.


Example 1(Offer type: DELIVERY):
 
 INPUT:
 
![2021-12-19](https://user-images.githubusercontent.com/94848705/146681925-0c2cdfad-2bab-495f-8d99-87fd6a621bd2.png)


 API RESPONSE:
 
![2021-12-19 (1)](https://user-images.githubusercontent.com/94848705/146681644-49e1caa4-7f07-4a04-a6d9-88165fdef16d.png)


Example 2(Offer type: FLAT and offer value: 1000):

INPUT: 

![2021-12-19 (2)](https://user-images.githubusercontent.com/94848705/146681790-116168cd-b7da-4ae0-a7dd-1349ed197c8b.png)

API RESPONSE:

![2021-12-19 (3)](https://user-images.githubusercontent.com/94848705/146681820-712ff762-7c6b-4856-a97e-6ff0a96673d4.png)


Example 3(No offer Applied):

INPUT:

![2021-12-19 (4)](https://user-images.githubusercontent.com/94848705/146681882-051c9be7-d230-427b-b477-eb16a0a25a60.png)

API RESPONSE:

![2021-12-19 (5)](https://user-images.githubusercontent.com/94848705/146681892-1735b9df-dee8-4327-a3a6-e59e3f7da32f.png)


