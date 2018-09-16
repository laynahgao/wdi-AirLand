<div name="using">
	<h2>First time setup:</h2>
	<hr/>
	<p>
		1.Clone the repo:git clone https://github.com/laynahgao/wdi-AirLand.git
	<br/>
		2.Go into folder:cd backend
	<br/>
		3.$ pip3 install virtualenv
	<br/>	
		4.$ virtualenv .env -p python3
	<br/>
		5.$ source .env/bin/activate
	<br/>
		6.$ pip install Django==2.0.5
	<br/>
		7.$ pip install psycopg2
	<br/>
		8.$ pip install psycopg2-binary
	<br/>
		9.$ createdb (dbname)
	<br/>
		10.$ python3 manage.py createsuperuser
	<br/>
		11.$ python3 manage.py runserver
	</p>
	<h2>Start</h2>
	<hr/>
	Start the app: npm start
	<br/>
	View in browser at: http://localhost:8000
</div>
<div name="introduction">
	<h2>Description:</h2>
	<hr/>
	<p>AirLand is a community marketplace which allows individuals to list, delete, edit,  and explore accommodations. Users can log in by Facebook and can edit and delete their account in AirLand. People can use PayPal to donate money to AirLand.</p>
	<p>TECHNIQUE SKILLS:</p>
	<p>Font-End: React, JavaScript, HTML, CSS, Bootstrap</p>
	<p>Back-End: Python, Django, PostgreSQL</p>

<br/>
	<h3>Screenshot</h3>
	<hr/>
	<p>Landing Page:User can signup/signin by facebook account. User can click explore button to see all rooms list.</p>
	 <img src="https://user-images.githubusercontent.com/36210254/45511373-b7e0d800-b751-11e8-9d62-fa0d71136976.png" width="420" height="200" name="landing"/>
	<img src="https://user-images.githubusercontent.com/36210254/45511856-fb881180-b752-11e8-8cf6-a22780b891c0.png" width="420" height="150" name="signin"/> 
	<p>RoomList Page and RoomDetail Page: User can click room block to see the room detail.</p>
	<img src="https://user-images.githubusercontent.com/36210254/45512154-cc25d480-b753-11e8-9e43-f1572e6fe540.png" width="420" height="200" name="roomsList" /> 
	<img src="https://user-images.githubusercontent.com/36210254/45513759-6f78e880-b758-11e8-94d0-bd48ff5d70e3.png" width="400" height="200" name="roomsDetail" /> 
	<p>Host Page and HostForm: Click Start to host button will link to host form. User have to signin to start to host, otherwise it will pop up an Alert message </p>
	<img src="https://user-images.githubusercontent.com/36210254/45511913-283c2900-b753-11e8-8ab9-322ea21c2c2f.png" width="420" height="200" name="hostPage"/> 
	<img src="https://user-images.githubusercontent.com/36210254/45511962-3db15300-b753-11e8-8ee8-ece5b5e5b291.png" width="200" height="400" name="hostForm"/> 
	<p>Profile Page: After login, user can edit and delete their account in the profile page. User also can see their host home at the button of the Profile page. click the home block can link to host form to edite and delete the home information.</p>
	<img src="https://user-images.githubusercontent.com/36210254/45512591-0479e280-b755-11e8-92c8-1a512b772ad0.png" width="420" height="200" name="profile" /> 
	<p>About Page: People can donate money to Ariland</p>
	<img src="https://user-images.githubusercontent.com/36210254/45512657-3e4ae900-b755-11e8-9812-f9cec1bf101c.png" width="400" height="120" name="about" /> 
</div>

