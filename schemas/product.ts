export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      }
    }, {
      name: "price",
      title: "Price",
      type: "number"
    }, {
      name: "expiryDate",
      title: "Expiry Date",
      type: "date"
    }, {
      name: "barcode",
      title: "Barcode",
      type: "string"
    }
  ]
}