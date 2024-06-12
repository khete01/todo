import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TodoType } from "@/lib/types";
import { Trash2 } from "lucide-react";
import React from "react";

type Props = {
  todo: TodoType;
};

const ListItem = ({ todo }: Props) => {
  const isDone = todo.status == "DONE";
  return (
    <TableRow className={`${isDone ? "line-through bg-secondary" : ""}`}>
      <TableCell className="font-medium">{todo.title}</TableCell>
      <TableCell>{todo.status}</TableCell>
      <TableCell>{todo.team}</TableCell>
      <TableCell className="flex gap-2 flex-row-reverse">
        <Button size={"sm"} variant={"outline"} disabled={isDone}>
          Mark as done
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          <Trash2 />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ListItem;
