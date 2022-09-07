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

---------------------------------------------------------
1. Login Page
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

once the frontend (login.component.ts) received the data and data.ok=true then store user detail in sessionstorage and redirect to account page.
If data.ok=false then send alert and refresh the page.
------------------------------
### When login failed
![image](https://user-images.githubusercontent.com/51581298/188772661-47b55fd5-32c1-45f2-b092-fee6e36ddc5d.png)
------------------------------------
### When login success
![image](https://user-images.githubusercontent.com/51581298/188772766-a4e0562b-f92e-437b-ab58-06d9b17bb161.png)
------------------------------------
#### Session Storage
![image](https://user-images.githubusercontent.com/51581298/188772841-fda7243a-14e1-4f9a-ad15-40d330b67279.png)
--------------------------------------------------

2. Account Page

![image](https://user-images.githubusercontent.com/51581298/188777458-b3402ef7-03f5-43d5-af74-d43ed4884605.png)

Account page can change the user details.
+ UserName
+ BirthDate
+ Age
+ Email
+ Role 
+ Password
 
 As we can see on the page, the user data will display on the page so user can recognize what is their detail is.
 As the user logged in Navigation bar has changed.
 The user logged in is as "superadmin" so the "Manage User" has showned and because it is logged in the "Log out " button has displayed.

![image](https://user-images.githubusercontent.com/51581298/188779772-a5f46353-88c0-470d-9c82-2c5ab7898cae.png)
If the user doesn't fill every form then the popup message will show


![image](https://user-images.githubusercontent.com/51581298/188779902-23fe0540-2c90-43aa-981b-19eaa642d0e9.png)
If user enter all of the data then this message will popup and component.ts will change sessionstorage and data in backend server.

once the user click the button then the input data in each textbox will be send to backend server.
In backend server, they get all of the data and search the user information in user json file.
If they found oone then found=true and change the data and push it in json file list.
If they don't found then add new user in user list.
After that send true to frontend then alert user information has changed.
If the frontend receive false that means they couldn't find it so add as new user.
![image](https://user-images.githubusercontent.com/51581298/188782563-6cdbe10c-bb76-45bd-acd6-3b42d4702fcf.png)

---------------------------------------------

3. Manage User
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



