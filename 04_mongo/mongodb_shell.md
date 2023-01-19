# mongodb shell

## https://www.mongodb.com/try/download/shell

D:\dev\mongosh-1.6.2-win32-x64\bin

# 接続

```
cd D:\dev\mongosh-1.6.2-win32-x64\bin
mongosh
```

# show dbs

- 接続した直後の db は test になっている。
- test は空っぽなので、show dbs をしても出てこない。

```
test> show dbs
admin    40.00 KiB
config  108.00 KiB
local    40.00 KiB
```

# use

use しただけではデータベースは作成されず、実際に insert する必要あり。

```
test> use animals
switched to db animals
```

# insert

- inesert すると、animals が作成される。
- https://www.mongodb.com/docs/manual/crud/

```
animals> db.dogs.insertOne({name: "Kuroro", age: 2, breed: "French Bulldog", catFriendly: true})
{
  acknowledged: true,
  insertedId: ObjectId("63c7a628310da5fed9ab042b")
}

animals> show dbs
admin     40.00 KiB
animals   40.00 KiB
config   108.00 KiB
local     40.00 KiB
```

# show collections

animal(db) -> dogs(collection) の親子関係になっている。

```
animals> show collections
dogs
```

# find

```
animals> db.dogs.find()
[
  {
    _id: ObjectId("63c7a628310da5fed9ab042b"),
    name: 'Kuroro',
    age: 2,
    breed: 'French Bulldog',
    catFriendly: true
  }
]
```

```
animals> const animals = db.dogs.find();
animals> console.log(animals);
[
  {
    _id: ObjectId("63c7a628310da5fed9ab042b"),
    name: 'Kuroro',
    age: 2,
    breed: 'French Bulldog',
    catFriendly: true
  }
]
```

```
animals> db.dogs.find({age: 2});
[
  {
    _id: ObjectId("63c7ab9a5b3ee2a50692a101"),
    name: 'Kuroro',
    age: 2,
    breed: 'French Bulldog',
    catFriendly: true
  }
]
```
