const items = [
    {
      "category": "673b422b77a0db1fda087428", 
      "name": "Chicken Qorma",
      "image": "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?ga=GA1.2.1648891514.1708859492&semt=ais_hybrid",
      "variants": [
        { "name": "1kg", "servings": "10-15", "price": 1200 },
        { "name": "2kg", "servings": "20-25", "price": 2200 }
      ],
      "packaging": [
        {
          "name": "Plastic Box",
          "variants": [
            { "servings": 5, "price": 50 },
            { "servings": 10, "price": 90 }
          ]
        }
      ]
    },
    {
      "category": "673b422b77a0db1fda087429", 
      "name": "Chicken Biryani",
      "image": "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?ga=GA1.2.1648891514.1708859492&semt=ais_hybrid",
      "variants": [
        { "name": "1kg", "servings": "10-15", "price": 1400 },
        { "name": "2kg", "servings": "20-25", "price": 2700 }
      ],
      "packaging": [
        {
          "name": "Aluminum Box",
          "variants": [
            { "servings": 5, "price": 60 },
            { "servings": 10, "price": 110 }
          ]
        }
      ]
    },
    {
      "category": "673b422b77a0db1fda08742a", 
      "name": "Chicken Manchurian",
      "image": "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?ga=GA1.2.1648891514.1708859492&semt=ais_hybrid",
      "variants": [
        { "name": "1kg", "servings": "10-15", "price": 1500 },
        { "name": "2kg", "servings": "20-25", "price": 2900 }
      ],
      "packaging": [
        {
          "name": "Plastic Bowl",
          "variants": [
            { "servings": 5, "price": 40 },
            { "servings": 10, "price": 75 }
          ]
        }
      ]
    },
    {
      "category": "673b422b77a0db1fda08742b", 
      "name": "Mix Vegetables",
      "image": "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?ga=GA1.2.1648891514.1708859492&semt=ais_hybrid",
      "variants": [
        { "name": "1kg", "servings": "10-15", "price": 800 },
        { "name": "2kg", "servings": "20-25", "price": 1500 }
      ],
      "packaging": [
        {
          "name": "Reusable Box",
          "variants": [
            { "servings": 5, "price": 30 },
            { "servings": 10, "price": 55 }
          ]
        }
      ]
    },
    {
      "category": "673b422b77a0db1fda08742c", 
      "name": "Chicken Tikka",
      "image": "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?ga=GA1.2.1648891514.1708859492&semt=ais_hybrid",
      "variants": [
        { "name": "2 pieces", "servings": "5", "price": 400 },
        { "name": "4 pieces", "servings": "10", "price": 750 }
      ],
      "packaging": [
        {
          "name": "Grill Foil",
          "variants": [
            { "servings": 5, "price": 25 },
            { "servings": 10, "price": 45 }
          ]
        }
      ]
    },
    {
      "category": "673b422b77a0db1fda08742d", 
      "name": "Halwa Puri Combo",
      "image": "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?ga=GA1.2.1648891514.1708859492&semt=ais_hybrid",
      "variants": [
        { "name": "2 persons", "servings": "2", "price": 300 },
        { "name": "4 persons", "servings": "4", "price": 550 }
      ],
      "packaging": [
        {
          "name": "Paper Box",
          "variants": [
            { "servings": 2, "price": 15 },
            { "servings": 4, "price": 25 }
          ]
        }
      ]
    },
    {
      "category": "673b422b77a0db1fda08742e", 
      "name": "Lassi",
      "image": "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?ga=GA1.2.1648891514.1708859492&semt=ais_hybrid",
      "variants": [
        { "name": "250ml", "servings": "1", "price": 50 },
        { "name": "500ml", "servings": "2", "price": 90 }
      ],
      "packaging": [
        {
          "name": "Bottle",
          "variants": [
            { "servings": 1, "price": 10 },
            { "servings": 2, "price": 15 }
          ]
        }
      ]
    },
    {
      "category": "673b422b77a0db1fda08742f", 
      "name": "Tandoori Roti",
      "image": "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?ga=GA1.2.1648891514.1708859492&semt=ais_hybrid",
      "variants": [
        { "name": "Single", "servings": "1", "price": 20 },
        { "name": "Pack of 5", "servings": "5", "price": 90 }
      ],
      "packaging": [
        {
          "name": "Paper Wrap",
          "variants": [
            { "servings": 1, "price": 5 },
            { "servings": 5, "price": 20 }
          ]
        }
      ]
    },
    {
      "category": "673b422b77a0db1fda087430", 
      "name": "Gulab Jamun",
      "image": "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?ga=GA1.2.1648891514.1708859492&semt=ais_hybrid",
      "variants": [
        { "name": "4 pieces", "servings": "2", "price": 100 },
        { "name": "10 pieces", "servings": "5", "price": 200 }
      ],
      "packaging": [
        {
          "name": "Plastic Box",
          "variants": [
            { "servings": 2, "price": 20 },
            { "servings": 5, "price": 50 }
          ]
        }
      ]
    },
]  
  
module.exports = items