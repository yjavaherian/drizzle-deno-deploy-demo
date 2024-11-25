import { drizzle } from "drizzle-orm/mysql2";
import {int, mysqlTable, text} from "drizzle-orm/mysql-core";
import { eq } from "drizzle-orm";
  
export const dinosaurs = mysqlTable("dinosaurs", {
    id: int().primaryKey().autoincrement().notNull(),
    name: text(),
    description: text()
  });

const db = drizzle('mysql://deno_joinedact:86682743f45bc17d95bfd01932a47dc81b760d60@vzkui.h.filess.io:3307/deno_joinedact');
const [dinosaur] = await db.select().from(dinosaurs).where(eq(dinosaurs.id,1))

Deno.serve(() => new Response(JSON.stringify(dinosaur)));
