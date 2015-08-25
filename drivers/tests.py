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
        new_driver = Driver.objects.get()
        self.assertEqual(new_driver.name,'Marina')
        self.assertEqual(new_driver.age, 28)
        self.assertEqual(new_driver.profile,'The last woman in the world')
        
    def test_can_delete_driver(self):
        single_driver = Driver.objects.get()
        current_count = Driver.objects.all().count()
        self.client.delete('/api/drivers/%d/'%self.driver_id)
        new_count = Driver.objects.all().count()
        self.assertEqual(current_count-new_count,1)
        queryset = Car.objects.filter(owner=single_driver)
        self.assertEqual(queryset.count(), 0)
        
    def test_can_update_driver(self):
        self.client.put('/api/drivers/%d/'%self.driver_id, {'name':'Katerina', 'age': 28, 'profile': 'The last woman in the world'})
        updated_driver = Driver.objects.get()
        self.assertEqual(updated_driver.name,'Katerina')
        
    def test_can_create_car(self):
        car = Car.objects.get()
        driver = Driver.objects.get()
        self.assertEqual(car.model_name,'Jiguli')
        self.assertEqual(car.owner,driver)
        
    def test_can_delete_car(self):
        prev_count = Car.objects.all().count()
        self.client.delete('/api/cars/%d/'%self.car_id)
        new_count = Car.objects.all().count()
        self.assertEqual(prev_count-new_count,1)
        self.assertEqual(Car.objects.filter(model_name="Jiguli",owner=Driver.objects.get).exists(), False)
        
    def test_can_update_car(self):
        prev_count = Car.objects.all().count()
        single_driver = Driver.objects.get()
        self.client.put('/api/cars/%d/'%self.car_id,{'model_name': 'Mercedez', 'owner': self.driver_id })
        new_count = Car.objects.all().count()
        self.assertEqual(new_count,prev_count)
        car = Car.objects.get(id=self.car_id)
        self.assertEqual(car.model_name,'Mercedez')
    
        