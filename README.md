# wdi-AirLand
<div name="introduction">
	<h3>introduction:</h3>
<br/>
	<p>Landing Page:User can signup/signin by facebook account. User can click explore button to see all rooms list.</p>
	 <img src="https://user-images.githubusercontent.com/36210254/45511373-b7e0d800-b751-11e8-9d62-fa0d71136976.png" width="420" height="200" name="landing"/>
	<img src="https://user-images.githubusercontent.com/36210254/45511856-fb881180-b752-11e8-8cf6-a22780b891c0.png" width="420" height="150" name="signin"/> 
	<p>RoomList Page: User can click room block to see the room detail.</p>
	<img src="https://user-images.githubusercontent.com/36210254/45512154-cc25d480-b753-11e8-9e43-f1572e6fe540.png" width="420" height="200" name="roomsList" /> 
	RoomDetail Page<img src="https://user-images.githubusercontent.com/36210254/45513759-6f78e880-b758-11e8-94d0-bd48ff5d70e3.png" width="400" height="200" name="roomsDetail" /> 
	<p>Host Page: Click Start to host button will link to host form. User have to signin to start to host, otherwise it will pop up an Alert message </p>
	<img src="https://user-images.githubusercontent.com/36210254/45511913-283c2900-b753-11e8-8ab9-322ea21c2c2f.png" width="420" height="200" name="hostPage"/> 
	HostForm<img src="https://user-images.githubusercontent.com/36210254/45511962-3db15300-b753-11e8-8ee8-ece5b5e5b291.png" width="200" height="400" name="hostForm"/> 
	<p>Profile Page: After login, user can edit and delete their account in the profile page. User also can see their host home at the button of the Profile page. click the home block can link to host form to edite and delete the home information.</p>
	<img src="https://user-images.githubusercontent.com/36210254/45512591-0479e280-b755-11e8-92c8-1a512b772ad0.png" width="420" height="200" name="profile" /> 
	About Page<img src="https://user-images.githubusercontent.com/36210254/45512657-3e4ae900-b755-11e8-9812-f9cec1bf101c.png" width="400" height="120" name="about" /> 
</div>

<div name="using">
	<h3>Using dictionary:</h3>
	<br/>
	<p>cd frontend</p>
	<br/>
		$ npm run start
	<br/>
	<p>cd backend</p>
	<br/>
		$ pip3 install virtualenv
	<br/>	
		$ virtualenv .env -p python3
	<br/>
		$ source .env/bin/activate
	<br/>
		$ pip install Django==2.0.5
	<br/>
		$ pip install psycopg2
	<br/>
		$ pip install psycopg2-binary
	<br/>
		$ python3 manage.py runserver
	<br/>
	<p>Create your own database when you clone/download this project</p>
	<br/>
		$ createdb (dbname)
	<br/>
		$ python3 manage.py createsuperuser

</div>
