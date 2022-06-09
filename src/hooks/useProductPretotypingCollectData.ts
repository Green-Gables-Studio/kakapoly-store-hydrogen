import {SelectedOptions} from '@shopify/hydrogen';

export default function useProductPretotypingCollectData(
  databaseId: string,
  selectedOptions: SelectedOptions,
  quantity: number,
) {
  const collectData = async (event: any) => {
    try {
      if (!databaseId) {
        throw Error('No database id provided.');
      }
      const response = await fetch('/api/notion/pages', {
        method: 'post',
        body: JSON.stringify({
          parent: {
            database_id: databaseId,
          },
          properties: {
            Name: {
              title: [
                {
                  text: {
                    content: 'Knock Knock!',
                  },
                },
              ],
            },
            Event: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: event,
                  },
                },
              ],
            },
            Data: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: JSON.stringify(
                      {
                        selectedOptions,
                        quantity,
                      },
                      null,
                      2,
                    ),
                  },
                },
              ],
            },

            Environment: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: process.env.NODE_ENV,
                  },
                },
              ],
            },
          },
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return collectData;
}
