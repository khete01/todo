"use client";
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
import { useState, useEffect } from "react";

export function TodoList() {
  const { todos, setTodos } = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("/api/graphql");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

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
          {todos.map((todo, index) => (
            <ListItem key={index} todo={todo} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  );
}
