import ProductListItem from "./ProductListItem";

export default function App() {

  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>
        <ProductListItem
          imgNo={1}
          name="Mac Book"
          productPriceFormatted={'3,000,000'}
        />
        <ProductListItem
          imgNo={2}
          name="MacBook Pro"
          productPriceFormatted={'3,500,000'}
        />
        <ProductListItem
          imgNo={201}
          name="Mac Book air"
          productPriceFormatted={'4,000,000'}
        />
      </div>
    </>
  );
}