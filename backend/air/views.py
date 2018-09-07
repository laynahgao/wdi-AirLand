# from django.shortcuts import render

# Create your views here.
from rest_framework import generics 
from .serializers import ProfileSerializer
from .serializers import RoomSerializer
from .models import Profile
from .models import Room
from django.shortcuts import get_object_or_404, get_list_or_404

class ProfileList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    # queryset = Profile.objects.all()
    # serializer_class = ProfileSerializer
    def get_queryset(self):
        return Profile.objects.all()
    
    def get_serializer_class(self):
        return ProfileSerializer

    def get_object(self):
        queryset = self.get_queryset()
        filter = self.kwargs
        return get_object_or_404(queryset, **filter)

class RoomProfileList(generics.ListAPIView):
    def get_queryset(self):
        profile_id = self.kwargs['profile_id']
        print(profile_id)
        return Room.objects.all().filter(profile_id=profile_id)
    
    def get_serializer_class(self):
        return RoomSerializer

# class ProfileRooms(generics.RetrieveUpdateDestroyAPIView):
#     def get_queryset(self):
#         return Room.objects.all()  
   
#     def get_serializer_class(self):
#         return ProfileSerializer

#     def get_object(self):
#         queryset = self.get_queryset()
#         filter = self.kwargs
#         return get_object_or_404(queryset, **filter)   
       
        


class RoomList(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class RoomDetail(generics.RetrieveUpdateDestroyAPIView):
    # queryset = Room.objects.all()
    # serializer_class = RoomSerializer
    def get_queryset(self):
        return Room.objects.all()
    
    def get_serializer_class(self):
        return RoomSerializer

    def get_object(self):
        queryset = self.get_queryset()
        filter = self.kwargs
        return get_object_or_404(queryset, **filter)

# class RoomId(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Room.objects.latest('air_room.id')
#     serializer_class = RoomSerializer

# Room Creat
# class RoomCreat(generics.RoomCreateAPIView):
#     queryset = Room.objects.all()
#     serializer_class = RoomSerializer