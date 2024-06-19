"use client";
import { useQuery, useMutation } from "@apollo/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/Card";
import ListItem from "./ListItem";
import { useState } from "react";

import {
  useCreateTodoMutation,
  useDeleteTodoItemMutation,
  useGetAllTodosQuery,
  useUpdateTodoMutation,
} from "@/generated";

export function TodoList() {
  const { loading, error, data } = useGetAllTodosQuery();
  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoItemMutation();
  const [updateTodo] = useUpdateTodoMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Card className="w-[700px] m-auto">
      <Table>
        <TableCaption>A list of todos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Teams</TableCell>
            <TableCell className="text-right">Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.getTodos.map((todo) => (
            <ListItem key={todo._id} todo={todo} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{data.getTodos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  );
}
