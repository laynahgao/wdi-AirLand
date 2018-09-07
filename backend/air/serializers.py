from rest_framework import serializers
from .models import Profile
from .models import Room

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
	# url = serializers.HyperlinkedRelatedField(
	# 	view_name='profile-detail',
	# 	lookup_field='profile_id',
	# 	read_only=True
	# )
	class Meta:
		model = Profile
		fields = ('profile_id', 'first_name', 'email', 'picture', 'updated','description')
		depth = 1

class RoomSerializer(serializers.HyperlinkedModelSerializer):
	url = serializers.HyperlinkedRelatedField(
		view_name='room-detail',
		lookup_field='profile_id',
		# many=True,
		read_only=True
	)
	class Meta:
		model = Room
		fields = ('url', 'id', 'room_name', 'room_description', 'room_street', 'room_apt', 'room_city', 'room_state', 'room_zip', 'room_country', 'room_price', 'room_picture', 'profile')
		# depth = 1
		# 'room_amenities', 'room_spaces',