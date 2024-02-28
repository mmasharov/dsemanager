from app.db_conn import UseDB

db = 'dsm.sqlite'

def getStores():
    with UseDB(db) as cursor:
        _SQL = """SELECT store_id, store_name FROM stores ORDER BY store_name ASC"""
        cursor.execute(_SQL)
        data = cursor.fetchall()
    
    storeList = []
    for item in data:
        store = {}
        store['store_id'] = item[0]
        store['store_name'] = item[1]
        storeList.append(store)
    
    return storeList

def getStoreInfo(id):
    with UseDB(db) as cursor:
        _SQL = """SELECT store_id, store_code, store_name,
                (SELECT type_name FROM store_type WHERE type_id = store_type),
                (SELECT org_name FROM org WHERE org_id = store_org),
                store_city, store_address, store_phone, store_phone_add, store_photo
                FROM stores
                WHERE store_id = ?"""
        cursor.execute(_SQL, (id,))
        data = cursor.fetchone()

    storeInfo = {}
    storeInfo['store_id'] = data[0]
    storeInfo['store_code'] = data[1]
    storeInfo['store_name'] = data[2]
    storeInfo['store_type'] = data[3]
    storeInfo['store_org'] = data[4]
    storeInfo['store_city'] = data[5]
    storeInfo['store_address'] = data[6]
    storeInfo['store_phone'] = data[7]
    storeInfo['store_phone_add'] = data[8]
    storeInfo['store_photo'] = data[9]

    return storeInfo