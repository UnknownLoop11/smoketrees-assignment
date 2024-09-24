# smoketrees-assignment


### Setup -
 - Clone the repository, and navigate to the project folder. 
 - Create .env in the root folder
 - declare a variable `MONGO_URI=<your_mongo_uri_string>`, and Copy/Paste your MongoDB URI string.
 - Install dependencies - `npm install`
 - Run the server - `npm run start`

---

### API Endpoints -
#### POST - `/register`
- Sample Request Body 1:
```
{
    "name": "John Doe",
    "addresses": [
        {
            "street": "123 Street",
            "city": "New York",
            "country": "USA",
            "zipCode": 10026
        }
    ]
}
```
- Sample Request Body 2:
```
{
    "name": "Jane Doe",
    "addresses": [
        {
            "street": "123 Street",
            "city": "New York",
            "country": "USA",
            "zipCode": 10026
        },
        {
            "street": "432 Street",
            "city": "Los Angelos",
            "country": "USA",
            "zipCode": 12096
        }
    ]
}
```

#### GET - `/users` - (get all users with the linked addresses)
