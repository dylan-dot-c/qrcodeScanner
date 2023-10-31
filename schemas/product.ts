export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'Name',
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
    }
  ]
}