"use client";
import axios from "axios";
import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useTodo } from "../../app/_contexts/TodoContext";
import { TodoType } from "../../lib/types";

const AddTodo = () => {
  const { todos, setTodos } = useTodo();
  const [inputVal, setInputVal] = useState<string>("");

  function addHandler() {
    const newTodo: TodoType = {
      id: "new id",
      title: inputVal,
      status: "PENDING",
      team: "My-1",
    };

    setTodos([...todos, newTodo]);
  }

  // const create = async ( newItem: ) => {
  //   try {
  //     await axios.post(
  //       "http://localhost:8080/product/api",
  //      newItem
  //     );
  //     console.log("success!");
  //   } catch (err) {
  //     console.error("Error:", err);
  //   }
  // };
  return (
    <div className="flex gap-2 max-w-[700px] m-auto mb-[40px]">
      <Input
        type="text"
        placeholder="Todo Title"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <Button onClick={addHandler}>Add</Button>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Team" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">My-1</SelectItem>
            <SelectItem value="dark">My-2</SelectItem>
            <SelectItem value="system">My-3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default AddTodo;
