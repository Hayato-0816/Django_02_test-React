from django.urls import path
from .views import PostList, index

urlpatterns = [
    path('api/posts/', PostList.as_view(), name='post_list'),
    path('', index, name='index'),
]
