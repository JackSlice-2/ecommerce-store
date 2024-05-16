import getAllProducts from "@/actions/get-all-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getAllProducts({});

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 py-3">
          <ProductList title="All Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
