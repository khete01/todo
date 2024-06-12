import Image from "next/image";
import AddTodo from "@/app/_components/AddTodo";
import ListItem from "./_components/ListItem";
import { TodoList } from "./_components/TodoList";
import { ModeToggle } from "./_components/theme-toggle";
export default function Home() {
  return (
    <body>
      <div className="flex flex-row-reverse">
        <ModeToggle />
      </div>
      <div style={styles.body}>
        <div>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </body>
  );
}
const styles = {
  select: {
    width: "200px",
    height: "40px",
    border: "1px solid gray",
    borderRadius: "10px",
  },
  inp: {
    width: "440px",
    height: "40px",
    border: "1px solid gray",
    borderRadius: "10px",
  },
  add: {
    width: "50px",
    height: "40px",
    border: "1px solid gray",
    borderRadius: "10px",
  },
  title: {
    display: "flex",
    width: "700px",
    height: "50px",
    gap: "10px",
  },
  body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "700px",
    height: "500px",
    border: "1px solid gray",
    borderRadius: "10px",
  },
};
