import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    category: "Premier Jewelry",
    name: "Statement Necklace",
    price: "$35",
    description: "Classic Premier Jewelry statement piece.",
    status: "Available",
    image: "https://via.placeholder.com/400x400?text=Photo+Coming+Soon",
  },
  {
    id: 2,
    category: "Premier Jewelry",
    name: "Bracelet Set",
    price: "$20",
    description: "Set of coordinating bracelets.",
    status: "Available",
    image: "https://via.placeholder.com/400x400?text=Photo+Coming+Soon",
  },
  {
    id: 3,
    category: "Other Items",
    name: "Home Decor Item",
    price: "$15",
    description: "Lightly used decorative item.",
    status: "Available",
    image: "https://via.placeholder.com/400x400?text=Photo+Coming+Soon",
  },
];

export default function ResaleShop() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-semibold mb-2">Items for Sale</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            I’m selling my remaining Premier Jewelry and other items. Everything
            is first-come, first-served.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            To purchase, email: <span className="font-medium">premierwithandrea@gmail.com</span>
          </p>
        </header>

        {["Premier Jewelry", "Other Items"].map((section) => (
          <section key={section} className="mb-12">
            <h2 className="text-2xl font-medium mb-6">{section}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === section)
                .map((product) => (
                  <Card key={product.id} className="rounded-2xl shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-t-2xl object-cover w-full h-64"
                    />
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-lg">{product.name}</h3>
                        <span className="text-sm font-semibold">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                          {product.status}
                        </span>
                        <Button variant="outline" size="sm">
                          Email to Buy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
