import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

type FoodProps = {
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
  onDelete: () => void;
};

export default function ItemCard(prop:any) {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (<Card shadow="sm" withBorder>
    <Group>
      <Text>{prop.name}</Text>
      <Text>{prop.price} Baht x {prop.quantity} = {(prop.price*prop.quantity).toLocaleString()} Baht</Text>
      <Badge variant="light" color="green" size="md">{prop.category}</Badge>
      <ActionIcon variant="light" color="red" onClick={()=> prop.onDelete(prop.id)}>
        <IconTrash size="18"/>
      </ActionIcon>
    </Group>
  </Card>)
  ;
}