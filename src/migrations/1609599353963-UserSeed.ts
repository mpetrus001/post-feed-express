import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../entities/User";

export class UserSeed1609599353963 implements MigrationInterface {
  name = "UserSeed1609599353963";
  newUsers: User[] = [];
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log("adding production seed user data");
    const UserRepository = queryRunner.connection.getRepository(User);
    this.newUsers = await UserRepository.save([
      {
        username: "guest",
        email: "guest@computer.local",
        password:
          "$argon2i$v=19$m=4096,t=3,p=1$G7uPsnyn9DWCi4tOsS7lhA$K/NkXkBVgfESi0jIxmo01Z+zK5NupZYZI/mjiOMWP6o",
      },
      {
        username: "matthew",
        email: "matthew@computer.local",
        password:
          "$argon2i$v=19$m=4096,t=3,p=1$8D3+5UMfNiqYFK5ZCxtAVQ$3waVgf0kwEJUajKTYvK5Kk+8rQ4T9ufSYMSaXs+12Zk",
      },
      {
        username: "sophie",
        email: "sophie@computer.local",
        password:
          "$argon2i$v=19$m=4096,t=3,p=1$0d/0G5JRziqKuczKZA3xYg$7X0K+dCS0w2HwazbUsCTaipkXSbHHwU5YR8XHsr29vc",
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const UserRepository = queryRunner.connection.getRepository(User);
    await UserRepository.remove(this.newUsers);
  }
}
