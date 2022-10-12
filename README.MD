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
+ chat-room (2nd)
+ chatroom-list (2nd)
+ video-chat(2nd)
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

<br/>
--------------------------------------------------<br/>


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

<br/>
---------------------------------------------<br/>


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

![image](https://user-images.githubusercontent.com/51581298/188927551-8e8c1bcb-9c37-4d69-b70a-01f982b9c6f7.png)


When the page start the page will get the username and send it to backend server so the page can get the which group admin the user is.
By the group name we got the page will display what gorup manaer is.
After we get the groupname page will show all of the user in that group as list in table.
By clicking the check chanel groupmanager can see chich chanel the selected user currently in.
By clicking make admin button admin can make user into admin.
 The delete admin button only show the row that the user is admin.
 and also make admin button only show the row that the user is not admin.



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

<br/>
<br/>
--------------------------------------------------<br/>


5. Chat-Room-List Page<br/>


![image](https://user-images.githubusercontent.com/51581298/195139067-65a420e0-2aa3-4aa8-8e85-9d6401d565b8.png)

This page list all of the chanel the user belongs.
This page use this information:
+ UserName
+ Group Name
+ Chanel Name

As we can see on the Page
page list the chanel naem with Join button.
join button will directly connect to that chanel by using post with chanel name. 
Chanel name will be searched by using group name and user name.
FIrst server will get the group name and username from front end.
After that, use group name, search the chanel on that group.
search if that chanel contain the user name on chanel userList.
</br>
</br>
</br>
--------------------------------------------------<br/>

6. chat-room
![image](https://user-images.githubusercontent.com/51581298/195141499-01f60dd5-83c0-43e6-a08c-caeb63fc5d9d.png)

+ Username 
+ ChanelName
+ Socket

By using Socket Room function when the user join the chat room. Using 'GET' get chanel name when user enter to chat room. After that connect to chat room with socket room. 

On the Top of the Page it shows name of the user.
![image](https://user-images.githubusercontent.com/51581298/195145172-c3359e11-46ea-4a87-9405-5377fc47abd7.png)
In this case 'WWC' is displayed.
</br>

Under the user name the chat will be displayed.
![image](https://user-images.githubusercontent.com/51581298/195145041-98efe68c-ff7e-4420-bee6-2d2d610299bc.png)


+ Upload Image
![image](https://user-images.githubusercontent.com/51581298/195145528-303fd85b-9926-4e0a-874b-e8ff8e248f03.png)

By clicking '+' button user can post the image to socket. 
If User click it, file explore will be displayed. and user only can select the image. 
![image](https://user-images.githubusercontent.com/51581298/195145528-303fd85b-9926-4e0a-874b-e8ff8e248f03.png)
File Exploreer: 
![image](https://user-images.githubusercontent.com/51581298/195145899-af977445-fe59-44d0-9dfa-51300d907b35.png)

If user select the image file the name of the image will be alert on the page.
![image](https://user-images.githubusercontent.com/51581298/195146242-e05fa212-48f9-4aac-a5c3-10149c57c316.png)
After User click ok button the image displayed on the page.
</br>
</br>
</br>
--------------------------------------------------<br/>

7. Voice Chat Page

(No IMAGE)


</br>








-----------------------------------------------------<br/>

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
    require('./routes/login.js')(db,app);
    require('./routes/addUser.js')(db,app); //+edit
    require('./routes/addUserInChanel.js')(db,app);
    require('./routes/addgroupmember.js')(db,app);
    require('./routes/deleteChanel')(db,app);
    require('./routes/deleteGroupAdmin.js')(db,app);
    require('./routes/deleteUser.js')(db,app);
    require('./routes/deletegroupmember.js')(db,app);
    require('./routes/getChanelList.js')(db,app);
    require('./routes/getGroupMember.js')(db,app);
    require('./routes/get_chatroom_list.js')(db,app);
    require('./routes/groupadminget.js')(db,app);
    require('./routes/makeUserAdmin.js')(db,app);
    require('./routes/manageUser.js')(db,app);
    require('./routes/searchChenal.js')(db,app);

1. Login 
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): UserName , User Password
-------------------------------------------------------<br/>

+ Output (POST) : Ok:boolean, email,pwd (password), birthdate, age, role, username
-------------------------------------------------------<br/>

+ explanation of function: 
    1. Read the users.json file and put the all of data in array.
    2. by using for loop search whether the entered username exist in array
    3. If the for loop find the user in array, then check whether the password is same
    4. if evertrhing matched then send user information and boolean to front end.
    5. if they don't find any then send false to front end.

------------------------------------------------------<br/>

------------------------------------------------------<br/>


<br/>

2.  Account
<br/>
------------------------------------------------------<br/>

+ Input Value (GET) : age,birthdate,email,username,role,pwd<br/>

-------------------------------------------------------<br/>

+ Output (POST) : ok(boolean)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. get a all of the new user information from frontend 
    2. Put all of the data in array
    3. By using for loop find where is the input user's information in array.
    4. splice that information and push new information in array.
    5. If javascript found the information then send true to frontend and 
       if not found then send false to frontend.
<br/>

3. Manage User  
<br/>
------------------------------------------------------<br/>

+ Input Value (GET) : N/A (No Input)<br/>

-------------------------------------------------------<br/>

+ Output (POST): userArray (Array of User information)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. Read all of the data from users.json file
    2. Add all of the json information in array
    3. Send the array to frontend.
    
4.Add User  
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): username,pwd,email,age,birthdate,role<br/>

-------------------------------------------------------<br/>

+ Output (POST) : ok (boolean)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. get all of the information from frontend.
    2. put all of the information in array.
    3. check whether the user already exist or not.
    4. if the user exist send false to frontemd/
    5. if the user doesn't exist then send treu and push the entered member information in user array.
    6. Write array in json file.

<br/>

5. Delete User  
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): username<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. GET username from frontend.
    2. check which row has the data of input user.
    3. if the loop find the user delete that array by using splice(i,1) and send true to frontend.
    4. if can't find user in arrray send false to frontend.
    5. write array in jsonfile and save it.
    <br/>

6. group-admin-get  
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): username<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok (boolean), groupname (string)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. Get a username from frontend page.
    2. check whether the user is manageer or not. 
    3. if the user is manager send groupname that user is manager to frontend.
    4. if the user is not manager or no usere found send false to frontend.

<br/>


7. Get Group Member
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): groupname<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok (boolean), groupname, userlist, managerlist, chanels<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. Get a groupname from group-admin-get.
    2. search the group data from group.json file.
    3. if the loop found the group then send groupname, userlist, managerlist, chanels and ok to frontend.
    4. if the loop doesn't found it send false to frontend.

<br/>

8.Delete Group Member  
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): username<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok (boolean)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. get a user name from frontend.
    2. by using for loop find where is the that user information in group.json
    3. by using splice delete that user name from group.json.
    4. if the user deleted send true to frontend.

<br/>

9. Add group Member
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): username, groupname<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok(boolean)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. get user and groupname from frontend.
    2. read group.json file and put all of the data in array.
    3. using for loop check whether the user already exist or not.
    4. using for loop find where is the group is.
    5. by using the result from 3,4 add user in that group.
    6. write group array in group.json file.
<br/>


10. Search Chanal  
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): groupname, username<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok (boolean) , chanelList (arrray)<br/>

-------------------------------------------------------<br/>

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
------------------------------------------------------<br/>

+ Input Value (GET): username,chanelname<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok (boolean)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. get a username and chanelname from frontend
    2. read chanels.json and convert it as arrray.
    3. check where is the input chenel data is.
    4. if the chanel has found then find whether the username exist on that chenel.
    5. if the user found then delte that user from user_list array using splice function.
    6. send ok=true to frontend.


12.  Get ChanelList
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): groupname<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok (boolean), result (array)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. get groupname from frontend.
    2. convert chanels.json file to array
    3. find the chanelname in input groupname by using for loop.
    4. if the data found send result as array with ok=true
    5. if the data not found send ok=false to frontend.

