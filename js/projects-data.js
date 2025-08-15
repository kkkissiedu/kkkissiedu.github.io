// To add, edit, or remove a project, just modify this array of objects.
const projectsData = [
  {
    "id": "modal-1",
    "order": 11,
    "category": "engineering",
    "title": "WD Studio Apartment",
    "short_description": "WD Studio Apartment",
    "cover_image": "images/projects/Structural/wd_main.webp",
    "slideshow_images": [
      "images/projects/Structural/wd_main.webp",
      "images/projects/Structural/wd_1.webp",
      "images/projects/Structural/wd_2.webp",
      "images/projects/Structural/wd_3.webp",
      "images/projects/Structural/wd_4.webp",
      "images/projects/Structural/wd_5.webp",
      "images/projects/Structural/wd_6.webp",
    ],
    "case_study": {
      "problem": "4 - storey Studio Apartment located in Kwamo-Kumasi. Designed for Mr. Hayford Boateng.",
      "process": "Performed structural analysis and design to determine the sizes of all structural members. Performed structural detailing of structural members using Revit.",
      "outcome": "The final design ensured the building's stability and safety under seismic loads, meeting all local building codes and standards. The project was completed on time and within budget, providing a robust solution for the client."
    },
    "technologies": [
      "Finite Element Analysis (FEA)",
      "ProtaStructure",
      "Autodesk Revit",
      "Autodesk AutoCAD",
      "Lumion"
    ]
  },
  {
    "id": "modal-2",
    "order": 2,
    "category": "engineering",
    "title": "Pineapple Hill Residential",
    "short_description": "Pineapple Hill Residential",
    "cover_image": "images/projects/Structural/ph_main.webp",
    "slideshow_images": [
      "images/projects/Structural/ph_main.webp",
      "images/projects/Structural/ph_1.webp",
      "images/projects/Structural/ph_2.webp",
      "images/projects/Structural/ph_3.webp",
    ],
    "case_study": {
      "problem": "Multi - level residential building for Mr. Paul Anson Sherwood Saul",
      "process": "Performed structural analysis and design to determine the dimensions of column bases, columns, retaining walls and staircases. Performed structural detailing of structural members using Revit.",
      "outcome": "The final design ensured the building's stability and safety under seismic loads, meeting all local building codes and standards. The project was completed on time and within budget, providing a robust solution for the client."
    },
    "technologies": [
      "Finite Element Analysis (FEA)",
      "ProtaStructure",
      "Autodesk Revit",
      "Autodesk AutoCAD",
      "Lumion"
    ]
  },
  {
    "id": "modal-3",
    "order": 8,
    "category": "engineering",
    "title": "Spectra Medical Center",
    "short_description": "Spectra Medical Center",
    "cover_image": "images/projects/Structural/spectra.webp",
    "slideshow_images": [
      "images/projects/Structural/spectra.webp",
      "images/projects/Structural/spectra_1.webp",
      "images/projects/Structural/spectra_2.webp",
      "images/projects/Structural/spectra_3.webp",
      "images/projects/Structural/spectra_4.webp",
    ],
    "case_study": {
      "problem": "7 - storey Hospital Building for Spectra Health Imaging Limited - Accra.",
      "process": "Performed structural analysis and design and structural detailing of raft foundations and flat slabs using Revit.",
      "outcome": "The final design ensured the building's stability and safety under seismic loads, meeting all local building codes and standards. The project was completed on time and within budget, providing a robust solution for the client."
    },
    "technologies": [
      "Finite Element Analysis (FEA)",
      "ProtaStructure",
      "Autodesk Revit",
      "Autodesk AutoCAD",
      "Lumion"
    ]
  },
  {
    "id": "modal-4",
    "order": 5,
    "category": "engineering",
    "title": "Zenkawa Hospital",
    "short_description": "Zenkawa Hospital",
    "cover_image": "images/projects/Structural/zenkawa_main.webp",
    "slideshow_images": [
      "images/projects/Structural/zenkawa_main.webp",
      "images/projects/Structural/zenkawa.webp",
      "images/projects/Structural/zenkawa_1.webp",
      "images/projects/Structural/zenkawa_2.webp",
    ],
    "case_study": {
      "problem": "7 - storey Hospital Building for Yarok Ephect, Zenkawa Hospitals Adenta - Accra.",
      "process": "Performed structural analysis and design and structural detailing of raft foundation, Retaining Walls, Columns and Staircase using Revit.",
      "outcome": "The final design ensured the building's stability and safety under seismic loads, meeting all local building codes and standards. The project was completed on time and within budget, providing a robust solution for the client."
    },
    "technologies": [
      "Finite Element Analysis (FEA)",
      "ProtaStructure",
      "Autodesk Revit",
      "Autodesk AutoCAD",
      "Lumion"
    ]
  },
  {
    "id": "modal-5",
    "order": 1,
    "category": "ml-research",
    "title": "Concrete Crack Segmentation Model",
    "short_description": "A CNN model for semantic segmentation of cracks in concrete surfaces from images.",
    "cover_image": "images/projects/ML/ccseg_main.webp",
    "slideshow_images": [
      "images/projects/ML/ccseg_main.webp",
      "images/projects/ML/ccseg_1.webp",
      "images/projects/ML/ccseg_2.jpg",
      "images/projects/ML/ccseg_3.jpg"
    ],
    "case_study": {
        "problem": "Manual inspection of concrete infrastructure for cracks is time-consuming, expensive, and prone to human error. There was a need for an automated system to improve the speed and accuracy of structural health monitoring.",
        "process": "A Convolutional Neural Network (CNN) was designed and trained using PyTorch on a large dataset of concrete surface images. It was built on a U-Net architecture with attention mechanisms. Class weighting was incorporated to handle class imbalance, and data augmentation techniques were applied to enhance model robustness.",
        "outcome": "A semantic segmentation model that is able to detect and outline cracks in concrete images. The final model achieved a Dice Score of 0.93 on the test set. This automated system reduces inspection time by over 70% and enables proactive maintenance, significantly enhancing the safety and longevity of civil infrastructure."
    },
    "technologies": [
      "Python & Jupyter Notebooks",
      "PyTorch",
      "Convolutional Neural Networks (CNN)",
      "OpenCV for Image Processing",
      "Albumentations for Data Augmentation",
      "scikit-learn and Dice Score for Evaluation"
    ]
  },
  {
    "id": "modal-6",
    "order": 10,
    "category": "ml-research",
    "title": "Concrete Strength Prediction",
    "short_description": "A Random Forest Regressor Model for estimating the Compressive Strength of Concrete",
    "cover_image": "images/projects/ML/csp_main.webp",
    "slideshow_images": [
      "images/projects/ML/csp_main.webp",
      "images/projects/ML/csp3.png",
      "images/projects/ML/csp1.png",
      "images/projects/ML/csp2.png"
    ],
    "case_study": {
        "problem": "This project applies machine learning to a core civil engineering challenge: predicting the compressive strength of concrete. It provides a faster, data-driven method.",
        "process": "Linear Regression, Decision Tree and Random Forest Regressor models were trained using a concrete strength dataset. The model with the highest r-squared error was selected. Hyperparameter tuning was performed using KFold and GridSearch. After visualizing feature importances, the low-impact freatures were removed, after which the model was updated.",
        "outcome": "The final model achieved a Root Mean Squared Error of 5.8MPa on the test set."
    },
    "technologies": [
      "Python & Jupyter Notebooks",
      "Scikit-learn",
      "RandomForestRegressor",
      "Matplotlib",
      "Seaborn",
      "GridSearchCV"
    ]
  },
  {
    "id": "modal-7",
    "order": 7,
    "category": "ml-research",
    "title": "Concrete Site Safety Detector (Ongoing)",
    "short_description": "AI-powered system for real-time monitoring of Personal Protective Equipment (PPE) compliance on construction sites.",
    "cover_image": "images/projects/ML/css_main.webp",
    "slideshow_images": [
      "images/projects/ML/css_main.webp",
      "images/projects/ML/css1.webp",
      "images/projects/ML/css2.webp",

    ],
    "case_study": {
        "problem": "Construction sites are hazardous environments where failure to comply with PPE regulations significantly increases the risk of accidents. Manual enforcement is time-consuming, inconsistent, and prone to human error.",
        "process": "A deep learning-based computer vision model based on YOLOv8 was trained on annotated images to detect workers and identify whether they are wearing required PPE such as helmets, vests, and boots. The system uses object detection algorithms integrated into a real-time monitoring pipeline.",
        "outcome": "The model successfully detects PPE compliance in real-time video streams with minimal latency. This model serves as a foundation for a more advanced system incorporating dense captioning to provide contextual risk assessment, moving from simple detection to intelligent scene understanding."
    },
    "technologies": [
      "Python & Jupyter Notebooks",
      "PyTorch",
      "OpenCV",
      "YOLOv8",
      "CVZone",
    ]
  },
  {
    "id": "modal-8",
    "order":15,
    "category": "ml-research",
    "title": "Earthquake Response Spectrum Estimator",
    "short_description": "Python script for quickly generating response spectra for earthquake engineering.",
    "cover_image": "images/projects/ML/ers_main.webp", 
    "slideshow_images": [
      "images/projects/ML/ers_main.webp", 
      "images/projects/ML/ers1.png", 
    ],
    "case_study": {
        "problem": "Engineering professionals and researchers often need to compute earthquake response spectra from ground motion records to assess structural seismic demands.",
        "process": "The script uses Pandas for data handling, NumPy for numerical computations, and Matplotlib for plotting. It reads earthquake ground motion data, computes the response spectrum using a Single-Degree-of-Freedom (SDOF) system model based on the Central Difference Method, and visualizes the results.",
        "outcome": "The script determines the dynamic response of a Single-Degree-of-Freedom (SDOF) system subjected to earthquake ground motion. The classic 1940 El Centro earthquake ground motion was used as a case study for the script. The script generates the response spectrum, which is a crucial tool for earthquake engineering analysis."
    },
    "technologies": [
      "Python & Jupyter Notebooks",
      "Central Difference Method",
      "Numpy",
      "Pandas",
      "Matplotlib",
    ]
  },
  {
    "id": "modal-9",
    "order": 4,
    "category": "ml-research",
    "title": "Assessing the Fatigue Life of Locally Manufactured Rebars produced from Scrap Metal (Ongoing)",
    "short_description": "Laboratory testing and Numerical simulation of Fatigue Life of Locally Manufactured Rebars ",
    "cover_image": "images/projects/ML/FLR_main.webp", 
    "slideshow_images": [
      "images/projects/ML/FLR_main.webp", 
      "images/projects/ML/FLR.webp", 
      "images/projects/ML/FLR_1.webp", 
      "images/projects/ML/FLR_2.webp", 
    ],
    "case_study": {
        "problem": "Though the majority of rebars used in construction of residential and commercial buildings in Ghana are locally-sourced, there is a lack of extensive research into the fatigue life of these rebars under low-cycle, high intensity loading.",
        "process": "Laboratory testing of the mechanical properties of locally manufactured rebars sourced from a number of local manufacturers. Experimental results are used in generating numerical models in ABAQUS for simulation of the fatigue life of the rebars under several conditions including change in bar diameter, tensile strength and rib geometry. The results will be used in building a Neural Network model for estimating Fatigue Life of any given type of locally manufactured rebar.",
        "outcome": "Comprehensive database on the Fatigue Life of locally manufactured rebars. Research outcome will assess the suitability of the rebars for sustainable construction. The Neural Network model will make further studies on the topic easier and less expensive."
    },
    "technologies": [
      "Laboratory Tests",
      "ABAQUS",
      "Concrete Damage Plasticity",
      "Python & Jupyter Notebooks",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Convolutional Neural Networks (CNN)",
      "OpenCV for Image Processing",
      "Albumentations for Data Augmentation",
    ]
  },
  {
    "id": "modal-10",
    "order": 13,
    "category": "ml-research",
    "title": "Traffic Car Counter",
    "short_description": "Realtime Car Counter based on YOLOv8",
    "cover_image": "images/projects/ML/tcc_main.webp",
    "slideshow_images": [
      "images/projects/ML/tcc_main.webp",
      "images/projects/ML/tcc.webp",
      "images/projects/ML/tcc_1.webp",
    ],
    "case_study": {
        "problem": "Though the majority of rebars used in construction of residential and commercial buildings in Ghana are locally-sourced, there is a lack of extensive research into the fatigue life of these rebars under low-cycle, high intensity loading.",
        "process": "OpenCV and CVZone were utilized for processing of video feed. Backbone was built on YOLOv8 for detection and the SORT algorithm for robust object tracking.",
        "outcome": "Realtime computer vision model that detects multiple vehicle types, assigns unique IDs to each instance and counts vehicles after crossing a defined virtual line."
    },
    "technologies": [
      "Python & Jupyter Notebooks",
      "Convolutional Neural Networks (CNN)",
      "PyTorch",
      "OpenCV",
      "cvzone",
      "YOLOv8",
      "SORT",
    ]
  },
  {
    "id": "modal-11",
    "order": 12,
    "category": "design",
    "title": "MTN HYPE Event",
    "short_description": "Branded 3D assets for MTN HYPE Event",
    "cover_image": "images/projects/3D/hype_main.avif",
    "slideshow_images": [
      "images/projects/3D/hype_main.avif",
      "images/projects/3D/hype_7.webp",
      "images/projects/3D/hype 1.webp",
      "images/projects/3D/hype 2.webp",
      "images/projects/3D/hype 3.webp",
      "images/projects/3D/hype 4.webp",
      "images/projects/3D/hype 5.webp",
      "images/projects/3D/hype 6.webp",
      "images/projects/3D/hype 7.webp",
    ],
    "case_study": {
        "overview": "Made 3D Assets for MTN HYPE Event in Togo. Assets were used in showcasing event souvenirs and creating Snapchat AR Filters.",
        "contributions": "Modeled and textured high quality 3D models of souvenirs using Blender and Substance Painter."
    },
    "technologies": [
      "Blender",
      "Adobe Substance Painter",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ]
  },
  {
    "id": "modal-12",
    "order": 6,
    "category": "design",
    "title": "Unilever Products Showcase",
    "short_description": "Immersive VR showcase of Unilever products",
    "cover_image": "images/projects/3D/unilever_main.svg",
    "youtube_video_id": "cv-PEmzjJyM",
    "slideshow_images": [
      "images/projects/3D/unilever_main.svg",
      "images/projects/3D/UNILEVER1.webp",
      "images/projects/3D/UNILEVER2.webp",
      "images/projects/3D/UNILEVER3.webp",
      "images/projects/3D/UNILEVER4.webp",
    ],
    "case_study": {
        "overview": "Created 3D models of Unilever products for a Unilever board VR meeting to showcase the company's progress since inception.",
        "contributions": "Modeled and textured 3D versions of products using Blender, Photoshop, Illustrator and Substance Painter"
    },
    "technologies": [
      "Blender",
      "Adobe Substance Painter",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ]
  },
  {
    "id": "modal-13",
    "order":9,
    "category": "design",
    "title": "SuCasa  No.3 O'Grantson Communities Virtual Tour",
    "short_description": "Immersive VR shopping experience for SuCasa customers",
    "cover_image": "images/projects/3D/sucasa_main.webp",
    "slideshow_images": [
      "images/projects/3D/sucasa_main.webp",
      "images/projects/3D/sucasa_3.webp",
      "images/projects/3D/sucasa_7.webp",
      "images/projects/3D/sucasa_10.webp",
      "images/projects/3D/sucasa_8.webp",
      "images/projects/3D/sucasa_2.webp",
      "images/projects/3D/sucasa.webp",
      "images/projects/3D/sucasa_5.webp",
      "images/projects/3D/sucasa_6.webp",
      "images/projects/3D/sucasa_1.webp",
      "images/projects/3D/sucasa_4.webp",
    ],
    "case_study": {
        "overview": "Online 3D virtual tour of No. 3 O'Grantson Communities for SuCasa Ghana. The interactive platform will allow users to create customized houses in real time and place orders.",
        "contributions": "Modeling, UV Unwrapping, Texturing and setting up high-quality optimized game-ready assets for the virtual community using Blender, ZBrush, Substance Painter and Unity."
    },
    "technologies": [
      "Blender",
      "Adobe Substance Painter",
      "Unity",
    ]
  },
  {
    "id": "modal-14",
    "order": 14,
    "category": "design",
    "title": "Tidal Rave 23 & 24 (Canceled)",
    "short_description": "Visuals for Tidal Rave Music Festival",
    "cover_image": "images/projects/3D/tidal_main.webp",
    "slideshow_images": [
      "images/projects/3D/tidal_main.webp",
      "images/projects/3D/tidal.webp",
      "images/projects/3D/tidal_1.webp",
      "images/projects/3D/tidal_2.webp",
      "images/projects/3D/tidal_3.webp",
      "images/projects/3D/tidal_4.webp",
      "images/projects/3D/tidal_5.webp",
      "images/projects/3D/tidal_6.webp",
      "images/projects/3D/tidal_7.webp",

    ],
    "case_study": {
        "overview": "Modeled 3D assets for artistes' background of the Tidal Rave Music Festival.",
        "contributions": "Sculpted, Textured, Rigged and Animated 3D models of performing artistes. Created 3D versions of Tidal Rave logos."
    },
    "technologies": [
      "Blender",
      "Adobe Substance Painter",
      "ZBrush",
      "Marvelous Designer",
      "Character Creator",
    ]
  },
  {
    "id": "modal-15",
    "order": 3,
    "category": "design",
    "title": "VAAL Bedroom Units AR/VR Experience",
    "short_description": "3D Models of the 3 and 4 Bedroom Units for VAAL Real Estate Ghana",
    "cover_image": "images/projects/3D/vaal_main.webp",
    "slideshow_images": [
      "images/projects/3D/vaal_main.webp",
      "images/projects/3D/vaal_2.webp",
      "images/projects/3D/vaal_3.webp",
      "images/projects/3D/vaal_4.webp",
      "images/projects/3D/vaal.webp",
      "images/projects/3D/vaal_1.webp",
    ],
    "case_study": {
        "overview": "3D AR and VR experience for showcasing VAAL Real Estate Ghana's 3 and 4 bedroom units",
        "contributions": "Modeled, Textured and Optimized 3D models of the buildings for deployment in Unity and web AR"
    },
    "technologies": [
      "Blender",
      "Adobe Substance Painter",
    ]
  }
];