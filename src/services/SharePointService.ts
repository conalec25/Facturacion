// SharePointService.ts

// Example TypeScript service for SharePoint list operations
import { sp } from "@pnp/sp/presets/all";

export class SharePointService {
    constructor(private siteUrl: string) {
        sp.setup({
            sp: {
                baseUrl: this.siteUrl,
            },
        });
    }

    public async getListItems(listName: string): Promise<any> {
        try {
            const items = await sp.web.lists.getByTitle(listName).items.get();
            return items;
        } catch (error) {
            console.error('Error fetching list items:', error);
            throw error;
        }
    }

    public async addListItem(listName: string, item: any): Promise<void> {
        try {
            await sp.web.lists.getByTitle(listName).items.add(item);
            console.log('Item added successfully.');
        } catch (error) {
            console.error('Error adding list item:', error);
            throw error;
        }
    }

    public async updateListItem(listName: string, id: number, item: any): Promise<void> {
        try {
            await sp.web.lists.getByTitle(listName).items.getById(id).update(item);
            console.log('Item updated successfully.');
        } catch (error) {
            console.error('Error updating list item:', error);
            throw error;
        }
    }

    public async deleteListItem(listName: string, id: number): Promise<void> {
        try {
            await sp.web.lists.getByTitle(listName).items.getById(id).delete();
            console.log('Item deleted successfully.');
        } catch (error) {
            console.error('Error deleting list item:', error);
            throw error;
        }
    }
}