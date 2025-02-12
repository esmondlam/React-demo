import supabase, { supabaseUrl } from "./supabase";

const URL = "http://127.0.0.1:6090";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ userCode, password }) {
  try {
    let res = await fetch(`${URL}/WebClientLogin`, {
      method: "POST",
      body: JSON.stringify({
        UserCode: userCode,
        Password: password,
      }),
    });
    let resultObj = await res.json();
    console.log(resultObj);
    if (resultObj.Status !== "Success") {
      throw new Error(resultObj.Message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
  // const { data, error } = await supabase.auth.signInWithPassword({
  //   email,
  //   password,
  // });
  //
  // if (error) throw new Error(error.message);

  return { Session: "", User: "" };
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  // try {
  //   let res = await fetch(`${URL}/WebClientLogout`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       ClientSession: "VlQsOmrcwOGUJjGq",
  //     }),
  //   });
  //   let resultObj = await res.json();
  //   console.log(resultObj);
  //   if (resultObj.Status === "Error") {
  //     throw new Error(resultObj.Message);
  //   }
  // } catch (error) {
  //   throw new Error("Can't fetch from endpoint", error.message);
  // }
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password OR fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
