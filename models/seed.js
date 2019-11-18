let seedDesserts = [
    {   name: 'Ample Hills', 
        img: ['https://pbs.twimg.com/profile_images/1039584901140553729/2vMonpOI_400x400.jpg','http://s3.amazonaws.com/trycaviar.com/offers/4419/181105-201611142125.jpg', 'https://imgs.6sqft.com/wp-content/uploads/2018/11/06151538/MySqFt_AmpleHills-0275.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81WwWvkYuDL._SL1500_.jpg'] , 
        neighborhood: ['Gowanus', 'Red Hook', 'Downtown Brooklyn', 'Midtown West', 'Prospect Heights', 'Brooklyn Heights', 'West Village', 'Astoria', 'Chelsea'], 
        borough: ['Brooklyn', 'Manhattan', 'Queens'],
        addressBk: ['305 Nevins St., Brooklyn, NY 11215', '421 Van Brunt St, Brooklyn, NY 11231', '445 Albee Square West, Brooklyn, NY 11201', '623 Vanderbilt Ave., Brooklyn, NY 11238', 'Pier 5, Brooklyn, NY 11201'],
        addressQns: ['34-02 30th Ave, Astoria, NY 11103'],
        addressMtn: ['600 11th Ave., New York, NY 10036', '73 Gansevoort St, New York, NY 10014', '141 8th Avenue, New York, NY 10011'],
        description: 'Known for their Ooey Gooey Buttercake and Munchies flavors - Fun fact: The store is named after a Walt Whitman quote',
        type: 'ice cream'
    },
    { 
        name: 'Birdbath',
        img: ['https://www.social-ink.net/wp-content/uploads/city-bakery_logo_socialInk.jpg', 'https://i.pinimg.com/originals/1f/91/4a/1f914ad7c013728214f062cd2999bba5.jpg', 'https://i.pinimg.com/originals/e5/b3/23/e5b3237ffb8c7cbd3a256f5689ae660f.jpg', 'http://thecitybakery.com/wp-content/uploads/2015/08/Birdbath_CB5_436x226.jpg'],
        neighborhood: ['Soho', 'Midtown East'],
        borough: ['Manhattan'],
        addressBk: [],
        addressQns: [],
        addressMtn: ['160 Prince St, New York, NY 10012', '140 E 45th St, New York, NY 10017'],
        description: "Excellent cookies if you're looking for something less dense than Chip or Levain",
        type: 'cookies'
    },
    {
        name: 'Breads',
        img: ['https://s3-media4.fl.yelpcdn.com/bphoto/mDaSWYX8hEV0eNGXJSDhVg/ls.jpg', 'https://www.seriouseats.com/images/2015/04/20150115-breads-bakery-babka-pie-whole-best-babka-in-NYC-niko-triantafillou.jpg', 'https://img.goldbelly.com/uploads/product_image/image/45715/breads-bakery-chocolate-babka-3-pack.a864c08a02b28fab833966198db45acb.jpg?ixlib=rails-3.0.2&w=820&h=820', 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/126369.jpg'],
        neighborhood: ['Midtown', 'Union Square', 'Lincoln Center'],
        borough: ['Manhattan'],
        addressBk: [],
        addressQns: [],
        addressMtn: ['1090 6th Ave, ​New York​, NY​ 10036​', '18 E 16th St, New York, NY 10003', '1890 Broadway, New York, NY 10023'],
        description: "The (chocolate) babka.",
        type: 'babka'

    },
    { 
        name: 'Chip',
        img: ['https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/30624264_510984309304242_3320912985091462698_n.jpg?_nc_cat=105&_nc_oc=AQmxm8bzk7C3uvMuU7vl0a3j6a482fnuNv54PotDRkN1FnvuTT-i7-wDuwWNd3rsaxs&_nc_ht=scontent-lga3-1.xx&oh=b64164ff5fd422d1acb5f28e30ced9b9&oe=5DDE6CEB', 'https://i.imgur.com/6szzxuF.png', 'https://i.imgur.com/40TvGJH.png', 'https://i.imgur.com/nCmdizX.png'],
        neighborhood: ['Astoria', 'Long Island City'],
        borough: ['Queens'],
        addressBk: [],
        addressQns: ["30-06 34th St., Astoria, NY 11103", "42-15 Crescent St, Long Island City, NY 11101", "22-04 33rd St,Astoria, NY 11105"],
        addressMtn: [],
        description: 'Best cookies in NYC',
        type: 'cookies' 
    },
    {
        name: 'The Chocolate Room',
        img: ['http://thechocolateroombrooklyn.com/image_warehouse/TCR-RGB-logo-wTM_640px.png', 'https://www.thechocolateroombrooklyn.com/cafes/specialties/files/medium_231519.jpg', 'http://newyork.cbslocal.com/wp-content/uploads/sites/14578484/2012/08/frozen-hot-chocolate2.jpg', 'https://dqzrr9k4bjpzk.cloudfront.net/images/476015/784801152.jpg'],
        neighborhood: ['Cobble Hill', 'Park Slope'],
        borough: ['Brooklyn'],
        addressBk: ['269 Court St., Brooklyn, NY 11231', '51 Fifth Ave., Brooklyn, NY 11217'],
        addressQns: [],
        addressMtn: [],
        description: "All the chocolate you could ever want in one place",
        type: 'chocolate'
    },
    { 
        name: 'Dough',
        img: ['https://getbento.imgix.net/accounts/f841b6dc90bc11473ab0a05120ca073b/media/images/dplogo-white.png'],
        neighborhood: ['Bed Stuy', 'Flatiron', 'Midtown East', 'Midtown West'],
        borough: ['Brooklyn', 'Manhattan'],
        addressBk: ['448 Lafayette Ave (at Franklin Ave) Brooklyn, NY 11205'],
        addressQns: [],
        addressMtn: ['14 W 19th St (at 5th Ave), New York, NY 10011', '230 Park Avenue (at 45th St) New York, NY 10169', '700 8th Ave (at 44th St), New York, NY 10036'],
        description: 'Dense donuts with strong flavors - The salted chocolate caramel is a classic.',
        type: 'doughnuts'
    },
    { 
        name: 'Doughnut Plant', 
        img: ['https://www.grandcentralterminal.com/wp-content/uploads/2018/06/DoughnutPlant_Logo-1-170x170.png','https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/539406cc-500c-49f4-970c-eed38cfa5815/orig.jpg&quality=90&w=1500&h=900&mode=crop&format=jpg&v=4', 'https://www.metro.us/sites/default/files/main/articles/2017/05/19/rose-donuts-doughnut-plant.jpg', 'https://hoodline.imgix.net/uploads/story/image/101267/Doughnut_Plant.jpg?auto=format'], 
        neighborhood: ['Chelsea', 'Midtown East', 'Lower East Side', 'Prospect Heights', 'Long Island City'], 
        borough: ['Manhattan', 'Brooklyn', 'Queens'],
        addressBk: ['245 Flatbush Avenue, Brooklyn, NY 11217'],
        addressQns: ['3100 47th Avenue, Long Island City, NY 11101'],
        addressMtn: ['89 East 42nd Street, New York, NY 10017', '379 Grand Street, New York, NY 10002', '220 West 23rd Street, New York, NY 10011'],
        description: 'Excellent quality doughnuts in a variety of styles (cake, doughseed, yeast)', 
        type: 'doughnuts' 
    },
    { 
        name: 'Farmacy',
        img: ['https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/53145688_2370849732949543_6116083109390712832_n.jpg?_nc_cat=107&_nc_oc=AQk4JV3iuOv1zjDO3MIw3ue1ld2hy2lDxm1c-GeOX5nBQpOBwBhTvkyPD8Xwff18W0A&_nc_ht=scontent-lga3-1.xx&oh=4742ac0163026c6c4da036fbe6ac7ba8&oe=5DD41745', 'https://i.imgur.com/hws2SSP.png', 'https://i.imgur.com/WBUvUn3.png', 'https://i.imgur.com/7Vllkhc.png'],
        neighborhood: ['Carroll Gardens'],
        borough: ['Brooklyn'],
        addressBk: ['513 Henry St, Brooklyn, NY 11231'],
        addressQns: [],
        addressMtn: [],
        description: "Extravagant sundaes - make sure you have someone (or multiple someones) to share with!",
        type: 'ice cream'
    },
    {
        name: 'Four and Twenty Blackbirds',
        img: ['https://playco.org/wp-content/uploads/2018/12/Four-Twenty-Blackbirds-Logo.jpg', 'https://www.ediblebrooklyn.com/wp-content/uploads/sites/2/2017/05/fourandtwentyblackbirds_VickyWasik-32.jpg', 'https://www.wholefoodsmarket.com/sites/default/files/media/Four_Twenty_Feature1_0.jpg', 'https://sagharborexpress.com/wp-content/uploads/2017/11/HA-Four-and-Twenty-Blackbirds-Chocolate-Chess_courtesy.jpg'],
        neighborhood: ['Gowanus'],
        borough: ['Brooklyn'],
        addressBk: ['439 3rd Avenue, Brooklyn 11215'],
        addressQns: [],
        addressMtn: [],
        description: "You'll love these even if you don't like pie! Try the black bottom oat.",
        type: 'pie'
    },
    { 
        name: 'Levain',
        img: ['https://media.glassdoor.com/sqll/1068327/levain-bakery-squarelogo-1545377807009.png'],
        neighborhood: ['Upper West Side', 'Harlem'],
        borough: ['Manhattan'],
        addressBk: [],
        addressQns: [],
        addressMtn: ['167 West 74th St, New York, NY 10023', '351 Amsterdam Avenue New York, NY 10024', '2167 Frederick Douglass Blvd. New York, NY 10026', '1484 Third Avenue New York, NY 10028'],
        description: 'Second best cookies in NYC (after Chip, of course)',
        type: 'cookies'

    },
    {
        name: 'Milkmade',
        img: ['https://pbs.twimg.com/profile_images/663087426315882496/Dy9XICAO.png', 'https://pixel.nymag.com/imgs/daily/grub/2015/05/27/27-milkmade03.w710.h473.jpg', 'http://s3.amazonaws.com/trycaviar.com/offers/6248/285649-201706151946.jpg', 'https://assets.dnainfo.com/generated/photo/2015/05/5271110151226494652310447832823o-1432052234.jpg/larger.jpg'],
        neighborhood: ['Carroll Gardens'],
        borough: ['Brooklyn'],
        addressBk: ['204 Sackett St, Brooklyn, NY 11231'],
        addressQns: [],
        addressMtn: [],
        description: "Small local shop with seasonal flavors",
        type: 'ice cream'
    },
    { 
        name: 'Morgenstern\'s',
        img: ['http://static1.squarespace.com/static/5314b53ae4b0aeaef77036b7/5575d0c6e4b03ba05364d38a/5575d0f0e4b090675afb33d6/1532623215368/MFIC+-+Gift+Card+01.png?format=1500w', 'https://pixel.nymag.com/imgs/daily/grub/2018/10/11/morgensterns-west-houston/morgensterns_040.w1200.h630.jpg', 'http://cdn.firstwefeast.com/assets/2015/06/kanye-x-morgensterns_95.jpg', 'https://pixel.nymag.com/imgs/daily/grub/2018/10/11/morgensterns-west-houston/morgensterns_038.w700.h467.2x.jpg'],
        neighborhood: ['Lower East Side, Greenwich Village'],
        borough: ['Manhattan'],
        addressBk: [],
        addressQns: [],
        addressMtn: ['2 Rivington Street, NY, NY 10002', '88 W Houston Street NY NY 10012'],
        description: "Extensive ice cream and topping selection",
        type: 'ice cream'
    },
    {
        name: 'Schmackary\'s',
        img: ['https://www.nyemmys.org/files/706/', 'http://www.chekmarkeats.com/wp-content/uploads/2014/04/Image-2-600x400.jpg', 'https://bartonsbites.files.wordpress.com/2013/10/schmackarys-window-display.jpg', 'https://cdn.newsday.com/polopoly_fs/1.31074727.1558018625!/httpImage/image.jpg_gen/derivatives/landscape_768/image.jpg'],
        neighborhood: ['Midtown West, NoHo'],
        borough: ['Manhattan'],
        addressBk: [],
        addressQns: [],
        addressMtn: ['362 West 45th Street, New York, New York 10036', '35 Cooper Square, New York, New York 10036'],
        description: "Mostly frosted cookies with a wide range of fun flavors - an after-show staple in the theater community. You can often find Broadway actors stepping in behind the counter!",
        type: 'ice cream'
    },
    {
        name: 'Two Little Red Hens',
        img: ['http://castlesandcooks.com/wp-content/uploads/2013/05/TwoLittleRedHens.png', 'http://3.bp.blogspot.com/-rImYVHZZlZg/UkjElupBPVI/AAAAAAAAApU/DiNZlhXdb_A/s1600/IMG_2991.JPG', 'https://static1.squarespace.com/static/5c282addc3c16a3f1c3d8855/5c28303c1ae6cf9b88409260/5c2849edaa4a995f08a519ff/1552150906823/two-little-red-hens_13130263644_o.jpg?format=2500w', 'http://dessertbuzz.com/wp-content/uploads/2012/02/Two-red-hens-3.jpg'],
        neighborhood: ['Upper East Side'],
        borough: ['Manhattan'],
        addressBk: [],
        addressQns: [],
        addressMtn: ['1652 2nd Ave, New York, NY 10028'],
        description: "The only cupcake shop you need to know",
        type: 'cupcakes'
    }

  ]
  
  module.exports = seedDesserts;