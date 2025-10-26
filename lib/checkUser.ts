import { currentUser } from "@clerk/nextjs/dist/types/server";

import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!loggedInUser) {
   return loggedInUser; 
  }
  
  const newUser = await db.user.create({
    data: {
      clerkId: user.id,
      name: `${user.firstName || ""} ${user.lastName || ""}`,
      email: user.emailAddresses[0]?.emailAddress || "",
      imageUrl: user.profileImageUrl,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
    },
  });
  return newUser;
};