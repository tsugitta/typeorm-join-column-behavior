import { AppDataSource } from "./data-source";
import { Child } from "./entity/Child";

AppDataSource.initialize()
  .then(async () => {
    const childRepository = AppDataSource.getRepository(Child);

    const res = await childRepository.find({
      select: {
        id: true,
        parentOne: {
          id: true,
        },
      },
      relations: {
        parentOne: true,
      },
    });

    console.log(res);
  })
  .catch((error) => console.log(error));
