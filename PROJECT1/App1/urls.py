from django.urls import path
from . import views

urlpatterns = [
    path('',views.greet),
    path('dice', views.dice),
    path('deck', views.deck),
    path('play', views.play),
    path('hero', views.hero),
    path('login', views.login),
    path('register', views.register),
]