from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import  routers
from drivers import views

router = routers.DefaultRouter()
router.register(r'drivers', views.DriverViewSet)
router.register(r'cars', views.CarViewSet)

urlpatterns = [
    url(r'^api/',include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', views.index, name="index"),
]