13.  addUserInChanel
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): username, chanelname<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok (boolean)<br/>

-------------------------------------------------------<br/>

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
------------------------------------------------------<br/>

+ Input Value (GET): username, groupname<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok (boolean)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. get username and groupname from frontend.
    2. using given groupname find the group.
    3. after find group check whether the group already has same admin or not.
    4. if they have send ok=false to frontend.
    5. else put username in admin array and send true to frontend.
 -----------------------------------------------------
<br/>

15.  checkGroupAdmin
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): username, groupname
<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok (boolean)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. get username and groupname from frontend.
    2. using given groupname find the group.
    3. after find group check whether the group already has same admin or not.
    4. if they have send ok=false to frontend.
    5. else put username in admin array and send true to frontend.
 -----------------------------------------------------
<br/>

16.  deleteGroupAdmin
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): username, groupname<br/>

-------------------------------------------------------<br/>

+ Output (POST): ok (boolean)<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. get username and groupname from frontend.
    2. using given groupname find the group.
    3. after find group check whether the group has admin .
    4. delete admin from group_manager_list and write new array in group.json file.
    5. return true to frontend.
 -----------------------------------------------------
<br/>
17.  get_chatroom_list.js
<br/>
------------------------------------------------------<br/>

+ Input Value (GET): username<br/>

