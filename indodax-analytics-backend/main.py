import requests
from datetime import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from utils.coinlist import coins

origins = [
    "http://localhost:3000",
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():

    listcoin = []
    for coin in coins:
        dict_data = {}
        dict_data['symbol']= coin
        dict_data['symbol-idr'] = coin + 'IDR'
        dict_data['logo'] = 'https://indodax.com/v2/logo/svg/color/' + coin.lower() + '.svg'
        dict_data['chart'] = 'https://indodax.com/chart/' + coin + 'IDR'
        listcoin.append(dict_data)

    return {'listcoin': listcoin}
