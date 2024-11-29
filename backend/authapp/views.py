from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework_simplejwt.tokens import RefreshToken

@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")
            
            if User.objects.filter(username=username).exists():
                return JsonResponse({"error": "Username already exists"}, status=400)
            
            user = User.objects.create_user(username=username, password=password)
            return JsonResponse({"message": "User created successfully"}, status=201)
        
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    
    return JsonResponse({"message": "Send a POST request to sign up"}, status=400)



@csrf_exempt
def signin_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")

            user = authenticate(request, username=username, password=password)
            if user is not None:
                # Generate JWT token
                refresh = RefreshToken.for_user(user)
                return JsonResponse({
                    "access_token": str(refresh.access_token),
                    "message": "Login successful"
                }, status=200)
            else:
                return JsonResponse({"error": "Invalid credentials"}, status=400)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"message": "Send a POST request to sign in"}, status=400)


@csrf_exempt
def logout_view(request):
    if request.method == 'POST':
        try:
            logout(request)
            return JsonResponse({"message": "Logout successful"}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    
    return JsonResponse({"message": "Send a POST request to log out"}, status=400)
