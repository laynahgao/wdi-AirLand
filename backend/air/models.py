from django.db import models
from django.contrib.auth.models import User
import datetime
from django.utils import timezone
from django.contrib.postgres.fields import ArrayField

class Profile(models.Model):
#   user = models.ForeignKey(User, on_delete=models.CASCADE)
  profile_id = models.CharField(max_length=100, primary_key=True, null=False)
  email = models.EmailField(max_length=50, null=True, blank=False, unique=True)
  first_name = models.CharField(max_length=100, blank=True)
  picture= models.ImageField(upload_to='pic_folder/',null=True, blank=True, default='pic_folder/default-profile.png')
  updated = models.BooleanField(default=False)
  description = models.TextField(default=False, null=True)

  def __str__(self):
    return self.email

class Room(models.Model):
    room_name = models.CharField(max_length=100)
    room_description = models.TextField(default='', null=True, blank=True)
    room_street = models.CharField(max_length=100, default='', null=True, blank=True)
    room_apt = models.CharField(max_length=100, default='', null=True, blank=True)
    room_city = models.CharField(max_length=100, default='', null=True, blank=True)
    room_state = models.CharField(max_length=100, default='', null=True, blank=True)
    room_zip = models.CharField(max_length=100, default='', null=True, blank=True)
    room_country = models.CharField(max_length=100, default='United States', null=True, blank=True)
    room_price = models.CharField(max_length=100, default='', null=True, blank=True)
    # room_amenities = ArrayField(models.CharField(max_length=10, default='', blank=True),size=8) 
    # room_spaces = ArrayField(models.CharField(max_length=10, default='', blank=True),size=8) 
    room_picture= models.ImageField(upload_to='pic_folder/',null=True, blank=True, default='pic_folder/default-room.png')

    profile = models.ForeignKey(Profile, on_delete=models.CASCADE,related_name='profile')

    def __str__(self):
        return self.room_name
