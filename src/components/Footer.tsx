import { Text, Group } from "@mantine/core";
export default function Footer(prop:any) {
  return (
    <Group p="md" justify="center">
      <Text>
        © {prop.name || ""} {prop.id || ""} {prop.course}-{prop.year}. All rights reserved.
      </Text>
    </Group>
  );
}
