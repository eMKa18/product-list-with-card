import { Dessert, type DessertData } from "./Dessert";
import desserts from "@/app/data.json";

export default function DessertList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {desserts.map((dessert: DessertData) => {
        return <Dessert key={dessert.name} dessert={dessert} />;
      })}
    </div>
  );
}
