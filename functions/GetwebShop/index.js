
const products =
[
  {
      "title" : "Tricky",
      "price" : 799,
      "shortDesc" : "Unisex",
      "category": "board",
      "longDesc" : "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile" : "skateboard-generic.png",
      "serial" : "231874871397182"
  },
  {
      "title" : "Flipper",
      "price" : 799,
      "shortDesc" : "Unisex",
      "category": "board",
      "longDesc" : "Axle crailtap fastplant dude regular footed helipop impossible. Wax Jimmy'Z half-flip transfer nollie launch ramp mongo egg plant. Pogo slap maxwell g-turn boneless risers blunt nose slide.",
      "imgFile" : "skateboard-generic.png",
      "serial" : "238498293848233"
  },
  {
      "title" : "Hiphop",
      "price" : 799,
      "shortDesc" : "Unisex",
      "category": "board",
      "longDesc" : "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile" : "skateboard-generic.png",
      "serial" : "2834982384832822"
  },
  {
      "title" : "Gretas Fury",
      "price" : 999,
      "shortDesc" : "Unisex",
      "category": "board",
      "longDesc" : "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile" : "skateboard-greta.png",
      "serial" : "127127838128877"
  },
  {
      "title" : "Awesome",
      "price" : 799,
      "shortDesc" : "Unisex",
      "category": "board",
      "longDesc" : "Axle crailtap fastplant dude regular footed helipop impossible. Wax Jimmy'Z half-flip transfer nollie launch ramp mongo egg plant. Pogo slap maxwell g-turn boneless risers blunt nose slide.",
      "imgFile" : "skateboard-generic.png",
      "serial" : "2384993841228443"
  },
  {
      "title" : "Swag",
      "price" : 799,
      "shortDesc" : "Unisex",
      "category": "board",
      "longDesc" : "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile" : "skateboard-generic.png",
      "serial" : "172381278381237"
  },
  {
      "title" : "Hoodie",
      "price" : 699,
      "shortDesc" : "Ash unisex",
      "category": "clothes",
      "longDesc" : "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile" : "hoodie-ash.png",
      "serial" : "898329843984982"
  },
  {
      "title" : "Hoodie",
      "price" : 699,
      "shortDesc" : "Fire unisex",
      "category": "clothes",
      "longDesc" : "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile" : "hoodie-fire.png",
      "serial" : "9919312731273772"
  },
  {
      "title" : "Hoodie",
      "price" : 699,
      "shortDesc" : "Ocean unisex",
      "category": "clothes",
      "longDesc" : "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile" : "hoodie-ocean.png",
      "serial" : "173891297371277"
  },
  {
      "title" : "Spinner",
      "price" : 249,
      "shortDesc" : "Soft",
      "category": "wheels",
      "longDesc" : "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile" : "wheel-spinner.png",
      "serial" : "239491299929222"
  },
  {
      "title" : "Wave",
      "price" : 249,
      "shortDesc" : "Medium",
      "longDesc" : "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile" : "wheel-wave.png",
      "serial" : "9919291231232312"
  },
  {
      "title" : "Rocket",
      "price" : 299,
      "category": "wheels",
      "shortDesc" : "Hard",
      "longDesc" : "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile" : "wheel-rocket.png",
      "serial" : "712387128788877"
  }
  
]





exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        products,
      message: "Go Serverless v4! Your function executed successfully!",
    }),
  };
};
