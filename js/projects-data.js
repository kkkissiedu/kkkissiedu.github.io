// To add, edit, or remove a project, just modify this array of objects.
const projectsData = [
  {
    "id": "modal-1",
    "category": "engineering",
    "title": "Seismic Bridge Analysis",
    "short_description": "Finite element analysis of a cable-stayed bridge under seismic loads.",
    "cover_image": "images/projects/Structural/wd_main.jpg", // Local path
    "slideshow_images": [
      "images/projects/Structural/WD 1.jpg", // Local path
      "images/projects/Structural/WD 2.jpg", // Local path
      "images/projects/Structural/WD 3.jpg"  // Local path
    ],
    "case_study": {
      "problem": "4 - storey Studio Apartment located in Kwamo-Kumasi. Designed for Mr. Hayford Boateng.",
      "process": "Performed structural analysis and design to determine the sizes of all structural members. Performed structural detailing of structural members using Revit.",
      "outcome": "The final design ensured the building's stability and safety under seismic loads, meeting all local building codes and standards. The project was completed on time and within budget, providing a robust solution for the client."
    },
    "technologies": [
      "Finite Element Analysis (FEA)",
      "SAP2000 / ETABS",
      "Non-Linear Time-History Analysis",
      "Python for data post-processing",
      "Revit for detailing"
    ]
  },
  {
    "id": "modal-2",
    "category": "ML",
    "title": "Concrete Crack Segmentation",
    "short_description": "A CNN model to detect and segment cracks in concrete surfaces from images.",
    "cover_image": "images/projects/ML/ccseg_main.jpg", // Local path
    "slideshow_images": [
      "images/projects/ML/ccseg_1.png", // Local path
      "images/projects/ML/ccseg_2.jpg", // Local path
      "images/projects/ML/ccseg_3.jpg"  // Local path
    ],
    "case_study": {
        "problem": "Manual inspection of concrete infrastructure for cracks is time-consuming, expensive, and prone to human error. There was a need for an automated system to improve the speed and accuracy of structural health monitoring.",
        "process": "A Convolutional Neural Network (CNN) was designed and trained using TensorFlow and Keras on a large dataset of concrete surface images. The process involved data augmentation to improve model robustness, followed by training and validation to fine-tune the network's architecture for optimal performance.",
        "outcome": "The final model achieved 95% accuracy in detecting and classifying cracks from drone imagery. This automated system reduces inspection time by over 70% and enables proactive maintenance, significantly enhancing the safety and longevity of civil infrastructure."
    },
    "technologies": [
      "Python & Jupyter Notebooks",
      "TensorFlow & Keras",
      "OpenCV for Image Processing",
      "Convolutional Neural Networks (CNN)",
      "Data Augmentation Techniques"
    ]
  },
  {
    "id": "modal-3",
    "category": "design",
    "title": "Parametric Facade Design",
    "short_description": "Generative design of a high-rise building facade for optimal solar shading.",
    "cover_image": "images/projects/facade-cover.jpg", // Local path
    "slideshow_images": [
      "images/projects/facade-slide-1.jpg", // Local path
      "images/projects/facade-slide-2.jpg", // Local path
      "images/projects/facade-slide-3.jpg"  // Local path
    ],
    "case_study": {
        "problem": "High-rise buildings in urban environments often suffer from excessive solar heat gain, leading to high energy consumption for cooling. The challenge was to design a building facade that could mitigate this effect while remaining aesthetically pleasing.",
        "process": "A generative algorithm was developed in Grasshopper for Rhino 3D. This algorithm was driven by a solar radiation analysis using Ladybug Tools, which parametrically controlled the geometry of shading elements across the facade based on their orientation and exposure to the sun.",
        "outcome": "The final, optimized design resulted in a projected 15% reduction in annual cooling loads. The generative process also produced a visually striking and dynamic building exterior that responds to its environmental context, successfully blending performance with high-quality design."
    },
    "technologies": [
      "Rhino 3D",
      "Grasshopper",
      "Ladybug Tools",
      "Blender",
      "Substance Painter"
    ]
  }
];
