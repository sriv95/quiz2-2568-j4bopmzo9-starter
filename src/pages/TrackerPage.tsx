import { useState , useEffect } from "react";
import { Button, Stack, Title, Divider, Container , Text} from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import ItemCard from "../components/ItemCard"

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};

export default function FoodTracker() {
  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState<FoodItem[]>([]);
  const categories = ["Main Course", "Drink", "Dessert"];

  const [sumTotal, setsumTotal] = useState(0)
  const [sumMainCourse, setsumMainCourse] = useState(0)
  const [sumDrink, setSumDrink] = useState(0)
  const [sumDessert, setSumDessert] = useState(0)

  useEffect(() => {
    let sumTotal = 0
    let sumMainCourse = 0
    let sumDrink = 0
    let sumDessert = 0
    items.forEach(i => {
      let price = Number(i.price)*Number(i.quantity)
      sumTotal += price
      
      switch (i.category) {
        case categories[0]:
          sumMainCourse += price
          break
        case categories[1]:
          sumDrink += price
          break
        case categories[2]:
          sumDessert += price
          break
        default:
          break;
      }
    });
    setsumTotal(sumTotal)
    setsumMainCourse(sumMainCourse)
    setSumDrink(sumDrink)
    setSumDessert(sumDessert)
  },[items])

  const deleteItem = (Id: string) =>{
    setItems((item) => item.filter((i)=>i.id !== Id))
  }
  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button>Add Food Item</Button>
      {/* Type additional AddFoodModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total: {sumTotal.toLocaleString()} Baht</Title>
      <Stack my="sm">
        <Text>Main Course: {sumMainCourse.toLocaleString()} Baht</Text>
        <Text>Drinks: {sumDrink.toLocaleString()} Baht</Text>
        <Text>Dessert: {sumDessert.toLocaleString()} Baht</Text>
      </Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{items.map((i) => (
        <ItemCard id={i.id} name={i.name} price={i.price} quantity={i.quantity} category={i.category} onDelete={deleteItem}/>
      ))}</Stack>
    </Container>
  );
}
