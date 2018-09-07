from django.urls import path
from . import views
# from rest_framework.authtoken import views as drf_views

urlpatterns = [  
	path('api/profile/', views.ProfileList.as_view(), name='profile-list'),
	path('api/profile/<slug:pk>', views.ProfileDetail.as_view(), name='profile-detail'),
	path('api/profile/rooms/<slug:profile_id>', views.RoomProfileList.as_view(), name='room-profile-list'),
	
	path('api/room/', views.RoomList.as_view(), name='room-list'),
	path('api/room/<int:pk>', views.RoomDetail.as_view(), name='room-detail'),
	# path('api/room/<int:pk>', views.RoomDetail.as_view(), name='room-detail'),

	# path('api/room/id/<int:pk>', views.RoomId.as_view(), name='room-id'),
    # path('api/room/new/<slug:pk>', views.RoomCreate.as_view, name='room-create'),
	
	# path('api/profile/<slug:pk>/edit', views.ProfileEdit.as_view(), name='profile-edit'),

	# path('api/profile/<slug:first_name>', views.ProfileDetail.as_view(), name='profile-detail'),

]