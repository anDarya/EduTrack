import { createServer } from "miragejs";

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/students", () => {
        return {
          students: [
            { id: 1, name: "Ion Popescu", age: 20, status: 0, idnp: "9764981247891", startDate:'2024-08-30', endDate:''},
            { id: 2, name: "Maria Ionescu", age: 22, status: 1, idnp: "9134678516745", startDate:'2024-08-31', endDate:'2024-09-16'},
            { id: 3, name: "Nicolaie Popa", age: 23, status: 0, idnp: "9964981247891", startDate:'2024-08-29', endDate:''},
            { id: 4, name: "Elisaveta Bucur", age: 21, status: 1, idnp: "0034678516745", startDate:'2024-08-28', endDate:'2024-09-14'},
            { id: 5, name: "Constantin Copaceanu", age: 20, status: 0, idnp: "6864981247891", startDate:'2024-08-27', endDate:''},
            { id: 6, name: "Adela Romanescu", age: 22, status: 1, idnp: "3334678516745", startDate:'2024-08-26', endDate:'2024-09-12'},
            { id: 7, name: "Ion Popescu", age: 20, status: 0, idnp: "9064981247891", startDate:'2024-08-26', endDate:''},
            { id: 8, name: "Maria Ion", age: 22, status: 1, idnp: "9134678516745", startDate:'2024-08-25', endDate:'2024-09-12'},
            { id: 9, name: "Nicolaie Popa", age: 23, status: 0, idnp: "9964981247891", startDate:'2024-08-30', endDate:''},
            { id: 10, name: "Elisaveta Bucur", age: 21, status: 1, idnp: "0034678516745", startDate:'2024-08-31', endDate:'2024-09-16'},
            { id: 11, name: "Cristian Copaceanu", age: 20, status: 0, idnp: "6864981247891", startDate:'2024-08-29', endDate:''},
            { id: 12, name: "Adela Romanescu", age: 22, status: 1, idnp: "3334678516745", startDate:'2024-08-27', endDate:'2024-09-13'},
          ],
        };
      });

      this.post("/students", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return { student: attrs };
      });

      this.put("/students/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        return { student: { id, ...newAttrs } };
      });

      this.delete("/students/:id", (schema, request) => {
        let id = request.params.id;
        return { message: `Studentul cu id-ul ${id} a fost șters` };
      });
    },
  });

  return server;
}