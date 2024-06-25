import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("http://localhost:3000/api/user", () => {
    return HttpResponse.json({
      data: {
        name: "handongryong",
        age: 25,
      },
    });
  }),
];
