from rest_framework import test, status
from drivers.models import Driver,Car

# Create your tests here.
class AutoclubTestCase(test.APITestCase):
    client = test.APIClient()
    driver_id = 1
    car_id = 1
    def setUp(self):
        self.client.post('/api/drivers/', {'name': 'Marina', 'age': 28,'profile': 'The last woman in the world'})
        self.driver_id = Driver.objects.get().id
        self.client.post('/api/cars/', {'model_name':'Jiguli','owner': self.driver_id})
        self.car_id = Car.objects.get().id
    
    def test_can_create_driver(self):
        current_count = Driver.objects.all().count()
        new_driver = Driver.objects.get()
        self.assertEqual(new_driver.name,'Marina')
        self.assertEqual(new_driver.age, 28)
        self.assertEqual(new_driver.profile,'The last woman in the world')
        
    def test_can_delete_driver(self):
        current_count = Driver.objects.all().count()
        self.client.delete('/api/drivers/%d/'%self.driver_id)
        new_count = Driver.objects.all().count()
        self.assertEqual(current_count-new_count,1)
        
    def test_can_update_driver(self):
        self.client.put('/api/drivers/%d/'%self.driver_id, {'name':'Katerina', 'age': 28, 'profile': 'The last woman in the world'})
        updated_driver = Driver.objects.get()
        self.assertEqual(updated_driver.name,'Katerina')
        