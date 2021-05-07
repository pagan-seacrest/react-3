const express = require("express");

const server = express();
const port = 5000;

const items = [
    {
	"name": "magir",
	"price": "1000",
	"path": "https://cdn.discordapp.com/attachments/658409407230640143/838812441101991987/magir.png",
	"item": "7322",
	"color": "silver"
    },
    {
	"name": "casio",
	"price": "2000",
	"path": "https://cdn.discordapp.com/attachments/658409407230640143/838812425414377583/casio.png",
	"item": "9991",
	"color": "black"
    },
    {
	"name": "epos",
	"price": "50000",
	"path": "https://cdn.discordapp.com/attachments/658409407230640143/838812438539403324/epos.png",
	"item": "3013",
	"color": "light metallic"
    },
    {
	"name": "tissot",
	"price": "36000",
	"path": "https://cdn.discordapp.com/attachments/658409407230640143/838812455391985674/tissot.png",
	"item": "4002",
	"color": "white"
    },
    {
	"name": "certina",
	"price": "25000",
	"path": "https://cdn.discordapp.com/attachments/658409407230640143/838812428124160000/certina.png",
	"item": "0060",
	"color": "daytona gray"
    },
    {
	"name": "orient",
	"price": "8500",
	"path": "https://cdn.discordapp.com/attachments/658409407230640143/838812446981357658/orient.png",
	"item": "5052",
	"color": "feldgrau"
    },
    {
	"name": "atlantic",
	"price": "19300",
	"path": "https://cdn.discordapp.com/attachments/658409407230640143/838812408360206356/atlantic.png",
	"item": "1029",
	"color": "burlywood"
    },
    {
	"name": "bulova",
	"price": "23400",
	"path": "https://cdn.discordapp.com/attachments/658409407230640143/838812421539495946/bulova.png",
	"item": "9897",
	"color": "bronze"
    },
    {
	"name": "edox",
	"price": "15000",
	"path": "https://cdn.discordapp.com/attachments/658409407230640143/838812437703557160/edox.png",
	"item": "8877",
	"color": "grey"
    },
    {
	"name": "rolex",
	"price": "120000",
	"path": "https://cdn.discordapp.com/attachments/658409407230640143/838812451465855026/rolex.png",
	"item": "0192",
	"color": "gold"
    }
]

const tmp = [ {"key1": "value1"}, {"key2": "value2"}, {"key3": "value3"}]

server.get("/items", (req, res) => res.send(items))

server.listen(port, () => console.log(`Server listening on port ${port}`))
