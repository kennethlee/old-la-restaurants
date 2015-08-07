LA Historic Restaurants 
========================

LALALA food is good, so are crazy old restaurants! yum!　🍴🍩💎

We are making a map for the Offbeat L.A. blog, who's author, Nikki, has compiled this list of historic L.A. restaurants, [Offbeat L.A.: The Oldest Surviving Los Angeles Restaurants… A Master List of the Vintage, Historic and Old School](http://thelosangelesbeat.com/2015/05/offbeat-l-a-the-oldest-surviving-los-angeles-restaurants-a-master-list-of-the-vintage-historic-and-old-school/)

As she writes:
> I often search the internet for authentic old-school spots in neighborhoods I visit and finding them is not always easy. After a lot of detective work I’ve compiled this “Master List” and hope to update it regularly. I’m sure there are many holes in my research and would appreciate additions and updates in the comments section below. My criteria for the restaurants here is that they are 1979 or older, although there are a few exceptions, and that they are within about an hour’s drive from downtown L.A. You will find classic steakhouses, Googie diners, pastrami delicatessans, walk-up hamburger stands and more. When the restaurant has a web page I provide that, but if not I share a link to a review, Yelp or Wikipedia.                       Cheers, my dears, and bon appetit! Love, Nikki


Why do all our map projects relate to food? Are we really hungry? Is it snacktime yet?

So far...
==========
- Search and categorize restaurants by whether they are open now or not
- Sort and filter restaurants by decade. Let users be able to choose a decade and see just those restaurants.
- Search, log and add photos/links from [LA Public Library](http://www.lapl.org/collections-resources/visual-collections/menu-collection) old archived menu exhibit online database
- Search, log and add historic photographs, current photographs, links to YouTube videos of the restaurants
- Make an extra-fun food-themed old-fashioned `Mapbox Studio` layer

Data Gathering & Cleaning
==========
[Google Spreadsheets](https://docs.google.com/spreadsheets/d/1i_v1oWQO8YJaF6YmtBde9mR0uK2OBTXH2bU56i6nxQA/edit#gid=778088403)
- [x] Restaurant name, address, year-created sorted, formatted and cleaned
- [x] Addresses properly formatted
- [x] Addresses geocoded
- [x] [Preliminary `.geojson` map](https://github.com/maptimeLA/old-la-restaurants/blob/master/data/historic_restaurants.geojson)
- [ ] Visuals: Add images/videos, menus from LA Public Library, links/menus of actual website/restaurant

Webmap Making
=========
- [x] CartoDB - Color organizing by time/age
- [ ] Leaflet pin points - Data bubbles information formatting
- [ ] Styling the base layer of the map
- [ ] Adding menu photos and other visual links

Directions for running map locally
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

# Data source
[Offbeat L.A.: The Oldest Surviving Los Angeles Restaurants… A Master List of the Vintage, Historic and Old School](http://thelosangelesbeat.com/2015/05/offbeat-l-a-the-oldest-surviving-los-angeles-restaurants-a-master-list-of-the-vintage-historic-and-old-school/)
