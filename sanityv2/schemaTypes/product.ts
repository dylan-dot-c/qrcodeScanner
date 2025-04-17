export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      placeholder: 'Name of product',
      validation: (rule: any) => rule.required().max(50),
    },
    {
      name: 'product_slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'barcode',
      title: 'Barcode',
      type: 'string',
      placeholder: 'barcode number at the back of the product',
      validation: (rule: any) => rule.required().min(5),
    },
    {
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      placeholder: 'Enter price with up to 2 decimal places',
      validation: (rule: any) =>
        rule.custom((price: number) => (price <= 0 ? 'Price must be positive' : true)).required(),
    },
    {
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'date',
      validation: (rule: any) => [
        rule.required(),
        rule.custom((date: string) => {
          let dateTime = new Date(date)
          let today = new Date()

          if (dateTime < today) {
            return 'Date cannot be earlier than today. What are you trying to sell these people?👀👀'
          } else {
            return true
          }
        }),
      ],
    },
    {
      name: 'inventory',
      title: 'Inventory Count',
      type: 'number',
      placeholder: 'how many items in stock?',
      validate: (rule: any) => rule.required(),
    },
    {
      name: 'low_inventory_threshold',
      title: 'Low Inventory Threshold',
      type: 'number',
      placeholder: 'Amount left in inventory to trigger low stock alert',
      validate: (rule: any) => rule.required(),
    },
  ],
}
