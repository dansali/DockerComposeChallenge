db.createUser(
    {
        "user": "root",
        "pwd": "weakpassword",
        "roles":[
            {
                "role": "readWrite",
                "db":   "website"
            }
        ]
    }
);

db.Users.insert([
{
    "_id": "5daef15f0f51b35a88d3f94f",
    "username": "admin",
    "name": "Administrator",
    "country": "Australia",
    "isAdmin": true
},
{
    "_id": "5daef1870f51b32035d3f950",
    "username": "moderator",
    "name": "Moderator",
    "country": "Australia",
    "isAdmin": true
},
{
    "_id": "5daef1b40f51b330c8d3f951",
    "username": "jsmith85",
    "name": "John Smith",
    "country": "Australia",
    "phone": "0399999999"
}]);