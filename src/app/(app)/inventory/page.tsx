import { columns, Item } from "./columns";
import { DataTable } from "./data-table";


// Generates 20 coffee shop-themed mock items
export async function getData(): Promise<Item[]> {
  return [
    {
      id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      name: "Espresso",
      description: "A single, strong shot of concentrated coffee.",
      quantity: 150,
      createdAt: "2025-09-20T08:00:00.000Z",
      updatedAt: "2025-09-22T10:30:00.000Z",
    },
    {
      id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
      name: "Cappuccino",
      description: "Espresso with steamed milk foam. A classic favorite.",
      quantity: 85,
      createdAt: "2025-09-20T08:05:00.000Z",
      updatedAt: "2025-09-22T11:00:00.000Z",
    },
    {
      id: "c3d4e5f6-a7b8-9012-3456-7890abcdef23",
      name: "Croissant",
      description: "Buttery, flaky, and freshly baked.",
      quantity: 45,
      createdAt: "2025-09-21T07:00:00.000Z",
      updatedAt: "2025-09-22T09:15:00.000Z",
    },
    {
      id: "d4e5f6a7-b8c9-0123-4567-890abcdef345",
      name: "Avocado Toast",
      description: null,
      quantity: 25,
      createdAt: "2025-09-22T09:00:00.000Z",
      updatedAt: "2025-09-22T09:00:00.000Z",
    },
    {
      id: "e5f6a7b8-c9d0-1234-5678-90abcdef4567",
      name: "Cold Brew",
      description: "Smooth, low-acid coffee steeped for 12 hours.",
      quantity: 60,
      createdAt: "2025-09-19T14:00:00.000Z",
      updatedAt: "2025-09-21T18:00:00.000Z",
    },
    {
      id: "f6a7b8c9-d0e1-2345-6789-0abcdef56789",
      name: "Matcha Latte",
      description: "Ceremonial grade matcha with steamed milk.",
      quantity: 30,
      createdAt: "2025-09-18T11:30:00.000Z",
      updatedAt: "2025-09-22T10:00:00.000Z",
    },
    {
      id: "a7b8c9d0-e1f2-3456-7890-bcdef6789012",
      name: "Pain au Chocolat",
      description: "A croissant with two pieces of dark chocolate.",
      quantity: 0, // Out of stock
      createdAt: "2025-09-21T07:00:00.000Z",
      updatedAt: "2025-09-22T08:30:00.000Z",
    },
    {
      id: "b8c9d0e1-f2a3-4567-8901-cdef78901234",
      name: "Blueberry Muffin",
      description: "A soft muffin bursting with fresh blueberries.",
      quantity: 38,
      createdAt: "2025-09-21T06:45:00.000Z",
      updatedAt: "2025-09-21T06:45:00.000Z",
    },
    {
      id: "c9d0e1f2-a3b4-5678-9012-def890123456",
      name: "Americano",
      description: "Espresso shots topped with hot water.",
      quantity: 95,
      createdAt: "2025-09-17T10:00:00.000Z",
      updatedAt: "2025-09-17T10:00:00.000Z",
    },
    {
      id: "d0e1f2a3-b4c5-6789-0123-ef9012345678",
      name: "Chai Latte",
      description: null,
      quantity: 40,
      createdAt: "2025-09-20T16:00:00.000Z",
      updatedAt: "2025-09-22T12:10:00.000Z",
    },
    {
      id: "e1f2a3b4-c5d6-7890-1234-f01234567890",
      name: "Iced Coffee",
      description: "Freshly brewed coffee, chilled and served over ice.",
      quantity: 70,
      createdAt: "2025-09-22T06:00:00.000Z",
      updatedAt: "2025-09-22T06:00:00.000Z",
    },
    {
      id: "f2a3b4c5-d6e7-8901-2345-01234567890a",
      name: "Flat White",
      description: "Espresso with steamed milk and a thin layer of micro-foam.",
      quantity: 55,
      createdAt: "2025-09-19T09:20:00.000Z",
      updatedAt: "2025-09-22T13:00:00.000Z",
    },
    {
      id: "a3b4c5d6-e7f8-9012-3456-1234567890ab",
      name: "Cinnamon Roll",
      description: "Sweet roll with a cinnamon-sugar filling and cream cheese frosting.",
      quantity: 18,
      createdAt: "2025-09-22T07:30:00.000Z",
      updatedAt: "2025-09-22T07:30:00.000Z",
    },
    {
      id: "b4c5d6e7-f8a9-0123-4567-234567890abc",
      name: "Granola & Yogurt Bowl",
      description: "Greek yogurt, house-made granola, and fresh berries.",
      quantity: 15,
      createdAt: "2025-09-22T07:00:00.000Z",
      updatedAt: "2025-09-22T09:45:00.000Z",
    },
    {
      id: "c5d6e7f8-a9b0-1234-5678-34567890abcd",
      name: "Mocha",
      description: "A rich blend of espresso, chocolate, and steamed milk.",
      quantity: 65,
      createdAt: "2025-09-20T13:00:00.000Z",
      updatedAt: "2025-09-22T11:45:00.000Z",
    },
    {
      id: "d6e7f8a9-b0c1-2345-6789-4567890abcde",
      name: "Quiche Lorraine",
      description: "A savory tart with bacon, eggs, and cheese.",
      quantity: 8,
      createdAt: "2025-09-22T08:15:00.000Z",
      updatedAt: "2025-09-22T08:15:00.000Z",
    },
    {
      id: "e7f8a9b0-c1d2-3456-7890-567890abcdef",
      name: "Almond Croissant",
      description: "Croissant with a sweet almond paste filling.",
      quantity: 22,
      createdAt: "2025-09-21T07:10:00.000Z",
      updatedAt: "2025-09-22T09:05:00.000Z",
    },
    {
      id: "f8a9b0c1-d2e3-4567-8901-67890abcdef1",
      name: "Hot Chocolate",
      description: "Rich dark chocolate melted into steamed milk.",
      quantity: 50,
      createdAt: "2025-09-15T15:00:00.000Z",
      updatedAt: "2025-09-22T12:00:00.000Z",
    },
    {
      id: "a9b0c1d2-e3f4-5678-9012-7890abcdef23",
      name: "Breakfast Burrito",
      description: "Scrambled eggs, cheese, potatoes, and salsa in a flour tortilla.",
      quantity: 12,
      createdAt: "2025-09-22T08:30:00.000Z",
      updatedAt: "2025-09-22T10:15:00.000Z",
    },
    {
      id: "b0c1d2e3-f4a5-6789-0123-890abcdef345",
      name: "Orange Juice",
      description: "Freshly squeezed, 100% pure orange juice.",
      quantity: 35,
      createdAt: "2025-09-18T09:00:00.000Z",
      updatedAt: "2025-09-22T09:00:00.000Z",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1 className="m-4">This is the inventory page</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
