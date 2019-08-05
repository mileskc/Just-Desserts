let seedDesserts = [
    { 
        name: 'Chip',
        img: ['https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/30624264_510984309304242_3320912985091462698_n.jpg?_nc_cat=105&_nc_oc=AQmxm8bzk7C3uvMuU7vl0a3j6a482fnuNv54PotDRkN1FnvuTT-i7-wDuwWNd3rsaxs&_nc_ht=scontent-lga3-1.xx&oh=b64164ff5fd422d1acb5f28e30ced9b9&oe=5DDE6CEB', 'https://secretnyc.co/wp-content/uploads/2019/05/best-cookies-levain-bakery.jpg'],
        neighborhood: ['Astoria', 'Long Island City'],
        borough: ['Queens'],
        addressBk: [],
        addressQns: ["30-06 34th St., Astoria, NY 11103 (917) 745-0101", "42-15 Crescent St, Long Island City, NY 11101", "22-04 33rd St,Astoria, NY 11105 (929) 522-0800"],
        addressMtn: [],
        description: 'Best cookies in NYC',
        rating: 5,
        type: 'cookie' 
    },
    { 
        name: 'Doughnut Plant', 
        img: ['https://www.grandcentralterminal.com/wp-content/uploads/2018/06/DoughnutPlant_Logo-1-170x170.png','https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/539406cc-500c-49f4-970c-eed38cfa5815/orig.jpg&quality=90&w=1500&h=900&mode=crop&format=jpg&v=4'], 
        neighborhood: ['Chelsea', 'Midtown East', 'Lower East Side', 'Prospect Heights', 'Long Island City'], 
        borough: ['Manhattan', 'Brooklyn', 'Queens'],
        addressBk: [],
        addressQns: [],
        addressMtn: [],
        description: 'Excellent quality doughnuts', 
        rating: 5,
        type: 'doughnut' 
    },
    {   name: 'Ample Hills', 
        img: ['https://pbs.twimg.com/profile_images/1039584901140553729/2vMonpOI_400x400.jpg','https://images-na.ssl-images-amazon.com/images/I/51FGnLK3gjL._SX258_BO1,204,203,200_.jpg'] , 
        neighborhood: ['Gowanus', 'Red Hook', 'Downtown Brooklyn', 'Midtown West', 'Prospect Heights', 'Brooklyn Heights', 'West Village', 'Astoria', 'Chelsea'], 
        borough: ['Brooklyn', 'Manhattan'],
        addressBk: [],
        addressQns: [],
        addressMtn: [],
        description: 'Named after a Walt Whitman quote', 
        rating: 5,
        type: 'ice cream' },
    { 
        name: 'Dough',
        img: ['https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10383586_846693845394065_8467373276703890711_n.jpg?_nc_cat=101&_nc_oc=AQnIazEm2k-OK4baoCFUqVM1jK5zC4YaA5DpMruj5CqJL0_5zT97lC14AMiMsF9wTok&_nc_ht=scontent-lga3-1.xx&oh=3475bfa5d75c269c28f89d1800f162b1&oe=5DA61144'],
        neighborhood: ['Bed Stuy', 'Flatiron', 'Midtown East', 'Midtown West'],
        borough: ['Brooklyn', 'Manhattan'],
        addressBk: ['448 Lafayette Ave (at Franklin Ave) Brooklyn, NY 11205'],
        addressQns: [],
        addressMtn: ['14 W 19th St (at 5th Ave), New York, NY 10011', '230 Park Avenue (at 45th St) New York, NY 10169', '700 8th Ave (at 44th St), New York, NY 10036'],
        description: 'Dense donuts with strong flavors',
        rating: 4,
        type: 'doughnut'
    },
    { 
        name: 'Levain',
        img: ['https://www.stripesgroup.com/system/uploads/investment/logo_image/49/logo.gif'],
        neighborhood: ['Upper West Side', 'Harlem'],
        borough: ['Manhattan'],
        addressBk: [String],
        addressQns: [String],
        addressMtn: ['167 West 74th St, New York, NY 10023', '351 Amsterdam Avenue New York, NY 10024', '2167 Frederick Douglass Blvd. New York, NY 10026', '1484 Third Avenue New York, NY 10028'],
        description: 'Second best cookies in NYC',
        rating: 5,
        type: 'cookie'

    },
    { 
        name: 'Birdbath',
        img: ['https://www.social-ink.net/wp-content/uploads/city-bakery_logo_socialInk.jpg'],
        neighborhood: ['Soho, Midtown East'],
        borough: ['Manhattan'],
        addressBk: [String],
        addressQns: [String],
        addressMtn: ['160 Prince St, New York, NY 10012', '140 E 45th St, New York, NY 10017'],
        description: "Excellent cookies if you're looking for something less dense than Chip or Levain",
        rating: 5,
        type: 'cookie'
    },
    { 
        name: 'Morgenstern\'s',
        img: ['http://static1.squarespace.com/static/5314b53ae4b0aeaef77036b7/5575d0c6e4b03ba05364d38a/5575d0f0e4b090675afb33d6/1532623215368/MFIC+-+Gift+Card+01.png?format=1500w'],
        neighborhood: ['Lower East Side, Greenwich Village'],
        borough: ['Manhattan'],
        addressBk: [String],
        addressQns: [String],
        addressMtn: ['2 Rivington Street, NY, NY 10002', '88 W Houston Street NY NY 10012'],
        description: "Extensive ice cream and topping selection",
        rating: 5,
        type: 'ice cream'
    },
    { 
        name: 'Farmacy',
        img: ['https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/53145688_2370849732949543_6116083109390712832_n.jpg?_nc_cat=107&_nc_oc=AQk4JV3iuOv1zjDO3MIw3ue1ld2hy2lDxm1c-GeOX5nBQpOBwBhTvkyPD8Xwff18W0A&_nc_ht=scontent-lga3-1.xx&oh=4742ac0163026c6c4da036fbe6ac7ba8&oe=5DD41745'],
        neighborhood: ['Carroll Gardens'],
        borough: ['Brooklyn'],
        addressBk: ['513 Henry St, Brooklyn, NY 11231'],
        addressQns: [String],
        addressMtn: [String],
        description: "Insane sundaes - make sure you have someone (or multiple someones) to share with!",
        rating: 5,
        type: 'ice cream'
    },
    {
        name: 'Milkmade',
        img: ['https://pbs.twimg.com/profile_images/663087426315882496/Dy9XICAO.png'],
        neighborhood: ['Carroll Gardens'],
        borough: ['Brooklyn'],
        addressBk: ['204 Sackett St, Brooklyn, NY 11231'],
        addressQns: [String],
        addressMtn: [String],
        description: "Small local shop with seasonal flavors",
        rating: 4,
        type: 'ice cream'
    },
    {
        name: 'The Chocolate Room',
        img: ['http://thechocolateroombrooklyn.com/image_warehouse/TCR-RGB-logo-wTM_640px.png'],
        neighborhood: ['Cobble Hill', 'Park Slope'],
        borough: ['Brooklyn'],
        addressBk: ['269 Court St., Brooklyn, NY 11231', '51 Fifth Ave., Brooklyn, NY 11217'],
        addressQns: [String],
        addressMtn: [String],
        description: "All the chocolate you could ever want in one place",
        rating: 4,
        type: 'chocolate'
    },
    // {
    //     name: 'Momofuku Milkbar'
    // },
    {
        name: 'Four and Twenty Blackbirds',
        img: ['https://playco.org/wp-content/uploads/2018/12/Four-Twenty-Blackbirds-Logo.jpg'],
        neighborhood: ['Gowanus'],
        borough: ['Brooklyn'],
        addressBk: ['439 3rd Avenue, Brooklyn 11215'],
        addressQns: [String],
        addressMtn: [String],
        description: "You'll love these even if you don't like pie! Try the black bottom oat.",
        rating: 5,
        type: 'pie'
    },
    {
        name: 'Two Little Red Hens',
        img: ['http://castlesandcooks.com/wp-content/uploads/2013/05/TwoLittleRedHens.png'],
        neighborhood: ['Upper East Side'],
        borough: ['Manhattan'],
        addressBk: ['1652 2nd Ave, New York, NY 10028'],
        addressQns: [String],
        addressMtn: [String],
        description: "The only cupcake shop you need to know",
        rating: 5,
        type: 'cupcake'
    }

  ]
  
  module.exports = seedDesserts;