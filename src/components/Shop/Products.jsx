import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 10,
    title: "First book",
    discription: "This is my first book.",
  },
  {
    id: "p2",
    price: 20,
    title: "Second book",
    discription: "This is my second book.",
  },
  {
    id: "p3",
    price: 15,
    title: "Third book",
    discription: "This is my third book.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
