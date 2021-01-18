# node mongoose boilerplate

```
curl -d '{"username": "zubat", "email": "zubat@pokemon.com", "password": "iamthenight"}' -H "Content-Type: application/json" -X POST http://localhost:5000/auth/register

curl -d '{"email": "zubat@pokemon.com", "password": "iamthenight"}' -H "Content-Type: application/json" -X POST http://localhost:5000/auth/login

curl -d '{"surname": "Chu", "age": 100}' -H "Content-Type: application/json" -X POST http://localhost:3000/users // prompts error
curl -d '{"name": "Jiggly", "surname": "Puff", "age": 3}' -H "Content-Type: application/json" -X PUT http://localhost:3000/users/5f4f5726ddde594d290c80d1
curl -d '{"price": 10, "user": 2}' -H "Content-Type: application/json" -X POST http://localhost:3000/orders
curl -d '{"price": 12, "user": 5}' -H "Content-Type: application/json" -X PUT http://localhost:3000/orders/5
curl -X DELETE http://localhost:3000/users/5f4d7587bf290843cc1e7f95
```
