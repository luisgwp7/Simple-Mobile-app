from django.urls import path
from django.http import JsonResponse
from .views import signup_view, signin_view, logout_view

urlpatterns = [
    path('', lambda request: JsonResponse({"message": "Welcome to the Auth API"})),  # Raíz de /api/auth/
    path('signup/', signup_view, name='signup'),
    path('signin/', signin_view, name='signin'),
    path('logout/', logout_view, name='logout'),
]