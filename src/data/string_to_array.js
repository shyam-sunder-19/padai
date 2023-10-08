const data = {
    "FIELD1": 0,
    "name": "Manipal University Online",
    // ... (other fields)
    "about": "['<span style=\"font-size:11pt; font-variant:normal; white-space:pre-wrap\"> ... </span>']",
    "picture": "['https://d1aeya7jd2fyco.cloudfront.net/banners/manipal-university-online.webp']",
    // ... (other fields)
  };
  
  // Convert 'about' and 'picture' strings to arrays
  data.about = JSON.parse(data.about.replace(/'/g, "\""));
  data.picture = JSON.parse(data.picture.replace(/'/g, "\""));
  
  // Now, data.about and data.picture are arrays
  console.log(data.about);
  console.log(data.picture);