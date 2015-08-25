from rest_framework import test, status
from drivers.models import Driver,Car

# Create your tests here.
class AutoclubTestCase(test.APITestCase):
    def setUp(self):
        self.client = test.APIClient()
        self.driver = Driver.objects.create(name='Marina', age=28, profile='The last woman in the world')
        self.car = Car.objects.create(model_name='Jiguli', owner=self.driver)
        self.client.post('/api/cars/', {'model_name':'Jiguli','owner': self.driver.id})

    def test_can_create_driver(self):
        resp = self.client.post('/api/drivers/', {'name': 'Marina', 'age': 28,'profile': 'The last woman in the world'})
        self.assertEqual(status.HTTP_201_CREATED, resp.status_code)


    def test_can_delete_driver(self):
        resp = self.client.delete('/api/drivers/%d/'%self.driver.id)
        self.assertEqual(status.HTTP_204_NO_CONTENT, resp.status_code)

    def test_can_update_driver(self):
        resp = self.client.put('/api/drivers/%d/'%self.driver.id, {'name':'Katerina', 'age': 28, 'profile': 'The last woman in the world'})
        updated_driver = Driver.objects.get(id=self.driver.id)
        self.assertEqual(updated_driver.name,'Katerina')
        self.assertEqual(status.HTTP_200_OK, resp.status_code)
        
    def test_can_create_car(self):
        resp = self.client.post('/api/cars/', {'model_name': 'Renault', 'owner': 1})
        self.assertEqual(status.HTTP_201_CREATED,resp.status_code)
        
    def test_can_delete_car(self):
        resp = self.client.delete('/api/cars/%d/'%self.car.id)
        self.assertEqual(status.HTTP_204_NO_CONTENT,resp.status_code)
        
        
    def test_can_update_car(self):
        resp = self.client.put('/api/cars/%d/'%self.car.id,{'model_name': 'Mercedez', 'owner': self.driver.id })
        self.assertEqual(status.HTTP_200_OK,resp.status_code)
    
        