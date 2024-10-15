import type { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'images',
      label: 'Featured Images',
      type: 'array',
      fields: [
        {
          name: 'featuredImage',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: true,
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        }
      ],
    },
    
    slugField(),
  ],
}

export default Categories
