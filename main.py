from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.data_get import getStores, getStoreInfo

origins = ["http://localhost", "http://localhost:8080"]

dsmapi = FastAPI()
dsmapi.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@dsmapi.get('/stores/')
def showStoresList():
    return getStores()

@dsmapi.get('/stores/{id}')
def showStoreInfo(id):
    return getStoreInfo(id)