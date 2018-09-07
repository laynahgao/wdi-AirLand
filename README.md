# wdi-AirLand
Using dictionary:
cd frontend
	$ npm run start
cd backend
	$ pip3 install virtualenv
	$ virtualenv .env -p python3
	$ source .env/bin/activate
	$ pip install Django==2.0.5
	$ pip install psycopg2
	$ pip install psycopg2-binary
	$ python3 manage.py runserver

if no db
	$ createdb (dbname)
	$ python3 manage.py createsuperuser
