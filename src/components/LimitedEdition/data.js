import img1 from '../../assets/limitededition/img1.jpg';
import img2 from '../../assets/limitededition/img2.jpg';
import img3 from '../../assets/limitededition/img3.jpg';
import img4 from '../../assets/limitededition/img4.jpg';
 
export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      imageurl:img1,
      name: "Luxury Kit",
      price: "₹7,200 (MRP, Inclusive of Taxes)",
    //   description: "Some text about the product..",
    },
    {
      id: 2,
      imageurl:img2,
      name: "Idole Eye Kit",
      price: "₹4,400 (MRP, Inclusive of Taxes)",
    //   description: "Some text about the product..",
    },
    {
      id: 3,
      imageurl:img3,
      name: "Day Kit",
      price: "₹5,000 (MRP, Inclusive of Taxes)",
    //   description: "Some text about the product..",
    },
    {
      id: 4,
      imageurl:img4,
      name: "Drama Eye Kit",
      price: "₹3,000 (MRP, Inclusive of Taxes)",
    //   description: "Some text about the product..",
    },
    {
      id: 5,
      imageurl:img1,
      name: "Care",
      price: "₹2,200 (MRP, Inclusive of Taxes)",
    //   description: "Some text about the product..",
    },
    {
      id: 6,
      imageurl:img2,
      name: "Glow Face Kit",
      price: "₹6,500 (MRP, Inclusive of Taxes)",
    //   description: "Some text about the product..",
    },
    {
      id: 7,
      imageurl:img3,
      name: "Luxury Kit",
      price: "₹7,200 (MRP, Inclusive of Taxes)",
      // description: "Some text about the product..",
    },
    {
      id: 8,
      imageurl:img4,
      name: "Care Cream",
      price: "₹5,200 (MRP, Inclusive of Taxes)",
    //   description: "Some text about the product..",
    },
  ];