# Create your views here.
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer
from django.shortcuts import render

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

def index(request):
    return render(request, 'index.html')
