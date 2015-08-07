LA Historic Restaurants
========================

LALALA food is good, so are crazy old restaurants! yum!

[Offbeat L.A.: The Oldest Surviving Los Angeles Restaurants… A Master List of the Vintage, Historic and Old School](http://thelosangelesbeat.com/2015/05/offbeat-l-a-the-oldest-surviving-los-angeles-restaurants-a-master-list-of-the-vintage-historic-and-old-school/)

Why do all our map projects relate to food? Are we really hungry? Is it snacktime yet?

Directions
=========
0. If you're trying to make edits, Make a GitHub account, log in, and make sure you are part of `maptimeLA` group.
1. Open Terminal and clone this repository by running `git clone https://github.com/maptimeLA/old-la-restaurants`. If you're using the `GitHub App`, click the blue Plus sign on the upper left hand corner, go to `Clone` and find `maptimeLA/old-la-restaurants`
2. `cd old-la-restaurants`
3. `python -m SimpleHTTPServer 8000`
4. Go to your browser and open `http://localhost:8000/`
5. To open on your phone, find your IP address and open `http://[YOUR-IP-ADDRESS]:8000/`

Update `gh-pages` branch
=========
1. `git push origin master`
2. `git checkout gh-pages`
3. `git rebase master`
4. `git push origin gh-pages`
5. Visit at http://maptimela.github.io/old-la-restaurants/

Visit
========
http://maptimela.github.io/old-la-restaurants/

# What we have so far:
- [x] Restaurant name, address, year-created sorted, formatted and cleaned
- [x] Addresses properly formatted
- [x] Addresses geocoded
- [x] [Preliminary `.geojson` map](https://github.com/maptimeLA/old-la-restaurants/blob/master/data/historic_restaurants.geojson)
- [ ] Styling the base layer of the map
- [ ] Data bubbles formatting
- [ ] Color organizing by time/age: Data pin customizing
- [ ] Visuals: Add images/videos, menus from LA Public Library, links/menus of actual website/restaurant

# Project ideas
- Make an extra-fun food-themed old-fashioned `Mapbox Studio` layer
- Add photos from LA Public Library `Live and Dine in LA` old archived menu exhibit
- Add historic photographs of the restaurants
- Categorize restaurants by whether they are open now or not, what decade

# Data
[Google Spreadsheets](https://docs.google.com/spreadsheets/d/1i_v1oWQO8YJaF6YmtBde9mR0uK2OBTXH2bU56i6nxQA/edit#gid=778088403)

# Data source
[Offbeat L.A.: The Oldest Surviving Los Angeles Restaurants… A Master List of the Vintage, Historic and Old School](http://thelosangelesbeat.com/2015/05/offbeat-l-a-the-oldest-surviving-los-angeles-restaurants-a-master-list-of-the-vintage-historic-and-old-school/)
