import { v4 } from "uuid";
import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";

import prisma from "lib/prisma";

const create = async (form: {
  value: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  };
}) => {
  const { firstname, lastname, email, password } = form.value;
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);
  const user = await prisma.user.create({
    data: {
      firstname,
      lastname,
      email,
      validation_code: v4(),
      userPrivate: {
        create: {
          password: hash,
        },
      },
      userUtils: {
        create: {
          unread_message_nb: 0,
        },
      },
    },
  });
  return user;
};

const updateAccount = async ({
  value,
  user,
  profile_picture_url,
}: {
  value: Obj;
  user: User;
  profile_picture_url: string;
}) => {
  const { firstname, lastname } = value;
  const params: Prisma.UserUpdateArgs = {
    where: {
      id: user.id,
    },
    data: {
      firstname,
      lastname,
    },
  };
  if (profile_picture_url) {
    const image = await prisma.image.create({
      data: {
        url: profile_picture_url,
        userId: user.id,
      },
    });
    params.data.profile_picture_id = image.id;
  }

  return await prisma.user.update(params).catch((e) => console.log(e));
};

const updatePassword = async ({
  password,
  user,
}: {
  password: string;
  user: User;
}) => {
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);
  await prisma.userPrivate
    .update({
      where: {
        userId: user.id,
      },
      data: {
        password: hash,
      },
    })
    .catch((e) => console.log(e));
  return user;
};
export default {
  create,
  updateAccount,
  updatePassword,
};
