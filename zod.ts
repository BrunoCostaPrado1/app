import { z } from "zod";

const personSchema = z.object({
  name: z.string(),
  age: z.number().transform((age) => Number(age)),
  email: z.string().email().nullable(),
});

type PersonSchemaOutput = z.infer<typeof personSchema>;

const person = { name: "Bruno", age: 25, email: "b@b.com" };

const { name, email, age } = personSchema.parse(person);

function createPerson(person: PersonSchemaOutput) {}