-------------------------------------------------------<br/>

+ Output (POST): chanelList<br/>

-------------------------------------------------------<br/>

+ explanation of function: 
    1. get username from frontend.
    2. using username put all of the chanel name that contain user name in user-list.
    3. After that, send the chanel list to front end 
 -----------------------------------------------------
<br/>
18. Socket.js

![image](https://user-images.githubusercontent.com/51581298/195253919-ebea0f5f-8876-4826-b9b3-9fdf305f8e25.png)

18-1.Socket.js -> connection (message)
 Connection is using for connect user to specific room by using chanel name and user name.
 FIrst, using chanel name and make user join the chanel socket.
 After that, everytime user send message the socket will send that message to that chanel socket.
18-2 Socket.js -> username:
For the chat, chat needs to display who sent that chat. To do that when the user send chat, user send chat message and user name. After that socket will send that information on socket. 
In front end section, using observation whenever the username or chat work. It will store that information in frontend and displayed.

18-3 Socket.js -> userprofile,username:
This section, work same as username and user chat. It get the userprofile image as string Image, and use observation so whenever the user send chat, it will store it as list and present it with message and user naem.

18-4 Socket.js -> join:
This section will help user to join the specfic socket room for chanel.

18-5 Socket.js -> image:
THis will send image on chanel so the user can get the image send by other user.


# MongoDB Atlas file
![image](https://user-images.githubusercontent.com/51581298/195150248-5fe474d1-33c2-4c4a-8cc7-bca59ec5983a.png)

1. users collection
<br/>
![image](https://user-images.githubusercontent.com/51581298/195150327-b3b4fc88-8b51-4149-99a1-7d4b66387aa2.png)
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
-----------------------------------------------------<br/>

Description: users collection contain data about user.
username is string and store name of user
pwd is password and format is string.
email is string.
age is string.
birthdate is string and store user birthdate as yymmdd format.
role is string represent role of the user.
-----------------------------------------------------<br/>


2. group collection
![image](https://user-images.githubusercontent.com/51581298/195150561-aa3a5f4e-ee58-4376-bf66-89cda2d4bf07.png)
<br/>

    "group":[
        {
            "groupname":"groupname",
            "user_list":["user1","user2"],
            "group_manager_list":["manager1","manager2"],
            "chanels":[
                "chanel1","chanel2"
            ]
        }
    ]
-----------------------------------------------------<br/>

Description:
group collection contain the data of group information.
groupname is string that represent groupname.
user_list is list of user format is array and contain string only in array.
group_manager_list is list of manager of group format is array and contain string only in array.
chanels is list of chanel format is array and contain string only in array.
admin is array that reepresent admin that nominate by admin as list and contain only string.

-----------------------------------------------------<br/>


3. Chanels collection
<br/>
![image](https://user-images.githubusercontent.com/51581298/195150710-6287155d-283e-4425-ac60-ed4c271f5be3.png)

<br/>

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
-----------------------------------------------------<br/>

Description:
chanels collection contains the information of chanels.
chnelname is string and contain chanelname 
user_list is list of user in chanel format is array and contain only string.
groupname is string and represent what group the chanel is in.
-----------------------------------------------------

# MVC EXAMPLE
1. LOGIN PAGE

VIEW:login.component.html

CONTROLLER  | MODEL
------------- | -------------
loginfunc()  | router/login

2. ACCOUNT PAGE

VIEW: account.component.html
CONTROLLER  | MODEL
------------- | -------------
edit()  | router/loginafter


3. GROUP ADMIN PAGE

VIEW: group-admin.component.html

CONTROLLER  | MODEL
------------- | -------------
getUser()  | router/groupminget
getUser()  | routes/getGroupMember
clickedModalClose()| N/A
clickedModal() | N/A
clickedchanelModalClose() | N/A
removeUser() | router/deleteGroupMember
addUser() | router/addGroupMember
deleteChanel(chanelname:any) | router/deleteCenel
lickedchanelModal(groupname:any,username:any) | router/searchChenel
addUserChanel() | router/groupadminget
addUserChanel() | router/getChanel
open(content:any) | N/A
AddUserInChanel() | router/addUserInChanel
MakeAdmin(username:any) | router/makeUserAdmin
deleteAdmin(username:any)| router/deleteGroupAdmin
checkAdmin(username:any):any| N/A
checkUser(username:any):any | N/A
4. MANAGE USER PAGE

VIEW: manage-user.component.html
CONTROLLER  | MODEL
------------- | -------------
clickedModalClose() | N/A
clickedModal() | N/A
getUser() | router/manageUser
addUser() | router/addUser
removeUser(username:string) | router/deleteUser

5. get_chatroom_list.js
VIEW: chatroom-list.html


CONTROLLER  | MODEL
------------- | -------------
getChanel() | router/get_chatroom_list.js
joinChanel | socket.js

6. Socket.js

VIEW: chat-room
CONTROLLER  | MODEL
------------- | -------------
check_get() | router/get_chatroom_list.js
initioConnection() | socket.js
chat() | socket.js
joinroom() | socket.js
imageSelected(file:any) |socket.js
 
-----------------------------------------------------
    

    
# TESTING

+ Login Tst
![image](https://user-images.githubusercontent.com/51581298/195250146-fa0dc70b-d82b-43fd-b90e-2d9375a1ce8e.png)

+  Account Test
![image](https://user-images.githubusercontent.com/51581298/195250272-113a500e-436c-4047-9f19-f5f3d813f682.png)

+  Manage User Add test
![image](https://user-images.githubusercontent.com/51581298/195250614-fe330bd3-37b5-49f9-ae62-b53f075dc116.png)

+ Delete User test
![image](https://user-images.githubusercontent.com/51581298/195250746-e10f67f6-ee33-45a7-9556-df19156458ce.png)

+ Group Admin Test
![image](https://user-images.githubusercontent.com/51581298/195250857-63e67fed-3162-46d6-abe8-63dd617f3c0a.png)

+ Chat Test
![image](https://user-images.githubusercontent.com/51581298/195250898-56fad3f5-217f-4761-b9fb-5f145e6dd939.png)

+ Result

![image](https://user-images.githubusercontent.com/51581298/195249914-79c798f5-da08-4007-93b2-a988dc21d168.png)


+ Fail Result
![image](https://user-images.githubusercontent.com/51581298/195250977-337950db-1488-4220-95b2-0777419e3111.png)

![image](https://user-images.githubusercontent.com/51581298/195251035-fa87cd9b-dc26-49d2-86e7-081d0cfd5dea.png)

It is working when I do,but for some reason it is not working when I run this on test.



    


    
    

    

