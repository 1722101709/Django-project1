from django.shortcuts import render
from django.http import HttpResponse
from .models import User
from django.contrib import messages


def greet(request):
    return HttpResponse('<h1>Hello! Welcome</h1>')


def hero(request):
    return HttpResponse('<h1>Me</h1>')


def play(request):
    return render(request, 'game.html')


def dice(request):
    return render(request, 'dice.html')


def deck(request):
    return render(request, 'deck.html')


def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password1']
        if User.objects.filter(username=username).exists():
            messages.info(request, "user already exists")
        else:
            User.objects.create(username=username, password=password)
            messages.info(request, "user created successfully \n Login now")
        return render(request, 'register.html')
    else:
        return render(request, 'register.html')


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        if User.objects.filter(username=username, password=password).exists():
            return render(request, 'game.html')
        else:
            messages.info(request, "username doesn't exists")
            return render(request, 'loginpage.html')
    else:
        return render(request, 'loginpage.html')
