Hozz létre egy API-t, mely termékeket tart nyilván.

A terméknek az alábbi fieldjei legyenek a megadott típussal:
id - integer primary key autoincrement
name - text
brand - text
description- text
price - integer

Példa:
{
  id: 1,
  name: "Start Wars Millennium Falcon",
  brand: "Lego",
  description: "LEGO - for adults, recommended for ages 18 and up, LEGO® Star Wars series, release year 2024, pack of 921 building blocks",
  price: 23760
  }

A termékeket tartsd nyilván egy adatbázisban.
A végpontok:
/api/products - az összes terméket visszaadja egy listában
/api/products - egy új terméket lehet rögzíteni
/api/products/:id - egy termék adatait lehet lekérdezni
/api/products/:id - egy terméket adataiit lehet módosítani
/api/products/:id - egy terméket lehet törölni az azonosítója alapján
