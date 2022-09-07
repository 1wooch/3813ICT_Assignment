# 3813ICT Assignment Phase 1
--------------------------------
## Git

Git Address: https://github.com/1wooch/3813ICT_Assignment

Image of Git: 
![image](https://user-images.githubusercontent.com/51581298/188771030-0fadbeea-43cf-4fb1-89f1-1263c70ee0df.png)


Git repository contains 2 different folder 
one is "Back End" folder that contains all of the backend code and data for user,group,chanels.

The other folder is "Frontend/Assigment" folder. This folder contains all of the frontend code and css. Frontend contains typescript and Angular code. Inthe "src/app" folder all of the page contained.
There is 4 different pages.
+ Account
+ Group Admin 
+ Login 
+ Manage User page
+ app.component.html (Navbar)
![image](https://user-images.githubusercontent.com/51581298/188771669-f4eed2f9-edd5-40e6-989f-d6843c86f5e8.png)

# Frontend
---------------------------------------------------------
1. Login Page<br/>
![image](https://user-images.githubusercontent.com/51581298/188771861-d060c8fb-d4c8-4fa5-92b5-e26323688350.png)

Login page contains 2 diffferent input text box for Username(ID) and Password.
Password text box will be encrypted by "*".
By using navigation bar on the top user can move but they will not get a data from account page.
By pressing 'Log in' button user can submit their input password and username.
After that the login.component.ts will send input value to backend ('routes/login.js') via server.js.
If the username(ID) and password is found in "Data/users.json" file, then login.js will send back user detail such as 
### User Detail
+ username
+ email
+ age
+ role 
+ birthdate
+ pwd
 
In addition send data.ok which decide the login succes or not.
If the data.ok =true => login successfully.
If the data.ok = false=> login failed.

once the frontend (login.component.ts) received the data and data.ok=true then store user detail in localstorage and redirect to account page.
If data.ok=false then send alert and refresh the page.
------------------------------
### When login failed
![image](https://user-images.githubusercontent.com/51581298/188772661-47b55fd5-32c1-45f2-b092-fee6e36ddc5d.png)
------------------------------------
### When login success
![image](https://user-images.githubusercontent.com/51581298/188772766-a4e0562b-f92e-437b-ab58-06d9b17bb161.png)
------------------------------------
#### Local Storage
![image](https://user-images.githubusercontent.com/51581298/188822972-d869938c-a65f-4136-8f93-69563f9cb9dc.png)

--------------------------------------------------

2. Account Page<br/>

![image](https://user-images.githubusercontent.com/51581298/188777458-b3402ef7-03f5-43d5-af74-d43ed4884605.png)

Account page can change the user details.
+ UserName
+ BirthDate
+ Age
+ Email
+ Role 
+ Password
 <br/>
 As we can see on the page, the user data will display on the page so user can recognize what is their detail is.
 As the user logged in Navigation bar has changed.
 The user logged in is as "superadmin" so the "Manage User" has showned and because it is logged in the "Log out " button has displayed.

![image](https://user-images.githubusercontent.com/51581298/188779772-a5f46353-88c0-470d-9c82-2c5ab7898cae.png)
If the user doesn't fill every form then the popup message will show


![image](https://user-images.githubusercontent.com/51581298/188779902-23fe0540-2c90-43aa-981b-19eaa642d0e9.png)
If user enter all of the data then this message will popup and component.ts will change localstorage and data in backend server.

once the user click the button then the input data in each textbox will be send to backend server.
In backend server, they get all of the data and search the user information in user json file.
If they found oone then found=true and change the data and push it in json file list.
If they don't found then add new user in user list.
After that send true to frontend then alert user information has changed.
If the frontend receive false that means they couldn't find it so add as new user.
![image](https://user-images.githubusercontent.com/51581298/188782563-6cdbe10c-bb76-45bd-acd6-3b42d4702fcf.png)

---------------------------------------------

3. Manage User<br/>
Manage user page only access by navigation bar.
and Manage user navigation bar menu will only display for user who has superadmin role.
![image](https://user-images.githubusercontent.com/51581298/188783038-78577176-2ccf-47d1-8354-05322722d83d.png)

Once the user entered to this page, all of the user list will be display.
In addition admin can delete or add user by click the button next to user row or button above the list.

I used Modal to display "Add User" button.
![image](https://user-images.githubusercontent.com/51581298/188783600-bf05c230-c58d-4eba-aa04-5333822df1d3.png)

After user input all of the data then the data will be send to backend server and check whether the user already exist or not and if not add user in there.

![image](https://user-images.githubusercontent.com/51581298/188783910-6a4b1763-057e-44bc-a5c2-84ae003dc69b.png)
If user deleted the popup message will show up and list will be update.
Delete button will get the username from row and send it to deleteUser.js.
Once the delteUser.js got the data and search the user array row from users.json.
and rewrite the users.json and save it.

4. Manage Group<br/>
![image](https://user-images.githubusercontent.com/51581298/188785478-71ab8b83-9e3b-40a3-9d9f-f9af30ffab1c.png)

Once the user login as groupadmin role account, the managegroup menu will be displayed on navigation bar.

![image](https://user-images.githubusercontent.com/51581298/188828666-6246a652-9a53-413c-9dd2-be943dc99ad4.png)

When the page start the page will get the username and send it to backend server so the page can get the which group admin the user is.
By the group name we got the page will display what gorup manaer is.
After we get the groupname page will show all of the user in that group as list in table.
By clicking the check chanel groupmanager can see chich chanel the selected user currently in.
By clicking make admin button admin can make user into admin.


![image](https://user-images.githubusercontent.com/51581298/188793764-a7f53aa2-b3b2-4f4c-b967-b970d0efc3c1.png)

By clicking delete button admin can delete user from chanel.
![image](https://user-images.githubusercontent.com/51581298/188793880-4e9ef558-c532-4be1-bbbe-e7ab4adcde75.png)
By clicking the Add user button admin can add user in group.
The input user name will be go through addgroupmember.js and check whether the input user exist and if the user exist then user will be added on group if not the js file return false. Once the component.ts receive the result  from js file, then according to the result the page will alert "added" or "user not found".

[image](https://user-images.githubusercontent.com/51581298/188794563-15c9ac81-ebc7-490b-b11a-c8defc2355b2.png)
By clicking left dropdown box admin can choose user name in group.

![image](https://user-images.githubusercontent.com/51581298/188794848-59664bed-dbef-4f39-af86-4b93f5eca316.png)
By clicking right dropdown box admin can choose chanel name in group.

and once the Admin choose both option function AddUserInChanel in component.ts file will send the input data to addUserInChanel.js file.
addUserInChanel.js file will check whether the user already in chanel.
If user already in chanel send false 
else send true
If the component.ts file get true then alert "user added"
If file receive false then alert "user already exist in +selected chanel name".

5. Log out button.<br/>
Once the user click log out button the localstorage will be cleared and return to login page.


-----------------------------------------------------
# Backend
<br/>
Backend has 2 different big files. 
<br/>
One is Data folder that contain all the information of chanels,group and users as json format.
The other is routes file that contain all of the function as javascript file.

To start server side (backend) need to type 
+ node server.js

Once the frontend post the data then go to server.js and check which js file to use by using app.post on server.js.

after that go to each js file and execute the file with post value using req.body and return the value by using res.send.

Now This document go through each js file and how that works
e.g.:
    app.post('/login',require('./routes/login'));
    app.post('/loginafter',require('./routes/account'));
    app.post('/manageUser',require('./routes/manageUser'));
    app.post('/addUser',require('./routes/addUser'));
    app.post('/deleteUser',require('./routes/deleteUser'));
    app.post('/groupadminget',require('./routes/group-admin-get'));
    app.post('/getGroupMember',require('./routes/getGroupMember'));
    app.post('/deleteGroupMember',require('./routes/deletegroupmember'));
    app.post('/addGroupMember',require('./routes/addgroupmember'));
    app.post('/searchChenel',require('./routes/searchChenal'));
    app.post('/deleteCenel',require('./routes/deleteChanel'));
    app.post('/getChanel',require('./routes/getChanelList'));
    app.post('/addUserInChanel',require('./routes/addUserInChanel'));

1. Login 
<br/>
------------------------------------------------------
+ Input Value: UserName , User Password
-------------------------------------------------------
+ Output: Ok:boolean, email,pwd (password), birthdate, age, role, username
-------------------------------------------------------
+ explanation of function: 
    1. Read the users.json file and put the all of data in array.
    2. by using for loop search whether the entered username exist in array
    3. If the for loop find the user in array, then check whether the password is same
    4. if evertrhing matched then send user information and boolean to front end.
    5. if they don't find any then send false to front end.

------------------------------------------------------
------------------------------------------------------



2.  Account
<br/>
------------------------------------------------------
+ Input Value: age,birthdate,email,username,role,pwd
-------------------------------------------------------
+ Output: ok(boolean)
-------------------------------------------------------
+ explanation of function: 
    1. get a all of the new user information from frontend 
    2. Put all of the data in array
    3. By using for loop find where is the input user's information in array.
    4. splice that information and push new information in array.
    5. If javascript found the information then send true to frontend and 
       if not found then send false to frontend.

3. Manage User  
<br/>
------------------------------------------------------
+ Input Value: N/A (No Input)
-------------------------------------------------------
+ Output: userArray (Array of User information)
-------------------------------------------------------
+ explanation of function: 
    1. Read all of the data from users.json file
    2. Add all of the json information in array
    3. Send the array to frontend.
    
4.Add User  
<br/>
------------------------------------------------------
+ Input Value: username,pwd,email,age,birthdate,role
-------------------------------------------------------
+ Output: ok (boolean)
-------------------------------------------------------
+ explanation of function: 
    1. get all of the information from frontend.
    2. put all of the information in array.
    3. check whether the user already exist or not.
    4. if the user exist send false to frontemd/
    5. if the user doesn't exist then send treu and push the entered member information in user array.
    6. Write array in json file.


5. Delete User  
<br/>
------------------------------------------------------
+ Input Value (GET): username
-------------------------------------------------------
+ Output (POST): ok
-------------------------------------------------------
+ explanation of function: 
    1. GET username from frontend.
    2. check which row has the data of input user.
    3. if the loop find the user delete that array by using splice(i,1) and send true to frontend.
    4. if can't find user in arrray send false to frontend.
    5. write array in jsonfile and save it.
    
6. group-admin-get  
<br/>
------------------------------------------------------
+ Input Value (GET): username
-------------------------------------------------------
+ Output (POST): ok (boolean), groupname (string)
-------------------------------------------------------
+ explanation of function: 
    1. Get a username from frontend page.
    2. check whether the user is manageer or not. 
    3. if the user is manager send groupname that user is manager to frontend.
    4. if the user is not manager or no usere found send false to frontend.



7. Get Group Member
<br/>
------------------------------------------------------
+ Input Value (GET): groupname
-------------------------------------------------------
+ Output (POST): ok (boolean), groupname, userlist, managerlist, chanels
-------------------------------------------------------
+ explanation of function: 
    1. Get a groupname from group-admin-get.
    2. search the group data from group.json file.
    3. if the loop found the group then send groupname, userlist, managerlist, chanels and ok to frontend.
    4. if the loop doesn't found it send false to frontend.


8.Delete Group Member  
<br/>
------------------------------------------------------
+ Input Value (GET): username
-------------------------------------------------------
+ Output (POST): ok (boolean)
-------------------------------------------------------
+ explanation of function: 
    1. get a user name from frontend.
    2. by using for loop find where is the that user information in group.json
    3. by using splice delete that user name from group.json.
    4. if the user deleted send true to frontend.


9. Add group Member
<br/>
------------------------------------------------------
+ Input Value (GET): username, groupname
-------------------------------------------------------
+ Output (POST): ok(boolean)
-------------------------------------------------------
+ explanation of function: 
    1. get user and groupname from frontend.
    2. read group.json file and put all of the data in array.
    3. using for loop check whether the user already exist or not.
    4. using for loop find where is the group is.
    5. by using the result from 3,4 add user in that group.
    6. write group array in group.json file.


10. Search Chanal  
<br/>
------------------------------------------------------
+ Input Value (GET): groupname, username
-------------------------------------------------------
+ Output (POST): ok (boolean) , chanelList (arrray)
-------------------------------------------------------
+ explanation of function: 
    1. get a groupname and username from frontend.
    2. read chanels.json and convert it as arrray.
    3. using for loop find where is the group 
    4. if the group has found find whether the user exist in that group
    5. if the user exist in that group add the chanelnames in array
    6. send the array of chanelnaeme to frontend with ok=true
    7. if the result has not found send ok=false

    
11. delete chanel  
<br/>
------------------------------------------------------
+ Input Value (GET): username,chanelname
-------------------------------------------------------
+ Output (POST): ok (boolean)
-------------------------------------------------------
+ explanation of function: 
    1. get a username and chanelname from frontend
    2. read chanels.json and convert it as arrray.
    3. check where is the input chenel data is.
    4. if the chanel has found then find whether the username exist on that chenel.
    5. if the user found then delte that user from user_list array using splice function.
    6. send ok=true to frontend.


12.  Get ChanelList
<br/>
------------------------------------------------------
+ Input Value (GET): groupname
-------------------------------------------------------
+ Output (POST): ok (boolean), result (array)
-------------------------------------------------------
+ explanation of function: 
    1. get groupname from frontend.
    2. convert chanels.json file to array
    3. find the chanelname in input groupname by using for loop.
    4. if the data found send result as array with ok=true
    5. if the data not found send ok=false to frontend.

13.  addUserInChanel
<br/>
------------------------------------------------------
+ Input Value (GET): username, chanelname
-------------------------------------------------------
+ Output (POST): ok (boolean)
-------------------------------------------------------
+ explanation of function: 
    1. get username and chanelname from front end.
    2. convert chanels.json file to array
    3. check where is the input chanelname exist.
    4. if the loop found chanelname find whether the user exist in that chanel.
    5. if the user doesn't found push the input username in array and send ok=true.
    6. if the user found then send ok=false to frontend 
    7. write chanelarray on chanels.json file.

14.  makeUserAdmin
<br/>
------------------------------------------------------
+ Input Value (GET): username, groupname
-------------------------------------------------------
+ Output (POST): ok (boolean)
-------------------------------------------------------
+ explanation of function: 
    1. get username and groupname from frontend.
    2. using given groupname find the group.
    3. after find group check whether the group already has same admin or not.
    4. if they have send ok=false to frontend.
    5. else put username in admin array and send true to frontend.
 -----------------------------------------------------

    
# Json file


1. users.json
<br/>
    "users":[
        {
            "username":"username",
            "pwd":"111111",
            "email": "email@gmail.com",
            "age": "11",
            "birthdate":"111111", //yymmdd
            "role":"role"
        }
    ]
-----------------------------------------------------
Description: users.json contain data about user.
username is string and store name of user
pwd is password and format is string.
email is string.
age is string.
birthdate is string and store user birthdate as yymmdd format.
role is string represent role of the user.
-----------------------------------------------------

2. group.json
<br/>
    "group":[
        {
            "groupname":"groupname",
            "user_list":["user1","user2"],
            "group_manager_list":["manager1","manager2"],
            "chanels":[
                "chanel1","chanel2"
            ],
            "admin":["testadmin"]
        }
    ]
-----------------------------------------------------
Description:
group.json contain the data of group information.
groupname is string that represent groupname.
user_list is list of user format is array and contain string only in array.
group_manager_list is list of manager of group format is array and contain string only in array.
chanels is list of chanel format is array and contain string only in array.
admin is array that reepresent admin that nominate by admin as list and contain only string.

-----------------------------------------------------

3. Chanels.json
<br/>

    "chanel":[
        {
        "chanelname": "chanelname",
        "user_list": [
          "test1",
          "test2"
        ],
        "groupname": "test group"
        }
    ]
-----------------------------------------------------
Description:
chanels.json contains the information of chanels.
chnelname is string and contain chanelname 
user_list is list of user in chanel format is array and contain only string.
groupname is string and represent what group the chanel is in.
-----------------------------------------------------



    




    

    

    


    

    


    
    

    

